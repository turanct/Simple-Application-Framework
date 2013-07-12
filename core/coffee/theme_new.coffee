class Theme
  # Class methods
  @events: (events) ->
    @::events ?= {}
    @::events = $.extend({}, @::events) unless @::hasOwnProperty "events"
    #@::events[key] = value for key, value of events
    @::events = $.extend(true, {}, @::events, events)

  @onDomReady: (initializers) ->
    @::onDomReady ?= []
    @::onDomReady = @::onDomReady[..] unless @::hasOwnProperty "onDomReady"
    @::onDomReady.push initializer for initializer in initializers

  constructor: ->
    @_setupEventListeners()

  domReady: ->
    @_loadOnDomReadyMethods()

  _loadOnDomReadyMethods: ->
    for callback in @onDomReady
      @[callback]()

  _setupEventListeners: =>
    $document = $(document)
    for selector, actions of @events
      for action, callback of actions
        $document.on(action, selector, @[callback])

class DefaultTheme extends Theme
  @events
    #'#cookieBarAgree' : click : 'cookieBarAgree'
    #'#cookieBarDisagree' : click : 'cookieBarDisagree'
    #'input:submit' : click : 'hijackSubmit'
    #'a.backToTop': click : 'scrollToTop'
    #'a[href*="#"]': click : 'scrollTo'

  @onDomReady [
    #'cookieBar'
    #'removeImageHeight'
  ]

  cookieBar: ->
    if utils.cookies.readCookie('cookie_bar_hide') == 'b%3A1%3B'
      $('#cookieBar').remove()

  cookieBarAgree: ->
    utils.cookies.setCookie('cookie_bar_agree', 'b:1;')
    utils.cookies.setCookie('cookie_bar_hide', 'b:1;')
    $('#cookieBar').alert('close')
    false

  cookieBarDisagree: ->
    utils.cookies.setCookie('cookie_bar_agree', 'b:0;')
    utils.cookies.setCookie('cookie_bar_hide', 'b:1;')
    $('#cookieBar').alert('close')
    false

  hijackSubmit: (e) ->
    $(@).addClass('loading disabled')

  scrollToTop: (e) ->
    $('html, body').stop().animate(scrollTop: 0, 600)
    false

  scrollTo: (e) ->
    $anchor = $(e.currentTarget)
    href = $anchor.attr('href')
    url = href.substr(0, href.indexOf('#'))
    hash = href.substr(href.indexOf('#'))

    # check if we have an url, and if it is on the current page and the element exists
    if  (url == '' or
        url.indexOf(document.location.pathname) >= 0) and
        not $anchor.is('[data-no-scroll]') and
        $(hash).length > 0

      $('html, body').stop().animate({
        scrollTop: $(hash).offset().top
      }, 600);
      false

  removeImageHeight: ->
    $('img').css(height: 'auto')

class SpecificTheme extends DefaultTheme
  @events
    # '#element' : event : 'functionName'
    '#toggleMenu' : click : 'toggleMenu'
    '#content.open' : touchend : 'toggleMenu'
    '#toggleTabletNavbar' : click : 'tabletMenu'
    '.dropdownToggle' : click : 'toggleDropdown'
    'a.toggleSubNavigation' : click : 'toggleSubNavigation'

  @onDomReady [
    #'functionName'
    'initCarousel'
  ]

  initCarousel: ->
    $('.carousel').carousel()

  toggleMenu: (e) ->
    if !$('#content').hasClass('open')
      $('#content').addClass('open')
    else
      $('#content').removeClass('open')
    false

  tabletMenu: (e) ->
    if !$('#navbar').hasClass('open')
      $('#navbar').addClass('open')
      $(e.currentTarget).addClass('open');
    else
      $('#navbar').removeClass('open')
      $(e.currentTarget).removeClass('open');
      
  toggleDropdown: (e) ->
    $this = $(e.currentTarget)
    if !$this.hasClass('open')
      $this.parent().find('.dropdownItems').slideDown()
      $this.addClass('open')
    else
      $this.parent().find('.dropdownItems').slideUp()
      $this.removeClass('open')
    false
  
  toggleSubNavigation: (e) =>
    @subNavOpen
    $this = $(e.currentTarget)
    $subNav = $this.parent().find('.subNavigation')
    #$('.subNavigation.open').removeClass('open')
    if !@subNavOpen
      $this.addClass('active')
      $subNav.addClass('open').slideDown()
      $('#toggleTabletNavbar').addClass('subnav')
      $('#navbar').addClass('subnav')
      $('#content').addClass('subnav')
      $('.alert').addClass('subnav')
      @subNavOpen = true
    else
      if $subNav.is('.open')
        $this.removeClass('active')
        $subNav.removeClass('open').slideUp()
        $('#toggleTabletNavbar').removeClass('subnav')
        $('#navbar').removeClass('subnav')
        $('#content').removeClass('subnav')
        $('.alert').removeClass('subnav')
        @subNavOpen = false
      else
        # Vervangen
        $('#navbar .nav li a.active').removeClass('active')
        $this.addClass('active')
        $('.subNavigation.open').removeClass('open')
        $subNav.addClass('open').slideDown()
        $('#toggleTabletNavbar').addClass('subnav')
        $('#navbar').addClass('subnav')
        $('#content').addClass('subnav')
        $('.alert').addClass('subnav')
    false


SpecificTheme.current = new SpecificTheme()

$ ->
  SpecificTheme.current.domReady()

window.SpecificTheme = SpecificTheme
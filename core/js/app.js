// Generated by CoffeeScript 1.7.1
(function() {
  var App,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App = (function(_super) {
    __extends(App, _super);

    function App() {
      return App.__super__.constructor.apply(this, arguments);
    }

    App.events;

    App.onDomReady([]);

    return App;

  })(Framework);

  App.current = new App();

  $(function() {
    App.current.domReady();
  });

  window.App = App;

}).call(this);

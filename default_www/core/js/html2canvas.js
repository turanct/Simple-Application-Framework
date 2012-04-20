/*
 html2canvas v0.33 <http://html2canvas.hertzen.com>
 Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
 http://www.twitter.com/niklasvh

 Released under MIT License
*/
(function(j,L,n){function C(a){l.logging&&j.console&&j.console.log&&j.console.log(a)}function S(a,b){var h=[];return{storage:h,width:a,height:b,fillRect:function(){h.push({type:"function",name:"fillRect",arguments:arguments})},drawImage:function(){h.push({type:"function",name:"drawImage",arguments:arguments})},fillText:function(){h.push({type:"function",name:"fillText",arguments:arguments})},setVariable:function(a,b){h.push({type:"variable",name:a,arguments:b})}}}var l={logging:!1};l.log=C;l.Util=
{};l.Util.backgroundImage=function(a){if(/data:image\/.*;base64,/i.test(a)||/^(-webkit|-moz|linear-gradient|-o-)/.test(a))return a;a.toLowerCase().substr(0,5)==='url("'?(a=a.substr(5),a=a.substr(0,a.length-2)):(a=a.substr(4),a=a.substr(0,a.length-1));return a};l.Util.Bounds=function(a){var b={};if(a.getBoundingClientRect)return a=a.getBoundingClientRect(),b.top=a.top,b.bottom=a.bottom||a.top+a.height,b.left=a.left,b.width=a.width||a.right-a.left,b.height=a.height||a.bottom-a.top,b};l.Util.getCSS=
function(a,b){return $(a).css(b)};l.Util.Extend=function(a,b){for(var h in a)a.hasOwnProperty(h)&&(b[h]=a[h]);return b};l.Util.Children=function(a){var b;try{b=$(a).contents()}catch(h){C("html2canvas.Util.Children failed with exception: "+h.message),b=[]}return b};l.Generate={};l.Generate.Gradient=function(a,b){function h(a){for(var d=-1,b="",r;d++<a.length;)if(r=a.charAt(d),r===")"){b+=r;w.push(b);for(b="";d++<a.length&&a.charAt(d)!==",";);}else b+=r}var l=L.createElement("canvas"),F=l.getContext("2d"),
e,A=0,f=0,d=0,j=0,w=[],y;l.width=b.width;l.height=b.height;if(e=a.match(/-webkit-linear-gradient\((.*)\)/)){y=e[1].split(",",1)[0];h(e[1].substr(y.length+2));y=y.split(" ");for(e=0;e<y.length;e+=1)switch(y[e]){case "top":j=b.height;break;case "right":A=b.width;break;case "bottom":f=b.height;break;case "left":d=b.width}}else if(e=a.match(/-webkit-gradient\(linear, (\d+)[%]{0,1} (\d+)[%]{0,1}, (\d+)[%]{0,1} (\d+)[%]{0,1}, from\((.*)\), to\((.*)\)\)/))A=e[1]*b.width/100,f=e[2]*b.height/100,d=e[3]*b.width/
100,j=e[4]*b.height/100,w.push(e[5]),w.push(e[6]);else if(e=a.match(/-moz-linear-gradient\((\d+)[%]{0,1} (\d+)[%]{0,1}, (.*)\)/))A=e[1]*b.width/100,f=e[2]*b.width/100,d=b.width-A,j=b.height-f,h(e[3]);else return;d=F.createLinearGradient(A,f,d,j);j=1/(w.length-1);A=0;for(f=w.length;A<f;A+=1)try{d.addColorStop(j*A,w[A])}catch(r){C(["failed to add color stop: ",r,"; tried to add: ",w[A],"; stop: ",A,"; in: ",a])}F.fillStyle=d;F.fillRect(0,0,b.width,b.height);F=new Image;F.src=l.toDataURL();return F};
l.Generate.ListAlpha=function(a){var b="",h;do h=a%26,b=String.fromCharCode(h+64)+b,a/=26;while(a*26>26);return b};l.Generate.ListRoman=function(a){var b=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"],h=[1E3,900,500,400,100,90,50,40,10,9,5,4,1],l="",j,e=b.length;if(a<=0||a>=4E3)return a;for(j=0;j<e;j+=1)for(;a>=h[j];)a-=h[j],l+=b[j];return l};l.Parse=function(a,b,h){function I(c,g){var i=parseInt(t(c,g),10);return isNaN(i)?0:i}function F(c,g,a,H,d,m){m!=="transparent"&&(c.setVariable("fillStyle",
m),c.fillRect(g,a,H,d),i+=1)}function e(c,g){switch(g){case "lowercase":return c.toLowerCase();case "capitalize":return c.replace(/(^|\s|:|-|\(|\))([a-z])/g,function(c,g,i){if(c.length>0)return g+i.toUpperCase()});case "uppercase":return c.toUpperCase();default:return c}}function A(c){return c.replace(/^\s*/g,"").replace(/\s*$/g,"")}function f(c,a,d){var d=d.ctx,H=t(c,"fontFamily"),b=t(c,"fontSize"),r=t(c,"color"),G=t(c,"textDecoration"),h=t(c,"textAlign"),s=t(c,"letterSpacing"),f,D,o=t(c,"fontWeight"),
u=t(c,"fontStyle"),j=t(c,"fontVariant"),v=0;a.nodeValue=e(a.nodeValue,t(c,"textTransform"));if(A(a.nodeValue).length>0){if(G!=="none")if(m[H+"-"+b]!==n)D=m[H+"-"+b];else{D=k.createElement("div");var c=k.createElement("img"),p=k.createElement("span"),z;D.style.visibility="hidden";D.style.fontFamily=H;D.style.fontSize=b;D.style.margin=0;D.style.padding=0;x.appendChild(D);c.src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=";c.width=1;c.height=1;c.style.margin=0;c.style.padding=
0;c.style.verticalAlign="baseline";p.style.fontFamily=H;p.style.fontSize=b;p.style.margin=0;p.style.padding=0;p.appendChild(k.createTextNode("Hidden Text"));D.appendChild(p);D.appendChild(c);z=c.offsetTop-p.offsetTop+1;D.removeChild(p);D.appendChild(k.createTextNode("Hidden Text"));D.style.lineHeight="normal";c.style.verticalAlign="super";c={baseline:z,lineWidth:1,middle:c.offsetTop-D.offsetTop+1};m[H+"-"+b]=c;x.removeChild(D);D=c}h=h.replace(["-webkit-auto"],["auto"]);h=g.letterRendering===!1&&/^(left|right|justify|auto)$/.test(h)&&
/^(normal|none)$/.test(s)?a.nodeValue.split(/(\b| )/):a.nodeValue.split("");switch(parseInt(o,10)){case 401:o="bold";break;case 400:o="normal"}d.setVariable("fillStyle",r);d.setVariable("font",u+" "+j+" "+o+" "+b+" "+H);d.setVariable("textAlign","left");H=a;for(b=0;b<h.length;b+=1){o=null;if(B.rangeBounds){if(G!=="none"||A(h[b]).length!==0)o=h[b],k.createRange?(f=k.createRange(),f.setStart(a,v),f.setEnd(a,v+o.length)):f=x.createTextRange(),f=f.getBoundingClientRect()?f.getBoundingClientRect():{}}else{if(typeof H.nodeValue!==
"string")continue;u=H.splitText(h[b].length);j=H.parentNode;s=k.createElement("wrapper");c=H.cloneNode(!0);s.appendChild(H.cloneNode(!0));j.replaceChild(s,H);f=l.Util.Bounds(s);o=H.nodeValue;H=u;j.replaceChild(c,s)}if(o!==null)u=f.left,j=f.bottom,s=d,A(o).length>0&&(s.fillText(o,u,j),i+=1);switch(G){case "underline":F(d,f.left,Math.round(f.top+D.baseline+D.lineWidth),f.width,1,r);break;case "overline":F(d,f.left,f.top,f.width,1,r);break;case "line-through":F(d,f.left,Math.ceil(f.top+D.middle+D.lineWidth),
f.width,1,r)}v+=h[b].length}}}function d(c){return(c=b[c])&&c.succeeded===!0?c.img:!1}function K(c,g){var a=Math.max(c.left,g.left),i=Math.max(c.top,g.top);return{left:a,top:i,width:Math.min(c.left+c.width,g.left+g.width)-a,height:Math.min(c.top+c.height,g.top+g.height)-i}}function w(c,g){if(!g)return this.zStack={zindex:0,children:[]};if(c!=="auto"){var a={zindex:c,children:[]};g.children.push(a);return a}return g}function y(c,g,a,i){for(var d=a.left,b=a.top,m=a.width,a=a.height,f,r,h,k,G,e=function(c){var g=
[],a=["Top","Right","Bottom","Left"],i;for(i=0;i<4;i+=1)g.push({width:I(c,"border"+a[i]+"Width"),color:t(c,"border"+a[i]+"Color")});return g}(c),c=0;c<4;c+=1)if(f=e[c],f.width>0){r=d;h=b;k=m;G=a-e[2].width;switch(c){case 0:G=e[0].width;break;case 1:r=d+m-e[1].width;k=e[1].width;break;case 2:h=h+a-e[2].width;G=e[2].width;break;case 3:k=e[3].width}k={left:r,top:h,width:k,height:G};i&&(k=K(k,i));k.width>0&&k.height>0&&F(g,r,h,k.width,k.height,f.color)}return e}function r(c,g,a){var i=k.createElement("valuewrap"),
d=["lineHeight","textAlign","fontFamily","color","fontSize","paddingLeft","paddingTop","width","height","border","borderLeftWidth","borderTopWidth"],b,m,r;b=0;for(m=d.length;b<m;b+=1){r=d[b];try{i.style[r]=t(c,r)}catch(h){C("html2canvas: Parse: Exception caught in renderFormValue: "+h.message)}}i.style.borderColor="black";i.style.borderStyle="solid";i.style.display="block";i.style.position="absolute";if(/^(submit|reset|button|text|password)$/.test(c.type)||c.nodeName==="SELECT")i.style.lineHeight=
t(c,"height");i.style.top=g.top+"px";i.style.left=g.left+"px";g=k.createTextNode(c.nodeName==="SELECT"?c.options[c.selectedIndex].text:c.value);i.appendChild(g);x.appendChild(i);f(c,g,a);x.removeChild(i)}function G(c,g,i){var a=function(g){return g!==n?(g.split(",")[0]||"0 0").split(" "):[t(c,"backgroundPositionX"),t(c,"backgroundPositionY")]}(t(c,"backgroundPosition")),d,b;a.length===1&&(d=a,a=[],a[0]=d,a[1]=d);a[0].toString().indexOf("%")!==-1?(b=parseFloat(a[0])/100,d=g.width*b-i.width*b):d=parseInt(a[0],
10);a[1].toString().indexOf("%")!==-1?(b=parseFloat(a[1])/100,g=g.height*b-i.height*b):g=parseInt(a[1],10);return{top:g,left:d}}function M(c,g,a,d,b,r,m,k){var h=0,f=0;m-a>0&&(h=m-a);k-d>0&&(f=k-d);c.drawImage(g,h,f,b-h,r-f,a+h,d+f,b-h,r-f);i+=1}function O(c,g,a,i,d,b,r){var r=Math.min(g.height,r),m,h;a.left-=Math.ceil(a.left/g.width)*g.width;for(h=i+a.left;h<b+i;)m=Math.floor(h+g.width)>b+i?b+i-h:g.width,M(c,g,h,d+a.top,m,r,i,d),h=Math.floor(h+g.width)}function z(c,a){var b=l.Util.Bounds(c),h=b.left,
m=b.top,f=b.width,e=b.height,j,s=t(c,"backgroundColor"),z=t(c,"position"),B,o=t(c,"opacity"),u,q;a?P={}:(P={width:Math.max(Math.max(k.body.scrollWidth,k.documentElement.scrollWidth),Math.max(k.body.offsetWidth,k.documentElement.offsetWidth),Math.max(k.body.clientWidth,k.documentElement.clientWidth)),height:Math.max(Math.max(k.body.scrollHeight,k.documentElement.scrollHeight),Math.max(k.body.offsetHeight,k.documentElement.offsetHeight),Math.max(k.body.clientHeight,k.documentElement.clientHeight))},
a={opacity:1});B=w(t(c,"zIndex"),a.zIndex);u={ctx:S(P.width||f,P.height||e),zIndex:B,opacity:o*a.opacity,cssPosition:z};if(a.clip)u.clip=l.Util.Extend({},a.clip);if(g.useOverflow===!0&&/(hidden|scroll|auto)/.test(t(c,"overflow"))===!0&&/(BODY)/i.test(c.nodeName)===!1)u.clip=u.clip?K(u.clip,b):b;z=B.children.push(u);q=B.children[z-1].ctx;q.setVariable("globalAlpha",u.opacity);o=y(c,q,b,!1);u.borders=o;Q.test(c.nodeName)&&g.iframeDefault!=="transparent"&&(s=g.iframeDefault==="default"?"#efefef":g.iframeDefault);
f={left:h+o[3].width,top:m+o[0].width,width:f-(o[1].width+o[3].width),height:e-(o[0].width+o[2].width)};u.clip&&(f=K(f,u.clip));if(f.height>0&&f.width>0){F(q,f.left,f.top,f.width,f.height,s);var v=f,p=t(c,"backgroundImage"),x=t(c,"backgroundRepeat").split(",")[0],n,E,J;!/data:image\/.*;base64,/i.test(p)&&!/^(-webkit|-moz|linear-gradient|-o-)/.test(p)&&(p=p.split(",")[0]);if(typeof p!=="undefined"&&/^(1|none)$/.test(p)===!1)if(p=l.Util.backgroundImage(p),s=d(p),e=G(c,v,s),s)switch(x){case "repeat-x":O(q,
s,e,v.left,v.top,v.width,v.height);break;case "repeat-y":p=v.left;x=v.top;n=v.height;E=Math.min(s.width,v.width);e.top-=Math.ceil(e.top/s.height)*s.height;for(J=x+e.top;J<n+x;)v=Math.floor(J+s.height)>n+x?n+x-J:s.height,M(q,s,p+e.left,J,E,v,p,x),J=Math.floor(J+s.height);break;case "no-repeat":p=v.width-e.left;J=v.height-e.top;x=e.left;n=e.top;E=e.left+v.left;e=e.top+v.top;x<0?(x=Math.abs(x),E+=x,p=Math.min(v.width,s.width-x)):(p=Math.min(p,s.width),x=0);n<0?(n=Math.abs(n),e+=n,J=Math.min(v.height,
s.height-n)):(J=Math.min(J,s.height),n=0);J>0&&p>0&&(q.drawImage(s,x,n,p,J,E,e,p,J),i+=1);break;default:e.top-=Math.ceil(e.top/s.height)*s.height;for(p=v.top+e.top;p<v.height+v.top;)x=Math.min(s.height,v.height+v.top-p),x=Math.floor(p+s.height)>x+p?x+p-p:s.height,p<v.top?(n=v.top-p,p=v.top):n=0,O(q,s,e,v.left,p,v.width,x),n>0&&(e.top+=n),p=Math.floor(p+s.height)-n}else C("html2canvas: Error loading background:"+p)}switch(c.nodeName){case "IMG":u=c.getAttribute("src");(j=d(u))?(u=I(c,"paddingLeft"),
f=I(c,"paddingTop"),s=I(c,"paddingRight"),e=I(c,"paddingBottom"),q.drawImage(j,0,0,j.width,j.height,h+u+o[3].width,m+f+o[0].width,b.width-(o[1].width+o[3].width+u+s),b.height-(o[0].width+o[2].width+f+e)),i+=1):C("html2canvas: Error loading <img>:"+u);break;case "INPUT":/^(text|url|email|submit|button|reset)$/.test(c.type)&&c.value.length>0&&r(c,b,u);break;case "TEXTAREA":c.value.length>0&&r(c,b,u);break;case "SELECT":c.options.length>0&&r(c,b,u);break;case "LI":b=f;h=t(c,"listStylePosition");o=t(c,
"listStyleType");m=t(c,"fontWeight");if(/^(decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman)$/i.test(o)){q=$(c).index()+1;switch(o){case "decimal":j=q;break;case "decimal-leading-zero":j=q.toString().length===1?"0"+q.toString():q.toString();break;case "upper-roman":j=l.Generate.ListRoman(q);break;case "lower-roman":j=l.Generate.ListRoman(q).toLowerCase();break;case "lower-alpha":j=l.Generate.ListAlpha(q).toLowerCase();break;case "upper-alpha":j=
l.Generate.ListAlpha(q)}j+=". ";u=j;o=k.createElement("boundelement");o.style.display="inline";q=c.style.listStyleType;c.style.listStyleType="none";o.appendChild(k.createTextNode(u));c.insertBefore(o,c.firstChild);u=l.Util.Bounds(o);c.removeChild(o);c.style.listStyleType=q;switch(m){case 401:m="bold";break;case 400:m="normal"}N.setVariable("fillStyle",t(c,"color"));N.setVariable("font",t(c,"fontVariant")+" "+m+" "+t(c,"fontStyle")+" "+t(c,"fontSize")+" "+t(c,"fontFamily"));if(h==="inside")N.setVariable("textAlign",
"left"),b=b.left,h=u.bottom,m=N,A(j).length>0&&(m.fillText(j,b,h),i+=1)}break;case "CANVAS":u=I(c,"paddingLeft"),f=I(c,"paddingTop"),s=I(c,"paddingRight"),e=I(c,"paddingBottom"),q.drawImage(c,0,0,c.width,c.height,h+u+o[3].width,m+f+o[0].width,b.width-(o[1].width+o[3].width+u+s),b.height-(o[0].width+o[2].width+f+e)),i+=1}return B.children[z-1]}function q(a,g){if(t(a,"display")!=="none"&&t(a,"visibility")!=="hidden"&&(g=z(a,g)||g,N=g.ctx,!Q.test(a.nodeName))){var i=l.Util.Children(a),b,d,h;b=0;for(h=
i.length;b<h;b+=1)d=i[b],d.nodeType===1?q(d,g):d.nodeType===3&&f(a,d,g)}}j.scroll(0,0);h=h||{};if(a===n)a=L.body;var B={rangeBounds:!1},g={iframeDefault:"default",ignoreElements:"IFRAME|OBJECT|PARAM",useOverflow:!0,letterRendering:!1},i=0,m={},k=a.ownerDocument,Q=RegExp("("+g.ignoreElements+")"),x=k.body,E,N,P,R,g=l.Util.Extend(h,g),b=b||{};if(k.createRange&&(E=k.createRange(),E.getBoundingClientRect)){h=k.createElement("boundtest");h.style.height="123px";h.style.display="block";x.appendChild(h);
E.selectNode(h);E=E.getBoundingClientRect();E=E.height;if(E===123)B.rangeBounds=!0;x.removeChild(h)}var t=l.Util.getCSS,h=z(a,null);E=0;a=a.children;for(R=a.length;E<R;E+=1)q(a[E],h);h.backgroundColor=t(x,"backgroundColor");return h};l.Preload=function(a,b){function h(){C("html2canvas: start: images: "+d.numLoaded+" / "+d.numTotal+" (failed: "+d.numFailed+")");!d.firstRun&&d.numLoaded>=d.numTotal&&(typeof f.complete==="function"&&f.complete(d),C("Finished loading images: # "+d.numTotal+" (failed: "+
d.numFailed+")"))}function I(a,i,b){var k,q=f.proxy,l;z.href=a;a=z.href;k="html2canvas_"+r++;b.callbackname=k;q+=q.indexOf("?")>-1?"&":"?";q+="url="+encodeURIComponent(a)+"&callback="+k;l=G.createElement("script");j[k]=function(a){a.substring(0,6)==="error:"?(b.succeeded=!1,d.numLoaded++,d.numFailed++,h()):(e(i,b),i.src=a);j[k]=n;try{delete j[k]}catch(g){}l.parentNode.removeChild(l);l=null;delete b.script;delete b.callbackname};l.setAttribute("type","text/javascript");l.setAttribute("src",q);b.script=
l;j.document.body.appendChild(l)}function F(a){var i=l.Util.Children(a),b,f=i.length,e,r=!1;for(b=0;b<f;b+=1)F(i[b]);try{r=a.nodeType}catch(j){r=!1,C("html2canvas: failed to access some element's nodeType - Exception: "+j.message)}if(r===1||r===n){try{e=l.Util.getCSS(a,"backgroundImage")}catch(G){C("html2canvas: failed to get background-image - Exception: "+G.message)}e&&e!=="1"&&e!=="none"&&(e.substring(0,7)==="-webkit"||e.substring(0,3)==="-o-"||e.substring(0,4)==="-moz"?(a=l.Generate.Gradient(e,
l.Util.Bounds(a)),a!==n&&(d[e]={img:a,succeeded:!0},d.numTotal++,d.numLoaded++,h())):(e=l.Util.backgroundImage(e.match(/data:image\/.*;base64,/i)?e:e.split(",")[0]),w.loadImage(e)))}}function e(a,b){a.onload=function(){b.timer!==n&&j.clearTimeout(b.timer);d.numLoaded++;b.succeeded=!0;h()};a.onerror=function(){if(a.crossOrigin==="anonymous"&&(j.clearTimeout(b.timer),f.proxy)){var e=a.src;a=new Image;b.img=a;a.src=e;I(a.src,a,b);return}d.numLoaded++;d.numFailed++;b.succeeded=!1;h()}}function A(){if(this.img.complete)this.img.onerror();
else this.timer=j.setTimeout(this.img.customComplete,100)}var f={proxy:"http://html2canvas.appspot.com/",timeout:0,useCORS:!1,allowTaint:!1},d={numLoaded:0,numFailed:0,numTotal:0,cleanupDone:!1},K,w,y,r=0,G=a.ownerDocument,M=G.images,O=M.length,z=G.createElement("a"),q=function(a){return a.crossOrigin!==n}(new Image),B;z.href=j.location.href;K=z.protocol+z.host;b=b||{};f=l.Util.Extend(b,f);a=a||G.body;w={loadImage:function(a){var b,h;if(a&&d[a]===n)b=new Image,a.match(/data:image\/.*;base64,/i)?(b.src=
a.replace(/url\(['"]{0,}|['"]{0,}\)$/ig,""),h=d[a]={img:b},d.numTotal++,e(b,h)):(z.href=a,z.href=z.href,z.protocol+z.host===K||f.allowTaint===!0?(h=d[a]={img:b},d.numTotal++,e(b,h),b.src=a):q&&!f.allowTaint&&f.useCORS?(b.crossOrigin="anonymous",h=d[a]={img:b},d.numTotal++,e(b,h),b.src=a,b.customComplete=A.bind(h),b.customComplete()):f.proxy&&(h=d[a]={img:b},d.numTotal++,I(a,b,h)))},cleanupDOM:function(a){var b,e;if(!d.cleanupDone){a&&typeof a==="string"?C("html2canvas: Cleanup because: "+a):C("html2canvas: Cleanup after timeout: "+
f.timeout+" ms.");for(e in d)if(d.hasOwnProperty(e)&&(b=d[e],typeof b==="object"&&b.callbackname&&b.succeeded===n)){j[b.callbackname]=n;try{delete j[b.callbackname]}catch(r){}b.script&&b.script.parentNode&&(b.script.setAttribute("src","about:blank"),b.script.parentNode.removeChild(b.script));d.numLoaded++;d.numFailed++;C("html2canvas: Cleaned up failed img: '"+e+"' Steps: "+d.numLoaded+" / "+d.numTotal)}j.stop!==n?j.stop():L.execCommand!==n&&L.execCommand("Stop",!1);L.close!==n&&L.close();d.cleanupDone=
!0;a&&typeof a==="string"||h()}},renderingDone:function(){B&&j.clearTimeout(B)}};f.timeout>0&&(B=j.setTimeout(w.cleanupDOM,f.timeout));C("html2canvas: Preload starts: finding background-images");d.firstRun=!0;F(a);C("html2canvas: Preload: Finding images");for(y=0;y<O;y+=1)w.loadImage(M[y].getAttribute("src"));d.firstRun=!1;C("html2canvas: Preload: Done.");d.numTotal===d.numLoaded&&h();return w};l.Renderer=function(a,b){function h(a){var b=[],e=[],a=a.children,d,f,j,l;d=0;for(j=a.length;d<j;d+=1)f=
a[d],f.children&&f.children.length>0?(b.push(f),e.push(f.zindex)):A.push(f);e.sort(function(a,b){return a-b});a=0;for(d=e.length;a<d;a+=1){f=e[a];j=0;for(l=b.length;j<=l;j+=1)if(b[j].zindex===f){f=b.splice(j,1);h(f[0]);break}}}function I(a){h(a.zIndex);var b=f.getContext("2d"),j,y,z,q,B,g=L.createElement("canvas");q=g.getContext!==n;var i,m,g=q?g.getContext("2d"):{};B=[];f.width=f.style.width=!d?e.width||a.ctx.width:Math.min(K,e.width||a.ctx.width);f.height=f.style.height=!d?e.height||a.ctx.height:
Math.min(K,e.height||a.ctx.height);j=b.fillStyle;b.fillStyle=a.backgroundColor;b.fillRect(0,0,f.width,f.height);b.fillStyle=j;j=0;for(y=A.length;j<y;j+=1){a=A.splice(0,1)[0];a.canvasPosition=a.canvasPosition||{};b.textBaseline="bottom";a.clip&&(b.save(),b.beginPath(),b.rect(a.clip.left,a.clip.top,a.clip.width,a.clip.height),b.clip());if(a.ctx.storage){z=0;for(i=a.ctx.storage.length;z<i;z+=1)switch(m=a.ctx.storage[z],m.type){case "variable":b[m.name]=m.arguments;break;case "function":if(m.name==="fillRect")(!d||
m.arguments[0]+m.arguments[2]<K&&m.arguments[1]+m.arguments[3]<K)&&b.fillRect.apply(b,m.arguments);else if(m.name==="fillText")(!d||m.arguments[1]<K&&m.arguments[2]<K)&&b.fillText.apply(b,m.arguments);else if(m.name==="drawImage"&&m.arguments[8]>0&&m.arguments[7]){if(q&&e.taintTest&&B.indexOf(m.arguments[0].src)===-1){g.drawImage(m.arguments[0],0,0);try{g.getImageData(0,0,1,1)}catch(k){g=L.createElement("canvas");g=g.getContext("2d");continue}B.push(m.arguments[0].src)}b.drawImage.apply(b,m.arguments)}}}a.clip&&
b.restore()}C("html2canvas: Renderer: Canvas renderer done - returning canvas obj");y=e.elements.length;return y===1&&typeof e.elements[0]==="object"&&e.elements[0].nodeName!=="BODY"&&d===!1?(B=l.Util.Bounds(e.elements[0]),q=w.createElement("canvas"),q.width=B.width,q.height=B.height,b=q.getContext("2d"),b.drawImage(f,B.left,B.top,B.width,B.height,0,0,B.width,B.height),delete f,q):f}function F(a){h(a.zIndex);var b=w.createElementNS("http://www.w3.org/2000/svg","svg"),d=w.createElementNS("http://www.w3.org/2000/svg",
"defs"),f,j,l,n,g,i,m={},k,y=0;b.setAttribute("version","1.1");b.setAttribute("baseProfile","full");b.setAttribute("viewBox","0 0 "+Math.max(a.ctx.width,e.width)+" "+Math.max(a.ctx.height,e.height));b.setAttribute("width",Math.max(a.ctx.width,e.width)+"px");b.setAttribute("height",Math.max(a.ctx.height,e.height)+"px");b.setAttribute("preserveAspectRatio","none");b.appendChild(d);a=0;for(j=A.length;a<j;a+=1)if(n=A.splice(0,1)[0],n.canvasPosition=n.canvasPosition||{},n.ctx.storage){f=0;for(l=n.ctx.storage.length;f<
l;f+=1)switch(g=n.ctx.storage[f],g.type){case "variable":m[g.name]=g.arguments;break;case "function":g.name==="fillRect"?(i=w.createElementNS("http://www.w3.org/2000/svg","rect"),i.setAttribute("x",g.arguments[0]),i.setAttribute("y",g.arguments[1]),i.setAttribute("width",g.arguments[2]),i.setAttribute("height",g.arguments[3]),i.setAttribute("fill",m.fillStyle),b.appendChild(i)):g.name==="fillText"?(i=w.createElementNS("http://www.w3.org/2000/svg","text"),k=m.font.split(" "),i.style.fontVariant=k.splice(0,
1)[0],i.style.fontWeight=k.splice(0,1)[0],i.style.fontStyle=k.splice(0,1)[0],i.style.fontSize=k.splice(0,1)[0],i.setAttribute("x",g.arguments[1]),i.setAttribute("y",g.arguments[2]-(parseInt(i.style.fontSize,10)+3)),i.setAttribute("fill",m.fillStyle),i.style.dominantBaseline="text-before-edge",i.style.fontFamily=k.join(" "),k=w.createTextNode(g.arguments[0]),i.appendChild(k),b.appendChild(i)):g.name==="drawImage"&&g.arguments[8]>0&&g.arguments[7]&&(i=w.createElementNS("http://www.w3.org/2000/svg",
"clipPath"),i.setAttribute("id","clipId"+y),k=w.createElementNS("http://www.w3.org/2000/svg","rect"),k.setAttribute("x",g.arguments[5]),k.setAttribute("y",g.arguments[6]),k.setAttribute("width",g.arguments[3]),k.setAttribute("height",g.arguments[4]),i.appendChild(k),d.appendChild(i),i=w.createElementNS("http://www.w3.org/2000/svg","image"),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",g.arguments[0].src),i.setAttribute("width",g.arguments[0].width),i.setAttribute("height",g.arguments[0].height),
i.setAttribute("x",g.arguments[5]-g.arguments[1]),i.setAttribute("y",g.arguments[6]-g.arguments[2]),i.setAttribute("clip-path","url(#clipId"+y+")"),i.setAttribute("preserveAspectRatio","none"),b.appendChild(i),y+=1)}}C("html2canvas: Renderer: SVG Renderer done - returning SVG DOM obj");return b}var e={width:null,height:null,renderer:"canvas",taintTest:!0},A=[],f,d=!1,K=2880,w=L,e=l.Util.Extend(b,e);switch(e.renderer.toLowerCase()){case "canvas":if(f=w.createElement("canvas"),f.getContext)return C("html2canvas: Renderer: using canvas renderer"),
I(a);else{d=!0;C("html2canvas: Renderer: canvas not available, using flashcanvas");var y=w.createElement("script");y.src=e.flashcanvas;y.onload=function(a,b){var d;if(a.onload===n)a.onreadystatechange!==n?(d=function(){a.readyState!=="loaded"&&a.readyState!=="complete"?j.setTimeout(d,250):b()},j.setTimeout(d,250)):C("html2canvas: Renderer: Can't track when flashcanvas is loaded");else return b}(y,function(){typeof j.FlashCanvas!=="undefined"&&(C("html2canvas: Renderer: Flashcanvas initialized"),j.FlashCanvas.initElement(f),
I(a))});w.body.appendChild(y);return f}case "svg":if(w.createElementNS)return C("html2canvas: Renderer: using SVG renderer"),F(a)}return this};j.html2canvas=l})(window,document);
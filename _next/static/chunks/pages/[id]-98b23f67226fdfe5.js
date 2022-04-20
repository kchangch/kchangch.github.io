(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{7285:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},9546:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))};var n,a=(n=r(7294))&&n.__esModule?n:{default:n},i=r(7285);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,i=e.hasQuery,o=void 0!==i&&i;return r||a&&o}},6505:function(e,t,r){"use strict";var n=r(930);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=l,t.default=void 0;var i,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),s=(i=r(148))&&i.__esModule?i:{default:i},c=r(7285),u=r(523),d=r(9546);r(7206);function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var r=o.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var i=!0,o=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){o=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var c=0,u=p.length;c<u;c++){var d=p[c];if(a.props.hasOwnProperty(d))if("charSet"===d)r.has(d)?i=!1:r.add(d);else{var l=a.props[d],f=n[d]||new Set;"name"===d&&o||!f.has(l)?(f.add(l),n[d]=f):i=!1}}}return i}}()).reverse().map((function(e,r){var i=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,o.default.cloneElement(e,s)}return o.default.cloneElement(e,{key:i})}))}var v=function(e){var t=e.children,r=o.useContext(c.AmpStateContext),n=o.useContext(u.HeadManagerContext);return o.default.createElement(s.default,{reduceComponentsToState:h,headManager:n,inAmpMode:d.isInAmpMode(r)},t)};t.default=v},148:function(e,t,r){"use strict";var n=r(7980),a=r(3227),i=r(8361),o=(r(2191),r(5971)),s=r(2715),c=r(1193);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var a=c(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return s(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294));var l=function(e){o(r,e);var t=u(r);function r(e){var i;return a(this,r),(i=t.call(this,e)).emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(d.Component);t.default=l},7899:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return u}});var n=r(9008),a=r(567),i=r.n(a),o=r(381),s=r.n(o),c=r(5893),u=!0;t.default=function(e){var t=e.location;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.default,{children:(0,c.jsx)("title",{children:"Assessment | Detail View "})}),(0,c.jsx)("div",{className:i().container,children:(0,c.jsxs)("div",{className:i().gridContainer,children:[(0,c.jsx)("div",{className:i().title,children:(0,c.jsx)("h3",{children:t.place})}),(0,c.jsx)("div",{className:i().header,children:"Title"}),(0,c.jsx)("div",{className:i().text,children:t.place}),(0,c.jsx)("div",{className:i().header,children:"Magnitude"}),(0,c.jsx)("div",{className:i().text,children:t.mag}),(0,c.jsx)("div",{className:i().header,children:"Time"}),(0,c.jsx)("div",{className:i().text,children:s()(new Date(t.time)).format("lll")}),(0,c.jsx)("div",{className:i().header,children:"Status"}),(0,c.jsx)("div",{className:i().text,children:t.status}),(0,c.jsx)("div",{className:i().header,children:"Tsunami"}),(0,c.jsx)("div",{className:i().text,children:t.tsunami}),(0,c.jsx)("div",{className:i().header,children:"Type"}),(0,c.jsx)("div",{className:i().text,children:t.type})]})})]})}},1:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return r(7899)}])},567:function(e){e.exports={container:"Detail_container__gsMCK",gridContainer:"Detail_gridContainer__9Wby4",title:"Detail_title__IYbuX",header:"Detail_header__N7RWr",text:"Detail_text__cq5bW"}},9008:function(e,t,r){e.exports=r(6505)}},function(e){e.O(0,[885,774,888,179],(function(){return t=1,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
(()=>{var t={n:o=>{var n=o&&o.__esModule?()=>o.default:()=>o;return t.d(n,{a:n}),n},d:(o,n)=>{for(var e in n)t.o(n,e)&&!t.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:n[e]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};(()=>{"use strict";t.r(o),flarum.core.compat.extend;const n=flarum.core.compat["forum/app"];var e=t.n(n);const i=flarum.core.compat["common/extend"],r=flarum.core.compat["forum/components/HeaderSecondary"];var s=t.n(r);function a(t,o){return a=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t},a(t,o)}function c(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,a(t,o)}const u=flarum.core.compat["common/components/NotificationsDropdown"];var l=t.n(u);const p=flarum.core.compat["common/Component"];var f=t.n(p);const v=flarum.core.compat["common/components/LoadingIndicator"];var d=t.n(v);const h=flarum.core.compat["common/components/Button"];var y=t.n(h);flarum.core.compat["common/components/Tooltip"];const w=flarum.core.compat["common/helpers/humanTime"];var g=t.n(w);const b=flarum.core.compat["common/helpers/username"];var H=t.n(b);const N=flarum.core.compat["common/helpers/avatar"];var A=t.n(N);const L=flarum.core.compat["common/components/Link"];var O=t.n(L);const _=flarum.core.compat["common/helpers/icon"];var C=t.n(_),P=function(t){function o(){return t.apply(this,arguments)||this}c(o,t);var n=o.prototype;return n.oncreate=function(o){t.prototype.oninit.call(this,o),this.state=this.attrs.state},n.deleteAll=function(t){confirm(e().translator.trans("ziven-view-history.forum.view-history-delete-all-confirmation"))&&e().request({method:"DELETE",url:e().forum.attribute("apiUrl")+"/viewHistory/deleteAll"}).then((function(){e().store.data.viewHistory=[],m.redraw()}))},n.view=function(){if(this.state){var t=this.state.cache||[];return m("div",{className:"NotificationList"},m("div",{className:"NotificationList-header"},m("h4",{className:"App-titleControl App-titleControl--text"},e().translator.trans("ziven-view-history.forum.view-history")),m("div",{class:"App-primaryControl"},m(y(),{"data-container":"body",icon:"fas fa-trash-alt",className:"Button Button--link Button--icon Alert-dismiss",onclick:this.deleteAll.bind(this)}))),m("div",{className:"NotificationList-content"},m("ul",{className:"NotificationGroup-content"},t.length?t.map((function(t){var o=t.post(),n=o.user();return m("li",null,m(O(),{href:e().route.post(o),className:"Notification",onclick:function(t){t.redraw=!1}},A()(n),C()("fas",{className:"Notification-icon"}),m("span",{className:"Notification-content"},e().translator.trans("flarum-flags.forum.flagged_posts.item_text",{username:H()(o.user()),em:m("em",null),discussion:o.discussion().title()})),g()(t.assignedAt()),m("div",{className:"Notification-excerpt"},o.contentPlain())))})):this.state.loading?d().component({className:"LoadingIndicator--block"}):m("div",{className:"NotificationList-empty"},e().translator.trans("ziven-view-history.forum.view-history-empty")))))}},o}(f()),S=function(t){function o(){return t.apply(this,arguments)||this}c(o,t),o.initAttrs=function(o){o.label=app.translator.trans("ziven-view-history.forum.view-history"),o.icon="fas fa-history",t.initAttrs.call(this,o)};var n=o.prototype;return n.getMenu=function(){return m("div",{className:"Dropdown-menu "+this.attrs.menuClassName,onclick:this.menuClick.bind(this)},this.showing?P.component({state:this.attrs.state}):"")},n.goToRoute=function(){m.route.set(app.route("viewHistory"))},n.getUnreadCount=function(){return 0},n.getNewCount=function(){return this.getUnreadCount()},o}(l());const E=flarum.core.compat["common/components/FieldSet"];var x=t.n(E);const z=flarum.core.compat["common/components/SettingsPage"];var k=t.n(z);const j=flarum.core.compat["common/components/Switch"];var I=t.n(j);const T=flarum.core.compat["common/utils/ItemList"];var M=t.n(T),B=function(){function t(t){this.app=t,this.loading=!1}return t.prototype.load=function(){var t=this;this.loading=!0,m.redraw(),this.app.store.find("viewHistory").then((function(o){t.cache=o.sort((function(t,o){return o.id()-t.id()}))})).catch((function(){})).then((function(){t.loading=!1,m.redraw()}))},t}();const D=flarum.core.compat["common/Model"];var U=t.n(D),q=function(t){function o(){return t.apply(this,arguments)||this}c(o,t);var n=o.prototype;return n.assignedAt=function(){return U().attribute("assigned_at").call(this)},n.discussion=function(){return U().hasOne("discussion").call(this)},n.post=function(){return U().hasOne("post").call(this)},n.user=function(){return U().hasOne("user").call(this)},o}(U());const F=flarum.core.compat["common/components/Page"];var G=function(t){function o(){return t.apply(this,arguments)||this}c(o,t);var n=o.prototype;return n.oninit=function(o){t.prototype.oninit.call(this,o),app.history.push("viewHistory"),app.viewHistory.load(),this.bodyClass="App--viewHistory"},n.view=function(){return m("div",{className:"ViewHistoryPage"},m(P,{state:app.viewHistory}))},o}(t.n(F)());e().initializers.add("ziven-view-history",(function(){e().store.models.viewHistory=q,e().routes.viewHistory={path:"/viewHistory",component:G},e().viewHistory=new B(e()),(0,i.extend)(s().prototype,"items",(function(t){e().session.user&&e().session.user.preferences().viewHistoryEnable&&t.add("viewHistory",m(S,{state:e().viewHistory}),20)})),(0,i.extend)(k().prototype,"settingsItems",(function(t){t.add("viewHistory",x().component({label:app.translator.trans("ziven-view-history.forum.view-history"),className:"Settings-viewHistory"},this.viewHistoryItems().toArray()))})),k().prototype.viewHistoryItems=function(){var t=this,o=new(M());return o.add("viewHistory-enable",I().component({state:this.user.preferences().viewHistoryEnable,onchange:function(o){t.viewHistoryEnableLoading=!0,t.user.savePreferences({viewHistoryEnable:o}).then((function(){t.viewHistoryEnableLoading=!1,m.redraw()}))},loading:this.viewHistoryEnableLoading},app.translator.trans("ziven-view-history.forum.view-history-enable"))),o}}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map
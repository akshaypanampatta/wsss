(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c972a56e"],{2296:function(t,s,e){},"878e":function(t,s,e){},"93fe":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Navbar"),e("div",{staticClass:"project-page"},[e("div",{staticClass:"project-page-top"},[e("img",{staticClass:"project-image",attrs:{src:t.form_data.preview?t.form_data.preview:"/images/no_img.png",alt:""}}),e("div",{staticClass:"black"}),e("img",{staticClass:"play-img",attrs:{src:"/images/play.svg",alt:""}})]),e("div",{staticClass:"project-page-content",staticStyle:{"padding-bottom":"6rem"}},[e("h1",[t._v(t._s(t.form_data.name))]),e("p",{domProps:{innerHTML:t._s(t.form_data.description)}})])]),e("Footer")],1)},a=[],o=(e("d3b7"),e("e633")),r=e("973c"),n={name:"ProjectPage",components:{Navbar:o["a"],Footer:r["a"]},data:function(){return{form_data:{id:this.$route.params.id}}},mounted:function(){this.getEvent()},methods:{getEvent:function(){var t=this,s=new Headers;s.append("Authorization","Token "+this.$root.token),fetch(this.api_url+"/wsss/events/"+this.form_data.id+"/",{method:"get",headers:s}).then((function(t){return t.json()})).then((function(s){t.form_data=s}))}}},l=n,c=(e("b4fc"),e("2877")),m=Object(c["a"])(l,i,a,!1,null,null,null);s["default"]=m.exports},b4fc:function(t,s,e){"use strict";var i=e("878e"),a=e.n(i);a.a},e633:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"position-relative"},[e("div",{staticClass:"navbar-total"},[e("div",{staticClass:"navbaar"},[e("router-link",{staticClass:"custom-router",attrs:{to:"/"}},[e("button",[t._v("Home")])]),e("b-dropdown",{attrs:{variant:"link","toggle-class":"text-decoration-none","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("button",[t._v("Projects "),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"25",viewBox:"0 0 24 25",fill:"none"}},[e("path",{attrs:{d:"M16.5716 12.2143L12.0001 16.7857L7.42871 12.2143",stroke:"#1E1E1E","stroke-width":"1.14286","stroke-linecap":"round","stroke-linejoin":"round"}})])])]},proxy:!0}])},[e("div",{staticClass:"custom-dropdown"},[e("div",{staticStyle:{padding:"0.625rem 1.5rem"}},[e("h4",{staticClass:"sub-title",staticStyle:{"font-size":"1rem",color:"#202020","line-height":"1.5rem"}},[t._v("Option 1")])]),e("div",{staticStyle:{padding:"0.625rem 1.5rem"}},[e("h4",{staticClass:"sub-title",staticStyle:{"font-size":"1rem",color:"#202020","line-height":"1.5rem"}},[t._v("Option 2")])]),e("div",{staticStyle:{padding:"0.625rem 1.5rem"}},[e("h4",{staticClass:"sub-title",staticStyle:{"font-size":"1rem",color:"#202020","line-height":"1.5rem"}},[t._v("Option 3")])]),e("div",{staticStyle:{padding:"0.625rem 1.5rem"}},[e("h4",{staticClass:"sub-title",staticStyle:{"font-size":"1rem",color:"#202020","line-height":"1.5rem"}},[t._v("Option 4")])])])]),e("b-dropdown",{attrs:{variant:"link","toggle-class":"text-decoration-none","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("button",[t._v("About us "),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"25",viewBox:"0 0 24 25",fill:"none"}},[e("path",{attrs:{d:"M16.5716 12.2143L12.0001 16.7857L7.42871 12.2143",stroke:"#1E1E1E","stroke-width":"1.14286","stroke-linecap":"round","stroke-linejoin":"round"}})])])]},proxy:!0}])},[e("div",{staticClass:"custom-dropdown"},[e("div",{staticStyle:{padding:"0.625rem 1.5rem"}},[e("h4",{staticClass:"sub-title",staticStyle:{"font-size":"1rem",color:"#202020","line-height":"1.5rem"}},[t._v("Option 1")])]),e("div",{staticStyle:{padding:"0.625rem 1.5rem"}},[e("h4",{staticClass:"sub-title",staticStyle:{"font-size":"1rem",color:"#202020","line-height":"1.5rem"}},[t._v("Option 2")])]),e("div",{staticStyle:{padding:"0.625rem 1.5rem"}},[e("h4",{staticClass:"sub-title",staticStyle:{"font-size":"1rem",color:"#202020","line-height":"1.5rem"}},[t._v("Option 3")])]),e("div",{staticStyle:{padding:"0.625rem 1.5rem"}},[e("h4",{staticClass:"sub-title",staticStyle:{"font-size":"1rem",color:"#202020","line-height":"1.5rem"}},[t._v("Option 4")])])])]),e("router-link",{staticClass:"custom-router",attrs:{to:"/awards"}},[e("button",[t._v("Awards & Recognitions")])]),e("button",[t._v("Gallery")]),e("b-dropdown",{attrs:{variant:"link","toggle-class":"text-decoration-none","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("button",[t._v("Activities "),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"25",viewBox:"0 0 24 25",fill:"none"}},[e("path",{attrs:{d:"M16.5716 12.2143L12.0001 16.7857L7.42871 12.2143",stroke:"#1E1E1E","stroke-width":"1.14286","stroke-linecap":"round","stroke-linejoin":"round"}})])])]},proxy:!0}])},[e("div",{staticClass:"custom-dropdown"},[e("div",{staticStyle:{padding:"0.625rem 1.5rem"}},[e("h4",{staticClass:"sub-title",staticStyle:{"font-size":"1rem",color:"#202020","line-height":"1.5rem"}},[t._v("Option 1")])]),e("div",{staticStyle:{padding:"0.625rem 1.5rem"}},[e("h4",{staticClass:"sub-title",staticStyle:{"font-size":"1rem",color:"#202020","line-height":"1.5rem"}},[t._v("Option 2")])]),e("div",{staticStyle:{padding:"0.625rem 1.5rem"}},[e("h4",{staticClass:"sub-title",staticStyle:{"font-size":"1rem",color:"#202020","line-height":"1.5rem"}},[t._v("Option 3")])]),e("div",{staticStyle:{padding:"0.625rem 1.5rem"}},[e("h4",{staticClass:"sub-title",staticStyle:{"font-size":"1rem",color:"#202020","line-height":"1.5rem"}},[t._v("Option 4")])])])]),e("button",[t._v("Contact")]),e("button",{staticClass:"menu-btn",on:{click:t.openNav}},[e("img",{attrs:{src:"/images/menu-2.svg",alt:""}})])],1),e("button",{staticClass:"green-btn",staticStyle:{"background-color":"#0B9F0D",color:"#fff"}},[t._v("Donate")]),e("img",{staticClass:"nav-logo-image",attrs:{src:"/images/nav-logo.png",alt:""}})]),t.showMobileNav?e("div",{staticClass:"navbar-mobile"},[e("div",{staticClass:"nav-mobile-top"},[e("img",{staticClass:"mobile-logo",attrs:{src:"/images/logo.png",alt:""}}),e("img",{attrs:{src:"/images/close.svg",alt:""},on:{click:t.closeNav}})]),e("div",{staticClass:"d-flex flex-column"},[e("router-link",{staticClass:"custom-router",attrs:{to:"/"}},[e("div",{staticClass:"one-nav-mobile"},[e("h3",[t._v("Home")]),e("img",{attrs:{src:"/images/arrow-right.png",alt:""}})])]),e("router-link",{staticClass:"custom-router",attrs:{to:"/project"}},[e("div",{staticClass:"one-nav-mobile"},[e("h3",[t._v("Projects")]),e("img",{attrs:{src:"/images/arrow-right.png",alt:""}})])]),t._m(0),e("router-link",{staticClass:"custom-router",attrs:{to:"/awards"}},[e("div",{staticClass:"one-nav-mobile"},[e("h3",[t._v("Awards & Recognitions")]),e("img",{attrs:{src:"/images/arrow-right.png",alt:""}})])]),t._m(1),e("router-link",{staticClass:"custom-router",attrs:{to:"/activities"}},[e("div",{staticClass:"one-nav-mobile"},[e("h3",[t._v("Activities")]),e("img",{attrs:{src:"/images/arrow-right.png",alt:""}})])]),t._m(2)],1)]):t._e()])},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"one-nav-mobile"},[e("h3",[t._v("About us")]),e("img",{attrs:{src:"/images/arrow-right.png",alt:""}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"one-nav-mobile"},[e("h3",[t._v("Gallery")]),e("img",{attrs:{src:"/images/arrow-right.png",alt:""}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"one-nav-mobile",staticStyle:{"border-bottom":"solid 1px #283618"}},[e("h3",[t._v("Contact")]),e("img",{attrs:{src:"/images/arrow-right.png",alt:""}})])}],o={name:"Navbar",data:function(){return{showMobileNav:!1}},methods:{openNav:function(){this.showMobileNav=!0},closeNav:function(){this.showMobileNav=!1}}},r=o,n=(e("f7d9"),e("2877")),l=Object(n["a"])(r,i,a,!1,null,null,null);s["a"]=l.exports},f7d9:function(t,s,e){"use strict";var i=e("2296"),a=e.n(i);a.a}}]);
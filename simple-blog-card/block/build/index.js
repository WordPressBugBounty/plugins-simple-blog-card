(()=>{"use strict";var e={n:l=>{var o=l&&l.__esModule?()=>l.default:()=>l;return e.d(o,{a:o}),o},d:(l,o)=>{for(var a in o)e.o(o,a)&&!e.o(l,a)&&Object.defineProperty(l,a,{enumerable:!0,get:o[a]})},o:(e,l)=>Object.prototype.hasOwnProperty.call(e,l)};const l=window.wp.blocks,o=window.wp.i18n,a=window.wp.serverSideRender;var n=e.n(a);const t=window.wp.components,i=window.wp.blockEditor,r=window.ReactJSXRuntime,s=JSON.parse('{"UU":"simple-blog-card/simpleblogcard-block"}');(0,l.registerBlockType)(s.UU,{edit:function({attributes:e,setAttributes:l}){const a=(0,i.useBlockProps)();return(0,r.jsxs)("div",{...a,children:[(0,r.jsx)(n(),{block:"simple-blog-card/simpleblogcard-block",attributes:e}),(0,r.jsx)(t.TextControl,{__nextHasNoMarginBottom:!0,label:"URL",value:e.url,onChange:e=>l({url:e})}),(0,r.jsxs)(i.InspectorControls,{children:[(0,r.jsx)(t.TextControl,{__nextHasNoMarginBottom:!0,label:"URL",value:e.url,onChange:e=>l({url:e})}),(0,r.jsx)(t.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,o.__)("Description length","simple-blog-card"),max:300,min:0,value:e.dessize,onChange:e=>l({dessize:e})}),(0,r.jsx)(t.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,o.__)("Image sizes","simple-blog-card"),max:200,min:0,value:e.imgsize,onChange:e=>l({imgsize:e})}),(0,r.jsx)(t.RadioControl,{label:(0,o.__)("Image position","simple-blog-card"),selected:e.img_pos,onChange:e=>l({img_pos:e}),options:[{label:(0,o.__)("Left","simple-blog-card"),value:"left"},{label:(0,o.__)("Right","simple-blog-card"),value:"right"}]}),(0,o.__)("Border color","simple-blog-card"),(0,r.jsx)(t.ColorPalette,{colors:[{name:(0,o.__)("White","simple-blog-card"),color:"#ffffff"},{name:(0,o.__)("Black","simple-blog-card"),color:"#000000"},{name:(0,o.__)("Red","simple-blog-card"),color:"#ff0000"},{name:(0,o.__)("Yellow","simple-blog-card"),color:"#ffff00"},{name:(0,o.__)("Blue","simple-blog-card"),color:"#0000ff"}],value:e.color,onChange:e=>l({color:e})}),(0,r.jsx)(t.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,o.__)("Border color width","simple-blog-card"),max:15,min:0,value:e.color_width,onChange:e=>l({color_width:e})}),(0,r.jsx)(t.TextControl,{__nextHasNoMarginBottom:!0,label:(0,o.__)("Title","simple-blog-card"),value:e.title,onChange:e=>l({title:e})}),(0,r.jsx)(t.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,o.__)("Title line height","simple-blog-card"),max:300,min:10,value:e.t_line_height,onChange:e=>l({t_line_height:e})}),(0,r.jsx)(t.TextControl,{__nextHasNoMarginBottom:!0,label:(0,o.__)("Description","simple-blog-card"),value:e.description,onChange:e=>l({description:e})}),(0,r.jsx)(t.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,o.__)("Description line height","simple-blog-card"),max:300,min:10,value:e.d_line_height,onChange:e=>l({d_line_height:e})}),(0,r.jsx)(t.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,o.__)("Open in new tab","simple-blog-card"),checked:e.target_blank,onChange:e=>l({target_blank:e})}),(0,r.jsx)(t.SelectControl,{label:(0,o.__)("Character encoding","simple-blog-card"),value:e.encoding,options:[{label:"UTF-8",value:"UTF-8"},{label:"ASCII",value:"ASCII"},{label:"EUC-JP",value:"EUC-JP"},{label:"SJIS",value:"SJIS"},{label:"eucJP-win",value:"eucJP-win"},{label:"SJIS-win",value:"SJIS-win"},{label:"JIS",value:"JIS"},{label:"ISO-2022-JP",value:"ISO-2022-JP"}],onChange:e=>l({encoding:e}),__nextHasNoMarginBottom:!0})]})]})}})})();
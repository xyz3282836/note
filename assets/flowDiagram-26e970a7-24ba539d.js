import{c as mt,e as W,d as Z,s as T,l as J,A as L,h as tt,f as et}from"./add-html-label-ce7f9292-5dd381fb.js";import{A as kt,w as k,n as St,k as _t,g as Lt,a as At,s as D,c as rt}from"./layout-10a68736-15c7a8af.js";import{n as w,I as z,_ as at,t as j,d as nt,e as E,T as P,f as R,g as It}from"./mermaid.esm.min-8b9cd1c5.js";import{z as Tt}from"./isPlainObject-bb374f45-f7bb01e4.js";import{a as Mt}from"./selectAll-8155f162-054a2ab3.js";import{l as Et,a as Bt}from"./styles-d461a25b-f11bd7b6.js";import"./app-526cfad7.js";import"./framework-52f8fb67.js";import"./array-2ff2c7a6-ffeda358.js";import"./constant-2fe7eae5-45b4460e.js";import"./index-f4462e28-aca7a335.js";import"./edges-a2733861-d14a2fb7.js";import"./svgDraw-c2c52520-56aafacc.js";function Nt(r){if(!r.ok)throw new Error(r.status+" "+r.statusText);return r.text()}function $t(r,e){return fetch(r,e).then(Nt)}function Ct(r){return(e,t)=>$t(e,t).then(a=>new DOMParser().parseFromString(a,r))}var Dt=Ct("image/svg+xml"),q={normal:Rt,vee:Wt,undirected:Pt};function Ut(r){q=r}function Rt(r,e,t,a){var n=r.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto"),i=n.append("path").attr("d","M 0 0 L 10 5 L 0 10 z").style("stroke-width",1).style("stroke-dasharray","1,0");T(i,t[a+"Style"]),t[a+"Class"]&&i.attr("class",t[a+"Class"])}function Wt(r,e,t,a){var n=r.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto"),i=n.append("path").attr("d","M 0 0 L 10 5 L 0 10 L 4 5 z").style("stroke-width",1).style("stroke-dasharray","1,0");T(i,t[a+"Style"]),t[a+"Class"]&&i.attr("class",t[a+"Class"])}function Pt(r,e,t,a){var n=r.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto"),i=n.append("path").attr("d","M 0 5 L 10 5").style("stroke-width",1).style("stroke-dasharray","1,0");T(i,t[a+"Style"]),t[a+"Class"]&&i.attr("class",t[a+"Class"])}function zt(r,e){var t=r;return t.node().appendChild(e.label),T(t,e.labelStyle),t}function qt(r,e){for(var t=r.append("text"),a=Ot(e.label).split(`
`),n=0;n<a.length;n++)t.append("tspan").attr("xml:space","preserve").attr("dy","1em").attr("x","1").text(a[n]);return T(t,e.labelStyle),t}function Ot(r){for(var e="",t=!1,a,n=0;n<r.length;++n)if(a=r[n],t){switch(a){case"n":e+=`
`;break;default:e+=a}t=!1}else a==="\\"?t=!0:e+=a;return e}function G(r,e,t){var a=e.label,n=r.append("g");e.labelType==="svg"?zt(n,e):typeof a!="string"||e.labelType==="html"?Z(n,e):qt(n,e);var i=n.node().getBBox(),s;switch(t){case"top":s=-e.height/2;break;case"bottom":s=e.height/2-i.height;break;default:s=-i.height/2}return n.attr("transform","translate("+-i.width/2+","+s+")"),n}var O=function(r,e){var t=e.nodes().filter(function(i){return J(e,i)}),a=r.selectAll("g.cluster").data(t,function(i){return i});L(a.exit(),e).style("opacity",0).remove();var n=a.enter().append("g").attr("class","cluster").attr("id",function(i){var s=e.node(i);return s.id}).style("opacity",0).each(function(i){var s=e.node(i),o=w(this);w(this).append("rect");var l=o.append("g").attr("class","label");G(l,s,s.clusterLabelPos)});return a=a.merge(n),a=L(a,e).style("opacity",1),a.selectAll("rect").each(function(i){var s=e.node(i),o=w(this);T(o,s.style)}),a};function Yt(r){O=r}let Y=function(r,e){var t=r.selectAll("g.edgeLabel").data(e.edges(),function(n){return tt(n)}).classed("update",!0);t.exit().remove(),t.enter().append("g").classed("edgeLabel",!0).style("opacity",0),t=r.selectAll("g.edgeLabel"),t.each(function(n){var i=w(this);i.select(".label").remove();var s=e.edge(n),o=G(i,e.edge(n),0).classed("label",!0),l=o.node().getBBox();s.labelId&&o.attr("id",s.labelId),k(s,"width")||(s.width=l.width),k(s,"height")||(s.height=l.height)});var a;return t.exit?a=t.exit():a=t.selectAll(null),L(a,e).style("opacity",0).remove(),t};function Ht(r){Y=r}function Q(r,e){return r.intersect(e)}var H=function(r,e,t){var a=r.selectAll("g.edgePath").data(e.edges(),function(s){return tt(s)}).classed("update",!0),n=Ft(a,e);Qt(a,e);var i=a.merge!==void 0?a.merge(n):a;return L(i,e).style("opacity",1),i.each(function(s){var o=w(this),l=e.edge(s);l.elem=this,l.id&&o.attr("id",l.id),et(o,l.class,(o.classed("update")?"update ":"")+"edgePath")}),i.selectAll("path.path").each(function(s){var o=e.edge(s);o.arrowheadId=St("arrowhead");var l=w(this).attr("marker-end",function(){return"url("+Xt(location.href,o.arrowheadId)+")"}).style("fill","none");L(l,e).attr("d",function(c){return jt(e,c)}),T(l,o.style)}),i.selectAll("defs *").remove(),i.selectAll("defs").each(function(s){var o=e.edge(s),l=t[o.arrowhead];l(w(this),o.arrowheadId,o,"arrowhead")}),i};function Vt(r){H=r}function Xt(r,e){var t=r.split("#")[0];return t+"#"+e}function jt(r,e){var t=r.edge(e),a=r.node(e.v),n=r.node(e.w),i=t.points.slice(1,t.points.length-1);return i.unshift(Q(a,i[0])),i.push(Q(n,i[i.length-1])),it(t,i)}function it(r,e){var t=(Tt||Dt.line)().x(function(a){return a.x}).y(function(a){return a.y});return(t.curve||t.interpolate)(r.curve),t(e)}function Gt(r){var e=r.getBBox(),t=r.ownerSVGElement.getScreenCTM().inverse().multiply(r.getScreenCTM()).translate(e.width/2,e.height/2);return{x:t.e,y:t.f}}function Ft(r,e){var t=r.enter().append("g").attr("class","edgePath").style("opacity",0);return t.append("path").attr("class","path").attr("d",function(a){var n=e.edge(a),i=e.node(a.v).elem,s=_t(n.points.length).map(function(){return Gt(i)});return it(n,s)}),t.append("defs"),t}function Qt(r,e){var t=r.exit();L(t,e).style("opacity",0).remove()}var V=function(r,e,t){var a=e.nodes().filter(function(s){return!J(e,s)}),n=r.selectAll("g.node").data(a,function(s){return s}).classed("update",!0);n.exit().remove(),n.enter().append("g").attr("class","node").style("opacity",0),n=r.selectAll("g.node"),n.each(function(s){var o=e.node(s),l=w(this);et(l,o.class,(l.classed("update")?"update ":"")+"node"),l.select("g.label").remove();var c=l.append("g").attr("class","label"),d=G(c,o),g=t[o.shape],p=Lt(d.node().getBBox(),"width","height");o.elem=this,o.id&&l.attr("id",o.id),o.labelId&&c.attr("id",o.labelId),k(o,"width")&&(p.width=o.width),k(o,"height")&&(p.height=o.height),p.width+=o.paddingLeft+o.paddingRight,p.height+=o.paddingTop+o.paddingBottom,c.attr("transform","translate("+(o.paddingLeft-o.paddingRight)/2+","+(o.paddingTop-o.paddingBottom)/2+")");var h=w(this);h.select(".label-container").remove();var f=g(h,p,o).classed("label-container",!0);T(f,o.style);var u=f.node().getBBox();o.width=u.width,o.height=u.height});var i;return n.exit?i=n.exit():i=n.selectAll(null),L(i,e).style("opacity",0).remove(),n};function Kt(r){V=r}function Zt(r,e){var t=r.filter(function(){return!w(this).classed("update")});function a(n){var i=e.node(n);return"translate("+i.x+","+i.y+")"}t.attr("transform",a),L(r,e).style("opacity",1).attr("transform",a),L(t.selectAll("rect"),e).attr("width",function(n){return e.node(n).width}).attr("height",function(n){return e.node(n).height}).attr("x",function(n){var i=e.node(n);return-i.width/2}).attr("y",function(n){var i=e.node(n);return-i.height/2})}function Jt(r,e){var t=r.filter(function(){return!w(this).classed("update")});function a(n){var i=e.edge(n);return k(i,"x")?"translate("+i.x+","+i.y+")":""}t.attr("transform",a),L(r,e).style("opacity",1).attr("transform",a)}function te(r,e){var t=r.filter(function(){return!w(this).classed("update")});function a(n){var i=e.node(n);return"translate("+i.x+","+i.y+")"}t.attr("transform",a),L(r,e).style("opacity",1).attr("transform",a)}function st(r,e,t,a){var n=r.x,i=r.y,s=n-a.x,o=i-a.y,l=Math.sqrt(e*e*o*o+t*t*s*s),c=Math.abs(e*t*s/l);a.x<n&&(c=-c);var d=Math.abs(e*t*o/l);return a.y<i&&(d=-d),{x:n+c,y:i+d}}function ee(r,e,t){return st(r,e,e,t)}function re(r,e,t,a){var n,i,s,o,l,c,d,g,p,h,f,u,x,v,S;if(n=e.y-r.y,s=r.x-e.x,l=e.x*r.y-r.x*e.y,p=n*t.x+s*t.y+l,h=n*a.x+s*a.y+l,!(p!==0&&h!==0&&K(p,h))&&(i=a.y-t.y,o=t.x-a.x,c=a.x*t.y-t.x*a.y,d=i*r.x+o*r.y+c,g=i*e.x+o*e.y+c,!(d!==0&&g!==0&&K(d,g))&&(f=n*o-i*s,f!==0)))return u=Math.abs(f/2),x=s*c-o*l,v=x<0?(x-u)/f:(x+u)/f,x=i*l-n*c,S=x<0?(x-u)/f:(x+u)/f,{x:v,y:S}}function K(r,e){return r*e>0}function I(r,e,t){var a=r.x,n=r.y,i=[],s=Number.POSITIVE_INFINITY,o=Number.POSITIVE_INFINITY;e.forEach(function(f){s=Math.min(s,f.x),o=Math.min(o,f.y)});for(var l=a-r.width/2-s,c=n-r.height/2-o,d=0;d<e.length;d++){var g=e[d],p=e[d<e.length-1?d+1:0],h=re(r,t,{x:l+g.x,y:c+g.y},{x:l+p.x,y:c+p.y});h&&i.push(h)}return i.length?(i.length>1&&i.sort(function(f,u){var x=f.x-t.x,v=f.y-t.y,S=Math.sqrt(x*x+v*v),A=u.x-t.x,$=u.y-t.y,y=Math.sqrt(A*A+$*$);return S<y?-1:S===y?0:1}),i[0]):(console.log("NO INTERSECTION FOUND, RETURN NODE CENTER",r),r)}function F(r,e){var t=r.x,a=r.y,n=e.x-t,i=e.y-a,s=r.width/2,o=r.height/2,l,c;return Math.abs(i)*s>Math.abs(n)*o?(i<0&&(o=-o),l=i===0?0:o*n/i,c=o):(n<0&&(s=-s),l=s,c=n===0?0:s*i/n),{x:t+l,y:a+c}}var X={rect:ne,ellipse:ie,circle:se,diamond:oe};function ae(r){X=r}function ne(r,e,t){var a=r.insert("rect",":first-child").attr("rx",t.rx).attr("ry",t.ry).attr("x",-e.width/2).attr("y",-e.height/2).attr("width",e.width).attr("height",e.height);return t.intersect=function(n){return F(t,n)},a}function ie(r,e,t){var a=e.width/2,n=e.height/2,i=r.insert("ellipse",":first-child").attr("x",-e.width/2).attr("y",-e.height/2).attr("rx",a).attr("ry",n);return t.intersect=function(s){return st(t,a,n,s)},i}function se(r,e,t){var a=Math.max(e.width,e.height)/2,n=r.insert("circle",":first-child").attr("x",-e.width/2).attr("y",-e.height/2).attr("r",a);return t.intersect=function(i){return ee(t,a,i)},n}function oe(r,e,t){var a=e.width*Math.SQRT2/2,n=e.height*Math.SQRT2/2,i=[{x:0,y:-n},{x:-a,y:0},{x:0,y:n},{x:a,y:0}],s=r.insert("polygon",":first-child").attr("points",i.map(function(o){return o.x+","+o.y}).join(" "));return t.intersect=function(o){return I(t,i,o)},s}function le(){var r=function(e,t){he(t);var a=U(e,"output"),n=U(a,"clusters"),i=U(a,"edgePaths"),s=Y(U(a,"edgeLabels"),t),o=V(U(a,"nodes"),t,X);At(t),te(o,t),Jt(s,t),H(i,t,q);var l=O(n,t);Zt(l,t),ue(t)};return r.createNodes=function(e){return arguments.length?(Kt(e),r):V},r.createClusters=function(e){return arguments.length?(Yt(e),r):O},r.createEdgeLabels=function(e){return arguments.length?(Ht(e),r):Y},r.createEdgePaths=function(e){return arguments.length?(Vt(e),r):H},r.shapes=function(e){return arguments.length?(ae(e),r):X},r.arrows=function(e){return arguments.length?(Ut(e),r):q},r}var de={paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10,rx:0,ry:0,shape:"rect"},ce={arrowhead:"normal",curve:R};function he(r){r.nodes().forEach(function(e){var t=r.node(e);!k(t,"label")&&!r.children(e).length&&(t.label=e),k(t,"paddingX")&&D(t,{paddingLeft:t.paddingX,paddingRight:t.paddingX}),k(t,"paddingY")&&D(t,{paddingTop:t.paddingY,paddingBottom:t.paddingY}),k(t,"padding")&&D(t,{paddingLeft:t.padding,paddingRight:t.padding,paddingTop:t.padding,paddingBottom:t.padding}),D(t,de),rt(["paddingLeft","paddingRight","paddingTop","paddingBottom"],function(a){t[a]=Number(t[a])}),k(t,"width")&&(t._prevWidth=t.width),k(t,"height")&&(t._prevHeight=t.height)}),r.edges().forEach(function(e){var t=r.edge(e);k(t,"label")||(t.label=""),D(t,ce)})}function ue(r){rt(r.nodes(),function(e){var t=r.node(e);k(t,"_prevWidth")?t.width=t._prevWidth:delete t.width,k(t,"_prevHeight")?t.height=t._prevHeight:delete t.height,delete t._prevWidth,delete t._prevHeight})}function U(r,e){var t=r.select("g."+e);return t.empty()&&(t=r.append("g").attr("class",e)),t}function ot(r,e,t){const a=e.width,n=e.height,i=(a+n)*.9,s=[{x:i/2,y:0},{x:i,y:-i/2},{x:i/2,y:-i},{x:0,y:-i/2}],o=M(r,i,i,s);return t.intersect=function(l){return I(t,s,l)},o}function lt(r,e,t){const a=e.height,n=a/4,i=e.width+2*n,s=[{x:n,y:0},{x:i-n,y:0},{x:i,y:-a/2},{x:i-n,y:-a},{x:n,y:-a},{x:0,y:-a/2}],o=M(r,i,a,s);return t.intersect=function(l){return I(t,s,l)},o}function dt(r,e,t){const a=e.width,n=e.height,i=[{x:-n/2,y:0},{x:a,y:0},{x:a,y:-n},{x:-n/2,y:-n},{x:0,y:-n/2}],s=M(r,a,n,i);return t.intersect=function(o){return I(t,i,o)},s}function ct(r,e,t){const a=e.width,n=e.height,i=[{x:-2*n/6,y:0},{x:a-n/6,y:0},{x:a+2*n/6,y:-n},{x:n/6,y:-n}],s=M(r,a,n,i);return t.intersect=function(o){return I(t,i,o)},s}function ht(r,e,t){const a=e.width,n=e.height,i=[{x:2*n/6,y:0},{x:a+n/6,y:0},{x:a-2*n/6,y:-n},{x:-n/6,y:-n}],s=M(r,a,n,i);return t.intersect=function(o){return I(t,i,o)},s}function ut(r,e,t){const a=e.width,n=e.height,i=[{x:-2*n/6,y:0},{x:a+2*n/6,y:0},{x:a-n/6,y:-n},{x:n/6,y:-n}],s=M(r,a,n,i);return t.intersect=function(o){return I(t,i,o)},s}function pt(r,e,t){const a=e.width,n=e.height,i=[{x:n/6,y:0},{x:a-n/6,y:0},{x:a+2*n/6,y:-n},{x:-2*n/6,y:-n}],s=M(r,a,n,i);return t.intersect=function(o){return I(t,i,o)},s}function ft(r,e,t){const a=e.width,n=e.height,i=[{x:0,y:0},{x:a+n/2,y:0},{x:a,y:-n/2},{x:a+n/2,y:-n},{x:0,y:-n}],s=M(r,a,n,i);return t.intersect=function(o){return I(t,i,o)},s}function gt(r,e,t){const a=e.height,n=e.width+a/4,i=r.insert("rect",":first-child").attr("rx",a/2).attr("ry",a/2).attr("x",-n/2).attr("y",-a/2).attr("width",n).attr("height",a);return t.intersect=function(s){return F(t,s)},i}function yt(r,e,t){const a=e.width,n=e.height,i=[{x:0,y:0},{x:a,y:0},{x:a,y:-n},{x:0,y:-n},{x:0,y:0},{x:-8,y:0},{x:a+8,y:0},{x:a+8,y:-n},{x:-8,y:-n},{x:-8,y:0}],s=M(r,a,n,i);return t.intersect=function(o){return I(t,i,o)},s}function xt(r,e,t){const a=e.width,n=a/2,i=n/(2.5+a/50),s=e.height+i,o="M 0,"+i+" a "+n+","+i+" 0,0,0 "+a+" 0 a "+n+","+i+" 0,0,0 "+-a+" 0 l 0,"+s+" a "+n+","+i+" 0,0,0 "+a+" 0 l 0,"+-s,l=r.attr("label-offset-y",i).insert("path",":first-child").attr("d",o).attr("transform","translate("+-a/2+","+-(s/2+i)+")");return t.intersect=function(c){const d=F(t,c),g=d.x-t.x;if(n!=0&&(Math.abs(g)<t.width/2||Math.abs(g)==t.width/2&&Math.abs(d.y-t.y)>t.height/2-i)){let p=i*i*(1-g*g/(n*n));p!=0&&(p=Math.sqrt(p)),p=i-p,c.y-t.y>0&&(p=-p),d.y+=p}return d},l}function pe(r){r.shapes().question=ot,r.shapes().hexagon=lt,r.shapes().stadium=gt,r.shapes().subroutine=yt,r.shapes().cylinder=xt,r.shapes().rect_left_inv_arrow=dt,r.shapes().lean_right=ct,r.shapes().lean_left=ht,r.shapes().trapezoid=ut,r.shapes().inv_trapezoid=pt,r.shapes().rect_right_inv_arrow=ft}function fe(r){r({question:ot}),r({hexagon:lt}),r({stadium:gt}),r({subroutine:yt}),r({cylinder:xt}),r({rect_left_inv_arrow:dt}),r({lean_right:ct}),r({lean_left:ht}),r({trapezoid:ut}),r({inv_trapezoid:pt}),r({rect_right_inv_arrow:ft})}function M(r,e,t,a){return r.insert("polygon",":first-child").attr("points",a.map(function(n){return n.x+","+n.y}).join(" ")).attr("transform","translate("+-e/2+","+t/2+")")}const ge={addToRender:pe,addToRenderV2:fe},vt={},ye=function(r){const e=Object.keys(r);for(const t of e)vt[t]=r[t]},wt=function(r,e,t,a,n,i){const s=a?a.select(`[id="${t}"]`):w(`[id="${t}"]`),o=n||document;Object.keys(r).forEach(function(l){const c=r[l];let d="default";c.classes.length>0&&(d=c.classes.join(" "));const g=z(c.styles);let p=c.text!==void 0?c.text:c.id,h;if(at(j().flowchart.htmlLabels)){const x={label:p.replace(/fa[blrs]?:fa-[\w-]+/g,v=>`<i class='${v.replace(":"," ")}'></i>`)};h=Z(s,x).node(),h.parentNode.removeChild(h)}else{const x=o.createElementNS("http://www.w3.org/2000/svg","text");x.setAttribute("style",g.labelStyle.replace("color:","fill:"));const v=p.split(nt.lineBreakRegex);for(const S of v){const A=o.createElementNS("http://www.w3.org/2000/svg","tspan");A.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),A.setAttribute("dy","1em"),A.setAttribute("x","1"),A.textContent=S,x.appendChild(A)}h=x}let f=0,u="";switch(c.type){case"round":f=5,u="rect";break;case"square":u="rect";break;case"diamond":u="question";break;case"hexagon":u="hexagon";break;case"odd":u="rect_left_inv_arrow";break;case"lean_right":u="lean_right";break;case"lean_left":u="lean_left";break;case"trapezoid":u="trapezoid";break;case"inv_trapezoid":u="inv_trapezoid";break;case"odd_right":u="rect_left_inv_arrow";break;case"circle":u="circle";break;case"ellipse":u="ellipse";break;case"stadium":u="stadium";break;case"subroutine":u="subroutine";break;case"cylinder":u="cylinder";break;case"group":u="rect";break;default:u="rect"}E.warn("Adding node",c.id,c.domId),e.setNode(i.db.lookUpDomId(c.id),{labelType:"svg",labelStyle:g.labelStyle,shape:u,label:h,rx:f,ry:f,class:d,style:g.style,id:i.db.lookUpDomId(c.id)})})},bt=function(r,e,t){let a=0,n,i;if(r.defaultStyle!==void 0){const s=z(r.defaultStyle);n=s.style,i=s.labelStyle}r.forEach(function(s){a++;var o="L-"+s.start+"-"+s.end,l="LS-"+s.start,c="LE-"+s.end;const d={};s.type==="arrow_open"?d.arrowhead="none":d.arrowhead="normal";let g="",p="";if(s.style!==void 0){const h=z(s.style);g=h.style,p=h.labelStyle}else switch(s.stroke){case"normal":g="fill:none",n!==void 0&&(g=n),i!==void 0&&(p=i);break;case"dotted":g="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":g=" stroke-width: 3.5px;fill:none";break}d.style=g,d.labelStyle=p,s.interpolate!==void 0?d.curve=P(s.interpolate,R):r.defaultInterpolate!==void 0?d.curve=P(r.defaultInterpolate,R):d.curve=P(vt.curve,R),s.text===void 0?s.style!==void 0&&(d.arrowheadStyle="fill: #333"):(d.arrowheadStyle="fill: #333",d.labelpos="c",at(j().flowchart.htmlLabels)?(d.labelType="html",d.label=`<span id="L-${o}" class="edgeLabel L-${l}' L-${c}" style="${d.labelStyle}">${s.text.replace(/fa[blrs]?:fa-[\w-]+/g,h=>`<i class='${h.replace(":"," ")}'></i>`)}</span>`):(d.labelType="text",d.label=s.text.replace(nt.lineBreakRegex,`
`),s.style===void 0&&(d.style=d.style||"stroke: #333; stroke-width: 1.5px;fill:none"),d.labelStyle=d.labelStyle.replace("color:","fill:"))),d.id=o,d.class=l+" "+c,d.minlen=s.length||1,e.setEdge(t.db.lookUpDomId(s.start),t.db.lookUpDomId(s.end),d,a)})},xe=function(r,e){E.info("Extracting classes"),e.db.clear();try{return e.parse(r),e.db.getClasses()}catch(t){return E.error(t),{}}},ve=function(r,e,t,a){E.info("Drawing flowchart"),a.db.clear();const{securityLevel:n,flowchart:i}=j();let s;n==="sandbox"&&(s=w("#i"+e));const o=n==="sandbox"?w(s.nodes()[0].contentDocument.body):w("body"),l=n==="sandbox"?s.nodes()[0].contentDocument:document;try{a.parser.parse(r)}catch{E.debug("Parsing failed")}let c=a.db.getDirection();c===void 0&&(c="TD");const d=i.nodeSpacing||50,g=i.rankSpacing||50,p=new kt({multigraph:!0,compound:!0}).setGraph({rankdir:c,nodesep:d,ranksep:g,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});let h;const f=a.db.getSubGraphs();for(let y=f.length-1;y>=0;y--)h=f[y],a.db.addVertex(h.id,h.title,"group",void 0,h.classes);const u=a.db.getVertices();E.warn("Get vertices",u);const x=a.db.getEdges();let v=0;for(v=f.length-1;v>=0;v--){h=f[v],Mt("cluster").append("text");for(let y=0;y<h.nodes.length;y++)E.warn("Setting subgraph",h.nodes[y],a.db.lookUpDomId(h.nodes[y]),a.db.lookUpDomId(h.id)),p.setParent(a.db.lookUpDomId(h.nodes[y]),a.db.lookUpDomId(h.id))}wt(u,p,e,o,l,a),bt(x,p,a);const S=new le;ge.addToRender(S),S.arrows().none=function(y,b,_,m){const B=y.append("marker").attr("id",b).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 0 0 L 0 0 z");T(B,_[m+"Style"])},S.arrows().normal=function(y,b){y.append("marker").attr("id",b).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowheadPath").style("stroke-width",1).style("stroke-dasharray","1,0")};const A=o.select(`[id="${e}"]`),$=o.select("#"+e+" g");for(S($,p),$.selectAll("g.node").attr("title",function(){return a.db.getTooltip(this.id)}),a.db.indexNodes("subGraph"+v),v=0;v<f.length;v++)if(h=f[v],h.title!=="undefined"){const y=l.querySelectorAll("#"+e+' [id="'+a.db.lookUpDomId(h.id)+'"] rect'),b=l.querySelectorAll("#"+e+' [id="'+a.db.lookUpDomId(h.id)+'"]'),_=y[0].x.baseVal.value,m=y[0].y.baseVal.value,B=y[0].width.baseVal.value,C=w(b[0]).select(".label");C.attr("transform",`translate(${_+B/2}, ${m+14})`),C.attr("id",e+"Text");for(let N=0;N<h.classes.length;N++)b[0].classList.add(h.classes[N])}if(!i.htmlLabels){const y=l.querySelectorAll('[id="'+e+'"] .edgeLabel .label');for(const b of y){const _=b.getBBox(),m=l.createElementNS("http://www.w3.org/2000/svg","rect");m.setAttribute("rx",0),m.setAttribute("ry",0),m.setAttribute("width",_.width),m.setAttribute("height",_.height),b.insertBefore(m,b.firstChild)}}It(p,A,i.diagramPadding,i.useMaxWidth),Object.keys(u).forEach(function(y){const b=u[y];if(b.link){const _=o.select("#"+e+' [id="'+a.db.lookUpDomId(y)+'"]');if(_){const m=l.createElementNS("http://www.w3.org/2000/svg","a");m.setAttributeNS("http://www.w3.org/2000/svg","class",b.classes.join(" ")),m.setAttributeNS("http://www.w3.org/2000/svg","href",b.link),m.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),n==="sandbox"?m.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):b.linkTarget&&m.setAttributeNS("http://www.w3.org/2000/svg","target",b.linkTarget);const B=_.insert(function(){return m},":first-child"),C=_.select(".label-container");C&&B.append(function(){return C.node()});const N=_.select(".label");N&&B.append(function(){return N.node()})}}})},we={setConf:ye,addVertices:wt,addEdges:bt,getClasses:xe,draw:ve},$e={parser:mt,db:W,renderer:Et,styles:Bt,init:r=>{r.flowchart||(r.flowchart={}),r.flowchart.arrowMarkerAbsolute=r.arrowMarkerAbsolute,we.setConf(r.flowchart),W.clear(),W.setGen("gen-1")}};export{$e as diagram};

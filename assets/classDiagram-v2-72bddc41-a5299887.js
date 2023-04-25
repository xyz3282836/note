import{p as _,d as T,s as M}from"./styles-16907e1b-492e39df.js";import{l as p,c as a,h as w,y as R,t as B,r as C,o as D,p as G,k as E}from"./mermaid.core-c1539b5f.js";import{G as I}from"./layout-5290d876.js";import{r as $}from"./index-5219d011-4ec0f7f8.js";import"./createText-1f5f8f92-8cd4b61f.js";import"./app-b09f4794.js";import"./framework-418c825b.js";import"./edges-2e77835f-dfd4e026.js";import"./svgDraw-2526cba0-4b664560.js";import"./line-ca947323.js";import"./array-9f3ba611.js";import"./path-53f90ab3.js";const A=s=>E.sanitizeText(s,a());let S={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const z=function(s,o,f,n){const e=Object.keys(s);p.info("keys:",e),p.info(s),e.forEach(function(i){var l,r;const t=s[i];let y="";t.cssClasses.length>0&&(y=y+" "+t.cssClasses.join(" "));const c={labelStyle:"",style:""},m=t.label??t.id,d=0,u="class_box",b={labelStyle:c.labelStyle,shape:u,labelText:A(m),classData:t,rx:d,ry:d,class:y,style:c.style,id:t.id,domId:t.domId,tooltip:n.db.getTooltip(t.id)||"",haveCallback:t.haveCallback,link:t.link,width:t.type==="group"?500:void 0,type:t.type,padding:((l=a().flowchart)==null?void 0:l.padding)??((r=a().class)==null?void 0:r.padding)};o.setNode(t.id,b),p.info("setNode",b)})},q=function(s,o,f,n){p.info(s),s.forEach(function(e,i){var l,r;const t=e,y="",c={labelStyle:"",style:""},m=t.text,d=0,u="note",b={labelStyle:c.labelStyle,shape:u,labelText:A(m),noteData:t,rx:d,ry:d,class:y,style:c.style,id:t.id,domId:t.id,tooltip:"",type:"note",padding:((l=a().flowchart)==null?void 0:l.padding)??((r=a().class)==null?void 0:r.padding)};if(o.setNode(t.id,b),p.info("setNode",b),!t.class||!(t.class in n))return;const v=f+i,g={id:`edgeNote${v}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:C(S.curve,D)};o.setEdge(t.id,t.class,g,v)})},F=function(s,o){const f=a().flowchart;let n=0;s.forEach(function(e){var i;n++;const l={classes:"relation",pattern:e.relation.lineType==1?"dashed":"solid",id:"id"+n,arrowhead:e.type==="arrow_open"?"none":"normal",startLabelRight:e.relationTitle1==="none"?"":e.relationTitle1,endLabelLeft:e.relationTitle2==="none"?"":e.relationTitle2,arrowTypeStart:L(e.relation.type1),arrowTypeEnd:L(e.relation.type2),style:"fill:none",labelStyle:"",curve:C(f==null?void 0:f.curve,D)};if(p.info(l,e),e.style!==void 0){const r=G(e.style);l.style=r.style,l.labelStyle=r.labelStyle}e.text=e.title,e.text===void 0?e.style!==void 0&&(l.arrowheadStyle="fill: #333"):(l.arrowheadStyle="fill: #333",l.labelpos="c",((i=a().flowchart)==null?void 0:i.htmlLabels)??a().htmlLabels?(l.labelType="html",l.label='<span class="edgeLabel">'+e.text+"</span>"):(l.labelType="text",l.label=e.text.replace(E.lineBreakRegex,`
`),e.style===void 0&&(l.style=l.style||"stroke: #333; stroke-width: 1.5px;fill:none"),l.labelStyle=l.labelStyle.replace("color:","fill:"))),o.setEdge(e.id1,e.id2,l,n)})},H=function(s){S={...S,...s}},P=function(s,o,f,n){p.info("Drawing class - ",o);const e=a().flowchart??a().class,i=a().securityLevel;p.info("config:",e);const l=(e==null?void 0:e.nodeSpacing)??50,r=(e==null?void 0:e.rankSpacing)??50,t=new I({multigraph:!0,compound:!0}).setGraph({rankdir:n.db.getDirection(),nodesep:l,ranksep:r,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),y=n.db.getClasses(),c=n.db.getRelations(),m=n.db.getNotes();p.info(c),z(y,t,o,n),F(c,t),q(m,t,c.length+1,y);let d;i==="sandbox"&&(d=w("#i"+o));const u=i==="sandbox"?w(d.nodes()[0].contentDocument.body):w("body"),b=u.select(`[id="${o}"]`),v=u.select("#"+o+" g");if($(v,t,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",o),R.insertTitle(b,"classTitleText",(e==null?void 0:e.titleTopMargin)??5,n.db.getDiagramTitle()),B(t,b,e==null?void 0:e.diagramPadding,e==null?void 0:e.useMaxWidth),!(e!=null&&e.htmlLabels)){const g=i==="sandbox"?d.nodes()[0].contentDocument:document,N=g.querySelectorAll('[id="'+o+'"] .edgeLabel .label');for(const x of N){const k=x.getBBox(),h=g.createElementNS("http://www.w3.org/2000/svg","rect");h.setAttribute("rx",0),h.setAttribute("ry",0),h.setAttribute("width",k.width),h.setAttribute("height",k.height),x.insertBefore(h,x.firstChild)}}};function L(s){let o;switch(s){case 0:o="aggregation";break;case 1:o="extension";break;case 2:o="composition";break;case 3:o="dependency";break;case 4:o="lollipop";break;default:o="none"}return o}const V={setConf:H,draw:P},le={parser:_,db:T,renderer:V,styles:M,init:s=>{s.class||(s.class={}),s.class.arrowMarkerAbsolute=s.arrowMarkerAbsolute,T.clear()}};export{le as diagram};

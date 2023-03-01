import{y as S,T as M,S as W}from"./styles-e9bde71f-e33ca61b.js";import{t as $,e as d,n as l,$ as v}from"./mermaid.esm.min-7c700a60.js";import{A as H,a as X}from"./layout-10a68736-a6ce0fa3.js";import{F as k}from"./svgDraw-c2c52520-03683e01.js";import"./app-ff76b035.js";import"./framework-52f8fb67.js";import"./isPlainObject-bb374f45-c054fbd1.js";import"./array-2ff2c7a6-ffeda358.js";import"./constant-2fe7eae5-45b4460e.js";let h={};const g=20,p=function(e){const o=Object.entries(h).find(u=>u[1].label===e);if(o)return o[0]},Y=function(e){e.append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),e.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),e.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},Z=function(e,o,u,a){const f=$().class;h={},d.info("Rendering diagram "+e);const L=$().securityLevel;let b;L==="sandbox"&&(b=l("#i"+o));const y=L==="sandbox"?l(b.nodes()[0].contentDocument.body):l("body"),n=y.select(`[id='${o}']`);Y(n);const r=new H({multigraph:!0});r.setGraph({isMultiGraph:!0}),r.setDefaultEdgeLabel(function(){return{}});const m=a.db.getClasses(),N=Object.keys(m);for(const t of N){const i=m[t],s=k.drawClass(n,i,f,a);h[s.id]=s,r.setNode(s.id,s),d.info("Org height: "+s.height)}a.db.getRelations().forEach(function(t){d.info("tjoho"+p(t.id1)+p(t.id2)+JSON.stringify(t)),r.setEdge(p(t.id1),p(t.id2),{relation:t},t.title||"DEFAULT")}),a.db.getNotes().forEach(function(t){d.debug(`Adding note: ${JSON.stringify(t)}`);const i=k.drawNote(n,t,f,a);h[i.id]=i,r.setNode(i.id,i),t.class&&t.class in m&&r.setEdge(t.id,p(t.class),{relation:{id1:t.id,id2:t.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")}),X(r),r.nodes().forEach(function(t){t!==void 0&&r.node(t)!==void 0&&(d.debug("Node "+t+": "+JSON.stringify(r.node(t))),y.select("#"+(a.db.lookUpDomId(t)||t)).attr("transform","translate("+(r.node(t).x-r.node(t).width/2)+","+(r.node(t).y-r.node(t).height/2)+" )"))}),r.edges().forEach(function(t){t!==void 0&&r.edge(t)!==void 0&&(d.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(r.edge(t))),k.drawEdge(n,r.edge(t),r.edge(t).relation,f,a))});const c=n.node().getBBox(),x=c.width+g*2,E=c.height+g*2;v(n,E,x,f.useMaxWidth);const w=`${c.x-g} ${c.y-g} ${x} ${E}`;d.debug(`viewBox ${w}`),n.attr("viewBox",w)},O={draw:Z},G={parser:S,db:M,renderer:O,styles:W,init:e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,M.clear()}};export{G as diagram};

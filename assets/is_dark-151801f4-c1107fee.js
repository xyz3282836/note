import{aI as s,aJ as a}from"./mermaid.esm.min-fa616a2d.js";const c=n=>{const{r,g:e,b:o}=s.parse(n),t=.2126*a.channel.toLinear(r)+.7152*a.channel.toLinear(e)+.0722*a.channel.toLinear(o);return a.lang.round(t)},i=c,l=n=>i(n)>=.5,L=l,h=n=>!L(n),u=h;export{u as L};
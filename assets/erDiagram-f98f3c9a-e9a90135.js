import{t as P,i as Et,a as Ot,r as bt,l as kt,h as Rt,u as Nt,w as xt,e as J,s as Tt,n as at,j as vt,$ as Mt,a1 as At,a3 as wt}from"./mermaid.esm.min-8b9cd1c5.js";import{A as St,a as $t}from"./layout-10a68736-15c7a8af.js";import{z as Lt}from"./isPlainObject-bb374f45-f7bb01e4.js";import"./app-526cfad7.js";import"./framework-52f8fb67.js";import"./array-2ff2c7a6-ffeda358.js";import"./constant-2fe7eae5-45b4460e.js";var st=function(){var t=function(b,a,s,c){for(s=s||{},c=b.length;c--;s[b[c]]=a);return s},r=[1,2],e=[1,5],n=[6,9,11,23,25,27,29,30,31,51],l=[1,17],p=[1,18],d=[1,19],h=[1,20],y=[1,21],_=[1,22],f=[1,25],g=[1,30],E=[1,31],u=[1,32],S=[1,33],U=[6,9,11,15,20,23,25,27,29,30,31,44,45,46,47,51],z=[1,45],W=[30,31,48,49],D=[4,6,9,11,23,25,27,29,30,31,51],N=[44,45,46,47],x=[22,37],T=[1,65],O=[1,64],$=[22,37,39,41],I={trace:function(){},yy:{},symbols_:{error:2,start:3,ER_DIAGRAM:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,entityName:17,relSpec:18,role:19,BLOCK_START:20,attributes:21,BLOCK_STOP:22,title:23,title_value:24,acc_title:25,acc_title_value:26,acc_descr:27,acc_descr_value:28,acc_descr_multiline_value:29,ALPHANUM:30,ENTITY_NAME:31,attribute:32,attributeType:33,attributeName:34,attributeKeyTypeList:35,attributeComment:36,ATTRIBUTE_WORD:37,attributeKeyType:38,COMMA:39,ATTRIBUTE_KEY:40,COMMENT:41,cardinality:42,relType:43,ZERO_OR_ONE:44,ZERO_OR_MORE:45,ONE_OR_MORE:46,ONLY_ONE:47,NON_IDENTIFYING:48,IDENTIFYING:49,WORD:50,open_directive:51,type_directive:52,arg_directive:53,close_directive:54,$accept:0,$end:1},terminals_:{2:"error",4:"ER_DIAGRAM",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",20:"BLOCK_START",22:"BLOCK_STOP",23:"title",24:"title_value",25:"acc_title",26:"acc_title_value",27:"acc_descr",28:"acc_descr_value",29:"acc_descr_multiline_value",30:"ALPHANUM",31:"ENTITY_NAME",37:"ATTRIBUTE_WORD",39:"COMMA",40:"ATTRIBUTE_KEY",41:"COMMENT",44:"ZERO_OR_ONE",45:"ZERO_OR_MORE",46:"ONE_OR_MORE",47:"ONLY_ONE",48:"NON_IDENTIFYING",49:"IDENTIFYING",50:"WORD",51:"open_directive",52:"type_directive",53:"arg_directive",54:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,5],[10,4],[10,3],[10,1],[10,2],[10,2],[10,2],[10,1],[17,1],[17,1],[21,1],[21,2],[32,2],[32,3],[32,3],[32,4],[33,1],[34,1],[35,1],[35,3],[38,1],[36,1],[18,3],[42,1],[42,1],[42,1],[42,1],[43,1],[43,1],[19,1],[19,1],[19,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(b,a,s,c,m,i,M){var o=i.length-1;switch(m){case 1:break;case 3:this.$=[];break;case 4:i[o-1].push(i[o]),this.$=i[o-1];break;case 5:case 6:this.$=i[o];break;case 7:case 8:this.$=[];break;case 12:c.addEntity(i[o-4]),c.addEntity(i[o-2]),c.addRelationship(i[o-4],i[o],i[o-2],i[o-3]);break;case 13:c.addEntity(i[o-3]),c.addAttributes(i[o-3],i[o-1]);break;case 14:c.addEntity(i[o-2]);break;case 15:c.addEntity(i[o]);break;case 16:case 17:this.$=i[o].trim(),c.setAccTitle(this.$);break;case 18:case 19:this.$=i[o].trim(),c.setAccDescription(this.$);break;case 20:case 43:this.$=i[o];break;case 21:case 41:case 42:this.$=i[o].replace(/"/g,"");break;case 22:case 30:this.$=[i[o]];break;case 23:i[o].push(i[o-1]),this.$=i[o];break;case 24:this.$={attributeType:i[o-1],attributeName:i[o]};break;case 25:this.$={attributeType:i[o-2],attributeName:i[o-1],attributeKeyTypeList:i[o]};break;case 26:this.$={attributeType:i[o-2],attributeName:i[o-1],attributeComment:i[o]};break;case 27:this.$={attributeType:i[o-3],attributeName:i[o-2],attributeKeyTypeList:i[o-1],attributeComment:i[o]};break;case 28:case 29:case 32:this.$=i[o];break;case 31:i[o-2].push(i[o]),this.$=i[o-2];break;case 33:this.$=i[o].replace(/"/g,"");break;case 34:this.$={cardA:i[o],relType:i[o-1],cardB:i[o-2]};break;case 35:this.$=c.Cardinality.ZERO_OR_ONE;break;case 36:this.$=c.Cardinality.ZERO_OR_MORE;break;case 37:this.$=c.Cardinality.ONE_OR_MORE;break;case 38:this.$=c.Cardinality.ONLY_ONE;break;case 39:this.$=c.Identification.NON_IDENTIFYING;break;case 40:this.$=c.Identification.IDENTIFYING;break;case 44:c.parseDirective("%%{","open_directive");break;case 45:c.parseDirective(i[o],"type_directive");break;case 46:i[o]=i[o].trim().replace(/'/g,'"'),c.parseDirective(i[o],"arg_directive");break;case 47:c.parseDirective("}%%","close_directive","er");break}},table:[{3:1,4:r,7:3,12:4,51:e},{1:[3]},t(n,[2,3],{5:6}),{3:7,4:r,7:3,12:4,51:e},{13:8,52:[1,9]},{52:[2,44]},{6:[1,10],7:15,8:11,9:[1,12],10:13,11:[1,14],12:4,17:16,23:l,25:p,27:d,29:h,30:y,31:_,51:e},{1:[2,2]},{14:23,15:[1,24],54:f},t([15,54],[2,45]),t(n,[2,8],{1:[2,1]}),t(n,[2,4]),{7:15,10:26,12:4,17:16,23:l,25:p,27:d,29:h,30:y,31:_,51:e},t(n,[2,6]),t(n,[2,7]),t(n,[2,11]),t(n,[2,15],{18:27,42:29,20:[1,28],44:g,45:E,46:u,47:S}),{24:[1,34]},{26:[1,35]},{28:[1,36]},t(n,[2,19]),t(U,[2,20]),t(U,[2,21]),{11:[1,37]},{16:38,53:[1,39]},{11:[2,47]},t(n,[2,5]),{17:40,30:y,31:_},{21:41,22:[1,42],32:43,33:44,37:z},{43:46,48:[1,47],49:[1,48]},t(W,[2,35]),t(W,[2,36]),t(W,[2,37]),t(W,[2,38]),t(n,[2,16]),t(n,[2,17]),t(n,[2,18]),t(D,[2,9]),{14:49,54:f},{54:[2,46]},{15:[1,50]},{22:[1,51]},t(n,[2,14]),{21:52,22:[2,22],32:43,33:44,37:z},{34:53,37:[1,54]},{37:[2,28]},{42:55,44:g,45:E,46:u,47:S},t(N,[2,39]),t(N,[2,40]),{11:[1,56]},{19:57,30:[1,60],31:[1,59],50:[1,58]},t(n,[2,13]),{22:[2,23]},t(x,[2,24],{35:61,36:62,38:63,40:T,41:O}),t([22,37,40,41],[2,29]),t([30,31],[2,34]),t(D,[2,10]),t(n,[2,12]),t(n,[2,41]),t(n,[2,42]),t(n,[2,43]),t(x,[2,25],{36:66,39:[1,67],41:O}),t(x,[2,26]),t($,[2,30]),t(x,[2,33]),t($,[2,32]),t(x,[2,27]),{38:68,40:T},t($,[2,31])],defaultActions:{5:[2,44],7:[2,2],25:[2,47],39:[2,46],45:[2,28],52:[2,23]},parseError:function(b,a){if(a.recoverable)this.trace(b);else{var s=new Error(b);throw s.hash=a,s}},parse:function(b){var a=this,s=[0],c=[],m=[null],i=[],M=this.table,o="",H=0,ct=0,_t=2,lt=1,ft=i.slice.call(arguments,1),R=Object.create(this.lexer),G={yy:{}};for(var tt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,tt)&&(G.yy[tt]=this.yy[tt]);R.setInput(b,G.yy),G.yy.lexer=R,G.yy.parser=this,typeof R.yylloc>"u"&&(R.yylloc={});var et=R.yylloc;i.push(et);var mt=R.options&&R.options.ranges;typeof G.yy.parseError=="function"?this.parseError=G.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function gt(){var Y;return Y=c.pop()||R.lex()||lt,typeof Y!="number"&&(Y instanceof Array&&(c=Y,Y=c.pop()),Y=a.symbols_[Y]||Y),Y}for(var A,j,w,rt,K={},V,C,ht,q;;){if(j=s[s.length-1],this.defaultActions[j]?w=this.defaultActions[j]:((A===null||typeof A>"u")&&(A=gt()),w=M[j]&&M[j][A]),typeof w>"u"||!w.length||!w[0]){var it="";q=[];for(V in M[j])this.terminals_[V]&&V>_t&&q.push("'"+this.terminals_[V]+"'");R.showPosition?it="Parse error on line "+(H+1)+`:
`+R.showPosition()+`
Expecting `+q.join(", ")+", got '"+(this.terminals_[A]||A)+"'":it="Parse error on line "+(H+1)+": Unexpected "+(A==lt?"end of input":"'"+(this.terminals_[A]||A)+"'"),this.parseError(it,{text:R.match,token:this.terminals_[A]||A,line:R.yylineno,loc:et,expected:q})}if(w[0]instanceof Array&&w.length>1)throw new Error("Parse Error: multiple actions possible at state: "+j+", token: "+A);switch(w[0]){case 1:s.push(A),m.push(R.yytext),i.push(R.yylloc),s.push(w[1]),A=null,ct=R.yyleng,o=R.yytext,H=R.yylineno,et=R.yylloc;break;case 2:if(C=this.productions_[w[1]][1],K.$=m[m.length-C],K._$={first_line:i[i.length-(C||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(C||1)].first_column,last_column:i[i.length-1].last_column},mt&&(K._$.range=[i[i.length-(C||1)].range[0],i[i.length-1].range[1]]),rt=this.performAction.apply(K,[o,ct,H,G.yy,w[1],m,i].concat(ft)),typeof rt<"u")return rt;C&&(s=s.slice(0,-1*C*2),m=m.slice(0,-1*C),i=i.slice(0,-1*C)),s.push(this.productions_[w[1]][0]),m.push(K.$),i.push(K._$),ht=M[s[s.length-2]][s[s.length-1]],s.push(ht);break;case 3:return!0}}return!0}},L=function(){var b={EOF:1,parseError:function(a,s){if(this.yy.parser)this.yy.parser.parseError(a,s);else throw new Error(a)},setInput:function(a,s){return this.yy=s||this.yy||{},this._input=a,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var s=a.match(/(?:\r\n?|\n).*/g);return s?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var s=a.length,c=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s),this.offset-=s;var m=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===m.length?this.yylloc.first_column:0)+m[m.length-c.length].length-c[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-s]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),s=new Array(a.length+1).join("-");return a+this.upcomingInput()+`
`+s+"^"},test_match:function(a,s){var c,m,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),m=a[0].match(/(?:\r\n?|\n).*/g),m&&(this.yylineno+=m.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:m?m[m.length-1].length-m[m.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],c=this.performAction.call(this,this.yy,this,s,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),c)return c;if(this._backtrack){for(var M in i)this[M]=i[M];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,s,c,m;this._more||(this.yytext="",this.match="");for(var i=this._currentRules(),M=0;M<i.length;M++)if(c=this._input.match(this.rules[i[M]]),c&&(!s||c[0].length>s[0].length)){if(s=c,m=M,this.options.backtrack_lexer){if(a=this.test_match(c,i[M]),a!==!1)return a;if(this._backtrack){s=!1;continue}else return!1}else if(!this.options.flex)break}return s?(a=this.test_match(s,i[m]),a!==!1?a:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return a||this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},pushState:function(a){this.begin(a)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(a,s,c,m){switch(c){case 0:return this.begin("acc_title"),25;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),27;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return this.begin("open_directive"),51;case 8:return this.begin("type_directive"),52;case 9:return this.popState(),this.begin("arg_directive"),15;case 10:return this.popState(),this.popState(),54;case 11:return 53;case 12:break;case 13:break;case 14:return 11;case 15:break;case 16:return 9;case 17:return 31;case 18:return 50;case 19:return 4;case 20:return this.begin("block"),20;case 21:return 39;case 22:break;case 23:return 40;case 24:return 37;case 25:return 37;case 26:return 41;case 27:break;case 28:break;case 29:break;case 30:return this.popState(),22;case 31:return s.yytext[0];case 32:return 44;case 33:return 46;case 34:return 46;case 35:return 46;case 36:return 44;case 37:return 44;case 38:return 45;case 39:return 45;case 40:return 45;case 41:return 45;case 42:return 45;case 43:return 46;case 44:return 45;case 45:return 46;case 46:return 47;case 47:return 47;case 48:return 47;case 49:return 47;case 50:return 44;case 51:return 45;case 52:return 46;case 53:return 48;case 54:return 49;case 55:return 49;case 56:return 48;case 57:return 48;case 58:return 48;case 59:return 30;case 60:return s.yytext[0];case 61:return 6}},rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:[\s]+)/i,/^(?:"[^"%\r\n\v\b\\]+")/i,/^(?:"[^"]*")/i,/^(?:erDiagram\b)/i,/^(?:\{)/i,/^(?:,)/i,/^(?:\s+)/i,/^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i,/^(?:(.*?)[~](.*?)*[~])/i,/^(?:[A-Za-z_][A-Za-z0-9\-_\[\]\(\)]*)/i,/^(?:"[^"]*")/i,/^(?:[\n]+)/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:\})/i,/^(?:.)/i,/^(?:one or zero\b)/i,/^(?:one or more\b)/i,/^(?:one or many\b)/i,/^(?:1\+)/i,/^(?:\|o\b)/i,/^(?:zero or one\b)/i,/^(?:zero or more\b)/i,/^(?:zero or many\b)/i,/^(?:0\+)/i,/^(?:\}o\b)/i,/^(?:many\(0\))/i,/^(?:many\(1\))/i,/^(?:many\b)/i,/^(?:\}\|)/i,/^(?:one\b)/i,/^(?:only one\b)/i,/^(?:1\b)/i,/^(?:\|\|)/i,/^(?:o\|)/i,/^(?:o\{)/i,/^(?:\|\{)/i,/^(?:\.\.)/i,/^(?:--)/i,/^(?:to\b)/i,/^(?:optionally to\b)/i,/^(?:\.-)/i,/^(?:-\.)/i,/^(?:[A-Za-z][A-Za-z0-9\-_]*)/i,/^(?:.)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},open_directive:{rules:[8],inclusive:!1},type_directive:{rules:[9,10],inclusive:!1},arg_directive:{rules:[10,11],inclusive:!1},block:{rules:[21,22,23,24,25,26,27,28,29,30,31],inclusive:!1},INITIAL:{rules:[0,2,4,7,12,13,14,15,16,17,18,19,20,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61],inclusive:!0}}};return b}();I.lexer=L;function B(){this.yy={}}return B.prototype=I,I.Parser=B,new B}();st.parser=st;const Dt=st;let X={},ot=[];const It={ZERO_OR_ONE:"ZERO_OR_ONE",ZERO_OR_MORE:"ZERO_OR_MORE",ONE_OR_MORE:"ONE_OR_MORE",ONLY_ONE:"ONLY_ONE"},Bt={NON_IDENTIFYING:"NON_IDENTIFYING",IDENTIFYING:"IDENTIFYING"},Ct=function(t,r,e){xt.parseDirective(this,t,r,e)},ut=function(t){return X[t]===void 0&&(X[t]={attributes:[]},J.info("Added new entity :",t)),X[t]},Yt=()=>X,Ft=function(t,r){let e=ut(t),n;for(n=r.length-1;n>=0;n--)e.attributes.push(r[n]),J.debug("Added attribute ",r[n].attributeName)},Zt=function(t,r,e,n){let l={entityA:t,roleA:r,entityB:e,relSpec:n};ot.push(l),J.debug("Added new relationship :",l)},Pt=()=>ot,zt=function(){X={},ot=[],Tt()},Ut={Cardinality:It,Identification:Bt,parseDirective:Ct,getConfig:()=>P().er,addEntity:ut,addAttributes:Ft,getEntities:Yt,addRelationship:Zt,getRelationships:Pt,clear:zt,setAccTitle:Et,getAccTitle:Ot,setAccDescription:bt,getAccDescription:kt,setDiagramTitle:Rt,getDiagramTitle:Nt},F={ONLY_ONE_START:"ONLY_ONE_START",ONLY_ONE_END:"ONLY_ONE_END",ZERO_OR_ONE_START:"ZERO_OR_ONE_START",ZERO_OR_ONE_END:"ZERO_OR_ONE_END",ONE_OR_MORE_START:"ONE_OR_MORE_START",ONE_OR_MORE_END:"ONE_OR_MORE_END",ZERO_OR_MORE_START:"ZERO_OR_MORE_START",ZERO_OR_MORE_END:"ZERO_OR_MORE_END"},Wt=function(t,r){let e;t.append("defs").append("marker").attr("id",F.ONLY_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M9,0 L9,18 M15,0 L15,18"),t.append("defs").append("marker").attr("id",F.ONLY_ONE_END).attr("refX",18).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M3,0 L3,18 M9,0 L9,18"),e=t.append("defs").append("marker").attr("id",F.ZERO_OR_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),e.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",21).attr("cy",9).attr("r",6),e.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M9,0 L9,18"),e=t.append("defs").append("marker").attr("id",F.ZERO_OR_ONE_END).attr("refX",30).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),e.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",9).attr("cy",9).attr("r",6),e.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M21,0 L21,18"),t.append("defs").append("marker").attr("id",F.ONE_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"),t.append("defs").append("marker").attr("id",F.ONE_OR_MORE_END).attr("refX",27).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18"),e=t.append("defs").append("marker").attr("id",F.ZERO_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),e.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",48).attr("cy",18).attr("r",6),e.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M0,18 Q18,0 36,18 Q18,36 0,18"),e=t.append("defs").append("marker").attr("id",F.ZERO_OR_MORE_END).attr("refX",39).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),e.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",9).attr("cy",18).attr("r",6),e.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M21,18 Q39,0 57,18 Q39,36 21,18")},Z={ERMarkers:F,insertMarkers:Wt},Gt=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function jt(t){return typeof t=="string"&&Gt.test(t)}const v=[];for(let t=0;t<256;++t)v.push((t+256).toString(16).slice(1));function Kt(t,r=0){return(v[t[r+0]]+v[t[r+1]]+v[t[r+2]]+v[t[r+3]]+"-"+v[t[r+4]]+v[t[r+5]]+"-"+v[t[r+6]]+v[t[r+7]]+"-"+v[t[r+8]]+v[t[r+9]]+"-"+v[t[r+10]]+v[t[r+11]]+v[t[r+12]]+v[t[r+13]]+v[t[r+14]]+v[t[r+15]]).toLowerCase()}function Xt(t){if(!jt(t))throw TypeError("Invalid UUID");let r;const e=new Uint8Array(16);return e[0]=(r=parseInt(t.slice(0,8),16))>>>24,e[1]=r>>>16&255,e[2]=r>>>8&255,e[3]=r&255,e[4]=(r=parseInt(t.slice(9,13),16))>>>8,e[5]=r&255,e[6]=(r=parseInt(t.slice(14,18),16))>>>8,e[7]=r&255,e[8]=(r=parseInt(t.slice(19,23),16))>>>8,e[9]=r&255,e[10]=(r=parseInt(t.slice(24,36),16))/1099511627776&255,e[11]=r/4294967296&255,e[12]=r>>>24&255,e[13]=r>>>16&255,e[14]=r>>>8&255,e[15]=r&255,e}function Qt(t){t=unescape(encodeURIComponent(t));const r=[];for(let e=0;e<t.length;++e)r.push(t.charCodeAt(e));return r}const Ht="6ba7b810-9dad-11d1-80b4-00c04fd430c8",Vt="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function qt(t,r,e){function n(l,p,d,h){var y;if(typeof l=="string"&&(l=Qt(l)),typeof p=="string"&&(p=Xt(p)),((y=p)===null||y===void 0?void 0:y.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let _=new Uint8Array(16+l.length);if(_.set(p),_.set(l,p.length),_=e(_),_[6]=_[6]&15|r,_[8]=_[8]&63|128,d){h=h||0;for(let f=0;f<16;++f)d[h+f]=_[f];return d}return Kt(_)}try{n.name=t}catch{}return n.DNS=Ht,n.URL=Vt,n}function Jt(t,r,e,n){switch(t){case 0:return r&e^~r&n;case 1:return r^e^n;case 2:return r&e^r&n^e&n;case 3:return r^e^n}}function nt(t,r){return t<<r|t>>>32-r}function te(t){const r=[1518500249,1859775393,2400959708,3395469782],e=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof t=="string"){const d=unescape(encodeURIComponent(t));t=[];for(let h=0;h<d.length;++h)t.push(d.charCodeAt(h))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);const n=t.length/4+2,l=Math.ceil(n/16),p=new Array(l);for(let d=0;d<l;++d){const h=new Uint32Array(16);for(let y=0;y<16;++y)h[y]=t[d*64+y*4]<<24|t[d*64+y*4+1]<<16|t[d*64+y*4+2]<<8|t[d*64+y*4+3];p[d]=h}p[l-1][14]=(t.length-1)*8/Math.pow(2,32),p[l-1][14]=Math.floor(p[l-1][14]),p[l-1][15]=(t.length-1)*8&4294967295;for(let d=0;d<l;++d){const h=new Uint32Array(80);for(let u=0;u<16;++u)h[u]=p[d][u];for(let u=16;u<80;++u)h[u]=nt(h[u-3]^h[u-8]^h[u-14]^h[u-16],1);let y=e[0],_=e[1],f=e[2],g=e[3],E=e[4];for(let u=0;u<80;++u){const S=Math.floor(u/20),U=nt(y,5)+Jt(S,_,f,g)+E+r[S]+h[u]>>>0;E=g,g=f,f=nt(_,30)>>>0,_=y,y=U}e[0]=e[0]+y>>>0,e[1]=e[1]+_>>>0,e[2]=e[2]+f>>>0,e[3]=e[3]+g>>>0,e[4]=e[4]+E>>>0}return[e[0]>>24&255,e[0]>>16&255,e[0]>>8&255,e[0]&255,e[1]>>24&255,e[1]>>16&255,e[1]>>8&255,e[1]&255,e[2]>>24&255,e[2]>>16&255,e[2]>>8&255,e[2]&255,e[3]>>24&255,e[3]>>16&255,e[3]>>8&255,e[3]&255,e[4]>>24&255,e[4]>>16&255,e[4]>>8&255,e[4]&255]}const ee=qt("v5",80,te),re=ee,ie=/[^\dA-Za-z](\W)*/g;let k={},Q=new Map;const ae=function(t){const r=Object.keys(t);for(const e of r)k[e]=t[e]},ne=(t,r,e)=>{const n=k.entityPadding/3,l=k.entityPadding/3,p=k.fontSize*.85,d=r.node().getBBox(),h=[];let y=!1,_=!1,f=0,g=0,E=0,u=0,S=d.height+n*2,U=1;e.forEach(N=>{N.attributeKeyTypeList!==void 0&&N.attributeKeyTypeList.length>0&&(y=!0),N.attributeComment!==void 0&&(_=!0)}),e.forEach(N=>{const x=`${r.node().id}-attr-${U}`;let T=0;const O=wt(N.attributeType),$=t.append("text").classed("er entityLabel",!0).attr("id",`${x}-type`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",P().fontFamily).style("font-size",p+"px").text(O),I=t.append("text").classed("er entityLabel",!0).attr("id",`${x}-name`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",P().fontFamily).style("font-size",p+"px").text(N.attributeName),L={};L.tn=$,L.nn=I;const B=$.node().getBBox(),b=I.node().getBBox();if(f=Math.max(f,B.width),g=Math.max(g,b.width),T=Math.max(B.height,b.height),y){const a=N.attributeKeyTypeList!==void 0?N.attributeKeyTypeList.join(","):"",s=t.append("text").classed("er entityLabel",!0).attr("id",`${x}-key`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",P().fontFamily).style("font-size",p+"px").text(a);L.kn=s;const c=s.node().getBBox();E=Math.max(E,c.width),T=Math.max(T,c.height)}if(_){const a=t.append("text").classed("er entityLabel",!0).attr("id",`${x}-comment`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",P().fontFamily).style("font-size",p+"px").text(N.attributeComment||"");L.cn=a;const s=a.node().getBBox();u=Math.max(u,s.width),T=Math.max(T,s.height)}L.height=T,h.push(L),S+=T+n*2,U+=1});let z=4;y&&(z+=2),_&&(z+=2);const W=f+g+E+u,D={width:Math.max(k.minEntityWidth,Math.max(d.width+k.entityPadding*2,W+l*z)),height:e.length>0?S:Math.max(k.minEntityHeight,d.height+k.entityPadding*2)};if(e.length>0){const N=Math.max(0,(D.width-W-l*z)/(z/2));r.attr("transform","translate("+D.width/2+","+(n+d.height/2)+")");let x=d.height+n*2,T="attributeBoxOdd";h.forEach(O=>{const $=x+n+O.height/2;O.tn.attr("transform","translate("+l+","+$+")");const I=t.insert("rect","#"+O.tn.node().id).classed(`er ${T}`,!0).attr("x",0).attr("y",x).attr("width",f+l*2+N).attr("height",O.height+n*2),L=parseFloat(I.attr("x"))+parseFloat(I.attr("width"));O.nn.attr("transform","translate("+(L+l)+","+$+")");const B=t.insert("rect","#"+O.nn.node().id).classed(`er ${T}`,!0).attr("x",L).attr("y",x).attr("width",g+l*2+N).attr("height",O.height+n*2);let b=parseFloat(B.attr("x"))+parseFloat(B.attr("width"));if(y){O.kn.attr("transform","translate("+(b+l)+","+$+")");const a=t.insert("rect","#"+O.kn.node().id).classed(`er ${T}`,!0).attr("x",b).attr("y",x).attr("width",E+l*2+N).attr("height",O.height+n*2);b=parseFloat(a.attr("x"))+parseFloat(a.attr("width"))}_&&(O.cn.attr("transform","translate("+(b+l)+","+$+")"),t.insert("rect","#"+O.cn.node().id).classed(`er ${T}`,"true").attr("x",b).attr("y",x).attr("width",u+l*2+N).attr("height",O.height+n*2)),x+=O.height+n*2,T=T==="attributeBoxOdd"?"attributeBoxEven":"attributeBoxOdd"})}else D.height=Math.max(k.minEntityHeight,S),r.attr("transform","translate("+D.width/2+","+D.height/2+")");return D},se=function(t,r,e){const n=Object.keys(r);let l;return n.forEach(function(p){const d=ye(p,"entity");Q.set(p,d);const h=t.append("g").attr("id",d);l=l===void 0?d:l;const y="text-"+d,_=h.append("text").classed("er entityLabel",!0).attr("id",y).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","middle").style("font-family",P().fontFamily).style("font-size",k.fontSize+"px").text(p),{width:f,height:g}=ne(h,_,r[p].attributes),E=h.insert("rect","#"+y).classed("er entityBox",!0).attr("x",0).attr("y",0).attr("width",f).attr("height",g).node().getBBox();e.setNode(d,{width:E.width,height:E.height,shape:"rect",id:d})}),l},oe=function(t,r){r.nodes().forEach(function(e){e!==void 0&&r.node(e)!==void 0&&t.select("#"+e).attr("transform","translate("+(r.node(e).x-r.node(e).width/2)+","+(r.node(e).y-r.node(e).height/2)+" )")})},pt=function(t){return(t.entityA+t.roleA+t.entityB).replace(/\s/g,"")},ce=function(t,r){return t.forEach(function(e){r.setEdge(Q.get(e.entityA),Q.get(e.entityB),{relationship:e},pt(e))}),t};let dt=0;const le=function(t,r,e,n,l){dt++;const p=e.edge(Q.get(r.entityA),Q.get(r.entityB),pt(r)),d=Lt().x(function(u){return u.x}).y(function(u){return u.y}).curve(At),h=t.insert("path","#"+n).classed("er relationshipLine",!0).attr("d",d(p.points)).style("stroke",k.stroke).style("fill","none");r.relSpec.relType===l.db.Identification.NON_IDENTIFYING&&h.attr("stroke-dasharray","8,8");let y="";switch(k.arrowMarkerAbsolute&&(y=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,y=y.replace(/\(/g,"\\("),y=y.replace(/\)/g,"\\)")),r.relSpec.cardA){case l.db.Cardinality.ZERO_OR_ONE:h.attr("marker-end","url("+y+"#"+Z.ERMarkers.ZERO_OR_ONE_END+")");break;case l.db.Cardinality.ZERO_OR_MORE:h.attr("marker-end","url("+y+"#"+Z.ERMarkers.ZERO_OR_MORE_END+")");break;case l.db.Cardinality.ONE_OR_MORE:h.attr("marker-end","url("+y+"#"+Z.ERMarkers.ONE_OR_MORE_END+")");break;case l.db.Cardinality.ONLY_ONE:h.attr("marker-end","url("+y+"#"+Z.ERMarkers.ONLY_ONE_END+")");break}switch(r.relSpec.cardB){case l.db.Cardinality.ZERO_OR_ONE:h.attr("marker-start","url("+y+"#"+Z.ERMarkers.ZERO_OR_ONE_START+")");break;case l.db.Cardinality.ZERO_OR_MORE:h.attr("marker-start","url("+y+"#"+Z.ERMarkers.ZERO_OR_MORE_START+")");break;case l.db.Cardinality.ONE_OR_MORE:h.attr("marker-start","url("+y+"#"+Z.ERMarkers.ONE_OR_MORE_START+")");break;case l.db.Cardinality.ONLY_ONE:h.attr("marker-start","url("+y+"#"+Z.ERMarkers.ONLY_ONE_START+")");break}const _=h.node().getTotalLength(),f=h.node().getPointAtLength(_*.5),g="rel"+dt,E=t.append("text").classed("er relationshipLabel",!0).attr("id",g).attr("x",f.x).attr("y",f.y).style("text-anchor","middle").style("dominant-baseline","middle").style("font-family",P().fontFamily).style("font-size",k.fontSize+"px").text(r.roleA).node().getBBox();t.insert("rect","#"+g).classed("er relationshipLabelBox",!0).attr("x",f.x-E.width/2).attr("y",f.y-E.height/2).attr("width",E.width).attr("height",E.height)},he=function(t,r,e,n){k=P().er,J.info("Drawing ER diagram");const l=P().securityLevel;let p;l==="sandbox"&&(p=at("#i"+r));const d=(l==="sandbox"?at(p.nodes()[0].contentDocument.body):at("body")).select(`[id='${r}']`);Z.insertMarkers(d,k);let h;h=new St({multigraph:!0,directed:!0,compound:!1}).setGraph({rankdir:k.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel(function(){return{}});const y=se(d,n.db.getEntities(),h),_=ce(n.db.getRelationships(),h);$t(h),oe(d,h),_.forEach(function(S){le(d,S,h,y,n)});const f=k.diagramPadding;vt.insertTitle(d,"entityTitleText",k.titleTopMargin,n.db.getDiagramTitle());const g=d.node().getBBox(),E=g.width+f*2,u=g.height+f*2;Mt(d,u,E,k.useMaxWidth),d.attr("viewBox",`${g.x-f} ${g.y-f} ${E} ${u}`)},de="28e9f9db-3c8d-5aa5-9faf-44286ae5937c";function ye(t="",r=""){const e=t.replace(ie,"");return`${yt(r)}${yt(e)}${re(t,de)}`}function yt(t=""){return t.length>0?`${t}-`:""}const ue={setConf:ae,draw:he},pe=t=>`
  .entityBox {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxOdd {
    fill: ${t.attributeBackgroundColorOdd};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxEven {
    fill:  ${t.attributeBackgroundColorEven};
    stroke: ${t.nodeBorder};
  }

  .relationshipLabelBox {
    fill: ${t.tertiaryColor};
    opacity: 0.7;
    background-color: ${t.tertiaryColor};
      rect {
        opacity: 0.5;
      }
  }

    .relationshipLine {
      stroke: ${t.lineColor};
    }

  .entityTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }    
`,_e=pe,Re={parser:Dt,db:Ut,renderer:ue,styles:_e};export{Re as diagram};

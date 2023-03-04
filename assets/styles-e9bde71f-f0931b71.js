import{i as Ye,a as ze,l as Qe,r as je,t as $,h as We,u as qe,w as Xe,s as Je,e as Ve,d as re,j as Oe,n as x}from"./mermaid.esm.min-11f6cee9.js";var ae=function(){var e=function(m,i,r,u){for(r=r||{},u=m.length;u--;r[m[u]]=i);return r},n=[1,3],o=[1,7],c=[1,8],p=[1,9],A=[1,10],f=[1,13],D=[1,12],P=[1,16,25],Ae=[1,20],pe=[1,32],de=[1,33],ye=[1,34],Ee=[1,48],Ce=[1,39],ke=[1,37],ge=[1,38],Fe=[1,44],fe=[1,45],be=[1,40],De=[1,41],me=[1,42],Be=[1,43],y=[1,49],E=[1,50],C=[1,51],F=[1,52],a=[16,25],w=[1,66],G=[1,67],U=[1,68],M=[1,69],K=[1,70],X=[1,71],J=[1,72],_e=[1,82],O=[16,25,28,29,36,49,50,64,65,66,67,68,69,70,75,77],V=[16,25,28,29,34,36,49,50,55,64,65,66,67,68,69,70,75,77,92,93,94,95],Te=[5,8,9,10,11,16,19,23,25],Y=[29,92,93,94,95],I=[29,69,70,92,93,94,95],Se=[29,64,65,66,67,68,92,93,94,95],H=[1,96],Z=[16,25,49,50],z=[16,25,36],ee={trace:function(){},yy:{},symbols_:{error:2,start:3,mermaidDoc:4,statments:5,direction:6,directive:7,direction_tb:8,direction_bt:9,direction_rl:10,direction_lr:11,graphConfig:12,openDirective:13,typeDirective:14,closeDirective:15,NEWLINE:16,":":17,argDirective:18,open_directive:19,type_directive:20,arg_directive:21,close_directive:22,CLASS_DIAGRAM:23,statements:24,EOF:25,statement:26,classLabel:27,SQS:28,STR:29,SQE:30,className:31,alphaNumToken:32,classLiteralName:33,GENERICTYPE:34,relationStatement:35,LABEL:36,classStatement:37,methodStatement:38,annotationStatement:39,clickStatement:40,cssClassStatement:41,noteStatement:42,acc_title:43,acc_title_value:44,acc_descr:45,acc_descr_value:46,acc_descr_multiline_value:47,classIdentifier:48,STYLE_SEPARATOR:49,STRUCT_START:50,members:51,STRUCT_STOP:52,CLASS:53,ANNOTATION_START:54,ANNOTATION_END:55,MEMBER:56,SEPARATOR:57,relation:58,NOTE_FOR:59,noteText:60,NOTE:61,relationType:62,lineType:63,AGGREGATION:64,EXTENSION:65,COMPOSITION:66,DEPENDENCY:67,LOLLIPOP:68,LINE:69,DOTTED_LINE:70,CALLBACK:71,LINK:72,LINK_TARGET:73,CLICK:74,CALLBACK_NAME:75,CALLBACK_ARGS:76,HREF:77,CSSCLASS:78,commentToken:79,textToken:80,graphCodeTokens:81,textNoTagsToken:82,TAGSTART:83,TAGEND:84,"==":85,"--":86,PCT:87,DEFAULT:88,SPACE:89,MINUS:90,keywords:91,UNICODE_TEXT:92,NUM:93,ALPHA:94,BQUOTE_STR:95,$accept:0,$end:1},terminals_:{2:"error",5:"statments",8:"direction_tb",9:"direction_bt",10:"direction_rl",11:"direction_lr",16:"NEWLINE",17:":",19:"open_directive",20:"type_directive",21:"arg_directive",22:"close_directive",23:"CLASS_DIAGRAM",25:"EOF",28:"SQS",29:"STR",30:"SQE",34:"GENERICTYPE",36:"LABEL",43:"acc_title",44:"acc_title_value",45:"acc_descr",46:"acc_descr_value",47:"acc_descr_multiline_value",49:"STYLE_SEPARATOR",50:"STRUCT_START",52:"STRUCT_STOP",53:"CLASS",54:"ANNOTATION_START",55:"ANNOTATION_END",56:"MEMBER",57:"SEPARATOR",59:"NOTE_FOR",61:"NOTE",64:"AGGREGATION",65:"EXTENSION",66:"COMPOSITION",67:"DEPENDENCY",68:"LOLLIPOP",69:"LINE",70:"DOTTED_LINE",71:"CALLBACK",72:"LINK",73:"LINK_TARGET",74:"CLICK",75:"CALLBACK_NAME",76:"CALLBACK_ARGS",77:"HREF",78:"CSSCLASS",81:"graphCodeTokens",83:"TAGSTART",84:"TAGEND",85:"==",86:"--",87:"PCT",88:"DEFAULT",89:"SPACE",90:"MINUS",91:"keywords",92:"UNICODE_TEXT",93:"NUM",94:"ALPHA",95:"BQUOTE_STR"},productions_:[0,[3,1],[3,1],[3,1],[3,2],[6,1],[6,1],[6,1],[6,1],[4,1],[7,4],[7,6],[13,1],[14,1],[18,1],[15,1],[12,4],[24,1],[24,2],[24,3],[27,3],[31,1],[31,1],[31,2],[31,2],[31,2],[26,1],[26,2],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[26,2],[26,2],[26,1],[37,1],[37,3],[37,4],[37,6],[48,2],[48,3],[39,4],[51,1],[51,2],[38,1],[38,2],[38,1],[38,1],[35,3],[35,4],[35,4],[35,5],[42,3],[42,2],[58,3],[58,2],[58,2],[58,1],[62,1],[62,1],[62,1],[62,1],[62,1],[63,1],[63,1],[40,3],[40,4],[40,3],[40,4],[40,4],[40,5],[40,3],[40,4],[40,4],[40,5],[40,3],[40,4],[40,4],[40,5],[41,3],[79,1],[79,1],[80,1],[80,1],[80,1],[80,1],[80,1],[80,1],[80,1],[82,1],[82,1],[82,1],[82,1],[32,1],[32,1],[32,1],[33,1],[60,1]],performAction:function(m,i,r,u,l,t,k){var s=t.length-1;switch(l){case 5:u.setDirection("TB");break;case 6:u.setDirection("BT");break;case 7:u.setDirection("RL");break;case 8:u.setDirection("LR");break;case 12:u.parseDirective("%%{","open_directive");break;case 13:u.parseDirective(t[s],"type_directive");break;case 14:t[s]=t[s].trim().replace(/'/g,'"'),u.parseDirective(t[s],"arg_directive");break;case 15:u.parseDirective("}%%","close_directive","class");break;case 20:this.$=t[s-1];break;case 21:case 22:this.$=t[s];break;case 23:this.$=t[s-1]+t[s];break;case 24:case 25:this.$=t[s-1]+"~"+t[s];break;case 26:u.addRelation(t[s]);break;case 27:t[s-1].title=u.cleanupLabel(t[s]),u.addRelation(t[s-1]);break;case 36:this.$=t[s].trim(),u.setAccTitle(this.$);break;case 37:case 38:this.$=t[s].trim(),u.setAccDescription(this.$);break;case 40:u.setCssClass(t[s-2],t[s]);break;case 41:u.addMembers(t[s-3],t[s-1]);break;case 42:u.setCssClass(t[s-5],t[s-3]),u.addMembers(t[s-5],t[s-1]);break;case 43:this.$=t[s],u.addClass(t[s]);break;case 44:this.$=t[s-1],u.addClass(t[s-1]),u.setClassLabel(t[s-1],t[s]);break;case 45:u.addAnnotation(t[s],t[s-2]);break;case 46:this.$=[t[s]];break;case 47:t[s].push(t[s-1]),this.$=t[s];break;case 48:break;case 49:u.addMember(t[s-1],u.cleanupLabel(t[s]));break;case 50:break;case 51:break;case 52:this.$={id1:t[s-2],id2:t[s],relation:t[s-1],relationTitle1:"none",relationTitle2:"none"};break;case 53:this.$={id1:t[s-3],id2:t[s],relation:t[s-1],relationTitle1:t[s-2],relationTitle2:"none"};break;case 54:this.$={id1:t[s-3],id2:t[s],relation:t[s-2],relationTitle1:"none",relationTitle2:t[s-1]};break;case 55:this.$={id1:t[s-4],id2:t[s],relation:t[s-2],relationTitle1:t[s-3],relationTitle2:t[s-1]};break;case 56:u.addNote(t[s],t[s-1]);break;case 57:u.addNote(t[s]);break;case 58:this.$={type1:t[s-2],type2:t[s],lineType:t[s-1]};break;case 59:this.$={type1:"none",type2:t[s],lineType:t[s-1]};break;case 60:this.$={type1:t[s-1],type2:"none",lineType:t[s]};break;case 61:this.$={type1:"none",type2:"none",lineType:t[s]};break;case 62:this.$=u.relationType.AGGREGATION;break;case 63:this.$=u.relationType.EXTENSION;break;case 64:this.$=u.relationType.COMPOSITION;break;case 65:this.$=u.relationType.DEPENDENCY;break;case 66:this.$=u.relationType.LOLLIPOP;break;case 67:this.$=u.lineType.LINE;break;case 68:this.$=u.lineType.DOTTED_LINE;break;case 69:case 75:this.$=t[s-2],u.setClickEvent(t[s-1],t[s]);break;case 70:case 76:this.$=t[s-3],u.setClickEvent(t[s-2],t[s-1]),u.setTooltip(t[s-2],t[s]);break;case 71:case 79:this.$=t[s-2],u.setLink(t[s-1],t[s]);break;case 72:this.$=t[s-3],u.setLink(t[s-2],t[s-1],t[s]);break;case 73:case 81:this.$=t[s-3],u.setLink(t[s-2],t[s-1]),u.setTooltip(t[s-2],t[s]);break;case 74:case 82:this.$=t[s-4],u.setLink(t[s-3],t[s-2],t[s]),u.setTooltip(t[s-3],t[s-1]);break;case 77:this.$=t[s-3],u.setClickEvent(t[s-2],t[s-1],t[s]);break;case 78:this.$=t[s-4],u.setClickEvent(t[s-3],t[s-2],t[s-1]),u.setTooltip(t[s-3],t[s]);break;case 80:this.$=t[s-3],u.setLink(t[s-2],t[s-1],t[s]);break;case 83:u.setCssClass(t[s-1],t[s]);break}},table:[{3:1,4:2,5:n,6:4,7:5,8:o,9:c,10:p,11:A,12:6,13:11,19:f,23:D},{1:[3]},{1:[2,1]},{1:[2,2]},{1:[2,3]},{3:14,4:2,5:n,6:4,7:5,8:o,9:c,10:p,11:A,12:6,13:11,19:f,23:D},{1:[2,9]},e(P,[2,5]),e(P,[2,6]),e(P,[2,7]),e(P,[2,8]),{14:15,20:[1,16]},{16:[1,17]},{20:[2,12]},{1:[2,4]},{15:18,17:[1,19],22:Ae},e([17,22],[2,13]),{6:31,7:30,8:o,9:c,10:p,11:A,13:11,19:f,24:21,26:22,31:35,32:46,33:47,35:23,37:24,38:25,39:26,40:27,41:28,42:29,43:pe,45:de,47:ye,48:36,53:Ee,54:Ce,56:ke,57:ge,59:Fe,61:fe,71:be,72:De,74:me,78:Be,92:y,93:E,94:C,95:F},{16:[1,53]},{18:54,21:[1,55]},{16:[2,15]},{25:[1,56]},{16:[1,57],25:[2,17]},e(a,[2,26],{36:[1,58]}),e(a,[2,28]),e(a,[2,29]),e(a,[2,30]),e(a,[2,31]),e(a,[2,32]),e(a,[2,33]),e(a,[2,34]),e(a,[2,35]),{44:[1,59]},{46:[1,60]},e(a,[2,38]),e(a,[2,48],{58:61,62:64,63:65,29:[1,62],36:[1,63],64:w,65:G,66:U,67:M,68:K,69:X,70:J}),e(a,[2,39],{49:[1,73],50:[1,74]}),e(a,[2,50]),e(a,[2,51]),{32:75,92:y,93:E,94:C},{31:76,32:46,33:47,92:y,93:E,94:C,95:F},{31:77,32:46,33:47,92:y,93:E,94:C,95:F},{31:78,32:46,33:47,92:y,93:E,94:C,95:F},{29:[1,79]},{31:80,32:46,33:47,92:y,93:E,94:C,95:F},{29:_e,60:81},e(O,[2,21],{32:46,33:47,31:83,34:[1,84],92:y,93:E,94:C,95:F}),e(O,[2,22],{34:[1,85]}),{31:86,32:46,33:47,92:y,93:E,94:C,95:F},e(V,[2,97]),e(V,[2,98]),e(V,[2,99]),e([16,25,28,29,34,36,49,50,64,65,66,67,68,69,70,75,77],[2,100]),e(Te,[2,10]),{15:87,22:Ae},{22:[2,14]},{1:[2,16]},{6:31,7:30,8:o,9:c,10:p,11:A,13:11,19:f,24:88,25:[2,18],26:22,31:35,32:46,33:47,35:23,37:24,38:25,39:26,40:27,41:28,42:29,43:pe,45:de,47:ye,48:36,53:Ee,54:Ce,56:ke,57:ge,59:Fe,61:fe,71:be,72:De,74:me,78:Be,92:y,93:E,94:C,95:F},e(a,[2,27]),e(a,[2,36]),e(a,[2,37]),{29:[1,90],31:89,32:46,33:47,92:y,93:E,94:C,95:F},{58:91,62:64,63:65,64:w,65:G,66:U,67:M,68:K,69:X,70:J},e(a,[2,49]),{63:92,69:X,70:J},e(Y,[2,61],{62:93,64:w,65:G,66:U,67:M,68:K}),e(I,[2,62]),e(I,[2,63]),e(I,[2,64]),e(I,[2,65]),e(I,[2,66]),e(Se,[2,67]),e(Se,[2,68]),{32:94,92:y,93:E,94:C},{51:95,56:H},{55:[1,97]},{29:[1,98]},{29:[1,99]},{75:[1,100],77:[1,101]},{32:102,92:y,93:E,94:C},{29:_e,60:103},e(a,[2,57]),e(a,[2,101]),e(O,[2,23]),e(O,[2,24]),e(O,[2,25]),e(Z,[2,43],{27:104,28:[1,105]}),{16:[1,106]},{25:[2,19]},e(z,[2,52]),{31:107,32:46,33:47,92:y,93:E,94:C,95:F},{29:[1,109],31:108,32:46,33:47,92:y,93:E,94:C,95:F},e(Y,[2,60],{62:110,64:w,65:G,66:U,67:M,68:K}),e(Y,[2,59]),e(a,[2,40],{50:[1,111]}),{52:[1,112]},{51:113,52:[2,46],56:H},{31:114,32:46,33:47,92:y,93:E,94:C,95:F},e(a,[2,69],{29:[1,115]}),e(a,[2,71],{29:[1,117],73:[1,116]}),e(a,[2,75],{29:[1,118],76:[1,119]}),e(a,[2,79],{29:[1,121],73:[1,120]}),e(a,[2,83]),e(a,[2,56]),e(Z,[2,44]),{29:[1,122]},e(Te,[2,11]),e(z,[2,54]),e(z,[2,53]),{31:123,32:46,33:47,92:y,93:E,94:C,95:F},e(Y,[2,58]),{51:124,56:H},e(a,[2,41]),{52:[2,47]},e(a,[2,45]),e(a,[2,70]),e(a,[2,72]),e(a,[2,73],{73:[1,125]}),e(a,[2,76]),e(a,[2,77],{29:[1,126]}),e(a,[2,80]),e(a,[2,81],{73:[1,127]}),{30:[1,128]},e(z,[2,55]),{52:[1,129]},e(a,[2,74]),e(a,[2,78]),e(a,[2,82]),e(Z,[2,20]),e(a,[2,42])],defaultActions:{2:[2,1],3:[2,2],4:[2,3],6:[2,9],13:[2,12],14:[2,4],20:[2,15],55:[2,14],56:[2,16],88:[2,19],113:[2,47]},parseError:function(m,i){if(i.recoverable)this.trace(m);else{var r=new Error(m);throw r.hash=i,r}},parse:function(m){var i=this,r=[0],u=[],l=[null],t=[],k=this.table,s="",Q=0,ve=0,Ge=2,Ne=1,Ue=t.slice.call(arguments,1),d=Object.create(this.lexer),S={yy:{}};for(var se in this.yy)Object.prototype.hasOwnProperty.call(this.yy,se)&&(S.yy[se]=this.yy[se]);d.setInput(m,S.yy),S.yy.lexer=d,S.yy.parser=this,typeof d.yylloc>"u"&&(d.yylloc={});var ue=d.yylloc;t.push(ue);var Me=d.options&&d.options.ranges;typeof S.yy.parseError=="function"?this.parseError=S.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Ke(){var _;return _=u.pop()||d.lex()||Ne,typeof _!="number"&&(_ instanceof Array&&(u=_,_=u.pop()),_=i.symbols_[_]||_),_}for(var g,v,b,ie,N={},j,B,$e,W;;){if(v=r[r.length-1],this.defaultActions[v]?b=this.defaultActions[v]:((g===null||typeof g>"u")&&(g=Ke()),b=k[v]&&k[v][g]),typeof b>"u"||!b.length||!b[0]){var ne="";W=[];for(j in k[v])this.terminals_[j]&&j>Ge&&W.push("'"+this.terminals_[j]+"'");d.showPosition?ne="Parse error on line "+(Q+1)+`:
`+d.showPosition()+`
Expecting `+W.join(", ")+", got '"+(this.terminals_[g]||g)+"'":ne="Parse error on line "+(Q+1)+": Unexpected "+(g==Ne?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(ne,{text:d.match,token:this.terminals_[g]||g,line:d.yylineno,loc:ue,expected:W})}if(b[0]instanceof Array&&b.length>1)throw new Error("Parse Error: multiple actions possible at state: "+v+", token: "+g);switch(b[0]){case 1:r.push(g),l.push(d.yytext),t.push(d.yylloc),r.push(b[1]),g=null,ve=d.yyleng,s=d.yytext,Q=d.yylineno,ue=d.yylloc;break;case 2:if(B=this.productions_[b[1]][1],N.$=l[l.length-B],N._$={first_line:t[t.length-(B||1)].first_line,last_line:t[t.length-1].last_line,first_column:t[t.length-(B||1)].first_column,last_column:t[t.length-1].last_column},Me&&(N._$.range=[t[t.length-(B||1)].range[0],t[t.length-1].range[1]]),ie=this.performAction.apply(N,[s,ve,Q,S.yy,b[1],l,t].concat(Ue)),typeof ie<"u")return ie;B&&(r=r.slice(0,-1*B*2),l=l.slice(0,-1*B),t=t.slice(0,-1*B)),r.push(this.productions_[b[1]][0]),l.push(N.$),t.push(N._$),$e=k[r[r.length-2]][r[r.length-1]],r.push($e);break;case 3:return!0}}return!0}},we=function(){var m={EOF:1,parseError:function(i,r){if(this.yy.parser)this.yy.parser.parseError(i,r);else throw new Error(i)},setInput:function(i,r){return this.yy=r||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var r=i.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},unput:function(i){var r=i.length,u=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r),this.offset-=r;var l=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),u.length-1&&(this.yylineno-=u.length-1);var t=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:u?(u.length===l.length?this.yylloc.first_column:0)+l[l.length-u.length].length-u[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[t[0],t[0]+this.yyleng-r]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(i){this.unput(this.match.slice(i))},pastInput:function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var i=this.pastInput(),r=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+r+"^"},test_match:function(i,r){var u,l,t;if(this.options.backtrack_lexer&&(t={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(t.yylloc.range=this.yylloc.range.slice(0))),l=i[0].match(/(?:\r\n?|\n).*/g),l&&(this.yylineno+=l.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:l?l[l.length-1].length-l[l.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],u=this.performAction.call(this,this.yy,this,r,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),u)return u;if(this._backtrack){for(var k in t)this[k]=t[k];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,r,u,l;this._more||(this.yytext="",this.match="");for(var t=this._currentRules(),k=0;k<t.length;k++)if(u=this._input.match(this.rules[t[k]]),u&&(!r||u[0].length>r[0].length)){if(r=u,l=k,this.options.backtrack_lexer){if(i=this.test_match(u,t[k]),i!==!1)return i;if(this._backtrack){r=!1;continue}else return!1}else if(!this.options.flex)break}return r?(i=this.test_match(r,t[l]),i!==!1?i:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var i=this.next();return i||this.lex()},begin:function(i){this.conditionStack.push(i)},popState:function(){var i=this.conditionStack.length-1;return i>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(i){return i=this.conditionStack.length-1-Math.abs(i||0),i>=0?this.conditionStack[i]:"INITIAL"},pushState:function(i){this.begin(i)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(i,r,u,l){switch(u){case 0:return this.begin("open_directive"),19;case 1:return 8;case 2:return 9;case 3:return 10;case 4:return 11;case 5:return this.begin("type_directive"),20;case 6:return this.popState(),this.begin("arg_directive"),17;case 7:return this.popState(),this.popState(),22;case 8:return 21;case 9:break;case 10:break;case 11:return this.begin("acc_title"),43;case 12:return this.popState(),"acc_title_value";case 13:return this.begin("acc_descr"),45;case 14:return this.popState(),"acc_descr_value";case 15:this.begin("acc_descr_multiline");break;case 16:this.popState();break;case 17:return"acc_descr_multiline_value";case 18:return 16;case 19:break;case 20:return 23;case 21:return 23;case 22:return this.begin("struct"),50;case 23:return"EDGE_STATE";case 24:return"EOF_IN_STRUCT";case 25:return"OPEN_IN_STRUCT";case 26:return this.popState(),52;case 27:break;case 28:return"MEMBER";case 29:return 53;case 30:return 78;case 31:return 71;case 32:return 72;case 33:return 74;case 34:return 59;case 35:return 61;case 36:return 54;case 37:return 55;case 38:this.begin("generic");break;case 39:this.popState();break;case 40:return"GENERICTYPE";case 41:this.begin("string");break;case 42:this.popState();break;case 43:return"STR";case 44:this.begin("bqstring");break;case 45:this.popState();break;case 46:return"BQUOTE_STR";case 47:this.begin("href");break;case 48:this.popState();break;case 49:return 77;case 50:this.begin("callback_name");break;case 51:this.popState();break;case 52:this.popState(),this.begin("callback_args");break;case 53:return 75;case 54:this.popState();break;case 55:return 76;case 56:return 73;case 57:return 73;case 58:return 73;case 59:return 73;case 60:return 65;case 61:return 65;case 62:return 67;case 63:return 67;case 64:return 66;case 65:return 64;case 66:return 68;case 67:return 69;case 68:return 70;case 69:return 36;case 70:return 49;case 71:return 90;case 72:return"DOT";case 73:return"PLUS";case 74:return 87;case 75:return"EQUALS";case 76:return"EQUALS";case 77:return 94;case 78:return 28;case 79:return 30;case 80:return"PUNCTUATION";case 81:return 93;case 82:return 92;case 83:return 89;case 84:return 25}},rules:[/^(?:%%\{)/,/^(?:.*direction\s+TB[^\n]*)/,/^(?:.*direction\s+BT[^\n]*)/,/^(?:.*direction\s+RL[^\n]*)/,/^(?:.*direction\s+LR[^\n]*)/,/^(?:((?:(?!\}%%)[^:.])*))/,/^(?::)/,/^(?:\}%%)/,/^(?:((?:(?!\}%%).|\n)*))/,/^(?:%%(?!\{)*[^\n]*(\r?\n?)+)/,/^(?:%%[^\n]*(\r?\n)*)/,/^(?:accTitle\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*\{\s*)/,/^(?:[\}])/,/^(?:[^\}]*)/,/^(?:\s*(\r?\n)+)/,/^(?:\s+)/,/^(?:classDiagram-v2\b)/,/^(?:classDiagram\b)/,/^(?:[{])/,/^(?:\[\*\])/,/^(?:$)/,/^(?:[{])/,/^(?:[}])/,/^(?:[\n])/,/^(?:[^{}\n]*)/,/^(?:class\b)/,/^(?:cssClass\b)/,/^(?:callback\b)/,/^(?:link\b)/,/^(?:click\b)/,/^(?:note for\b)/,/^(?:note\b)/,/^(?:<<)/,/^(?:>>)/,/^(?:[~])/,/^(?:[~])/,/^(?:[^~]*)/,/^(?:["])/,/^(?:["])/,/^(?:[^"]*)/,/^(?:[`])/,/^(?:[`])/,/^(?:[^`]+)/,/^(?:href[\s]+["])/,/^(?:["])/,/^(?:[^"]*)/,/^(?:call[\s]+)/,/^(?:\([\s]*\))/,/^(?:\()/,/^(?:[^(]*)/,/^(?:\))/,/^(?:[^)]*)/,/^(?:_self\b)/,/^(?:_blank\b)/,/^(?:_parent\b)/,/^(?:_top\b)/,/^(?:\s*<\|)/,/^(?:\s*\|>)/,/^(?:\s*>)/,/^(?:\s*<)/,/^(?:\s*\*)/,/^(?:\s*o\b)/,/^(?:\s*\(\))/,/^(?:--)/,/^(?:\.\.)/,/^(?::{1}[^:\n;]+)/,/^(?::{3})/,/^(?:-)/,/^(?:\.)/,/^(?:\+)/,/^(?:%)/,/^(?:=)/,/^(?:=)/,/^(?:\w+)/,/^(?:\[)/,/^(?:\])/,/^(?:[!"#$%&'*+,-.`?\\/])/,/^(?:[0-9]+)/,/^(?:[\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6]|[\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377]|[\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5]|[\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA]|[\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE]|[\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA]|[\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0]|[\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977]|[\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2]|[\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A]|[\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39]|[\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8]|[\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C]|[\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C]|[\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99]|[\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0]|[\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D]|[\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3]|[\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10]|[\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1]|[\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81]|[\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3]|[\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6]|[\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A]|[\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081]|[\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D]|[\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0]|[\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310]|[\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C]|[\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711]|[\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7]|[\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C]|[\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16]|[\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF]|[\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC]|[\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D]|[\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D]|[\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3]|[\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F]|[\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128]|[\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184]|[\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3]|[\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6]|[\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE]|[\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C]|[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D]|[\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC]|[\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B]|[\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788]|[\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805]|[\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB]|[\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28]|[\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5]|[\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4]|[\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|[\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D]|[\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36]|[\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D]|[\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC]|[\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF]|[\uFFD2-\uFFD7\uFFDA-\uFFDC])/,/^(?:\s)/,/^(?:$)/],conditions:{acc_descr_multiline:{rules:[16,17],inclusive:!1},acc_descr:{rules:[14],inclusive:!1},acc_title:{rules:[12],inclusive:!1},arg_directive:{rules:[7,8],inclusive:!1},type_directive:{rules:[6,7],inclusive:!1},open_directive:{rules:[5],inclusive:!1},callback_args:{rules:[54,55],inclusive:!1},callback_name:{rules:[51,52,53],inclusive:!1},href:{rules:[48,49],inclusive:!1},struct:{rules:[23,24,25,26,27,28],inclusive:!1},generic:{rules:[39,40],inclusive:!1},bqstring:{rules:[45,46],inclusive:!1},string:{rules:[42,43],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,9,10,11,13,15,18,19,20,21,22,23,29,30,31,32,33,34,35,36,37,38,41,44,47,50,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84],inclusive:!0}}};return m}();ee.lexer=we;function te(){this.yy={}}return te.prototype=ee,ee.Parser=te,new te}();ae.parser=ae;const bt=ae,ce="classId-";let le=[],h={},q=[],Le=0,R=[];const T=e=>re.sanitizeText(e,$()),He=function(e,n,o){Xe.parseDirective(this,e,n,o)},L=function(e){let n="",o=e;if(e.indexOf("~")>0){const c=e.split("~");o=T(c[0]),n=T(c[1])}return{className:o,type:n}},Ze=function(e,n){n&&(n=T(n));const{className:o}=L(e);h[o].label=n},oe=function(e){const n=L(e);h[n.className]===void 0&&(h[n.className]={id:n.className,type:n.type,label:n.className,cssClasses:[],methods:[],members:[],annotations:[],domId:ce+n.className+"-"+Le},Le++)},Ie=function(e){if(e in h)return h[e].domId;throw new Error("Class not found: "+e)},et=function(){le=[],h={},q=[],R=[],R.push(Re),Je()},tt=function(e){return h[e]},st=function(){return h},ut=function(){return le},it=function(){return q},nt=function(e){Ve.debug("Adding relation: "+JSON.stringify(e)),oe(e.id1),oe(e.id2),e.id1=L(e.id1).className,e.id2=L(e.id2).className,e.relationTitle1=re.sanitizeText(e.relationTitle1.trim(),$()),e.relationTitle2=re.sanitizeText(e.relationTitle2.trim(),$()),le.push(e)},rt=function(e,n){const o=L(e).className;h[o].annotations.push(n)},xe=function(e,n){const o=L(e).className,c=h[o];if(typeof n=="string"){const p=n.trim();p.startsWith("<<")&&p.endsWith(">>")?c.annotations.push(T(p.substring(2,p.length-2))):p.indexOf(")")>0?c.methods.push(T(p)):p&&c.members.push(T(p))}},at=function(e,n){Array.isArray(n)&&(n.reverse(),n.forEach(o=>xe(e,o)))},ot=function(e,n){const o={id:`note${q.length}`,class:n,text:e};q.push(o)},ct=function(e){return e.startsWith(":")&&(e=e.substring(1)),T(e.trim())},he=function(e,n){e.split(",").forEach(function(o){let c=o;o[0].match(/\d/)&&(c=ce+c),h[c]!==void 0&&h[c].cssClasses.push(n)})},lt=function(e,n){e.split(",").forEach(function(o){n!==void 0&&(h[o].tooltip=T(n))})},ht=function(e){return h[e].tooltip},At=function(e,n,o){const c=$();e.split(",").forEach(function(p){let A=p;p[0].match(/\d/)&&(A=ce+A),h[A]!==void 0&&(h[A].link=Oe.formatUrl(n,c),c.securityLevel==="sandbox"?h[A].linkTarget="_top":typeof o=="string"?h[A].linkTarget=T(o):h[A].linkTarget="_blank")}),he(e,"clickable")},pt=function(e,n,o){e.split(",").forEach(function(c){dt(c,n,o),h[c].haveCallback=!0}),he(e,"clickable")},dt=function(e,n,o){if($().securityLevel!=="loose"||n===void 0)return;const c=e;if(h[c]!==void 0){const p=Ie(c);let A=[];if(typeof o=="string"){A=o.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let f=0;f<A.length;f++){let D=A[f].trim();D.charAt(0)==='"'&&D.charAt(D.length-1)==='"'&&(D=D.substr(1,D.length-2)),A[f]=D}}A.length===0&&A.push(p),R.push(function(){const f=document.querySelector(`[id="${p}"]`);f!==null&&f.addEventListener("click",function(){Oe.runFunc(n,...A)},!1)})}},yt=function(e){R.forEach(function(n){n(e)})},Et={LINE:0,DOTTED_LINE:1},Ct={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3,LOLLIPOP:4},Re=function(e){let n=x(".mermaidTooltip");(n._groups||n)[0][0]===null&&(n=x("body").append("div").attr("class","mermaidTooltip").style("opacity",0)),x(e).select("svg").selectAll("g.node").on("mouseover",function(){const o=x(this);if(o.attr("title")===null)return;const c=this.getBoundingClientRect();n.transition().duration(200).style("opacity",".9"),n.text(o.attr("title")).style("left",window.scrollX+c.left+(c.right-c.left)/2+"px").style("top",window.scrollY+c.top-14+document.body.scrollTop+"px"),n.html(n.html().replace(/&lt;br\/&gt;/g,"<br/>")),o.classed("hover",!0)}).on("mouseout",function(){n.transition().duration(500).style("opacity",0),x(this).classed("hover",!1)})};R.push(Re);let Pe="TB";const kt=()=>Pe,gt=e=>{Pe=e},Dt={parseDirective:He,setAccTitle:Ye,getAccTitle:ze,getAccDescription:Qe,setAccDescription:je,getConfig:()=>$().class,addClass:oe,bindFunctions:yt,clear:et,getClass:tt,getClasses:st,getNotes:it,addAnnotation:rt,addNote:ot,getRelations:ut,addRelation:nt,getDirection:kt,setDirection:gt,addMember:xe,addMembers:at,cleanupLabel:ct,lineType:Et,relationType:Ct,setClickEvent:pt,setCssClass:he,setLink:At,getTooltip:ht,setTooltip:lt,lookUpDomId:Ie,setDiagramTitle:We,getDiagramTitle:qe,setClassLabel:Ze},Ft=e=>`g.classGroup text {
  fill: ${e.nodeBorder};
  fill: ${e.classText};
  stroke: none;
  font-family: ${e.fontFamily};
  font-size: 10px;

  .title {
    font-weight: bolder;
  }

}

.nodeLabel, .edgeLabel {
  color: ${e.classText};
}
.edgeLabel .label rect {
  fill: ${e.mainBkg};
}
.label text {
  fill: ${e.classText};
}
.edgeLabel .label span {
  background: ${e.mainBkg};
}

.classTitle {
  font-weight: bolder;
}
.node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }


.divider {
  stroke: ${e.nodeBorder};
  stroke: 1;
}

g.clickable {
  cursor: pointer;
}

g.classGroup rect {
  fill: ${e.mainBkg};
  stroke: ${e.nodeBorder};
}

g.classGroup line {
  stroke: ${e.nodeBorder};
  stroke-width: 1;
}

.classLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${e.mainBkg};
  opacity: 0.5;
}

.classLabel .label {
  fill: ${e.nodeBorder};
  font-size: 10px;
}

.relation {
  stroke: ${e.lineColor};
  stroke-width: 1;
  fill: none;
}

.dashed-line{
  stroke-dasharray: 3;
}

.dotted-line{
  stroke-dasharray: 1 2;
}

#compositionStart, .composition {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#compositionEnd, .composition {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#dependencyStart, .dependency {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#dependencyStart, .dependency {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#extensionStart, .extension {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#extensionEnd, .extension {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#aggregationStart, .aggregation {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#aggregationEnd, .aggregation {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#lollipopStart, .lollipop {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#lollipopEnd, .lollipop {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

.edgeTerminals {
  font-size: 11px;
}

.classTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${e.textColor};
}
`,mt=Ft;export{mt as S,Dt as T,bt as y};

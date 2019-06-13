var cov_yzc7z3dzx=function(){var path="/mnt/c/Users/cheng/Desktop/cse112/Team2/web_components/meat-card/meat-card.js";var hash="1b042ddee7f6a96aea4792b3a185eebe16651ef9";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"/mnt/c/Users/cheng/Desktop/cse112/Team2/web_components/meat-card/meat-card.js",statementMap:{"0":{start:{line:1,column:17},end:{line:1,column:51}},"1":{start:{line:2,column:0},end:{line:91,column:2}},"2":{start:{line:103,column:4},end:{line:103,column:12}},"3":{start:{line:104,column:4},end:{line:104,column:57}},"4":{start:{line:105,column:4},end:{line:105,column:65}},"5":{start:{line:118,column:4},end:{line:118,column:22}},"6":{start:{line:128,column:4},end:{line:131,column:5}},"7":{start:{line:130,column:8},end:{line:130,column:14}},"8":{start:{line:138,column:4},end:{line:138,column:39}},"9":{start:{line:142,column:4},end:{line:146,column:5}},"10":{start:{line:143,column:6},end:{line:143,column:39}},"11":{start:{line:145,column:6},end:{line:145,column:37}},"12":{start:{line:149,column:0},end:{line:149,column:52}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:102,column:2},end:{line:102,column:3}},loc:{start:{line:102,column:16},end:{line:106,column:3}},line:102},"1":{name:"(anonymous_1)",decl:{start:{line:111,column:2},end:{line:111,column:3}},loc:{start:{line:111,column:22},end:{line:111,column:24}},line:111},"2":{name:"(anonymous_2)",decl:{start:{line:117,column:2},end:{line:117,column:3}},loc:{start:{line:117,column:34},end:{line:119,column:3}},line:117},"3":{name:"(anonymous_3)",decl:{start:{line:127,column:2},end:{line:127,column:3}},loc:{start:{line:127,column:49},end:{line:132,column:3}},line:127},"4":{name:"(anonymous_4)",decl:{start:{line:137,column:2},end:{line:137,column:3}},loc:{start:{line:137,column:15},end:{line:139,column:3}},line:137},"5":{name:"(anonymous_5)",decl:{start:{line:141,column:2},end:{line:141,column:3}},loc:{start:{line:141,column:18},end:{line:147,column:3}},line:141}},branchMap:{"0":{loc:{start:{line:128,column:4},end:{line:131,column:5}},type:"switch",locations:[{start:{line:129,column:6},end:{line:130,column:14}}],line:128},"1":{loc:{start:{line:142,column:4},end:{line:146,column:5}},type:"if",locations:[{start:{line:142,column:4},end:{line:146,column:5}},{start:{line:142,column:4},end:{line:146,column:5}}],line:142}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},b:{"0":[0],"1":[0,0]},_coverageSchema:"43e27e138ebf9cfc5966b082cf9a028302ed4184",hash:"1b042ddee7f6a96aea4792b3a185eebe16651ef9"};var coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}return coverage[path]=coverageData;}();const template=(cov_yzc7z3dzx.s[0]++,document.createElement("template"));cov_yzc7z3dzx.s[1]++;template.innerHTML=`
<style>
:host(:not([bootstrap])) {
  display: inline-block;
  position: relative;
  width: 350px;
  min-height: 250px;
  border: 1px solid #AAAAAA;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.15);
  background-color: white;
  font-family: sans-serif;
  vertical-align: top;
}

/* header default css */
:host(:not([bootstrap])) ::slotted([slot="header"])  {
  display: flex;
  position: relative;
  font-size: 20px;
  box-sizing: border-box;
  padding: 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom: 1px solid #AAAAAA;
  overflow: auto;
  align-items: center;
  justify-content: space-between;
}

/* body default css */
:host(:not([bootstrap]))::slotted([slot="body"]) {
  padding: 15px;
}

/* box shadow */
:host([shadow="always"]) {
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.15);
}

:host([shadow="hover"]) {
  box-shadow: none;
}

:host([shadow="hover"]:hover) {
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.15);
  background-color: white;
}

:host([shadow="never"]) {
  box-shadow: none;
}

/* Experimental image support */ 
/*
:host([img]) {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: attr(img, 50%);
}

:host([img="cover"]) > #headerContainer  {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: inherit;
  object-fit: cover;
}

::slotted(img[slot="header"]) {
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%
}

#headerContainer {
  margin: -1px;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
*/
</style>
<slot id="header" name="header"></slot>
<slot id="body" name="body"></slot>
`;export class MeatCard extends HTMLElement{/**
   * meat-card webcomponent
   * @customelement meat-card
   * @description A reusable card with replaceable markup.
   * @example <meat-card></meat-card>
   * @see [Demo]{@link https://meat-space.org/web_components/meat-card/meat-card-demo.html} for working example.
   * @property {attribute} shadow -Specifies a "shadow" around the card.
   * */constructor(){cov_yzc7z3dzx.f[0]++;cov_yzc7z3dzx.s[2]++;super();cov_yzc7z3dzx.s[3]++;this.shadowDOM=this.attachShadow({mode:"open"});cov_yzc7z3dzx.s[4]++;this.shadowDOM.appendChild(template.content.cloneNode(true));}/**
   * Live-cycle method called when the custom element is loaded, often used for initialization
   */connectedCallback(){cov_yzc7z3dzx.f[1]++;}/**
   * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
   * call attributeChangedCallback(name, oldVal, newVal)
   */static get observedAttributes(){cov_yzc7z3dzx.f[2]++;cov_yzc7z3dzx.s[5]++;return["shadow"];}/**
   * Called whenever one of the attributes specified in observedAttributes() is changed
   * @param {string} name
   * @param {string} oldVal
   * @param {string} newVal
   */attributeChangedCallback(name,oldVal,newVal){cov_yzc7z3dzx.f[3]++;cov_yzc7z3dzx.s[6]++;switch(name){case"shadow":cov_yzc7z3dzx.b[0][0]++;cov_yzc7z3dzx.s[7]++;break;}}/**
   * Getters and Setters
   */get shadow(){cov_yzc7z3dzx.f[4]++;cov_yzc7z3dzx.s[8]++;return this.getAttribute("shadow");}set shadow(val){cov_yzc7z3dzx.f[5]++;cov_yzc7z3dzx.s[9]++;if(val){cov_yzc7z3dzx.b[1][0]++;cov_yzc7z3dzx.s[10]++;this.setAttribute("shadow",val);}else{cov_yzc7z3dzx.b[1][1]++;cov_yzc7z3dzx.s[11]++;this.removeAttribute("shadow");}}}cov_yzc7z3dzx.s[12]++;window.customElements.define("meat-card",MeatCard);
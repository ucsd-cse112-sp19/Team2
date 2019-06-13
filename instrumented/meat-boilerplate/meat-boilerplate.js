var cov_2p9jfwwjw4=function(){var path="/mnt/c/Users/cheng/Desktop/cse112/Team2/web_components/meat-boilerplate/meat-boilerplate.js";var hash="06173eea9c884fd683f4ac1195dc04f71f07f086";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"/mnt/c/Users/cheng/Desktop/cse112/Team2/web_components/meat-boilerplate/meat-boilerplate.js",statementMap:{"0":{start:{line:1,column:17},end:{line:1,column:51}},"1":{start:{line:2,column:0},end:{line:4,column:2}},"2":{start:{line:14,column:4},end:{line:14,column:12}},"3":{start:{line:15,column:4},end:{line:15,column:54}},"4":{start:{line:16,column:4},end:{line:16,column:62}},"5":{start:{line:29,column:4},end:{line:29,column:14}},"6":{start:{line:40,column:0},end:{line:40,column:66}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:13,column:2},end:{line:13,column:3}},loc:{start:{line:13,column:16},end:{line:17,column:3}},line:13},"1":{name:"(anonymous_1)",decl:{start:{line:22,column:2},end:{line:22,column:3}},loc:{start:{line:22,column:22},end:{line:22,column:24}},line:22},"2":{name:"(anonymous_2)",decl:{start:{line:28,column:2},end:{line:28,column:3}},loc:{start:{line:28,column:34},end:{line:30,column:3}},line:28},"3":{name:"(anonymous_3)",decl:{start:{line:38,column:2},end:{line:38,column:3}},loc:{start:{line:38,column:49},end:{line:38,column:51}},line:38}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},f:{"0":0,"1":0,"2":0,"3":0},b:{},_coverageSchema:"43e27e138ebf9cfc5966b082cf9a028302ed4184",hash:"06173eea9c884fd683f4ac1195dc04f71f07f086"};var coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}return coverage[path]=coverageData;}();const template=(cov_2p9jfwwjw4.s[0]++,document.createElement("template"));cov_2p9jfwwjw4.s[1]++;template.innerHTML=`
<style></style>
`;export class MeatBoilerplate extends HTMLElement{/**
   * meat-boilerplate webcomponent
   * @customelement meat-boilerplate
   * @description A boilerplate for starting new webcomponents
   * @example <meat-boilerplate></meat-boilerplate>
   */constructor(){cov_2p9jfwwjw4.f[0]++;cov_2p9jfwwjw4.s[2]++;super();cov_2p9jfwwjw4.s[3]++;this.shadow=this.attachShadow({mode:"open"});cov_2p9jfwwjw4.s[4]++;this.shadow.appendChild(template.content.cloneNode(true));}/**
   * Live-cycle method called when the custom element is loaded, often used for initialization
   */connectedCallback(){cov_2p9jfwwjw4.f[1]++;}/**
   * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
   * call attributeChangedCallback(name, oldVal, newVal)
   */static get observedAttributes(){cov_2p9jfwwjw4.f[2]++;cov_2p9jfwwjw4.s[5]++;return[];}/**
   * Called whenever one of the attributes specified in observedAttributes() is changed
   * @param {string} name
   * @param {string} oldVal
   * @param {string} newVal
   */attributeChangedCallback(name,oldVal,newVal){cov_2p9jfwwjw4.f[3]++;}}cov_2p9jfwwjw4.s[6]++;window.customElements.define("meat-boilerplate",MeatBoilerplate);
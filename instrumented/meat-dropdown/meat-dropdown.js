var cov_22z5ofdzh7=function(){var path="/Users/christopher/Documents/Team2/web_components/meat-dropdown/meat-dropdown.js";var hash="e340d7b097c69b55c40d9e59e8788fae1588ddb5";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"/Users/christopher/Documents/Team2/web_components/meat-dropdown/meat-dropdown.js",statementMap:{"0":{start:{line:1,column:17},end:{line:1,column:51}},"1":{start:{line:2,column:0},end:{line:7,column:2}},"2":{start:{line:17,column:4},end:{line:17,column:12}},"3":{start:{line:19,column:4},end:{line:19,column:54}},"4":{start:{line:20,column:4},end:{line:20,column:62}},"5":{start:{line:31,column:4},end:{line:31,column:49}},"6":{start:{line:32,column:4},end:{line:32,column:54}},"7":{start:{line:33,column:4},end:{line:33,column:50}},"8":{start:{line:41,column:4},end:{line:41,column:33}},"9":{start:{line:51,column:4},end:{line:59,column:5}},"10":{start:{line:53,column:8},end:{line:54,column:44}},"11":{start:{line:53,column:26},end:{line:53,column:56}},"12":{start:{line:54,column:13},end:{line:54,column:44}},"13":{start:{line:55,column:8},end:{line:55,column:14}},"14":{start:{line:57,column:8},end:{line:57,column:41}},"15":{start:{line:58,column:8},end:{line:58,column:14}},"16":{start:{line:62,column:0},end:{line:62,column:67}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:16,column:2},end:{line:16,column:3}},loc:{start:{line:16,column:16},end:{line:24,column:3}},line:16},"1":{name:"(anonymous_1)",decl:{start:{line:29,column:2},end:{line:29,column:3}},loc:{start:{line:29,column:22},end:{line:34,column:3}},line:29},"2":{name:"(anonymous_2)",decl:{start:{line:40,column:2},end:{line:40,column:3}},loc:{start:{line:40,column:34},end:{line:42,column:3}},line:40},"3":{name:"(anonymous_3)",decl:{start:{line:50,column:2},end:{line:50,column:3}},loc:{start:{line:50,column:49},end:{line:60,column:3}},line:50}},branchMap:{"0":{loc:{start:{line:51,column:4},end:{line:59,column:5}},type:"switch",locations:[{start:{line:52,column:6},end:{line:55,column:14}},{start:{line:56,column:6},end:{line:58,column:14}}],line:51},"1":{loc:{start:{line:53,column:8},end:{line:54,column:44}},type:"if",locations:[{start:{line:53,column:8},end:{line:54,column:44}},{start:{line:53,column:8},end:{line:54,column:44}}],line:53}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0},f:{"0":0,"1":0,"2":0,"3":0},b:{"0":[0,0],"1":[0,0]},_coverageSchema:"43e27e138ebf9cfc5966b082cf9a028302ed4184",hash:"e340d7b097c69b55c40d9e59e8788fae1588ddb5"};var coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}return coverage[path]=coverageData;}();const template=(cov_22z5ofdzh7.s[0]++,document.createElement("template"));cov_22z5ofdzh7.s[1]++;template.innerHTML=`
<style></style>
<link rel="stylesheet" href="/web_components/common.css"/>
<link rel="stylesheet" href="/web_components/meat-dropdown/meat-dropdown.css"/>
<select><slot id="dropdown" name="dropdown"></slot></select>
`;export class MeatDropdownElement extends HTMLElement{/**
   * meat-dropdown webcomponent
   * @customelement meat-dropdown
   * @description A dropdown for starting new webcomponents
   * @example <meat-dropdown></meat-dropdown>
   */constructor(){cov_22z5ofdzh7.f[0]++;cov_22z5ofdzh7.s[2]++;super();// this._onSlotChange = this._onSlotChange.bind(this);
cov_22z5ofdzh7.s[3]++;this.shadow=this.attachShadow({mode:"open"});cov_22z5ofdzh7.s[4]++;this.shadow.appendChild(template.content.cloneNode(true));// this._dropdownSlot = this.shadowRoot.querySelector('slot[name=dropdown]');
// this._dropdownSlot.addEventListener('slotchange', this._onSlotChange);
}/**
   * Live-cycle method called when the custom element is loaded, often used for initialization
   */connectedCallback(){cov_22z5ofdzh7.f[1]++;cov_22z5ofdzh7.s[5]++;// Need to get the content inbetween the <meat-dropdown> tags into the button so it renders
this.dropdown.textContent=this.textContent;cov_22z5ofdzh7.s[6]++;this.addEventListener("keydown",this._onKeyDown);cov_22z5ofdzh7.s[7]++;this.addEventListener("click",this._onClick);}/**
   * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
   * call attributeChangedCallback(name, oldVal, newVal)
   */static get observedAttributes(){cov_22z5ofdzh7.f[2]++;cov_22z5ofdzh7.s[8]++;return["value","disabled"];}/**
   * Called whenever one of the attributes specified in observedAttributes() is changed
   * @param {string} name
   * @param {string} oldVal
   * @param {string} newVal
   */attributeChangedCallback(name,oldVal,newVal){cov_22z5ofdzh7.f[3]++;cov_22z5ofdzh7.s[9]++;switch(name){case"disabled":cov_22z5ofdzh7.b[0][0]++;cov_22z5ofdzh7.s[10]++;if(newVal==""){cov_22z5ofdzh7.b[1][0]++;cov_22z5ofdzh7.s[11]++;this.dropdown.disabled=true;}else{cov_22z5ofdzh7.b[1][1]++;cov_22z5ofdzh7.s[12]++;this.dropdown.disabled=false;}cov_22z5ofdzh7.s[13]++;break;case"value":cov_22z5ofdzh7.b[0][1]++;cov_22z5ofdzh7.s[14]++;this.dropdown.className=newVal;cov_22z5ofdzh7.s[15]++;break;}}}cov_22z5ofdzh7.s[16]++;window.customElements.define("meat-dropdown",MeatDropdownElement);
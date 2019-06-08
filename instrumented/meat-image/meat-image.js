var cov_16sqmlexb4=function(){var path="/Users/christopher/Documents/Team2/web_components/meat-image/meat-image.js";var hash="d04dafe92be3f7b64762571e46f9d220abb33312";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"/Users/christopher/Documents/Team2/web_components/meat-image/meat-image.js",statementMap:{"0":{start:{line:1,column:17},end:{line:1,column:51}},"1":{start:{line:2,column:0},end:{line:20,column:2}},"2":{start:{line:22,column:25},end:{line:28,column:1}},"3":{start:{line:30,column:19},end:{line:30,column:69}},"4":{start:{line:40,column:4},end:{line:40,column:12}},"5":{start:{line:41,column:4},end:{line:41,column:54}},"6":{start:{line:42,column:4},end:{line:42,column:62}},"7":{start:{line:44,column:4},end:{line:44,column:60}},"8":{start:{line:45,column:4},end:{line:45,column:71}},"9":{start:{line:48,column:4},end:{line:48,column:51}},"10":{start:{line:56,column:4},end:{line:59,column:7}},"11":{start:{line:58,column:6},end:{line:58,column:28}},"12":{start:{line:62,column:4},end:{line:64,column:7}},"13":{start:{line:72,column:4},end:{line:72,column:78}},"14":{start:{line:82,column:4},end:{line:99,column:5}},"15":{start:{line:84,column:8},end:{line:84,column:32}},"16":{start:{line:85,column:8},end:{line:85,column:14}},"17":{start:{line:87,column:8},end:{line:89,column:9}},"18":{start:{line:88,column:10},end:{line:88,column:69}},"19":{start:{line:90,column:8},end:{line:90,column:14}},"20":{start:{line:92,column:8},end:{line:92,column:32}},"21":{start:{line:93,column:8},end:{line:93,column:14}},"22":{start:{line:95,column:8},end:{line:97,column:9}},"23":{start:{line:96,column:10},end:{line:96,column:60}},"24":{start:{line:98,column:8},end:{line:98,column:14}},"25":{start:{line:102,column:0},end:{line:102,column:54}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:39,column:2},end:{line:39,column:3}},loc:{start:{line:39,column:16},end:{line:49,column:3}},line:39},"1":{name:"(anonymous_1)",decl:{start:{line:54,column:2},end:{line:54,column:3}},loc:{start:{line:54,column:22},end:{line:65,column:3}},line:54},"2":{name:"(anonymous_2)",decl:{start:{line:56,column:40},end:{line:56,column:41}},loc:{start:{line:56,column:51},end:{line:59,column:5}},line:56},"3":{name:"(anonymous_3)",decl:{start:{line:62,column:41},end:{line:62,column:42}},loc:{start:{line:62,column:52},end:{line:64,column:5}},line:62},"4":{name:"(anonymous_4)",decl:{start:{line:71,column:2},end:{line:71,column:3}},loc:{start:{line:71,column:34},end:{line:73,column:3}},line:71},"5":{name:"(anonymous_5)",decl:{start:{line:81,column:2},end:{line:81,column:3}},loc:{start:{line:81,column:49},end:{line:100,column:3}},line:81}},branchMap:{"0":{loc:{start:{line:82,column:4},end:{line:99,column:5}},type:"switch",locations:[{start:{line:83,column:6},end:{line:85,column:14}},{start:{line:86,column:6},end:{line:90,column:14}},{start:{line:91,column:6},end:{line:93,column:14}},{start:{line:94,column:6},end:{line:98,column:14}}],line:82},"1":{loc:{start:{line:87,column:8},end:{line:89,column:9}},type:"if",locations:[{start:{line:87,column:8},end:{line:89,column:9}},{start:{line:87,column:8},end:{line:89,column:9}}],line:87},"2":{loc:{start:{line:95,column:8},end:{line:97,column:9}},type:"if",locations:[{start:{line:95,column:8},end:{line:97,column:9}},{start:{line:95,column:8},end:{line:97,column:9}}],line:95}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},b:{"0":[0,0,0,0],"1":[0,0],"2":[0,0]},_coverageSchema:"43e27e138ebf9cfc5966b082cf9a028302ed4184",hash:"d04dafe92be3f7b64762571e46f9d220abb33312"};var coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}return coverage[path]=coverageData;}();const template=(cov_16sqmlexb4.s[0]++,document.createElement("template"));cov_16sqmlexb4.s[1]++;template.innerHTML=`
<style>
:host(:not([bootstrap]))  {
  font-family: sans-serif;
  vertical-align: top;
  overflow: auto;
}

:host(:not([bootstrap])) #imageElement {
  width: inherit;
  height: inherit;
}
</style>
<div id="imageContainer">
  <img id="imageElement" class="nativeImg">
  <slot id="placeholder" name="placeholder"></slot>
  <slot id="error" name="error"></slot>
</div>
`;const referrerPolicies=(cov_16sqmlexb4.s[2]++,["no-referrer","no-referrer-when-downgrade","origin","origin-when-cross-origin","unsafe-url"]);const fillStyles=(cov_16sqmlexb4.s[3]++,["fill","contain","cover","none","scale-down"]);export class MeatImage extends HTMLElement{/**
   * meat-boilerplate webcomponent
   * @customelement meat-boilerplate
   * @description A boilerplate for starting new webcomponents
   * @example <meat-boilerplate></meat-boilerplate>
   */constructor(){cov_16sqmlexb4.f[0]++;cov_16sqmlexb4.s[4]++;super();cov_16sqmlexb4.s[5]++;this.shadow=this.attachShadow({mode:"open"});cov_16sqmlexb4.s[6]++;this.shadow.appendChild(template.content.cloneNode(true));cov_16sqmlexb4.s[7]++;this.image=this.shadow.querySelector("#imageElement");cov_16sqmlexb4.s[8]++;this.imageContainer=this.shadow.querySelector("#imageContainer");// Apply user's inline style to our custom component container
cov_16sqmlexb4.s[9]++;this.imageContainer.style=this.style.cssText;}/**
   * Live-cycle method called when the custom element is loaded, often used for initialization
   */connectedCallback(){cov_16sqmlexb4.f[1]++;cov_16sqmlexb4.s[10]++;// TODO: find a way to make placeholder disappear upon loading
this.image.addEventListener("load",function(){cov_16sqmlexb4.f[2]++;cov_16sqmlexb4.s[11]++;// do not show placeholder slot
console.log("loaded");});// TODO: display error plcaeholder upon image error
cov_16sqmlexb4.s[12]++;this.image.addEventListener("error",function(){// show only error slot
cov_16sqmlexb4.f[3]++;});}/**
   * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
   * call attributeChangedCallback(name, oldVal, newVal)
   */static get observedAttributes(){cov_16sqmlexb4.f[4]++;cov_16sqmlexb4.s[13]++;return["src","fit","alt","referrerpolicy","lazy","scrollcontainer"];}/**
   * Called whenever one of the attributes specified in observedAttributes() is changed
   * @param {string} name
   * @param {string} oldVal
   * @param {string} newVal
   */attributeChangedCallback(name,oldVal,newVal){cov_16sqmlexb4.f[5]++;cov_16sqmlexb4.s[14]++;switch(name){case"src":cov_16sqmlexb4.b[0][0]++;cov_16sqmlexb4.s[15]++;this.image.src=newVal;cov_16sqmlexb4.s[16]++;break;case"fit":cov_16sqmlexb4.b[0][1]++;cov_16sqmlexb4.s[17]++;if(fillStyles.includes(newVal)){cov_16sqmlexb4.b[1][0]++;cov_16sqmlexb4.s[18]++;this.image.setAttribute("style",`object-fit: ${newVal};`);}else{cov_16sqmlexb4.b[1][1]++;}cov_16sqmlexb4.s[19]++;break;case"alt":cov_16sqmlexb4.b[0][2]++;cov_16sqmlexb4.s[20]++;this.image.alt=newVal;cov_16sqmlexb4.s[21]++;break;case"referrerpolicy":cov_16sqmlexb4.b[0][3]++;cov_16sqmlexb4.s[22]++;if(referrerPolicies.includes(newVal)){cov_16sqmlexb4.b[2][0]++;cov_16sqmlexb4.s[23]++;this.image.setAttribute("referrerpolicy",newVal);}else{cov_16sqmlexb4.b[2][1]++;}cov_16sqmlexb4.s[24]++;break;}}}cov_16sqmlexb4.s[25]++;window.customElements.define("meat-image",MeatImage);
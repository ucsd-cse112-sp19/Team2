# Installation

## Prerequisites 
* Nodejs
* npm

## Installing
Assuming you have started a nodejs project, have a `package.json` file set up, and are in the root directory of your poject, run
```
npm i @meatspace/webcomponents
```
## CDN
```
<!-- import CSS -->
```




In your HTML page `<head>` element, add a `<script>` tag like so
```
<script type="module" src="./node_modules/team2/web_components/core-hello/core-hello.js"></script>
```
In the above example, `/core-hello/core-hello.js` is the path to the core-hello web component JavaScript file. 
If you want to use a different web component, you will have to change this part of the path appropriately.
Next, add the component into your HTML body
```
<core-hello rainbow lang="en">this is a test!</core-hello>
```
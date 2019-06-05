# Quick Start Guide
## Getting Started
The following instructions will get our web components installed and running locally on your machine.

### Installing
The easiest way to get our webcomponents is to include the following CDN bundle in the head of your html document
```
<script src="https://unpkg.com/@meatspace/webcomponents@latest/bundle.js"></script>
```
#### Alternative Installation
 If you don't want to use the CDN, you'll need to have the following installed:
* Nodejs
* npm

Assuming you have started a nodejs project, have a `package.json` file set up, and are in the root directory of your poject, run
```
npm install --save @meatspace/webcomponents
```
### Usage & Example
#### Using the CDN
Once the CDN script tag is added to the head of your HTML document, include the folling in the body
```
<core-hello rainbow lang="en">MeatSpace!</core-hello>
```
##### output
<iframe width="100%" height="100%" src="/docs/documentation/core-hello-examples/example1.html"></iframe>

#### Using Node.js
In your HTML page `<head>` element, add a `<script>` tag like so
```
<script type="module" src="/node_modules/@meatspace/webcomponents/lib/core-hello/core-hello.js"></script>
```
In the above example, `/core-hello/core-hello.js` is the path to the core-hello web component JavaScript file. 
If you want to use a different web component, you will have to change this part of the path appropriately.
Next, add the component into your HTML body
```
<core-hello rainbow lang="en">MeatSpace!</core-hello>
```
##### output
<iframe width="100%" height="100%" src="/docs/documentation/core-hello-examples/example1.html"></iframe>

If you want access to all of the components add this `<script>` tag instead
```
<script type="module" src="/node_modules/@meatspace/webcomponents/bundle.js"></script>
```
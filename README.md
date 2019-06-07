# Team MeatSpace (Team 2) Web Components
![alt text](https://meat-space.org/img/logo.png "MeatSpace logo 1") <br/>
[![Build Status](https://travis-ci.org/ucsd-cse112/Team2.svg?branch=master)](https://travis-ci.org/ucsd-cse112/Team2)
[![Maintainability](https://api.codeclimate.com/v1/badges/2a07d0e8d29fd216bc41/maintainability)](https://codeclimate.com/repos/5cc77286629ff0026e00188a/maintainability) <br/>

Welcome to the MeatSpace web component library. 

[meat-space.org](https://meat-space.org)

## Getting Started
The following instructions will get our web components installed and running locally on your machine.

### Installing
The easiest way to get our webcomponents is to include the following into the head of your html document:
```
<script src="https://unpkg.com/@meatspace/webcomponents@latest/bundle.js"></script>
```
Otherwise, you'll need to have the following installed:
* Nodejs
* npm

Assuming you have started a nodejs project, have a `package.json` file set up, and are in the root directory of your poject, run
```
npm install --save @meatspace/webcomponents
```
### Usage & Example
In your HTML page `<head>` element, add a `<script>` tag like so
```
<script type="module" src="/node_modules/@meatspace/webcomponents/bundle.js"></script>
```
Next, add the component into your HTML body
```
<core-hello rainbow lang="en">this is a test!</core-hello>
```

### Contributing
If you'd like to contribute to our webcomponent library, visit the onboarding documents for information at:
https://drive.google.com/open?id=1Ol-goKPABW7S3bXMqYjVDUb8xxKekqXt  
This public Google Drive contains all of information you will need to get grilling 🥩!

### Acknowledgment
Thanks to [BrowserStack](http://browserstack.com/) for supporting open source projects like ours. 

## Team Members
- Adam Kabbara `Lead`
- Timothy Bian `Co-Lead`
- Veronica Lin `Quality Assurance`
- Tony Huang `Quality Assurance`
- Shih-hung (Peter) Pi `Tools & Utility`
- Curtis Tong `Tools & Utility`
- Alex Monji `Coder`
- Aaron Brown `Coder`
- Justin Chen `Coder`
- Christopher Jensen `DevOps`
- Xin Liu `DevOps`
# Installation

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

## Usage & Example
### CDN
In your HTML page `<head>` element, include the following into the head of your html document:
```
<script src="https://unpkg.com/@meatspace/webcomponents@latest/bundle.js"></script>
```
##### EXAMPLE
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>MeatSpace Usage Demo</title>
        <script src="https://unpkg.com/@meatspace/webcomponents@latest/bundle.js"></script>
    </head>
    <body>
        <meat-button color="blue" size="large">MeatSpace!</meat-button>
    </body>
</html>
```
##### output
<iframe width="100%" height="100%" src="/docs/documentation/meat-button-examples/example-installation-page.html"></iframe>

### npm
In your HTML page `<head>` element, include the following into the head of your html document:
```
<script type="module" src="/node_modules/@meatspace/webcomponents/bundle.js"></script>
```
Next, add the component into your HTML body
```
<meat-button color="blue" size="large">MeatSpace!</meat-button>
```
##### output
<iframe width="100%" height="100%" src="/docs/documentation/meat-button-examples/example-installation-page.html"></iframe>

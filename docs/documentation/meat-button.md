# MeatSpace Button Component

## Contents
[Basic Usage](#basic-usage)<br>
[Round Buttons](#round-buttons)<br>
[Circle Buttons](#circle-buttons)<br>
[Disabled Buttons](#disabled-buttons)<br>
[Bootstrap Support](#bootstrap-support)<br>
[Attributes](#attributes)<br>
[CSS Variables](#css-variables)<br>

## Basic Usage
<iframe width="100%" height="100%" src="/docs/documentation/meat-button-examples/example1.html"></iframe>

```
<meat-button color="white"  size="large" >White</meat-button>
<meat-button color="grey"   size="large" >Grey</meat-button>
<meat-button color="red"    size="large" >Red</meat-button>
<meat-button color="orange" size="large" >Orange</meat-button>
<meat-button color="yellow" size="large" >Yellow</meat-button>
<meat-button color="green"  size="large" >Green</meat-button>
<meat-button color="blue"   size="large" >Blue</meat-button>
<meat-button color="purple" size="large" >Purple</meat-button>
```

## Round Buttons
<iframe width="100%" height="100%" src="/docs/documentation/meat-button-examples/example2.html"></iframe>

```
<meat-button color="white"  size="large" round >White</meat-button>
<meat-button color="grey"   size="large" round >Grey</meat-button>
<meat-button color="red"    size="large" round >Red</meat-button>
<meat-button color="orange" size="large" round >Orange</meat-button>
<meat-button color="yellow" size="large" round >Yellow</meat-button>
<meat-button color="green"  size="large" round >Green</meat-button>
<meat-button color="blue"   size="large" round >Blue</meat-button>
<meat-button color="purple" size="large" round >Purple</meat-button>
```

## Circle Buttons
<iframe width="100%" height="100%" src="/docs/documentation/meat-button-examples/example3.html"></iframe>

```
<meat-button color="white"  size="large" circle>+</meat-button>
<meat-button color="grey"   size="large" circle>+</meat-button>
<meat-button color="red"    size="large" circle>+</meat-button>
<meat-button color="orange" size="large" circle>+</meat-button>
<meat-button color="yellow" size="large" circle>+</meat-button>
<meat-button color="green"  size="large" circle>+</meat-button>
<meat-button color="blue"   size="large" circle>+</meat-button>
<meat-button color="purple" size="large" circle>+</meat-button>
```
## Disabled Buttons
<iframe width="100%" height="100%" src="/docs/documentation/meat-button-examples/example4.html"></iframe>

```
<meat-button color="white" size="large" round disabled >Disabled</meat-button>
<meat-button color="white" size="large" round >Not Disabled</meat-button>
```

## Bootstrap Support
<iframe width="100%" height="100%" src="/docs/documentation/meat-button-examples/example5.html"></iframe>

```
<meat-button bootstrap="btn btn-primary">Primary</meat-button>
<meat-button bootstrap="btn btn-secondary">Secondary</meat-button>
<meat-button bootstrap="btn btn-success">Success</meat-button>
<meat-button bootstrap="btn btn-danger">Danger</meat-button>
<meat-button bootstrap="btn btn-warning">Warning</meat-button>
<meat-button bootstrap="btn btn-info">Info</meat-button>
<meat-button bootstrap="btn btn-light">Light</meat-button>
<meat-button bootstrap="btn btn-dark">Dark</meat-button>
```

## Attributes
| Attributes | Description                                                   | Type    | Accepted Values       | Default |
|------------|---------------------------------------------------------------|---------|-----------------------|---------|
| autofocus  | Enables button to automatically get focus when the page loads.| boolean |                       | false   |
| circle     | Enables a circle shaped button.                               | boolean |                       | false   |
| round      | Enables a round shaped button.                                | boolean |                       | false   |
| disabled   | Disables button from accepting events.                        | boolean |                       | false   | 
| size       | Changes the size of the button.                               | string  | small/medium/large    |         |
| type       | Sets the button native-type.                                  | string  | submit/reset/button   |         |
| color      | Sets the button color theme.                                  | string  | white/grey/red/orange/yellow/green/blue/purple   |         |
| bootstrap  | Assign this attribute boostrap class names. Use this attribute to style buttons with bootstrap.| string | ex: btn btn-primary | |

## CSS Variables
| CSS Variable              | Description                                                        | Default            |
|---------------------------|--------------------------------------------------------------------|--------------------|
| --hover-background-color  | Background color of the button when it is hovered by the cursor.   | #daeeff            |
| --focus-background-color  | Background color of the button when it is the focused element.     | #daeeff            |
| --active-background-color | Background color of the button when it is being pressed.           | #daeeff            | 
| --hover-color             | Textcolor of the button when it is hovered by the cursor.          | #3388ff            |
| --focus-color             | Textcolor of the button when it is the focused element.            | #3388ff            |
| --active-color            | Textcolor of the button when it is being pressed.                  | #3388ff            |
| --hover-border            | Border of the button when it is hovered by the cursor.             | 1px solid #bbccff  |
| --focus-border            | Border of the button when it is the focused element.               | 1px solid #bbccff  |   
| --active-border           | Border of the button when it is being pressed.                     | 1px solid #3388ff  |  
# MeatSpace Button Component

## Basic usage
[](https://meat-space.org/web_components/meat-button/meat-button-demo.html ':include :type=iframe width=100% height=800px')

```
<label>Basic buttons</label><br/>
<meat-button color="white"  size="large" >White</meat-button>
<meat-button color="grey"   size="large" >Grey</meat-button>
<meat-button color="red"    size="large" >Red</meat-button>
<meat-button color="orange" size="large" >Orange</meat-button>
<meat-button color="yellow" size="large" >Yellow</meat-button>
<meat-button color="green"  size="large" >Green</meat-button>
<meat-button color="blue"   size="large" >Blue</meat-button>
<meat-button color="purple" size="large" >Purple</meat-button>
<br><br>
<label>Round buttons</label><br/>
<meat-button color="white"  size="large" round >White</meat-button>
<meat-button color="grey"   size="large" round >Grey</meat-button>
<meat-button color="red"    size="large" round >Red</meat-button>
<meat-button color="orange" size="large" round >Orange</meat-button>
<meat-button color="yellow" size="large" round >Yellow</meat-button>
<meat-button color="green"  size="large" round >Green</meat-button>
<meat-button color="blue"   size="large" round >Blue</meat-button>
<meat-button color="purple" size="large" round >Purple</meat-button>
<br><br>
<label>Circle buttons</label><br/>
<meat-button color="white"  size="large" circle>+</meat-button>
<meat-button color="grey"   size="large" circle>+</meat-button>
<meat-button color="red"    size="large" circle>+</meat-button>
<meat-button color="orange" size="large" circle>+</meat-button>
<meat-button color="yellow" size="large" circle>+</meat-button>
<meat-button color="green"  size="large" circle>+</meat-button>
<meat-button color="blue"   size="large" circle>+</meat-button>
<meat-button color="purple" size="large" circle>+</meat-button>
<br><br>
<label>Disabled</label><br/>
<meat-button color="white" size="large" round disabled >Disabled</meat-button>
<meat-button color="white" size="large" round >Not Disabled</meat-button>
<br><br>
<label>Bootstrap Support</label><br/>
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
| Attributes | Description                                                   | Type    | Accepted Values | Default |
|------------|---------------------------------------------------------------|---------|-----------------|---------|
| autofocus  | Enables button to automatically get focus when the page loads.| boolean |                 | false   |
| circle     | Enables a circle shaped button.                               | boolean |                 | false   |
| round      | Enables a round shaped button.                                | boolean |                 | false   |
| size       | Changes the size of the button.                               | string  | small/medium/large |  |
| type       | Sets the button type.                                         | string  | primary/warning/danger|   |
| disabled   | Disables button from accepting events. | boolean |  | false | 
| bootstrap  | Assign this attribute boostrap class names. Use this attribute to style buttons with bootstrap.| string | ex: btn btn-primary | |
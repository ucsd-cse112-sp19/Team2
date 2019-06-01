# MeatSpace Link Component

## Basic usage 
[](https://meat-space.org/web_components/meat-link/meat-link-demo.html ':include :type=iframe width=100% height=800px')

```
<label>color</label><br>
    <meat-link href="#">Default</meat-link>
    <meat-link href="#" color="white" class="black-background" >White</meat-link>
    <meat-link href="#" color="grey">Grey</meat-link>
    <meat-link href="#" color="red">Red</meat-link>
    <meat-link href="#" color="orange">Orange</meat-link>
    <meat-link href="#" color="yellow" class="black-background">Yellow</meat-link>
    <meat-link href="#" color="green">Green</meat-link>
    <meat-link href="#" color="blue">Blue</meat-link>
    <meat-link href="#" color="purple">Purple</meat-link>
    <br>
    <br>
<label>disabled</label>
    <br>
    <meat-link disabled href="#">Default</meat-link>
    <meat-link disabled href="#" color="white" class="black-background" >White</meat-link>
    <meat-link disabled href="#" color="grey">Grey</meat-link>
    <meat-link disabled href="#" color="red">Red</meat-link>
    <meat-link disabled href="#" color="orange">Orange</meat-link>
    <meat-link disabled href="#" color="yellow" class="black-background">Yellow</meat-link>
    <meat-link disabled href="#" color="green">Green</meat-link>
    <meat-link disabled href="#" color="blue">Blue</meat-link>
    <meat-link disabled href="#" color="purple">Purple</meat-link>
    <br>
    <br>
<label>underline="always"</label>
    <br>
    <meat-link underline="always" href="#" >Default</meat-link>
    <meat-link underline="always" href="#" color="white" class="black-background">White</meat-link>
    <meat-link underline="always" href="#" color="grey">Grey</meat-link>
    <meat-link underline="always" href="#" color="red">Red</meat-link>
    <meat-link underline="always" href="#" color="orange">Orange</meat-link>
    <meat-link underline="always" href="#" color="yellow" class="black-background">Yellow</meat-link>
    <meat-link underline="always" href="#" color="green">Green</meat-link>
    <meat-link underline="always" href="#" color="blue">Blue</meat-link>
    <meat-link underline="always" href="#" color="purple">Purple</meat-link>
    <br>
    <br>
<label>underline="hover"</label>
    <br>
    <meat-link underline="hover" href="#" >Default</meat-link>
    <meat-link underline="hover" href="#" color="white" class="black-background">White</meat-link>
    <meat-link underline="hover" href="#" color="grey">Grey</meat-link>
    <meat-link underline="hover" href="#" color="red">Red</meat-link>
    <meat-link underline="hover" href="#" color="orange">Orange</meat-link>
    <meat-link underline="hover" href="#" color="yellow" class="black-background">Yellow</meat-link>
    <meat-link underline="hover" href="#" color="green">Green</meat-link>
    <meat-link underline="hover" href="#" color="blue">Blue</meat-link>
    <meat-link underline="hover" href="#" color="purple">Purple</meat-link>
    <br>
    <br>
<label>underline="never"</label>
    <br>
    <meat-link underline="never" href="#" >Default</meat-link>
    <meat-link underline="never" href="#" color="white" class="black-background">White</meat-link>
    <meat-link underline="never" href="#" color="grey">Grey</meat-link>
    <meat-link underline="never" href="#" color="red">Red</meat-link>
    <meat-link underline="never" href="#" color="orange">Orange</meat-link>
    <meat-link underline="never" href="#" color="yellow" class="black-background">Yellow</meat-link>
    <meat-link underline="never" href="#" color="green">Green</meat-link>
    <meat-link underline="never" href="#" color="blue">Blue</meat-link>
    <meat-link underline="never" href="#" color="purple">Purple</meat-link>
    <br>
    <br>
<label>bootstrap</label>
    <br>
    <meat-link bootstrap href="#">bootstrap</meat-link>
    <meat-link bootstrap="nav-link" href="#">nav-link</meat-link>
    <meat-link bootstrap="navbar-brand" href="#">navbar-brand</meat-link>
    <meat-link bootstrap="nav-link dropdown-toggle" href="#">nav-link dropdown-toggle</meat-link>
    <meat-link bootstrap="dropdown-item" href="#">dropdown-item</meat-link>
    <br><br>
    <meat-link underline="hover" href="https://element.eleme.io/#/en-US/component/link">
        9 out of 10 doctors hate this one simple trick! Click Here
    </meat-link>
```

## Attributes
| Attributes | Description                                                   | Type    | Accepted Values | Default |
|------------|---------------------------------------------------------------|---------|-----------------|---------|
| bootstrap  | Assign this attribute boostrap class names. Use this attribute to style buttons with bootstrap.| string | ex: btn btn-primary | |
| color  | Specifies the color of the link.| string | white/grey/red/orange/yellow/green/blue/purple | blue |
| disabled   | Disables button from accepting events. | boolean |  | false | 
| href | The location of where the link redirects. | string | | | 
| icon | Class that specifies the icon image for the link. | string | | | 
| type | Specifies the type of the media that the link points to. | string | |
| underline | Underlines the link. | boolean | | false | 
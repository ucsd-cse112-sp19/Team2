# MeatSpace Input Component

## Basic usage
[](https://meat-space.org/web_components/meat-input/meat-input-demo.html ':include :type=iframe width=100% height=600px')

```
<label>Basic Input:</label>
<br>
<meat-input size="small" placeholder="Small" autocomplete="off"></meat-input> size="small" <br> 
<meat-input size="medium" placeholder="Medium" autocomplete="off"></meat-input> size="medium" <br> 
<meat-input size="large" placeholder="Large" autocomplete="off"></meat-input> size="large" <br> 
<br>
<label>Limit</label><br>
<meat-input size="medium" placeholder="Limit" autocomplete="off" limit=10></meat-input> limit=10 <br> 
<br>
<label>Password Input</label><br>
<meat-input size="medium" placeholder="Password" autocomplete="off" password></meat-input> password <br> 
<br>
<label>Readonly</label><br>
<meat-input size="medium" placeholder="Readonly" autocomplete="off" readonly></meat-input> readonly <br> 
<br> 
<label>Disabled</label><br>
<meat-input size="medium" placeholder="Disabled" autocomplete="off" disabled></meat-input> disabled <br> 
```

## Attributes
| Attributes | Description                                                   | Type    | Accepted Values | Default |
|------------|---------------------------------------------------------------|---------|-----------------|---------|
| size       | Changes the size of the button.                               | string  | small/medium/large |  |
| placeholder | Placeholder showing what text this input can take. | string | user defined | |
| disabled   | Disables button from accepting events. | boolean |  | false | 
| password   | Make the input a password field and replace text with asteriks.| boolean |  | false | 
| value      | Default text value within the input box. | string | user defined | | 
| readonly   | Determines if the input box can be edited. | boolean | | false | 
| suggest    | Determines if input box will display a predetermined suggestion list. | string | on/off | off |
| autocomplete| Determines if input box will use native browser capability to display user's previous inputs as suggestion. | string | on/off | off |
| bootstrap | Enable BootStrap styles and apply specified css classes. | string | bootstrap class names | | 


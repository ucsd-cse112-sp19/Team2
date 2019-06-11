<style>
details {
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: .5em .5em 0;
}

summary {
    font-weight: bold;
    margin: -.5em -.5em 0;
    padding: .5em;
}

details[open] {
    padding: .5em;
}

details[open] summary {
    border-bottom: 1px solid #aaa;
    margin-bottom: .5em;
}
</style>

# MeatSpace Checkbox Component

## Contents
[Basic Checkboxes](#basic-inputs)<br>
[Color](#colors)<br>
[Disabled](#disabled)<br>
[Bootstrap Support](#bootstrap-support)<br>
[Attributes](#attributes)<br>
[CSS Variables](#css-variables)<br>

## Basic Checkboxes
<iframe width="750px" height="100px" src="/docs/documentation/meat-checkbox-examples/example1.html"></iframe>

<details><summary>Show Code</summary><br>

```
<meat-checkbox>Unchecked</meat-checkbox>
<meat-checkbox checked>Checked</meat-checkbox>
```

</details>

## Color
<iframe width="750px" height="70px" src="/docs/documentation/meat-checkbox-examples/example2.html"></iframe>

<details><summary>Show Code</summary><br>

```
<meat-checkbox checked color="grey">Grey</meat-checkbox>
<meat-checkbox checked color="red">Red</meat-checkbox>
<meat-checkbox checked color="orange">Orange</meat-checkbox>
<meat-checkbox checked color="yellow">Yellow</meat-checkbox>
<meat-checkbox checked color="green">Green</meat-checkbox>
<meat-checkbox checked color="blue">Blue</meat-checkbox>
<meat-checkbox checked color="purple">Purple</meat-checkbox>
```

</details>

## Disabled
<iframe width="750px" height="70px" src="/docs/documentation/meat-checkbox-examples/example3.html"></iframe>

<details><summary>Show Code</summary><br>

```
<meat-checkbox disabled>Disabled</meat-checkbox>
<meat-checkbox checked disabled>Disabled</meat-checkbox>
<meat-checkbox>Not Disabled</meat-checkbox>
```

</details>

## Bootstrap Support (Under Development)
<iframe width="750px" height="70px" src="/docs/documentation/meat-checkbox-examples/example4.html"></iframe>

<details><summary>Show Code</summary><br>

```
UNDER DEVELOPMENT
```

</details>

## Attributes
| Attributes | Description                                                   | Type    | Accepted Values | Default |
|------------|---------------------------------------------------------------|---------|-----------------|---------|
| color | Changes color of the checkmark box | string | user defined | |
| disabled   | Disables button from accepting events. | boolean |  | false | 
| bootstrap | Enable BootStrap styles and apply specified css classes. | string | bootstrap class names | | 

## CSS Variables
| CSS Variable              | Description                                                        | Default            |
|---------------------------|--------------------------------------------------------------------|--------------------|
| None                      | There are no special css variables for this component! | |

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

# MeatSpace Input Component

## Contents
[Basic Inputs](#basic-inputs)<br>
[Limit](#limit)<br>
[Password](#password)<br>
[Readonly](#readonly)<br>
[Disabled](#disabled)<br>
[Suggest](#suggest)<br>
[Bootstrap Support](#bootstrap-support)<br>
[Attributes](#attributes)<br>
[CSS Variables](#css-variables)<br>

## Basic Inputs
<iframe width="750px" height="170px" src="/docs/documentation/meat-input-examples/example1.html"></iframe>

<details><summary>Show Code</summary><br>

```
<meat-input size="small" placeholder="Small" autocomplete="off"></meat-input><br> 
<meat-input size="medium" placeholder="Medium" autocomplete="off"></meat-input><br> 
<meat-input size="large" placeholder="Large" autocomplete="off"></meat-input><br> 
```

</details>

## Limit
<iframe width="750px" height="60px" src="/docs/documentation/meat-input-examples/example2.html"></iframe>

<details><summary>Show Code</summary><br>

```
<meat-input size="large" placeholder="Limit" limit=10></meat-input> 
```

</details>

## Password
<iframe width="750px" height="60px" src="/docs/documentation/meat-input-examples/example3.html"></iframe>

<details><summary>Show Code</summary><br>

```
<meat-input size="large" placeholder="Password" password></meat-input>
```

</details>

## Readonly
<iframe width="750px" height="60px" src="/docs/documentation/meat-input-examples/example4.html"></iframe>

<details><summary>Show Code</summary><br>

```
<meat-input size="large" placeholder="Readonly" readonly>This input is uneditable!</meat-input> 
```

</details>

## Disabled
<iframe width="750px" height="60px" src="/docs/documentation/meat-input-examples/example5.html"></iframe>

<details><summary>Show Code</summary><br>

```
<meat-input size="large" placeholder="Disabled" disabled></meat-input>
```

</details>

## Suggest
<iframe width="750px" height="100%" src="/docs/documentation/meat-input-examples/example6.html"></iframe>

<details><summary>Show Code</summary><br>

```
    <meat-input size="large" suggest="on" placeholder="US States Suggestions"></meat-input>
    <script>
        const meatInput = document.querySelector('meat-input');
        meatInput.suggestions = ["Alaska",
                    "Alabama",
                    "Arkansas",
                    "American Samoa",
                    "Arizona",
                    "California",
                    "Colorado",
                    "Connecticut",
                    "District of Columbia",
                    "Delaware",
                    "Florida",
                    "Georgia",
                    "Guam",
                    "Hawaii",
                    "Iowa",
                    "Idaho",
                    "Illinois",
                    "Indiana",
                    "Kansas",
                    "Kentucky",
                    "Louisiana",
                    "Massachusetts",
                    "Maryland",
                    "Maine",
                    "Michigan",
                    "Minnesota",
                    "Missouri",
                    "Mississippi",
                    "Montana",
                    "North Carolina",
                    "North Dakota",
                    "Nebraska",
                    "New Hampshire",
                    "New Jersey",
                    "New Mexico",
                    "Nevada",
                    "New York",
                    "Ohio",
                    "Oklahoma",
                    "Oregon",
                    "Pennsylvania",
                    "Puerto Rico",
                    "Rhode Island",
                    "South Carolina",
                    "South Dakota",
                    "Tennessee",
                    "Texas",
                    "Utah",
                    "Virginia",
                    "Virgin Islands",
                    "Vermont",
                    "Washington",
                    "Wisconsin",
                    "West Virginia",
                    "Wyoming"];
```

</details>

## Bootstrap Support
<iframe width="750px" height="60px" src="/docs/documentation/meat-input-examples/example7.html"></iframe>

<details><summary>Show Code</summary><br>

```
<meat-input bootstrap="form-control" placeholder="Bootstrap"></meat-input>
```

</details>





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

## CSS Variables
| CSS Variable                | Description                                                        | Default                      |
|-----------------------------|--------------------------------------------------------------------|------------------------------|
| --input-padding             | Padding of the input.                                              | 10px                         |
| --input-background-color    | Background color of the input.                                     | white                        |
| --input-border              | Border of the input and suggestion container                       | 1px solid #CCCCCC            | 
| --input-hover-border        | Border of the input when hovered.                                  | 1px solid #888888            | 
| --input-focus-border        | Border of the input when focused.                                  | 1px solid #3388ff            | 
| --input-active-border       | Border of the input when actively being pressed.                   | 1px solid #3388ff            | 
| --suggestion-border         | Border of the input.                                               |                              | 
| --suggestion-hover-border   | Border of a suggestion item when hovered.                          |                              | 
| --suggestion-focus-border   | Border of a suggestion item when focused.                          |                              | 
| --suggestion-focus-background-color    | Background color of a suggestion item when focused.     | #daeeff                      | 

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

# MeatSpace Link Component

## Contents
[Basic Usage](#basic-usage)<br>
[Underlined Links](#underlined-links)<br>
[Disabled Links](#disabled-links)<br>
[Bootstrap Support](#bootstrap-support)<br>
[Attributes](#attributes)<br>
[CSS Variables](#css-variables)<br>

## Basic Usage
<iframe width="100%" height=70px src="/docs/documentation/meat-link-examples/example1.html"></iframe>
<details><summary>Show Code</summary><br>

```
<!-- font-family: sans-serif; and font-size: 20px; stylings applied -->
<meat-link href="#">Default</meat-link>
<meat-link href="#" color="white" style="background-color: black;" >White</meat-link>
<meat-link href="#" color="grey">Grey</meat-link>
<meat-link href="#" color="red">Red</meat-link>
<meat-link href="#" color="orange">Orange</meat-link>
<meat-link href="#" color="yellow" style="background-color: black;">Yellow</meat-link>
<meat-link href="#" color="green">Green</meat-link>
<meat-link href="#" color="blue">Blue</meat-link>
<meat-link href="#" color="purple">Purple</meat-link>
```
</details>

## Underlined Links
<iframe width="100%" height="210px" src="/docs/documentation/meat-link-examples/example2.html"></iframe>
<details><summary>Show Code</summary><br>

```
<!-- font-family: sans-serif; and font-size: 20px; stylings applied -->
<meat-link underline="always" href="#" >Default</meat-link>
<meat-link underline="always" href="#" color="white" style="background-color: black;">White</meat-link>
<meat-link underline="always" href="#" color="grey">Grey</meat-link>
<meat-link underline="always" href="#" color="red">Red</meat-link>
<meat-link underline="always" href="#" color="orange">Orange</meat-link>
<meat-link underline="always" href="#" color="yellow" style="background-color: black;">Yellow</meat-link>
<meat-link underline="always" href="#" color="green">Green</meat-link>
<meat-link underline="always" href="#" color="blue">Blue</meat-link>
<meat-link underline="always" href="#" color="purple">Purple</meat-link>
<br><label>underline="always"</label><br>
<br>
<meat-link underline="hover" href="#" >Default</meat-link>
<meat-link underline="hover" href="#" color="white" style="background-color: black;">White</meat-link>
<meat-link underline="hover" href="#" color="grey">Grey</meat-link>
<meat-link underline="hover" href="#" color="red">Red</meat-link>
<meat-link underline="hover" href="#" color="orange">Orange</meat-link>
<meat-link underline="hover" href="#" color="yellow" style="background-color: black;">Yellow</meat-link>
<meat-link underline="hover" href="#" color="green">Green</meat-link>
<meat-link underline="hover" href="#" color="blue">Blue</meat-link>
<meat-link underline="hover" href="#" color="purple">Purple</meat-link>
<br><label>underline="hover"</label><br>
<br>
<meat-link underline="never" href="#" >Default</meat-link>
<meat-link underline="never" href="#" color="white" style="background-color: black;">White</meat-link>
<meat-link underline="never" href="#" color="grey">Grey</meat-link>
<meat-link underline="never" href="#" color="red">Red</meat-link>
<meat-link underline="never" href="#" color="orange">Orange</meat-link>
<meat-link underline="never" href="#" color="yellow" style="background-color: black;">Yellow</meat-link>
<meat-link underline="never" href="#" color="green">Green</meat-link>
<meat-link underline="never" href="#" color="blue">Blue</meat-link>
<meat-link underline="never" href="#" color="purple">Purple</meat-link>
<br><label>underline="never"</label>
```
</details>

## Disabled Links
<iframe width="100%" height="60px" src="/docs/documentation/meat-link-examples/example3.html"></iframe>
<details><summary>Show Code</summary><br>

```
<!-- font-family: sans-serif; and font-size: 20px; stylings applied -->
<meat-link disabled href="#">Default</meat-link>
<meat-link disabled href="#" color="white" style="background-color: black;" >White</meat-link>
<meat-link disabled href="#" color="grey">Grey</meat-link>
<meat-link disabled href="#" color="red">Red</meat-link>
<meat-link disabled href="#" color="orange">Orange</meat-link>
<meat-link disabled href="#" color="yellow" style="background-color: black;">Yellow</meat-link>
<meat-link disabled href="#" color="green">Green</meat-link>
<meat-link disabled href="#" color="blue">Blue</meat-link>
<meat-link disabled href="#" color="purple">Purple</meat-link>
```
</details>

## Bootstrap Support
<iframe width="100%" height=80px src="/docs/documentation/meat-link-examples/example4.html"></iframe>
<details><summary>Show Code</summary><br>

```
<meat-link bootstrap href="#">bootstrap</meat-link>
<meat-link bootstrap="nav-link" href="#">nav-link</meat-link>
<meat-link bootstrap="navbar-brand" href="#">navbar-brand</meat-link>
<meat-link bootstrap="nav-link dropdown-toggle" href="#">nav-link dropdown-toggle</meat-link>
<meat-link bootstrap="dropdown-item" href="#">dropdown-item</meat-link>
```
</details>

#### More Complex Example

<iframe width="100%" height=480px src="/docs/documentation/meat-link-examples/example5.html"></iframe>
<details><summary>Show Code</summary><br>

```
<div style="margin: 100px 100px 50px 100px; border: 1px solid black; padding: 50px;">
    <label>Pure Bootstrap Example</label><br>
    <nav id="navbar-example2" class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link" href="#fat">@fat</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#mdo">@mdo</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#one">one</a>
                    <a class="dropdown-item" href="#two">two</a>
                    <div role="separator" class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#three">three</a>
                </div>
            </li>
        </ul>
    </nav>
    </div>
    <div style="margin: 0px 100px 100px 100px; border: 1px solid black; padding: 50px;">
        <label>Using Meat-Link With Bootstrap Support</label><br>
        <nav id="navbar-example2" class="navbar navbar-light bg-light">
            <meat-link bootstrap="navbar-brand" href="#">Navbar</meat-link>
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <meat-link bootstrap="nav-link" href="#fat">@fat</meat-link>
                </li>
                <li class="nav-item">
                    <meat-link bootstrap="nav-link" href="#mdo">@mdo</meat-link>
                </li>
                <li class="nav-item dropdown">
                    <meat-link bootstrap="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</meat-link>
                    <div class="dropdown-menu">
                        <meat-link bootstrap="dropdown-item" href="#one">one</meat-link>
                        <meat-link bootstrap="dropdown-item" href="#two">two</meat-link>
                        <div role="separator" class="dropdown-divider"></div>
                        <meat-link bootstrap="dropdown-item" href="#three">three</meat-link>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</div>
```
</details>

## Attributes
| Attributes | Description                                                   | Type    | Accepted Values       | Default |
|------------|---------------------------------------------------------------|---------|-----------------------|---------|
| disabled   | Disables link from accepting events.                          | boolean |                       | false   |
| href       | The url the link leads to.                                    | string  |  Ex: "#"              |         |
| type       | Specifies the type of the media that the link points to.      | string  |  Ex: "text/css"       |         |
| color      | Sets the link color theme.                                    | string  | white/grey/red/orange/yellow/green/blue/purple   |         |
| icon       | Sets an icon image for the link.                              | string  |                       |         |
| bootstrap  | Assign this attribute boostrap class names. Use this attribute to style buttons with bootstrap.| string | ex: "nav-link dropdown-toggle" | |

## CSS Variables
| CSS Variable              | Description                                                        | Default            |
|---------------------------|--------------------------------------------------------------------|--------------------|
| None                      | There are no special css variables for this component! | |

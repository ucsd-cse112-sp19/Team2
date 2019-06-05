# MeatSpace Card Component

Contains two slots, "header" and "body."
Assign your markup to a slot by providing the slot attribute.
Example:
```
<meat-card>
    <div slot="header">
        This will go into the header of the card.
    </div>
    <div slot="body">
        This will go into the body of the card
    </div>
</meat-card>
```

## Contents
[Basic Cards](#basic-cards)<br>
[No Header](#no-header)<br>
[Example Cards](#example-cards)<br>
[Bootstrap Support](#bootstrap-support)<br>
[Attributes](#attributes)<br>
[CSS Variables](#css-variables)<br>

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

## Basic Cards
<iframe width="750px" height="855px" src="/docs/documentation/meat-card-examples/example1.html"></iframe>

<details><summary>Show Code</summary><br>

```
<meat-card>
    <div slot="header">
        <span>Default</span>
    </div>
    <div slot="body" class="card-body">
        <div>Item 1</div>
        <div>Item 2</div>
    </div>
</meat-card>
<meat-card shadow="hover">
    <div slot="header">
        <span>shadow="hover"</span>
    </div>
    <div slot="body" class="card-body">
        <div>Item 1</div>
        <div>Item 2</div>
    </div>
</meat-card>
<meat-card shadow="never">
    <div slot="header">
        <span>shadow="never"</span>
    </div>
    <div slot="body" class="card-body">
        <div>Item 1</div>
        <div>Item 2</div>
    </div>
</meat-card>
```
</details>

## No Header
<iframe width="750px" height="550px" src="/docs/documentation/meat-card-examples/example2.html"></iframe>

<details><summary>Show Code</summary><br>

```
<meat-card>
    <div slot="body" class="card-body">
        <div>Item 1</div>
        <div>Item 2</div>
    </div>
</meat-card>
<meat-card shadow="hover">
    <div slot="body" class="card-body">
        <div>Item 1</div>
        <div>Item 2</div>
    </div>
</meat-card>
<meat-card shadow="never">
    <div slot="body" class="card-body">
        <div>Item 1</div>
        <div>Item 2</div>
    </div>
</meat-card>
```
</details>

## Example Cards
<iframe width="750px" height="731px" src="/docs/documentation/meat-card-examples/example3.html"></iframe>

<details><summary>Show Code</summary><br>

```
<meat-card>
    <div slot="header" style="background-color: #ffa319">
        <div style="color: #444444;">How to use meat-card</div>
    </div>
    <div slot="body" class="card-body">
        <div>
            <strong>Header:</strong> Create any markup and give it the attribute slot="header", this will be the container for your header. 
            <br>
            <strong>Ex:</strong> &ltdiv slot="header" &gt&lt/div&gt
        </div>
        <br>
        <div>
            <strong>Body:</strong> Create any markup and give it the attribute slot="body", this will be the container for your body. 
            <br>
            <strong>Ex:</strong> &ltdiv slot="body" &gt&lt/div&gt
        </div>
    </div>
</meat-card>
<meat-card>
    <div slot="header" style="background-color: #2db2ff">
        <div style="color: white;">I am an example card!</div>
        <meat-button color="white">Does Nothing!</meat-button>
    </div>
    <div slot="body" class="card-body">
        <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."
        </div>
        <br>
        <div>
            <meat-link color="blue" href="https://element.eleme.io/#/en-US/component/card">Click here to go to Element's Card Docs</meat-link>
        </div>
    </div>
</meat-card>
```
</details>

## Bootstrap Support
<iframe width="350px" height="600px" src="/docs/documentation/meat-card-examples/example4.html"></iframe>

<details><summary>Show Code</summary><br>

```
<meat-card class="card" style="display: inline-flex; width: 18rem;" bootstrap>
    <img slot="header" class="card-img-top" src="/website/img/Thomas_Powell_ZingChart.png" alt="Card image cap">
    <div slot="body" class="card-body">
        <h5 class="card-title">meat-card with Bootstrap</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</meat-card>
<meat-card class="card" shadow="hover" style="display: inline-flex; width: 18rem;" bootstrap>
    <img slot="header" class="card-img-top" src="/website/img/Thomas_Powell_ZingChart.png" alt="Card image cap">
    <div slot="body" class="card-body">
        <h5 class="card-title">meat-card with Bootstrap and shadow="hover"</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</meat-card>
```
</details>

## Attributes
| Attributes | Description                                                   | Type    | Accepted Values | Default |
|------------|---------------------------------------------------------------|---------|-----------------|---------|
| bootstrap  | Assign this attribute boostrap class names. Use this attribute to style any markup you put inside a card as you normally would with bootstrap.| string | ex: "card" | |
| shadow     | Specifies a "shadow" around the card.                            | string | always/hover/never | always | 

## CSS Variables
| CSS Variable              | Description                                                        | Default            |
|---------------------------|--------------------------------------------------------------------|--------------------|
| None                      | There are no special css variables for this component! | |

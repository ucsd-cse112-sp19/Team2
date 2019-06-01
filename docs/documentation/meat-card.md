# MeatSpace Card Component

## Basic usage
[](https://meat-space.org/web_components/meat-card/meat-card-demo.html ':include :type=iframe width=100% height=800px')

```
<label>Basic Cards</label><br>
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

```
<label>No Header</label><br>
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
            <div>
                Item 1
            </div>
            <div>
                Item 2
            </div>
        </div>
    </meat-card>
```

```
<label>Example Cards</label><br>
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

```
<label>Bootstrap Support</label><br>
    <div class="card" style="display: inline-flex; width: 18rem; margin: 10px;">
        <img class="card-img-top" src="/img//faces/Thomas_Powell_ZingChart.png" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Bootstrap Card</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    <meat-card class="card" style="display: inline-flex; width: 18rem;" bootstrap>
        <img slot="header" class="card-img-top" src="/img//faces/Thomas_Powell_ZingChart.png" alt="Card image cap">
        <div slot="body" class="card-body">
            <h5 class="card-title">meat-card with Bootstrap</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </meat-card>
    <meat-card class="card" shadow="hover" style="display: inline-flex; width: 18rem;" bootstrap>
        <img slot="header" class="card-img-top" src="/img//faces/Thomas_Powell_ZingChart.png" alt="Card image cap">
        <div slot="body" class="card-body">
            <h5 class="card-title">meat-card with Bootstrap and shadow="hover"</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </meat-card><br><br>
    <div class="card text-white bg-primary mb-3" style="display: inline-flex; max-width: 18rem; margin: 10px;">
        <div class="card-header">Header</div>
        <div class="card-body">
            <h5 class="card-title">Primary card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    <meat-card class="card text-white bg-primary mb-3" style="display: inline-flex; width: 18rem;" bootstrap>
        <div slot="header" class="card-header">Header</div>
        <div slot="body" class="card-body">
            <h5 class="card-title">Primary card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </meat-card>
    <meat-card class="card text-white bg-primary mb-3" shadow="hover" style="display: inline-flex; width: 18rem;" bootstrap>
        <div slot="header" class="card-header">Header</div>
        <div slot="body" class="card-body">
            <h5 class="card-title">Primary card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </meat-card><br>
    <div class="card text-white bg-secondary mb-3" style="display: inline-flex; max-width: 18rem; margin: 10px;">
        <div class="card-header">Header</div>
        <div class="card-body">
            <h5 class="card-title">Secondary card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    <meat-card class="card text-white bg-secondary mb-3" style="display: inline-flex; width: 18rem;" bootstrap>
        <div slot="header" class="card-header">Header</div>
        <div slot="body" class="card-body">
            <h5 class="card-title">Secondary card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </meat-card>
    <meat-card class="card text-white bg-secondary mb-3" shadow="hover" style="display: inline-flex; width: 18rem;" bootstrap>
        <div slot="header" class="card-header">Header</div>
        <div slot="body" class="card-body">
            <h5 class="card-title">Secondary card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </meat-card><br>
    <div class="card text-white bg-success mb-3" style="display: inline-flex; max-width: 18rem; margin: 10px;">
        <div class="card-header">Header</div>
        <div class="card-body">
            <h5 class="card-title">Success card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    <meat-card class="card text-white bg-success mb-3" style="display: inline-flex; width: 18rem;" bootstrap>
        <div slot="header" class="card-header">Header</div>
        <div slot="body" class="card-body">
            <h5 class="card-title">Success card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </meat-card>
    <meat-card class="card text-white bg-success mb-3" shadow="hover" style="display: inline-flex; width: 18rem;" bootstrap>
        <div slot="header" class="card-header">Header</div>
        <div slot="body" class="card-body">
            <h5 class="card-title">Success card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </meat-card><br>
    <div class="card text-white bg-danger mb-3" style="display: inline-flex; max-width: 18rem; margin: 10px;">
        <div class="card-header">Header</div>
        <div class="card-body">
            <h5 class="card-title">Danger card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    <meat-card class="card text-white bg-danger mb-3" style="display: inline-flex; width: 18rem;" bootstrap>
        <div slot="header" class="card-header">Header</div>
        <div slot="body" class="card-body">
            <h5 class="card-title">Danger card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </meat-card>
    <meat-card class="card text-white bg-danger mb-3" shadow="hover" style="display: inline-flex; width: 18rem;" bootstrap>
        <div slot="header" class="card-header">Header</div>
        <div slot="body" class="card-body">
            <h5 class="card-title">Danger card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </meat-card><br>
    <div class="card text-white bg-warning mb-3" style="display: inline-flex; max-width: 18rem; margin: 10px;">
        <div class="card-header">Header</div>
        <div class="card-body">
            <h5 class="card-title">Warning card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    <meat-card class="card text-white bg-warning mb-3" style="display: inline-flex; width: 18rem;" bootstrap>
        <div slot="header" class="card-header">Header</div>
        <div slot="body" class="card-body">
            <h5 class="card-title">Warning card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </meat-card>
    <meat-card class="card text-white bg-warning mb-3" shadow="hover" style="display: inline-flex; width: 18rem;" bootstrap>
        <div slot="header" class="card-header">Header</div>
        <div slot="body" class="card-body">
            <h5 class="card-title">Warning card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </meat-card><br>
    <div class="card text-white bg-info mb-3" style="display: inline-flex; max-width: 18rem; margin: 10px;">
        <div class="card-header">Header</div>
        <div class="card-body">
            <h5 class="card-title">Info card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    <meat-card class="card text-white bg-info mb-3" style="display: inline-flex; width: 18rem;" bootstrap>
        <div slot="header" class="card-header">Header</div>
        <div slot="body" class="card-body">
            <h5 class="card-title">Info card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </meat-card>
    <meat-card class="card text-white bg-info mb-3" shadow="hover" style="display: inline-flex; width: 18rem;" bootstrap>
        <div slot="header" class="card-header">Header</div>
        <div slot="body" class="card-body">
            <h5 class="card-title">Info card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </meat-card><br>
    <div class="card bg-light mb-3" style="display: inline-flex; max-width: 18rem; margin: 10px;">
        <div class="card-header">Header</div>
        <div class="card-body">
            <h5 class="card-title">Light card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    <meat-card class="card bg-light mb-3" style="display: inline-flex; width: 18rem;" bootstrap>
        <div slot="header" class="card-header">Header</div>
        <div slot="body" class="card-body">
            <h5 class="card-title">Light card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </meat-card>
    <meat-card class="card bg-light mb-3" shadow="hover" style="display: inline-flex; width: 18rem;" bootstrap>
        <div slot="header" class="card-header">Header</div>
        <div slot="body" class="card-body">
            <h5 class="card-title">Light card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </meat-card><br>
    <div class="card text-white bg-dark mb-3" style="display: inline-flex; max-width: 18rem; margin: 10px;">
        <div class="card-header">Header</div>
        <div class="card-body">
            <h5 class="card-title">Dark card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    <meat-card class="card text-white bg-dark mb-3" style="display: inline-flex; width: 18rem;" bootstrap>
        <div slot="header" class="card-header">Header</div>
        <div slot="body" class="card-body">
            <h5 class="card-title">Dark card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </meat-card>
    <meat-card class="card text-white bg-dark mb-3" shadow="hover" style="display: inline-flex; width: 18rem;" bootstrap>
        <div slot="header" class="card-header">Header</div>
        <div slot="body" class="card-body">
            <h5 class="card-title">Dark card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </meat-card>
```

## Attributes
| Attributes | Description                                                   | Type    | Accepted Values | Default |
|------------|---------------------------------------------------------------|---------|-----------------|---------|
| bootstrap  | Assign this attribute boostrap class names. Use this attribute to style buttons with bootstrap.| string | ex: btn btn-primary | |
| shadow  | Specifies a "shadow" around the card. | boolean |                 | string | always/hover/never | always | 

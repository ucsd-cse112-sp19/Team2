import { Selector, ClientFunction } from "testcafe"; // first import testcafe selectors

fixture`Running tests for meat-card` // declare the fixture
  .page`http://127.0.0.1:8080/web_components/meat-card/meat-card-demo.html`;

const getElementById = Selector(id => document.querySelector(id));
const getInner = Selector((root, elem) => document.querySelector(root).querySelector(elem));

test("Check basic card Header", async t => {
    const component = getInner("#basic-test", "#b-header")
    await t.expect(component.innerText).eql("Default");
});

test("Check basic card Body", async t => {
    const component = getInner("#basic-test", "#b-body")
    await t.expect(component.innerText).eql("Item 1\nItem 2");
});

test("Check No Header Card has no header", async t => {
    const component = getInner("#no-header", "header")
    await t.expect(component.exists).eql(false);
});

test("Check No Header Card has Body", async t => {
    const component = getInner("#no-header", "#no-header-b")
    await t.expect(component.innerText).eql("Item 1\nItem 2");
});

test("Visuals of Hover Shadow", async t => {
    const component = await getElementById("#hover-test");

    await t
        .expect(component.getStyleProperty("box-shadow")).eql("none");

    await t
        .hover(component)
    await t
        .expect(component.getStyleProperty("box-shadow")).eql("none"); // ?????? supposed to be rgba(0, 0, 0, 0.15) 0px 2px 12px 0px
});

test("Visuals of Never Hover Shadow", async t => {
    const component = await getElementById("#never-test");

    await t
        .expect(component.getStyleProperty("box-shadow")).eql("none");

    await t
        .hover(component)
        .expect(component.getStyleProperty("box-shadow")).eql("none");
});

/** Integration Tests */
test("Integrate Card and Link Component", async t => {
    const component = getInner("#link-integration", "#link-test");

    await t
        .click(component)

    const newPage = await Selector(() => document.querySelector("#card"));
    await t.expect(newPage.textContent).eql("¶ Card");
});


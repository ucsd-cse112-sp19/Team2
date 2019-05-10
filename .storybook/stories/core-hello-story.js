import { storiesOf } from '@storybook/html';
import { withKnobs , text, boolean, optionsKnob as options } from '@storybook/addon-knobs';
import '../../web_components/core-hello/core-hello.js';

const stories = storiesOf('core-hello', module);
stories.addDecorator(withKnobs);
stories.add('default', () => {
    const content = text("content", "MeatSpace!");
    const rainbow = boolean('rainbow', false);
    const langOptions = {
        en: 'en',
        sp: 'sp',
        fr: 'fr'
    }
    const lang = options('lang', langOptions, 'en', {display: 'select'});
    const element = `<core-hello ${(rainbow) ? "rainbow" : ""} lang=${lang} >${content}</core-hello>`;
    return element;
});
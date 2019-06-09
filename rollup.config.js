import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import multiEntry from "rollup-plugin-multi-entry";

const CoreHello = {
  input: ['./web_components/core-hello/core-hello.js'],
  output: {
    file: 'lib/core-hello.js',
    name: 'CoreHello', 
    format: 'iife'
  }
}

const MeatButton = {
  input: ['./web_components/meat-button/meat-button.js'],
  output: {
    file: 'lib/meat-button.js',
    name: 'MeatButton', 
    format: 'iife'
  }
}

const MeatInput = {
  input: ['./web_components/meat-input/meat-input.js'],
  output: {
    file: 'lib/meat-input.js',
    name: 'MeatInput', 
    format: 'iife'
  }
}

const MeatCard = {
  input: ['./web_components/meat-card/meat-card.js'],
  output: {
    file: 'lib/meat-card.js',
    name: 'MeatCard', 
    format: 'iife'
  }
}

const MeatLink = {
  input: ['./web_components/meat-link/meat-link.js'],
  output: {
    file: 'lib/meat-link.js',
    name: 'MeatLink', 
    format: 'iife'
  }
}

const MeatImage = {
  input: ['./web_components/meat-image/meat-image.js'],
  output: {
    file: 'lib/meat-image.js',
    name: 'MeatImage', 
    format: 'iife'
  }
}

const MeatComponents = {
  input: ['./web_components/**/*.js'],
  output: {
    file: 'bundle.js',
    name: 'MeatComponents', 
    format: 'iife'
  }
}

const common = {
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    postcss({
      plugins: []
    }),
    multiEntry()
  ]
};

export default [
  Object.assign({},CoreHello, common),
  Object.assign({},MeatButton, common),
  Object.assign({},MeatInput, common),
  Object.assign({},MeatCard, common),
  Object.assign({},MeatLink, common),
  Object.assign({},MeatImage, common),
  Object.assign({},MeatComponents, common)
]
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss'


export default {
    input: 'index.js',
    output: {
      file: 'bundle.js',
      name: 'MeatSpaceElements',
      format: 'iife'
    },
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**' // only transpile our source code
      }),
      postcss({
        plugins: []
      })
    ]
  };
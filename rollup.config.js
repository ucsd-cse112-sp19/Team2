import postcss from 'rollup-plugin-postcss'

export default {
    input: 'index.js',
    output: {
      file: 'bundle.js',
      name: 'MeatSpaceElements',
      format: 'iife'
    },
    plugins: [
      postcss({
        plugins: []
      })
    ]
  };
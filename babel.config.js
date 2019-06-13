const presets = [
    [
      "@babel/preset-env",
      {
        "modules": false,
        useBuiltIns: "usage",
        // useBuiltIns: "entry",
        "corejs": "3.0.0"
      },
    ],
  ];
  
  module.exports = { presets };
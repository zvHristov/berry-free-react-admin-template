module.exports = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react'
    ],
    plugins: [
      "babel-plugin-transform-import-meta", 
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-syntax-dynamic-import"
    ]
  };
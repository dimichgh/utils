module.exports = {
  presets: [
    [
      "@babel/env",
      {
        loose: true,
        targets: {
          node: 6
        }
      }
    ]
  ],
  plugins: [
    "@babel/transform-runtime",
    "@babel/plugin-proposal-object-rest-spread"
  ],
  overrides: [
    {
      test: "packages/abort-group",
      presets: [["@babel/env", { loose: true }]]
    }
  ],
  env: {
    test: {
      plugins: ["babel-plugin-istanbul"]
    }
  }
};

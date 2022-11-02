/* eslint-disable */
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }],
  ['module-resolver',{
    root:['./src'],
    alias:{
      '@components':'./src/components',
      '@screens':'./src/screens',
      '@config':'./src/config',
      '@routes':'./src/routes',
    }
  }]
  ],
  }
}

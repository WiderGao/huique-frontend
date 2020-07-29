module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant'
    ],
    ['import', {
      libraryName: 'element-ui',
      customStyleName: (name) => `element-ui/lib/theme-chalk/${name}.css`
    }, 'element-ui'
    ]
  ]
}

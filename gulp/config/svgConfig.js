export const svgoPlugins = [
  {
    name: 'cleanupListOfValues',
    params: { floatPrecision: 0 }
  },
  {
    name: 'removeAttrs',
    params: { attrs: 'style|data.*' }
  },
  {
    name: 'removeDimensions',
    active: true
  },
];

export const svgoPluginsSprite = [...svgoPlugins];

svgoPluginsSprite.push({
  name: 'removeAttributesBySelector',
  params: {
    selectors: [
      { selector: ':not([fill="none"])', attributes: ['fill'] },
      { selector: '*', attributes: ['stroke'], }
    ]
  },
});
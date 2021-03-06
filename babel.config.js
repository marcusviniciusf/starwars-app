module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      {useTransformReactJSXExperimental: true},
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx'],
      },
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
  ],
};

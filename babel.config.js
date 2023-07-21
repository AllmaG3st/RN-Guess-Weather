module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@primitives': './src/primitives',
          '@store': './src/store',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@context': './src/context',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@data': './src/data',
          '@api': './src/api',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};

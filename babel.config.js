module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-worklets-core/plugin', 
    [
      'react-native-vision-camera/codegen',
      {
        plugins: ['face-detector'],
      },
    ],
    'react-native-reanimated/plugin', 
  ],
};

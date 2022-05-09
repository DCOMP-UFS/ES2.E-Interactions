module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
      "module-resolver", 
      {
        alias: {
          '@/context': './source/context',
          '@/screens': "./source/screens",
          '@/components': "./source/components",
          '@/assets': "./source/assets",
          '@/theme': "./source/constants",
          '@/reducers': "./source/reducers",
          '@/services': "./source/services",
          '@/navigation': "./source/navigation",
          '@/theme': './source/theme',
        }
      }]
    ]
  };
};

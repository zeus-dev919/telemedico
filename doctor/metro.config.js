// Learn more https://docs.expo.io/guides/customizing-metro
// const { getDefaultConfig } = require('expo/metro-config');
// const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();
// exports.resolver = {
//   ...defaultResolver,
//   sourceExts: [
//     ...defaultResolver.sourceExts,
//     "cjs",
//   ],
// };
// module.exports = getDefaultConfig(__dirname);
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
 const defaultSourceExts =
 require('metro-config/src/defaults/defaults').sourceExts;
module.exports = {
 transformer: {
   getTransformOptions: () => ({
     transform: {
       experimentalImportSupport: false,
       inlineRequires: true,
     },
   }),
 },
 resolver: {
   sourceExts: process.env.RN_SRC_EXT
     ? [...process.env.RN_SRC_EXT.split(',').concat(defaultSourceExts), 'cjs'] // <-- cjs added here
     : [...defaultSourceExts, 'cjs'], // <-- cjs added here
 },
};
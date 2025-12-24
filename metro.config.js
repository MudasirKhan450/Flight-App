const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
// require("./app/")
const config = getDefaultConfig(__dirname)
 
module.exports = withNativeWind(config, { input: './app/globals.css'})
// const { ignores } = require("eslint-plugin-prettier/recommended");
/* eslint-env node */

// const { getDefaultConfig } = require("expo/metro-config");
// const { withNativeWind } = require('nativewind/metro');

// const config = getDefaultConfig(__dirname)
// config.resolver.blockList = [
//     /node_modules\/@clerk\/clerk-react\/.*/,
//     /node_modules\/@clerk\/shared\/telemetry\/.*/
//   ];
  
// module.exports = withNativeWind(config, { input: './app/globals.css' })
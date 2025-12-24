const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
// import "./app/globals.css"
// import "./app/globals.csss"
const config = getDefaultConfig(__dirname)
 
module.exports = withNativeWind(config, { input: "./app/globals.css" })
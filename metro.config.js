const { getDefaultConfig } = require("expo/metro-config")
const { withNativeWind } = require("nativewind/metro")

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname)
  config.resolver.extraNodeModules = {
    "react-native-maps": require.resolve("./mock-maps.js"),
  }
  return withNativeWind(config, { input: "./global.css" })
})()

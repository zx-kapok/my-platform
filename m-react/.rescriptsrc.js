// m-ract > .rescriptsrc.js

module.exports = {
  webpack: config => {
    config.output.library = "m-react"
    config.output.libraryTarget = "umd"
    config.output.publicPath = "http://localhost:6600/"
    return config
  },
  devServer: config => {
    config.headers = {
      "Access-Control-Allow-Origin": "*",
    }
    return config
  },
}

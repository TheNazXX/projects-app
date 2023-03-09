module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      issuer: /\.[jt]sx?$/,
      options: {
        prettier: false,
        svgo: true,
        svgConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overribe: {
                  removeViewBox: false
                }
              }
            }
          ]
        },
        titleProp: true
      },
      test: /\.svg$/,
    });

    return config;
  },
}


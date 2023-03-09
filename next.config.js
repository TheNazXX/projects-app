module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      options: {
        prettier: false,
        svgo: true,
        svgConfig: {
          plugins: [
            {removeViewBox: false}
          ]
        },
        titleProp: true
      },
      test: /\.svg$/,
    });

    return config;
  },
}


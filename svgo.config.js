// svgo.config.js
module.exports = {
  multipass: true, // run multiple passes to optimize more
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // Keep IDs (don’t remove or minify them, since cleanupIDs is gone)
          cleanupIds: false,
          // Keep viewBox
          removeViewBox: false,
        },
      },
    },
    'removeDimensions', // optional: removes width/height
  ],
};

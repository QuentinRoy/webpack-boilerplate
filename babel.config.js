module.exports = api => {
  const isForProd = api.env("production");
  api.cache.using(() => isForProd);
  const presets = [
    [
      "@babel/preset-env",
      {
        // Use browserlistrc in production mode, but only compile for most
        // recent browsers in development mode.
        targets: isForProd
          ? undefined
          : {
              browsers: [
                "last 2 Chrome versions",
                "last 2 Firefox versions",
                "last 2 Safari versions",
              ],
            },
        useBuiltIns: "usage",
        modules: false,
        loose: true,
      },
    ],
  ];

  const plugins = ["@babel/plugin-syntax-dynamic-import"];

  return { presets, plugins, sourceType: "unambiguous" };
};

module.exports = api => {
  const isForProd = api.env("production");
  // const isForDev = api.env("dev");
  api.cache.never();
  const presets = [
    [
      "@babel/preset-env",
      {
        targets: { browsers: isForProd ? ">1%" : ">10%" },
        useBuiltIns: "usage",
        modules: false,
        loose: true,
      },
    ],
  ];

  const plugins = ["@babel/plugin-syntax-dynamic-import"];

  return { presets, plugins, sourceType: "unambiguous" };
};

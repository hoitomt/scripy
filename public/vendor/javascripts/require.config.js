require.config({
  baseUrl: "js",
  packages: [
    {
      name: "flight",
      location: "../vendor/javascripts/flight",
      main: "index"
    }
  ],
  shim: {
    'parse': {
      exports: 'Parse'
    }
  },
  paths: {
    jquery: jQuery,
    "es5-shim": "../vendor/javascripts/es5-shim/es5-shim",
    "es5-sham": "../vendor/javascripts/es5-shim/es5-sham",
    parse: "../vendor/parse/parse-1.2.16.min",
    "jquery-cookie": "../vendor/javascripts/jquery-cookie/jquery.cookie"
  }
});
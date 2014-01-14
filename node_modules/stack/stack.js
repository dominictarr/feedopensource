module.exports = Stack;
var Url = require('url');

function Stack(/*layers*/) {
  var error = Stack.errorHandler,
      handle = error;
  Array.prototype.slice.call(arguments).reverse().forEach(function (layer) {
    var child = handle;
    handle = function (req, res) {
      try {
        layer(req, res, function (err) {
          if (err) { return error(req, res, err); }
          child(req, res);
        });
      } catch (err) {
        error(req, res, err);
      }
    };
  });
  return handle;
}
Stack.errorHandler = function error(req, res, err) {
  if (err) {
    console.error(err.stack);
    res.writeHead(500, {"Content-Type": "text/plain"});
    res.end(err.stack + "\n");
    return;
  }
  res.writeHead(404, {"Content-Type": "text/plain"});
  res.end("Not Found\n");
};

function core(req, res, next) { next(); }

// Build a composite stack made of several layers
Stack.compose = function compose(/*layers*/) {
  // Don't bother composing singletons
  if (arguments.length == 1) { return arguments[0]; }

  var stack = core;
  Array.prototype.slice.call(arguments).reverse().forEach(function (layer) {

    var child = stack;
    stack = function (req, res, next) {
      try {
        layer(req, res, function (err) {
          if (err) { return next(err); }
          child(req, res, next);
        });
      } catch (err) {
        next(err);
      }
    };

  });

  return stack;
}

// Mounts a substack app at a url subtree
Stack.mount = function mount(mountpoint/*, stack*/) {

  var stack = Stack.compose.apply(null, Array.prototype.slice.call(arguments, 1));

  if (mountpoint.substr(mountpoint.length - 1) == "/") {
    mountpoint = mountpoint.substr(0, mountpoint.length - 1);
  }

  var matchpoint = mountpoint + "/";

  return function (req, res, next) {
    var url = req.url;
    var uri = req.uri;

    if (url.substr(0, matchpoint.length) !== matchpoint) { return next(); }

    // Modify the url
    if (!req.realUrl) { req.realUrl = url; }

    req.url = url.substr(mountpoint.length);
    if (req.uri) { req.uri = Url.parse(req.url); }

    stack(req, res, function (err) {
      req.url = url;
      req.uri = uri;
      next(err)
    });

  };

};

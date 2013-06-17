module.exports = function(errCallback, successCallback) {
  return function(err) {
    if (err != null) {
      if (typeof(errCallback) === "function") {
        return errCallback(err);
      }
    }
    var args = Array.prototype.slice.call(arguments, 1);
    return successCallback.apply(this, args);
  }
}

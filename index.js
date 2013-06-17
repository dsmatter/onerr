module.exports = function(errCallback, successCallback) {
  return function(err, data) {
    if (err != null) {
      if (typeof(errCallback) === "function") {
        errCallback(err);
      }
    }
    successCallback(data)
  }
}

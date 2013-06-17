module.exports = function(errCallback, successCallback) {
  return function(err, data) {
    if (err != null) {
      if (typeof(errCallback) === "function") {
        return errCallback(err);
      }
    }
    return successCallback(data)
  }
}

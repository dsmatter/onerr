# onerr
Simple error handling utility function

## How to install
    npm install onerr

## Usage

### JavaScript

This module allows you to replace the common ideom

    function doSomethingAsync(arg, callback) {
      // [...]
      goFetchSomethingAsync(arg, function(err, data) {
        if (err != null) {
          return callback(err);
        }
        // Do something with data
      });
    }

with

    var onerr = require("onerr");

    function doSomethingAsync(arg, callback) {
      // [...]
      goFetchSomethingAsync(arg, onerr(callback, function(data) {
        // Do something with data
      }));
    }

### CoffeeScript
It looks even nice in CoffeeScript:

    onerr = require "onerr"

    middlewareFunction = (req, res, next) ->
      # [...]
      goFetchSomethingAsync req, onerr next, (data) ->
        # Do something with data

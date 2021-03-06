'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

/**
 * Dispatch message to client
 *
 * @param {string} msg
 */
var dispatchMessage = function dispatchMessage(msg) {
  (0, _utils.callUri)(msg);
};

exports.default = dispatchMessage;
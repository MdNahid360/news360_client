"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = require("firebase/app");

var firebaseConfig = {
  apiKey: "AIzaSyASrkXGRSzlvbDl4rvapEMiqyHFZnNExxY",
  authDomain: "news360-3e469.firebaseapp.com",
  projectId: "news360-3e469",
  storageBucket: "news360-3e469.appspot.com",
  messagingSenderId: "511674130312",
  appId: "1:511674130312:web:7be594fc0d975eecc2e43d"
};
var app = (0, _app.initializeApp)(firebaseConfig);
var _default = app;
exports["default"] = _default;
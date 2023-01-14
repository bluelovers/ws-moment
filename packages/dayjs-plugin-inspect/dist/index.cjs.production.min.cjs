"use strict";

var e = require("dayjs");

const dayjsInspectPlugin = (e, t, r) => {
  t.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
    return `Dayjs<${this.format()}>`;
  };
};

Object.defineProperty(dayjsInspectPlugin, "__esModule", {
  value: !0
}), Object.defineProperty(dayjsInspectPlugin, "dayjsInspectPlugin", {
  value: dayjsInspectPlugin
}), Object.defineProperty(dayjsInspectPlugin, "default", {
  value: dayjsInspectPlugin
}), Object.defineProperty(dayjsInspectPlugin, "install", {
  value: function install() {
    return e.extend(dayjsInspectPlugin);
  }
}), Object.defineProperty(dayjsInspectPlugin, "plugin", {
  value: dayjsInspectPlugin
}), module.exports = dayjsInspectPlugin;
//# sourceMappingURL=index.cjs.production.min.cjs.map

'use strict';

var dayjs = require('dayjs');

const dayjsInspectPlugin = (option, dayjsClass, dayjsFactory) => {
  dayjsClass.prototype[Symbol.for('nodejs.util.inspect.custom')] = function () {
    return `Dayjs<${this.format()}>`;
  };
};
function install() {
  return dayjs.extend(dayjsInspectPlugin);
}
{
  Object.defineProperty(dayjsInspectPlugin, "__esModule", {
    value: true
  });
  Object.defineProperty(dayjsInspectPlugin, 'dayjsInspectPlugin', {
    value: dayjsInspectPlugin
  });
  Object.defineProperty(dayjsInspectPlugin, 'default', {
    value: dayjsInspectPlugin
  });
  Object.defineProperty(dayjsInspectPlugin, 'install', {
    value: install
  });
  Object.defineProperty(dayjsInspectPlugin, 'plugin', {
    value: dayjsInspectPlugin
  });
}

// @ts-ignore
module.exports = dayjsInspectPlugin;
//# sourceMappingURL=index.cjs.development.cjs.map

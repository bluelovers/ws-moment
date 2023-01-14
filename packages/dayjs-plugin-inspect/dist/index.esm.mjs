import t from "dayjs";

const dayjsInspectPlugin = (t, n, o) => {
  n.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
    return `Dayjs<${this.format()}>`;
  };
};

function install() {
  return t.extend(dayjsInspectPlugin);
}

export { dayjsInspectPlugin, dayjsInspectPlugin as default, install, dayjsInspectPlugin as plugin };
//# sourceMappingURL=index.esm.mjs.map

import dayjs, { Dayjs, PluginFunc } from 'dayjs';

export const dayjsInspectPlugin: PluginFunc = (option, dayjsClass, dayjsFactory) =>
{
	// @ts-ignore
	dayjsClass.prototype[Symbol.for('nodejs.util.inspect.custom')] = function ()
	{
		return `Dayjs<${this.format()}>`
	}
}

export { dayjsInspectPlugin as plugin }

export function install(): Dayjs
{
	return dayjs.extend(dayjsInspectPlugin)
}

export default dayjsInspectPlugin

// @ts-ignore
if (process.env.TSDX_FORMAT !== 'esm')
{
	Object.defineProperty(dayjsInspectPlugin, "__esModule", { value: true });

	Object.defineProperty(dayjsInspectPlugin, 'dayjsInspectPlugin', { value: dayjsInspectPlugin });
	Object.defineProperty(dayjsInspectPlugin, 'default', { value: dayjsInspectPlugin });

	Object.defineProperty(dayjsInspectPlugin, 'install', { value: install });
	Object.defineProperty(dayjsInspectPlugin, 'plugin', { value: dayjsInspectPlugin });
}

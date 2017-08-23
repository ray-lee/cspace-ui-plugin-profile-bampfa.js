import customForm from './custom';

export default pluginContext => ({
    default: customForm(pluginContext),
});
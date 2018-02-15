import customForm from './custom';
import miniForm from './mini';

export default pluginContext => ({
  default: customForm(pluginContext),
  mini: miniForm(pluginContext),
});

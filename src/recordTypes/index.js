import group from './group';
import intake from './intake';

export default pluginContext => ({
  group: group(pluginContext),
  intake: intake(pluginContext),
});

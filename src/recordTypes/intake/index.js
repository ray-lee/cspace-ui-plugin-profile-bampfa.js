import forms from './forms';
import fields from './fields';

export default (pluginContext) => ({
   forms: forms(pluginContext),
   fields: fields(pluginContext),
});
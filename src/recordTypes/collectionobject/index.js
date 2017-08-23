import forms from './forms';
import fields from './fields';
import { defineMessages } from 'react-intl';

export default (pluginContext) => ({
  forms: forms(pluginContext),
  fields: fields(pluginContext),
});
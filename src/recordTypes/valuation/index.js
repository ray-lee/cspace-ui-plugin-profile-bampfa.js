import forms from './forms';
import { defineMessages } from 'react-intl';

export default (pluginContext) => ({
  forms: forms(pluginContext),
});
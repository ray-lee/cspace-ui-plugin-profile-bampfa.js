import fields from './fields';
import form from './form';

export default () => configContext => ({
  extensions: {
    dimension: {
      fields: fields(configContext),
      form: form(configContext),
    },
  },
});

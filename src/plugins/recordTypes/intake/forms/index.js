import defaultForm from './default';

export default configContext => ({
  default: defaultForm(configContext),
  doorstep: {
    disabled: true,
  },
});

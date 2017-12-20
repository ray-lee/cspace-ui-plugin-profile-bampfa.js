import merge from 'lodash/merge';
import messages from './messages';
import recordTypes from './recordTypes';
import styles from '../styles/cspace-ui-plugin-profile/bampfa.css';

module.exports = () => pluginContext =>
  recordTypes(pluginContext).reduce(
    (config, configContribution) => merge(config, configContribution), {
      messages,
      className: styles.common,
      recordTypes: {
        acquisition: {
          disabled: true,
        },
        claim: {
          disabled: true,
        },
        conservation: {
          disabled: true,
        },
        exhibition: {
          disabled: true,
        },
        objectexit: {
          disabled: true,
        },
      },
    }
  );

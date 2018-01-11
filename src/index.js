import merge from 'lodash/merge';

import messages from './messages';
import recordTypes from './recordTypes';
import logo from '../images/logo.svg';
import styles from '../styles/cspace-ui-plugin-profile/bampfa.css';

module.exports = () => pluginContext => merge(
  {
    logo,
    messages,
    className: styles.common,
    prettyUrls: true,
    serverTimeZone: 'America/Los_Angeles',
    tenantId: '55',
  },
  recordTypes(pluginContext),
);

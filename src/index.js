/* global cspaceUIPluginProfileBAMPFA */
/* The cspaceUIPluginProfileBAMPFA global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import messages from './messages';
import plugins from './plugins';
import logo from '../images/logo.svg';
import styles from '../styles/cspace-ui-plugin-profile/bampfa.css';

module.exports = () => ({
  logo,
  messages,
  className: styles.common,
  mediaSnapshotSort: 'computedOrderNumber',
  prettyUrls: true,
  tenantId: '55',
  pluginInfo: {
    cspaceUIPluginProfileBAMPFA: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfileBAMPFA.name',
          defaultMessage: 'BAMPFA profile',
        },
      }),
      version: cspaceUIPluginProfileBAMPFA.packageVersion,
    },
  },
  plugins: plugins.map(plugin => plugin()),
});

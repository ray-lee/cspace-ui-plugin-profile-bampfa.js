import merge from 'lodash/merge';
import messages from './messages';
import recordTypes from './recordTypes';
import styles from '../styles/cspace-ui-plugin-profile/bampfa.css';


module.exports = () => pluginContext => {
  const result = recordTypes(pluginContext).reduce((config, plugin) => merge(config, plugin), {
    messages,
    className: styles.common,
  });
  console.log(result);
  return result;
};

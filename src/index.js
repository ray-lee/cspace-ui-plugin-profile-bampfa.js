import messages from './messages';
import recordTypes from './recordTypes';
import styles from '../styles/cspace-ui-plugin-profile/bampfa.css';

module.exports = () => pluginContext => ({
  
    messages,
    className: styles.common,
    recordTypes: recordTypes(pluginContext),

});



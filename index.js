/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from 'react-native';
// import App from './src/components/App';
import indexauth from './src/auth/indexauth';
// import App from './src/tech_stack/App';
import App from './src/Manager/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

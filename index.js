/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './src/components/App';
import indexauth from './src/auth/indexauth';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => indexauth);

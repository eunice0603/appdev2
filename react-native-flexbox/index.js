import { registerRootComponent } from 'expo';

import App from './App';
import Flex from './components/Flex';
import FlexDirectionBasics from './components/FlexDirection';
import DirectionLayout from './components/LayoutDirection';
import JustifyContentBasics from './components/JustifyContent';
import AlignItemsLayout from './components/AlignItems';
import AlignSelfLayout from './components/AlignSelf';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(AlignSelfLayout);

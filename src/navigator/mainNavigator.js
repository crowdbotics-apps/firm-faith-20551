import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList105238Navigator from '../features/ArticleList105238/navigator';
import ArticleList105237Navigator from '../features/ArticleList105237/navigator';
import ArticleList105236Navigator from '../features/ArticleList105236/navigator';
import UserProfile14105211Navigator from '../features/UserProfile14105211/navigator';
import BlankScreen0105210Navigator from '../features/BlankScreen0105210/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList105238: { screen: ArticleList105238Navigator },
ArticleList105237: { screen: ArticleList105237Navigator },
ArticleList105236: { screen: ArticleList105236Navigator },
UserProfile14105211: { screen: UserProfile14105211Navigator },
BlankScreen0105210: { screen: BlankScreen0105210Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

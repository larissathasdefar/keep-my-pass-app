import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './relay/Login';
import HomeScreen from './relay/Passes';
import DetailScreen from './relay/PassDetail';
import PassFormScreen from './relay/PassForm';
import SignUpScreen from './relay/SignUp';

const AppNavigator = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    Home: {screen: HomeScreen},
    Detail: {screen: DetailScreen},
    PassForm: {screen: PassFormScreen},
    SignUp: {screen: SignUpScreen},
  },
  {initialRouteName: 'Login'},
);

export default createAppContainer(AppNavigator);

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import DetailScreen from './relay/PassDetail';
import PassFormScreen from './screens/PassForm';
import SignUpScreen from './screens/SignUp';

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

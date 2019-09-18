import AsyncStorage from '@react-native-community/async-storage';
import {graphql, commitMutation} from 'react-relay';
import Environment from '../Environment';

const storeToken = async (token, onError) => {
  try {
    await AsyncStorage.setItem('KeepMyPassToken', token);
  } catch (error) {
    onError()
  }
}

const login = ({ input, onCompleted, onError }) => {
  commitMutation(Environment, {
    mutation: graphql`
    mutation LoginMutation($input: UserLoginWithEmailInput!) {
      UserLoginWithEmail(input: $input) {
        token
        error
      }
    }`,
    variables: { input },
    onCompleted: props => {
      if (props.UserLoginWithEmail.error === null) {
        storeToken(props.UserLoginWithEmail.token, onError);
        onCompleted && onCompleted(props)
      }
    },
    onError,
  })
}

export default {login}

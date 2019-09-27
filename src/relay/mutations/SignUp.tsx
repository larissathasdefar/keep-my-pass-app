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

const signUp = ({ input, onCompleted, onError }) => {
  commitMutation(Environment, {
    mutation: graphql`
    mutation SignUpMutation($input: UserRegisterWithEmailInput!) {
      UserRegisterWithEmail(input: $input) {
        token
        error
      }
    }`,
    variables: { input },
    onCompleted: props => {
      if (props.UserRegisterWithEmail.error !== null) {
        return onError(props);
      }
      storeToken(props.UserRegisterWithEmail.token, onError);
      onCompleted && onCompleted(props)
    },
    onError,
  })
}

export default {signUp}

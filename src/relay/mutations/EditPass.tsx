import {graphql, commitMutation} from 'react-relay';
import Environment from '../Environment';

const editPass = ({ input, onCompleted, onError }) => {
  commitMutation(Environment, {
    mutation: graphql`
    mutation EditPassMutation($input: PassChangePasswordInput!) {
      PassChangePassword(input: $input) {
        error
        pass {
          id
          website
          password
          user
        }
      }
    }`,
    variables: { input },
    onCompleted: props => {
      if (props.PassChangePassword.error !== null) {
        return onError(props);
      }
      onCompleted && onCompleted(props)
    },
    onError,
  })
}

export default {editPass}

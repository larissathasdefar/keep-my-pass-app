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
    onCompleted,
    onError,
  })
}

export default {editPass}

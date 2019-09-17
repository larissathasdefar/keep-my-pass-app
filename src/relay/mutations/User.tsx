import {graphql, commitMutation} from 'react-relay';
import Environment from '../Environment';

const login = ({ input, onCompleted, onError }) => {
  commitMutation(Environment, {
    mutation: graphql`
    mutation LoginMutation($input: UserLoginWithEmailInput!) {
      UserLoginWithEmail(input: $input) {
        token
        error
        clientMutationId
      }
    }
  `,
    variables: { input },
    onCompleted: props => {
      if (props.UserLoginWithEmail.error === null) {
        onCompleted && onCompleted(props)
      }
    },
    onError,
  })
}

export default {login}

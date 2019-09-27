import {graphql, commitMutation} from 'react-relay';
import Environment from '../Environment';

const createPass = ({ input, onCompleted, onError }) => {
  commitMutation(Environment, {
    mutation: graphql`
    mutation CreatePassMutation($input: PassCreateInput!) {
      PassCreate(input: $input) {
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
      if (props.PassCreate.error !== null) {
        return onError(props);
      }
      onCompleted && onCompleted(props)
    },
    onError,
  })
}

export default {createPass}

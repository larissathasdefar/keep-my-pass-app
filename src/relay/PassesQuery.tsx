import React from 'react';
import {Text, View} from 'react-native';
import {graphql, QueryRenderer} from 'react-relay';
import environment from './Environment'

const Passes = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query PassesQuery {
        passes {
          edges {
            node {
              id
              website
              login
              password
            }
          }
        }
      }
    `}
    variables={{}}
    render={({error, props}) => {
      console.log(props)
      if (error) {
        return <Text>Error!</Text>;
      }
      if (!props) {
        return <Text>Loading...</Text>;
      }
      return <Text>Diz que vai filhoo</Text>;
    }}
  />
)

export default Passes;

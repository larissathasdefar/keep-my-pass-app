import React from 'react';
import {Text, View} from 'react-native';
import {graphql, createFragmentContainer} from 'react-relay';
import createQueryRenderer from './QueryRender';
import environment from './Environment'

const Passes = (props) => (
  <View>
    {console.log(props)}
    <Text>aaa</Text>
  </View>
);

const PassesFragmentContainer = createFragmentContainer(
  Passes, {
  passes: graphql`
    fragment PassesQuery_passes on Query {
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
  `,
});

const PassesQuery = createQueryRenderer(
  PassesFragmentContainer,
  Passes,
  {
    query: graphql`
      query PassesQuery {
        ...PassesQuery_passes
      }
    `,
    getFragmentProps: ({ passes }) => ({passes}),
  },
);

export default PassesQuery;


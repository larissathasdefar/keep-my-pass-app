import React from 'react';
import {Text, View} from 'react-native';
import {graphql, createFragmentContainer} from 'react-relay';
import createQueryRenderer from './QueryRender';

type IPasses = {
  passes: [{
    website: string,
    login: string,
    password: string,
    _id: string,
  }]
}

const Passes = ({ passes }: IPasses) => (
  <View>
    {/* <Text>{Object.keys(passes)}</Text> */}
    <Text>{passes}</Text>
  </View>
);

export const PassesFragmentContainer = createFragmentContainer(
  Passes, {
  passes: graphql`
    fragment PassesQuery_passes on Query {
      passes(email: $email) {
          edges {
            node {
              website,
              login,
              password,
              _id
            }
          }
      }
    },
  `,
});

const PassesQuery = createQueryRenderer(
  PassesFragmentContainer,
  Passes,
  {
    query: graphql`
      query PassesQuery($email: String!) {
        ...PassesQuery_passes
      }
    `,
    queriesParams: ({email}) => ({email}),
    getFragmentProps: ({ passes }: IPasses) => ({passes}),
  },
);

export default PassesQuery;

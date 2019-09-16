import React from 'react';
import {Text, View} from 'react-native';
import {graphql, createFragmentContainer} from 'react-relay';
import createQueryRenderer from './QueryRender';

type IPass = {
  pass: {
    website: string,
    login: string,
    password: string,
    _id: string,
  }
}

const Pass = ({ pass }: IPass) => (
  <View>
    <Text>Service: {pass.website}</Text>
    <Text>Login: {pass.login}</Text>
    <Text>Password: {pass.password}</Text>
  </View>
);

export const PassFragmentContainer = createFragmentContainer(
  Pass, {
  pass: graphql`
    fragment PassQuery_pass on Pass {
      website,
      login,
      password,
      _id
    },
  `,
});

const PassQuery = createQueryRenderer(
  PassFragmentContainer,
  Pass,
  {
    query: graphql`
      query PassQuery($id: ID!) {
        pass(id: $id) {
          ...PassQuery_pass
        }
      }
    `,
    queriesParams: ({id}) => ({id}),
    getFragmentProps: ({ pass }: IPass) => ({pass}),
  },
);

export default PassQuery;

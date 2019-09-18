import React from 'react';
import {graphql, createFragmentContainer} from 'react-relay';
import createQueryRenderer from './QueryRender';
import PassDetail from '../components/PassDetail/PassDetail'
import {PassQueryResponse} from './__generated__/PassQuery.graphql'

const Pass = ({ pass }: PassQueryResponse) => <PassDetail pass={pass} />;

export const PassFragmentContainer = createFragmentContainer(
  Pass, {
  pass: graphql`
    fragment PassQuery_pass on Pass {
      website,
      login,
      password,
      id
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
    getFragmentProps: ({ pass }: PassQueryResponse) => ({pass}),
  },
);

export default PassQuery;

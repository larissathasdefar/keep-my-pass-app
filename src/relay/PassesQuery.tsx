import React from 'react';
import {Text, View} from 'react-native';
import {graphql, createFragmentContainer, createPaginationContainer} from 'react-relay';
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
    <Text>aaa{passes}</Text>
  </View>
);

const query = graphql`
  query PassesQuery (
    $count: Int!,
    $cursor: String,
    $email: String!
  ) {
    ...PassesQuery_query
  }
`

const PassesPaginationContainer = createPaginationContainer(
  Passes,
  {
    query: graphql`
      fragment PassesQuery_query on Query {
        passes(
          first: $count
          after: $cursor
          email: $email
        ) @connection(key: "Passes_passes") {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              _id
              website
              login
              password
            }
          }
        }
      }
    `,
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.query && props.query.passes;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, { count, cursor, email }, fragmentVariables) {
      return {
        count,
        cursor,
        email,
      };
    },
    variables: { cursor: null },
    query,
  },
);

export default
  createQueryRenderer(
    PassesPaginationContainer,
    Passes,
    {
      query,
      variables: {cursor: null, count: 1, email: "larissa@lala.com"},
    },
  );

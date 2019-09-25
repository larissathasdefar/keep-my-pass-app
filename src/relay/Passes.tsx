import React, {Fragment, Component} from 'react';
import {Text, Clipboard} from 'react-native';
import {graphql, createPaginationContainer} from 'react-relay';
import styled from 'styled-components';
import Base from '../components/Base/Base';
import Button from '../components/Button/Button';
import Colors from '../components/colors';
import createQueryRenderer from './QueryRender';

const ScrollableArea = styled.ScrollView`
  flex: 10;
`;

const Header = styled.Text`
  flex: 1;
  font-size: 16;
  text-align: center;
  margin-bottom: -16;
  margin-top: -16;
`;

const Footer = styled.View`
  flex: 1;
`;

const Section = styled.View`
  margin: 8px 0px;
  padding: 8px 0px;
  border-top-color: #cccccc;
  border-top-width: ${({first}) => (first ? 0 : 1)};
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Description = styled.Text`
  margin-top: 8;
  font-size: 18;
  color: ${Colors.dark};
`;

const Bold = styled(Description)`
  font-weight: 600;
`;

const TouchArea = styled.TouchableOpacity`
  width: 82%;
`;

const writeToClipboard = async (pass) => {
  await Clipboard.setString(pass);
};

class Passes extends Component {
  _loadMore() {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }
    // TODO: refetch

    this.props.relay.loadMore(
      2,  // Fetch the next pass item
      error => {
        error && console.log('loadMore: ', error);
      },
    );
  }

  render() {
    if (!this.props) {
      return <Text>Loading...</Text>;
    }

    const {query, navigation, relay} = this.props;
    const items = query.passes.edges;
    return (
      <Base>
        <Header>Click on the emails to see the password or create a new one.</Header>

        <ScrollableArea>
          {
            items.length === 0
              ? (
                <Fragment>
                  <Description>I'm feeling empty... so...</Description>
                  <Description>Could you create a new password to make me feel better? :(</Description>
                </Fragment>
              )
              : items.map(({ node: pass }, index) => (
                <Section key={pass.id} first={index === 0}>
                  <TouchArea onPress={() => navigation.navigate('Detail', {id: pass.id})}>
                    <Description>
                      <Bold>Service:</Bold> {pass.website}
                    </Description>
                    <Description>
                      <Bold>Login:</Bold> {pass.login}
                    </Description>
                  </TouchArea>
                  <Button title="Copy" onPress={() => writeToClipboard(pass.password)} />
                </Section>
              ))
          }
          {
            relay.hasMore() && (
              <Button
                title="Load More"
                onPress={() => this._loadMore()}
              />
            )
          }
      </ScrollableArea>

      <Footer>
        <Button
          title="Add a password"
          onPress={() => navigation.navigate('PassForm')}
        />
      </Footer>
      </Base>
    );
  }
}

const PassesPaginationContainer = createPaginationContainer(
  Passes,
  {
    query: graphql`
      fragment Passes_query on Query {
        passes(
          first: $count
          after: $cursor
        ) @connection(key: "Passes_passes") {
          pageInfo {
            hasNextPage
            endCursor
          }
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
    getVariables(props, { count, cursor }, fragmentVariables) {
      return {
        count,
        cursor,
      };
    },
    variables: { cursor: null },
    query: graphql`
      query PassesPaginationQuery (
        $count: Int!,
        $cursor: String
      ) {
        ...Passes_query
      }
    `,
  },
);


export default createQueryRenderer(
  PassesPaginationContainer,
  Passes,
  {
    query: graphql`
      query PassesQuery(
        $count: Int!,
        $cursor: String
      ) {
        ...Passes_query
      }
    `,
    variables: {cursor: null, count: 2},
  },
);

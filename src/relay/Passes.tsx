import React, {Component} from 'react';
import {Text, Clipboard} from 'react-native';
import {graphql, createPaginationContainer} from 'react-relay';
import styled from 'styled-components';
import Base from '../components/Base/Base';
import Button from '../components/Button/Button';
import Colors from '../components/colors';
import createQueryRenderer from './QueryRender';

const NoItems = styled.View`
  flex: 10;
  justify-content: center;
  align-items: center;
`;

const FlatListArea = styled.FlatList`
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

const Separator = styled.View`
  background-color: #cccccc;
  height: 1;
  width: 100%;
`;

const Section = styled.View`
  margin: 8px 0px 16px 0px;
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
  state = {
    isFetchingTop: false,
  };

  handleRefresh = () => {
    const { passes } = this.props.query;

    if (this.props.relay.isLoading()) {
      return;
    }

    this.setState({isFetchingTop: true})

    this.props.relay.refetchConnection(passes.edges.length, err => {
      this.setState({isFetchingTop: false});
    });
  };

  handleLoadMore() {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }

    // Fetch the next pass item
    this.props.relay.loadMore(2, error => error && console.log('loadMoreError: ', error));
  }

  renderItem = ({item}) => {
    const pass = item.node
    return (
      <Section key={pass.id}>
        <TouchArea
          onPress={() => this.props.navigation.navigate('Detail', {id: pass.id})}>
          <Description>
            <Bold>Service:</Bold> {pass.website}
          </Description>
          <Description>
            <Bold>Login:</Bold> {pass.login}
          </Description>
        </TouchArea>
        <Button title="Copy" onPress={() => writeToClipboard(pass.password)} />
      </Section>
    )
  }

  renderFooter = () => {
    return this.props.relay.hasMore() && (
      <Button
        title="Load More"
        onPress={() => this.handleLoadMore()}
      />
    )
  }

  render() {
    if (!this.props) {
      return <Text>Loading...</Text>;
    }

    const {query, navigation} = this.props;
    return (
      <Base>
        <Header>Click on the emails to see the password or create a new one.</Header>

        {
          query.passes.edges.length > 0
            ? (
              <FlatListArea
                data={query.passes.edges}
                renderItem={this.renderItem}
                keyExtractor={item => item.node.id}
                onRefresh={this.handleRefresh}
                refreshing={this.state.isFetchingTop}
                ItemSeparatorComponent={() => <Separator />}
                ListFooterComponent={this.renderFooter}
              />
            )
            : (
              <NoItems>
                <Description>I'm feeling so empty...</Description>
                <Description>Could you create a new password to make me feel better? :(</Description>
              </NoItems>
            )
        }

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

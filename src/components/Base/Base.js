import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components';
import Colors from '../colors';

const ScrollView = styled.ScrollView`
  background-color: ${Colors.white};
  flex: 1;
`;

const Body = styled.View`
  background-color: ${Colors.white};
  padding-top: 32;
  padding-horizontal: 24;
  flex: 1;
`;

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const Base = ({children}) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{flex: 1}}>
          <Body>{children}</Body>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default Base;

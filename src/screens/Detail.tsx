import React from 'react';
import Pass from '../relay/PassQuery';

const Detail = ({navigation}) => <Pass id={navigation.getParam('id')} />;

export default Detail;

import React from 'react';
import styled from 'styled-components';
import Colors from '../colors';

const Wrapper = styled.TouchableOpacity`
  background-color: ${({color}) =>
    color === 'secondary' ? Colors.white : Colors.primary};
  margin-top: 10;
  align-items: center;
  padding: 10px;
  border-radius: 4;
`;

const Text = styled.Text`
  color: ${({color}) => (color === 'secondary' ? Colors.dark : Colors.white)};
`;

type IProps = {
  title?: string,
  color?: 'primary' | 'secondary',
  children?: Node,
  onPress?: () => void,
};

const Button = ({children, title, color = 'primary', onPress}: IProps) => (
  <Wrapper onPress={onPress} color={color}>
    {children}
    {title ? <Text color={color}>{title}</Text> : children}
  </Wrapper>
);

export default Button;

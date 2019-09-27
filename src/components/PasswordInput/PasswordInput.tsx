import React, {useState} from 'react';
import styled from 'styled-components';
import {TextInput, Text} from 'react-native';

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border: 1px solid #cccccc;
  padding: 8px;
  margin-top: 4px;
  border-radius: 4;
`;

const ShowHide = styled.TouchableOpacity`
  width: 30px;
`;

type IProps = {
  value?: string,
  placeholder?: string,
  onChangeText?: (string) => void,
};

const PasswordInput = ({value, placeholder, onChangeText}: IProps) => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <Wrapper>
      <TextInput
        secureTextEntry={hidePassword}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={{width: '78%'}}
      />
      <ShowHide onPress={() => setHidePassword(!hidePassword)}>
        <Text>{hidePassword ? '👁' : '👀'}</Text>
      </ShowHide>
    </Wrapper>
  );
}

export default PasswordInput;

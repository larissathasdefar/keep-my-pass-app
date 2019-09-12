import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.TextInput`
  height: 40px;
  border: 1px solid #cccccc;
  padding: 8px;
  margin-top: 4px;
  border-radius: 4;
`;

type IProps = {
  value?: string,
  placeholder?: string,
  keyboardType?: string,
  secureTextEntry?: boolean,
  onChangeText?: (string) => void,
};

const TextInput = ({
  value,
  placeholder,
  keyboardType,
  secureTextEntry,
  onChangeText,
}: IProps) => (
  <Wrapper
    placeholder={placeholder}
    value={value}
    keyboardType={keyboardType}
    secureTextEntry={secureTextEntry}
    onChangeText={onChangeText}
  />
);

export default TextInput;

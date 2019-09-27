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
  autoCapitalize?: string,
  onChangeText?: (string) => void,
};

const TextInput = ({
  value,
  placeholder,
  keyboardType,
  secureTextEntry,
  onChangeText,
  autoCapitalize,
}: IProps) => (
  <Wrapper
    placeholder={placeholder}
    value={value}
    keyboardType={keyboardType}
    secureTextEntry={secureTextEntry}
    autoCapitalize={autoCapitalize}
    onChangeText={onChangeText}
  />
);

export default TextInput;

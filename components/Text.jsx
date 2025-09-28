import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';

export const Text = ({
  children,
  weight = 'normal',
  size = 16,
  lineHeight,
  color = '#000000',
  margin,
  style,
  ...props
}) => {
  const textStyle = StyleSheet.create({
    text: {
      fontWeight: weight,
      fontSize: size,
      lineHeight: lineHeight || size * 1.2, // Default line height is 1.2 times font size
      color: color,
      margin: margin,
    },
  });

  return (
    <RNText style={[textStyle.text, style]} {...props}>
      {children}
    </RNText>
  );
};

import React from 'react';
import {TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import {Text} from './Text';

export const Button = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  style,
  textStyle,
  ...props
}) => {
  const getButtonStyle = () => {
    const baseStyle = [styles.button, styles[`button_${variant}`], styles[`button_${size}`]];
    
    if (fullWidth) {
      baseStyle.push(styles.fullWidth);
    }
    
    if (disabled || loading) {
      baseStyle.push(styles.disabled);
    }
    
    return baseStyle;
  };

  const getTextStyle = () => {
    const baseTextStyle = [styles.text, styles[`text_${variant}`], styles[`text_${size}`]];
    
    if (disabled || loading) {
      baseTextStyle.push(styles.textDisabled);
    }
    
    return baseTextStyle;
  };

  const renderContent = () => {
    if (loading) {
      return (
        <ActivityIndicator 
          color={variant === 'primary' ? '#FFFFFF' : '#007AFF'} 
          size="small" 
        />
      );
    }

    if (icon && iconPosition === 'left') {
      return (
        <>
          {icon}
          <Text style={[getTextStyle(), textStyle]}>{title}</Text>
        </>
      );
    }

    if (icon && iconPosition === 'right') {
      return (
        <>
          <Text style={[getTextStyle(), textStyle]}>{title}</Text>
          {icon}
        </>
      );
    }

    return <Text style={[getTextStyle(), textStyle]}>{title}</Text>;
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      {...props}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  
  // Variants
  button_primary: {
    backgroundColor: '#007AFF',
  },
  button_secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  button_outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#E5E5E7',
  },
  button_ghost: {
    backgroundColor: 'transparent',
  },
  button_danger: {
    backgroundColor: '#FF3B30',
  },
  button_success: {
    backgroundColor: '#34C759',
  },
  
  // Sizes
  button_small: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  button_medium: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  button_large: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 10,
  },
  
  // States
  disabled: {
    opacity: 0.5,
  },
  fullWidth: {
    width: '100%',
  },
  
  // Text styles
  text: {
    textAlign: 'center',
    fontWeight: '600',
  },
  text_primary: {
    color: '#FFFFFF',
  },
  text_secondary: {
    color: '#007AFF',
  },
  text_outline: {
    color: '#1C1C1E',
  },
  text_ghost: {
    color: '#007AFF',
  },
  text_danger: {
    color: '#FFFFFF',
  },
  text_success: {
    color: '#FFFFFF',
  },
  
  // Text sizes
  text_small: {
    fontSize: 14,
  },
  text_medium: {
    fontSize: 16,
  },
  text_large: {
    fontSize: 18,
  },
  
  textDisabled: {
    opacity: 0.6,
  },
});

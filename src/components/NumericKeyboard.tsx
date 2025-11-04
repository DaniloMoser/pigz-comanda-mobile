import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { globalStyles, theme } from '../styles';

interface NumericKeyboardProps {
  onKeyPress: (key: string) => void;
  onBackspace: () => void;
  onConfirm?: () => void;
  showConfirm?: boolean;
}

export const NumericKeyboard: React.FC<NumericKeyboardProps> = ({
  onKeyPress,
  onBackspace,
  onConfirm,
  showConfirm = false,
}) => {
  const keys = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['.', '0', 'backspace'],
  ];

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      onBackspace();
    } else {
      onKeyPress(key);
    }
  };

  const renderKey = (key: string, index: number) => {
    const isBackspace = key === 'backspace';
    
    return (
      <TouchableOpacity
        key={index}
        style={[
          globalStyles.keyboardKey,
          isBackspace && { backgroundColor: theme.colors.gray[200] }
        ]}
        onPress={() => handleKeyPress(key)}
      >
        <Text style={{ 
          fontSize: 20, 
          fontWeight: isBackspace ? 'bold' : '600' 
        }}>
          {isBackspace ? '⌫' : key}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ padding: theme.spacing.md }}>
      {keys.map((row, rowIndex) => (
        <View key={rowIndex} style={{ 
          flexDirection: 'row',
          marginBottom: 4 
        }}>
          {row.map((key, keyIndex) => renderKey(key, keyIndex))}
        </View>
      ))}
      
      {showConfirm && onConfirm && (
        <TouchableOpacity
          style={[
            globalStyles.button, 
            globalStyles.buttonPrimary, 
            { marginTop: theme.spacing.md }
          ]}
          onPress={onConfirm}
        >
          <Text style={globalStyles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
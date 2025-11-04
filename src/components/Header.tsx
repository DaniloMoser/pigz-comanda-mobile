import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles, theme } from '../styles';

interface HeaderProps {
  title: string;
  showRefresh?: boolean;
  onRefresh?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  title, 
  showRefresh = false, 
  onRefresh 
}) => {
  return (
    <View style={globalStyles.header}>
      <Text style={[globalStyles.title, { color: theme.colors.orange }]}>
        {title}
      </Text>
      {showRefresh && (
        <TouchableOpacity onPress={onRefresh}>
          <Text style={{ fontSize: 20 }}>🔄</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
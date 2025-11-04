import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles, theme } from '../styles';
import { CashRegister } from '../types';

interface CashRegisterCardProps {
  cashRegister: CashRegister;
  onPress: (cashRegister: CashRegister) => void;
}

export const CashRegisterCard: React.FC<CashRegisterCardProps> = ({
  cashRegister,
  onPress,
}) => {
  const isInUse = cashRegister.status === 'in_use';

  return (
    <TouchableOpacity
      style={[
        globalStyles.card,
        { 
          opacity: isInUse ? 0.6 : 1,
          borderLeftWidth: 4,
          borderLeftColor: isInUse ? theme.colors.status.inUse : theme.colors.primary
        }
      ]}
      onPress={() => !isInUse && onPress(cashRegister)}
      disabled={isInUse}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: theme.colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 12,
          }}
        >
          <Text style={{ color: theme.colors.white, fontWeight: 'bold' }}>
            {cashRegister.initial}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', color: theme.colors.black }}>
            {cashRegister.name}
          </Text>
          <Text style={{ fontSize: 14, color: theme.colors.gray[500] }}>
            {cashRegister.user}
          </Text>
        </View>
      </View>
      
      {isInUse && (
        <View
          style={{
            backgroundColor: theme.colors.status.inUse,
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 12,
            alignSelf: 'flex-start',
          }}
        >
          <Text style={{ color: theme.colors.white, fontSize: 12, fontWeight: '600' }}>
            EM USO
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
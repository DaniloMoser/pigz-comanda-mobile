import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles, theme } from '../styles';
import { NumericKeyboard } from './NumericKeyboard';
import { CashRegister } from '../types';

interface CashOpenModalProps {
  cashRegister: CashRegister;
  onClose: () => void;
  onOpenCash: (initialValue: string) => void;
}

export const CashOpenModal: React.FC<CashOpenModalProps> = ({
  cashRegister,
  onClose,
  onOpenCash,
}) => {
  const [initialValue, setInitialValue] = useState('R$ 0,00');

  const handleKeyPress = (key: string) => {
    if (key === '.') return;
    
    let numericValue = initialValue.replace('R$ ', '').replace(',', '').replace(/^0+/, '');
    numericValue += key;
    numericValue = numericValue.padStart(3, '0');
    
    const reais = numericValue.slice(0, -2) || '0';
    const centavos = numericValue.slice(-2);
    const formatted = `R$ ${reais},${centavos}`;
    
    setInitialValue(formatted);
  };

  const handleBackspace = () => {
    let numericValue = initialValue.replace('R$ ', '').replace(',', '').replace(/^0+/, '');
    
    if (numericValue.length > 1) {
      numericValue = numericValue.slice(0, -1);
      numericValue = numericValue.padStart(3, '0');
      
      const reais = numericValue.slice(0, -2) || '0';
      const centavos = numericValue.slice(-2);
      const formatted = `R$ ${reais},${centavos}`;
      setInitialValue(formatted);
    } else {
      setInitialValue('R$ 0,00');
    }
  };

  const handleOpenCash = () => {
    console.log('Clicou em Abrir caixa com valor:', initialValue);
    onOpenCash(initialValue);
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <View style={{
        backgroundColor: theme.colors.white,
        borderRadius: 16,
        padding: 24,
        width: '90%',
        maxWidth: 400,
      }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: theme.colors.orange,
          marginBottom: 16,
          textAlign: 'center',
        }}>
          Abertura de caixa
        </Text>

        <Text style={{
          fontSize: 16,
          fontWeight: '600',
          marginBottom: 8,
          color: theme.colors.black,
        }}>
          {cashRegister.name}
        </Text>

        <Text style={{
          color: theme.colors.gray[500],
          marginBottom: 16,
          fontSize: 14,
        }}>
          Informe o valor inicial do caixa. (opcional)
        </Text>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: theme.colors.gray[100],
          paddingHorizontal: 12,
          paddingVertical: 8,
          borderRadius: 8,
          alignSelf: 'flex-start',
          marginBottom: 16,
        }}>
          <Text>💰</Text>
          <Text style={{ marginLeft: 8, fontSize: 14, fontWeight: '500' }}>Dinheiro</Text>
        </View>

        <View style={{
          borderWidth: 1,
          borderColor: theme.colors.gray[300],
          borderRadius: 12,
          padding: 16,
          marginBottom: 16,
          backgroundColor: theme.colors.white,
        }}>
          <Text style={{ 
            fontSize: 18, 
            fontWeight: '600', 
            color: theme.colors.black,
            textAlign: 'center' 
          }}>
            {initialValue}
          </Text>
        </View>

        <NumericKeyboard
          onKeyPress={handleKeyPress}
          onBackspace={handleBackspace}
          showConfirm={false}
        />
        
        <TouchableOpacity
          style={{
            backgroundColor: theme.colors.primary,
            paddingVertical: 16,
            paddingHorizontal: 24,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 16,
          }}
          onPress={handleOpenCash}
        >
          <Text style={{
            color: theme.colors.white,
            fontSize: 16,
            fontWeight: '600',
          }}>
            Abrir caixa
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 8,
            alignItems: 'center',
            marginTop: 8,
          }}
          onPress={onClose}
        >
          <Text style={{
            color: theme.colors.gray[500],
            fontSize: 14,
          }}>
            Fechar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
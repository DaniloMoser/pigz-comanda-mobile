import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { globalStyles, theme } from '../styles';
import { NumericKeyboard } from './NumericKeyboard';
import { CashRegister } from '../types';

interface CashPasswordModalProps {
  cashRegister: CashRegister;
  initialValue: string;
  onClose: () => void;
  onConfirm: (cashPassword: string) => void;
}

export const CashPasswordModal: React.FC<CashPasswordModalProps> = ({
  cashRegister,
  initialValue,
  onClose,
  onConfirm,
}) => {
  const [cashPassword, setCashPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleKeyPress = (key: string) => {
    if (cashPassword.length < 6 && key !== 'backspace' && key !== '.') {
      setCashPassword(prev => prev + key);
    }
  };

  const handleBackspace = () => {
    setCashPassword(prev => prev.slice(0, -1));
  };

  const handleConfirm = () => {
    if (cashPassword.length !== 6) {
      Alert.alert('Atenção', 'A senha do caixa deve ter 6 dígitos');
      return;
    }

    setIsLoading(true);
    
    // Simulação de verificação
    setTimeout(() => {
      setIsLoading(false);
      onConfirm(cashPassword);
    }, 800);
  };

  const getPasswordDisplay = () => {
    if (cashPassword.length === 0) {
      return 'Digite a senha do caixa';
    }
    return cashPassword.replace(/./g, '•');
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

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.colors.orange,
          }}>
            Senha do caixa
          </Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={{ fontSize: 24, color: theme.colors.gray[500] }}>×</Text>
          </TouchableOpacity>
        </View>

        <Text style={{
          color: theme.colors.gray[500],
          marginBottom: 16,
          fontSize: 14,
          lineHeight: 20,
        }}>
          Informe sua senha para abertura de caixa.
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
          fontSize: 14,
          color: theme.colors.gray[500],
          marginBottom: 16,
        }}>
          Valor inicial: {initialValue}
        </Text>

        <View style={{
          borderWidth: 1,
          borderColor: theme.colors.gray[300],
          borderRadius: 12,
          padding: 16,
          marginBottom: 16,
          backgroundColor: theme.colors.white,
          minHeight: 50,
          justifyContent: 'center',
        }}>
          <Text style={{ 
            fontSize: 16,
            letterSpacing: 4,
            textAlign: 'center',
            color: cashPassword.length === 0 ? theme.colors.gray[400] : theme.colors.black,
          }}>
            {getPasswordDisplay()}
          </Text>
        </View>

        <NumericKeyboard
          onKeyPress={handleKeyPress}
          onBackspace={handleBackspace}
          showConfirm={false} 
        />

        {isLoading && (
          <View style={{ alignItems: 'center', marginTop: 16 }}>
            <Text style={{ color: theme.colors.gray[500] }}>Verificando senha...</Text>
          </View>
        )}

        <View style={{ flexDirection: 'row', marginTop: 16, gap: 12 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: theme.colors.gray[200],
              paddingVertical: 16,
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={onClose}
          >
            <Text style={{
              color: theme.colors.black,
              fontSize: 16,
              fontWeight: '600',
            }}>
              Cancelar
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: theme.colors.primary,
              paddingVertical: 16,
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={handleConfirm}
            disabled={isLoading}
          >
            <Text style={{
              color: theme.colors.white,
              fontSize: 16,
              fontWeight: '600',
            }}>
              {isLoading ? '...' : 'Confirmar'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
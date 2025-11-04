import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { globalStyles, theme } from '../styles';
import { Header, NumericKeyboard } from '../components';

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState('');

  const handleKeyPress = (key: string) => {
    if (password.length < 6) {
      setPassword(prev => prev + key);
    }
  };

  const handleBackspace = () => {
    setPassword(prev => prev.slice(0, -1));
  };

  const handleLogin = () => {
    if (password.length === 6) {
      onLoginSuccess();
    }
  };

  return (
    <KeyboardAvoidingView
      style={globalStyles.safeArea}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Header title="Pigz Comanda" />
      
      <View style={[globalStyles.container, { flex: 1 }]}>
        <View style={{ alignItems: 'center', marginVertical: theme.spacing.xl }}>
          <Text style={[globalStyles.title, { textAlign: 'center' }]}>
            Olá, seja bem vindo!
          </Text>
          <Text style={{ 
            textAlign: 'center', 
            color: theme.colors.gray[500],
            marginTop: theme.spacing.sm 
          }}>
            Nome da loja em duas linhas
          </Text>
        </View>

        <View style={{ marginVertical: theme.spacing.xl }}>
          <Text style={{ 
            fontSize: theme.typography.subtitle.fontSize,
            fontWeight: '600',
            marginBottom: theme.spacing.sm,
            color: theme.colors.black,
          }}>
            Senha administrativa
          </Text>
          
          <View style={{
            backgroundColor: theme.colors.white,
            borderWidth: 1,
            borderColor: theme.colors.gray[300],
            borderRadius: theme.borderRadius.md,
            padding: theme.spacing.md,
            height: 50,
            justifyContent: 'center',
          }}>
            <Text style={{ 
              fontSize: 18,
              letterSpacing: 8,
              textAlign: 'center',
              color: theme.colors.black,
            }}>
              {password.replace(/./g, '•')}
            </Text>
          </View>
        </View>

        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <NumericKeyboard
            onKeyPress={handleKeyPress}
            onBackspace={handleBackspace}
            onConfirm={handleLogin}
            showConfirm={true}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
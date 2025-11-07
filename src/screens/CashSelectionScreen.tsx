import React, { useState } from 'react';
import { View, Text, FlatList, Modal, Alert } from 'react-native';
import { globalStyles, theme } from '../styles';
import { Header, CashRegisterCard, CashOpenModal, CashPasswordModal } from '../components';
import { CashRegister } from '../types';

const MOCK_CASH_REGISTERS: CashRegister[] = [
  {
    id: '1',
    name: 'Lecoração Geoafeeda',
    initial: 'LG',
    status: 'available',
    user: 'Geoafeeda'
  },
  {
    id: '2', 
    name: 'Rutifícoe Sivomara',
    initial: 'RS',
    status: 'in_use',
    user: 'Sivomara'
  },
  {
    id: '3',
    name: 'Gelachanel son toura',
    initial: 'GT',
    status: 'available',
    user: 'Gelachanel'
  }
];

interface CashSelectionScreenProps {
  onBack: () => void;
}

export const CashSelectionScreen: React.FC<CashSelectionScreenProps> = ({ onBack }) => {
  const [selectedCashRegister, setSelectedCashRegister] = useState<CashRegister | null>(null);
  const [showOpenModal, setShowOpenModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [selectedInitialValue, setSelectedInitialValue] = useState('');

  const handleCashRegisterPress = (cashRegister: CashRegister) => {
    setSelectedCashRegister(cashRegister);
    setShowOpenModal(true);
  };

  const handleCloseOpenModal = () => {
    setShowOpenModal(false);
    setSelectedCashRegister(null);
  };

  const handleOpenCash = (initialValue: string) => {
    setSelectedInitialValue(initialValue);
    setShowOpenModal(false);
    setShowPasswordModal(true);
  };

  const handleCashPasswordConfirm = (cashPassword: string) => {
    Alert.alert(
      'Sucesso!', 
      `Caixa ${selectedCashRegister?.name} aberto com sucesso!\nValor inicial: ${selectedInitialValue}`
    );
    setShowPasswordModal(false);
    setSelectedCashRegister(null);
    setSelectedInitialValue('');
  };

  const handleClosePasswordModal = () => {
    setShowPasswordModal(false);
    setSelectedInitialValue('');
  };

  return (
    <View style={globalStyles.safeArea}>
      <Header 
        title="Pigz Comanda" 
        showRefresh={true}
        onRefresh={() => {}}
      />
      
      <View style={globalStyles.container}>
        <Text style={{
          fontSize: 18,
          fontWeight: '600',
          marginVertical: 16,
          color: theme.colors.black,
        }}>
          Selecione o caixa:
        </Text>

        <FlatList
          data={MOCK_CASH_REGISTERS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CashRegisterCard
              cashRegister={item}
              onPress={handleCashRegisterPress}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <Modal
        visible={showOpenModal}
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}
        onRequestClose={handleCloseOpenModal}
      >
        {selectedCashRegister && (
          <CashOpenModal
            cashRegister={selectedCashRegister}
            onClose={handleCloseOpenModal}
            onOpenCash={handleOpenCash}
          />
        )}
      </Modal>

      <Modal
        visible={showPasswordModal}
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}
        onRequestClose={handleClosePasswordModal}
      >
        {selectedCashRegister && (
          <CashPasswordModal 
            cashRegister={selectedCashRegister}
            initialValue={selectedInitialValue}
            onClose={handleClosePasswordModal}
            onConfirm={handleCashPasswordConfirm}
          />
        )}
      </Modal>
    </View>
  );
};
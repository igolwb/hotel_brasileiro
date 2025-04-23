import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Nota: SVGs precisam de tratamento especial em React Native
// É necessário instalar o pacote react-native-svg
import Logo from '../../assets/logo.png'; // Assumindo que você converteu o SVG para PNG

const Header = ({ scrollToSection }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <View style={styles.logo}>
          <Image style={styles.logoImg} source={Logo} />
          <View style={styles.logoText}>
            <Text style={styles.logoTextItem}>Hotel</Text>
            <Text style={styles.logoTextItem}>Brasileiro</Text>
          </View>
        </View>

        {/* Navegação */}
        <View style={styles.navLinks}>
          <TouchableOpacity 
            style={styles.hint} 
            onPress={() => scrollToSection('quartos')}
          >
            <Text style={styles.hintText}>Ir para Quartos</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.hint} 
            onPress={() => scrollToSection('experiencias')}
          >
            <Text style={styles.hintText}>Ir para Experiências</Text>
          </TouchableOpacity>
        
          {/* Botão de Login */}
          <TouchableOpacity 
            style={styles.loginButton} 
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.loginButtonText}>Faça seu login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImg: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  logoText: {
    justifyContent: 'center',
  },
  logoTextItem: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hint: {
    marginRight: 10,
    padding: 8,
  },
  hintText: {
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 4,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Header;

import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Signup({navigation}) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/login.png')} style={styles.logo}/>
        <Text style={styles.title}>Create an account.</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.inputField}>
          <Ionicons name="person-outline" size={25} style={styles.icon}/>
          <TextInput placeholder="Name" style={styles.input} />
        </View>

        <View style={styles.inputField}>
          <Ionicons name="mail-outline" size={25} style={styles.icon}/>
          <TextInput placeholder="Email" style={styles.input} />
        </View>

        <View style={styles.inputField}>
          <Ionicons name="lock-closed-outline" size={25} style={styles.icon}/>
          <TextInput placeholder="Password" secureTextEntry style={styles.input} />
        </View>

        <View style={styles.inputField}>
          <Ionicons name="lock-closed-outline" size={25} style={styles.icon}/>
          <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} />
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.logIn}>
          <Text>Already have an account? </Text>
          <Text style={styles.logInLink} onPress={() => navigation.navigate('Login')}>Log in.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linen'
  },

  header: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  content: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },

  footer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 10
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  inputField: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 50,
    marginBottom: 15,
    width: '85%',
    paddingHorizontal: 15,
    backgroundColor: 'white',
    alignItems: 'center'
  },

  input: {
    height: 50,
    flex: 1
  },

  icon: {
    color: 'black',
    marginRight: 10
  },

  buttonContainer: {
    width: 200,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: 'white'
  },

  logIn: {
    flexDirection: 'row',
    marginTop: 10
  },

  logInLink: {
    color: 'steelblue',
    fontWeight: 'bold'
  }
});
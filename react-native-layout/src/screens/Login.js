import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/login.png')} style={styles.logo} />
        <Text style={styles.title}> Welcome! </Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.inputField}>
          <Ionicons name="mail-outline" size={25} style={styles.icon} />
          <TextInput placeholder="Email" style={styles.input}/>
        </View>

        <View style={styles.inputField}>
          <Ionicons name="lock-closed-outline" size={25} style={styles.icon} />
          <TextInput placeholder="Password" secureTextEntry style={styles.input}/>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.signUp}>
          <Text>Don't have an account yet? </Text>
          <Text style={styles.signUpLink} onPress={() => navigation.navigate('Signup')}>Sign up!</Text>
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
    justifyContent: 'flex-end',
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
    borderWidth: 1,
    borderColor: 'black',
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

  signUp: {
    flexDirection: 'row',
    marginTop: 10
  },

  signUpLink: {
    color: 'steelblue',
    fontWeight: 'bold'
  }
});
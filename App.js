import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  const [server, setServer] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar barStyle="light-content" />
      <View style={styles.wrap}>
        <Text style={styles.logo}>VISTAONE</Text>
        <Text style={styles.tag}>Your entertainment. One view.</Text>

        <View style={styles.card}>
          <Text style={styles.title}>Sign in</Text>
          <Text style={styles.note}>Use credentials from a service you are authorised to access.</Text>
          <TextInput style={styles.input} placeholder="Server URL" placeholderTextColor="#77808c"
            autoCapitalize="none" value={server} onChangeText={setServer} />
          <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#77808c"
            autoCapitalize="none" value={username} onChangeText={setUsername} />
          <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#77808c"
            secureTextEntry value={password} onChangeText={setPassword} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CONTINUE</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>VistaOne • Personal media player</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page:{flex:1,backgroundColor:'#07111f'},
  wrap:{flex:1,padding:28,justifyContent:'center'},
  logo:{fontSize:36,fontWeight:'900',letterSpacing:3,color:'#fff'},
  tag:{fontSize:16,color:'#9fb0c7',marginTop:6,marginBottom:34},
  card:{backgroundColor:'#101d2d',borderRadius:22,padding:22},
  title:{fontSize:25,fontWeight:'800',color:'#fff',marginBottom:6},
  note:{fontSize:13,lineHeight:19,color:'#9fb0c7',marginBottom:18},
  input:{backgroundColor:'#17283b',color:'#fff',padding:16,borderRadius:12,marginBottom:12,fontSize:16},
  button:{backgroundColor:'#2d7dff',padding:17,borderRadius:12,alignItems:'center',marginTop:6},
  buttonText:{color:'#fff',fontWeight:'800',letterSpacing:1},
  footer:{color:'#64748b',textAlign:'center',marginTop:24}
});

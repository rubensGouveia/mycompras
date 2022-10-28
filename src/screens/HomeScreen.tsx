
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export function HomeScreen({navigation}) {

  // useEffect(()=>{
  //   const fetchUsers = async () => {
  //     try {
        
  //       const response = await api.get('entries');
  //       console.log(response.data)
  //       if (response.status === 200) {
     
  //         return;
  //       } else {
  //         throw new Error("Failed to fetch users");
  //       }
  //     } catch (error) {
       
  //         console.log({error});
       
  //     }
  //   };
  //   fetchUsers();
  // },[])
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title='scanner' onPress={()=>navigation.navigate('barcode')} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
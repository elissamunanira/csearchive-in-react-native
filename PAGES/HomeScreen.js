

import React, {useEffect} from 'react';
import {View, Text, SafeAreaView,Image} from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
const navigation=useNavigation();
  return (
    
    <SafeAreaView style={{flex: 1,backgroundColor: '#2DB8F0'}}>
      <View style={{flex: 1, backgroundColor: 'aqua',borderTopLeftRadius:35,borderRadius:35,marginTop:150, marginBottom: 200}}>
        <View style={{flex: 1}}>
          <Mytext text="CSEARCHIVING SYSTEM" />
          <Mybutton
            title="Insert projects"
            customClick={() => navigation.navigate('Insertproject')}
          />
        
          <Mybutton style={{borderRadius: 16}}
            title="List all projects"
            customClick={() => navigation.navigate('ViewAll')}
          />
         
        </View>
      </View>
      <Text style={{fontSize: 24, textAlign: 'center', color: 'grey'}}>
         csearchive
        </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

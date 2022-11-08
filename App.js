import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const App  = ()=> {
  const [itemtext,setItem] = useState('');
  const [Items,setItems]=useState([]);
  function addItem (text){
    setItem(text);  
  }
  function addItems(){
    setItems((itemslist)=>[...itemslist,{text:itemtext,id:Math.random().toString()}]);
    setItem('');
    console.log(Items)
  }
  return (
    <View style={styles.container}>
      <View style={styles.ListItems} > 
      <FlatList data={Items} 
      renderItem={(itemData)=>{
          return (
            <View>
              <Text>{itemData.item.text}</Text>
            </View>
          )
      }} 
      keyExtractor={(item,index)=>{
        return item.id;
      }}
      />
      </View>
      <View style={styles.textInput}>
        <TextInput style={styles.input} value={itemtext}  onChangeText={addItem} placeholder='Enter your name'/>
        <TouchableOpacity style={styles.button} onPress={addItems}>
        <Text >+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    backgroundColor: '#5e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ListItems:{
    flex:4,
    padding:10,
    flexDirection:'row',
    backgroundColor:'red',
    width:'100%',

  },
  textInput:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#4287f5',
    width:'100%',
    padding:10,
    justifyContent:'space-between'
  },
  input:{
    height:50,
    backgroundColor:'#fff',
    width:'80%',
    borderRadius:10,
  },
  button:{
    height:50,
    marginLeft:10, 
    backgroundColor:'#dce6dd',
    width:'15%',
    justifyContent:'center',
    borderRadius:10,
    alignItems:'center',

  }
});

export default App;

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dialog, Portal, Title,Paragraph, Provider } from 'react-native-paper';
import {AntDesign} from 'react-native-vector-icons'
import { Button} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore'


export default function Table_({navigation,route}) {

  const db =firestore().collection('tbl_water')
  const db1=firestore().collection('tbl_booking')
  const [visible, setVisible] = React.useState(false);
  const [listspp,setlistspp]= React.useState([])
  const id = route.params.id
  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  React.useEffect(()=>{
     db.onSnapshot(querysnapshot=>{
      const list=[]
      querysnapshot.forEach(doc=>{
        const {id_water,name_water,price_water,number,image}= doc.data()
        console.log(name_water)
        list.push({
            id: doc.id,
            id_water,
            name_water,
            price_water,
            number,
            image
        })
      })
      console.log(list)
      setlistspp(list)
    })
   
  
  
  },[])
 function dathang(name,price,image,number,id_kh)
  {
      db1.add(
        {name_water:name,
        price_water:price,
         number:number,
        image:image,
        id_khachhang:id_kh,
        check: false}
      ).then(showDialog())
  
  }
  return (
        <View style={styles.container}>
          <ScrollView style={{height:490}}>
              {listspp.map(item=>(
              <View key={item.id} style={{borderColor:"#D3D3D3",borderWidth:3,justifyContent:'center'}}>
               
                <View  key={item.id}
                style={{borderRadius:80, paddingLeft:35,paddingRight:35,backgroundColor:"#ddecf7",flexDirection:'row',alignItems:'center'}}>
                     <Image style={{width:80,height:80}} source={item.image}>

                    </Image>  
                    <View style={{marginLeft:5}}> 
                      <Text style={{marginTop:10,marginBottom:35, fontSize:18,color:"#0c0c0ce8",fontWeight:'bold',width:160}}>{item.name_water}</Text>
                      <Text style={{fontSize:18,color:"#00AA00",fontStyle:'italic',fontWeight:'bold'}}> Gi?? :{item.price_water} ??</Text>
                    </View>
                    <View>
                      <TouchableOpacity style={{marginLeft:25, backgroundColor:"#3399FF", width:79, height:35,justifyContent:'center',alignItems:"center",borderRadius:80,}}onPress={()=>{
     db.onSnapshot(querysnapshot=>{
      const list=[]
      querysnapshot.forEach(doc=>{
        const {id_water,name_water,price_water,number,image}= doc.data()
        console.log(name_water)
        list.push({
            id: doc.id,
            id_water,
            name_water,
            price_water,
            number,
            image
        })
      })
      console.log(list)
      setlistspp(list)
    })
   dathang(item.name_water,item.price_water,item.image,1,id)
  
  
  }
                       
                      }>
                          <Text style={{fontSize:13,color:"#fff"}}>Ch???n</Text>
                      </TouchableOpacity>
                    </View>
                    
                </View>
              </View>
              ))}
            
          </ScrollView>
          <View style={{height:80,alignItems:'center',marginBottom:10,borderColor:"#D3D3D3", borderWidth:3, justifyContent:'center'}}>
          <TouchableOpacity style={{alignItems:'flex-start',backgroundColor:"#3399FF",width:150,borderRadius:80,flexDirection:"row"}}onPress={()=>{navigation.navigate('Gi??? h??ng',{id:id})
         
       }}>
              <AntDesign name="shoppingcart" size={50} color="#dad7d7e8"></AntDesign>
              <Text style={{color:'#FFF',alignSelf:'center',justifyContent:"center", fontSize:15,fontWeight:'bold',padding:5}}>?????t h??ng</Text>
            </TouchableOpacity>
            </View>
            <Provider >
                          <Portal >
                           <Dialog  visible={visible} onDismiss={hideDialog} style={{borderRadius:25, marginBottom:30}}>
                          <Dialog.Title style={{ justifyContent:'center',alignSelf:'center'}} >Ch??c m???ng</Dialog.Title>
                           <Dialog.Content style={{backgroundColor:"#FFF",justifyContent:"center",alignItems:'center'}}>
                              <Paragraph style={{fontSize:15}}>B???n ???? th??m m???t s???n ph???m v??o gi??? h??ng</Paragraph>
                          </Dialog.Content>
                          <Dialog.Actions style={{alignItems:"center",justifyContent:"center"}}>
                          <Button onPress={hideDialog}><Text style={{color:"#3399FF"}}>Tho??t</Text></Button>
                          </Dialog.Actions>
                          </Dialog>
                          </Portal>
                          </Provider>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  styles_btnthem:
  {
      backgroundColor: "#3399FF"
  }
});
    
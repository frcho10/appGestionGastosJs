import React, { useState } from 'react';
import { StyleSheet , Modal, View, SafeAreaView, Alert} from 'react-native';
import { Divider, List, ListItem, Card, Button, Layout, Text, TopNavigation, TopNavigationAction, Input } from '@ui-kitten/components';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { useSelector, useDispatch } from 'react-redux';
import TemplateMenu from '../TemplateMenu';
import { addCard } from '../../redux/entities/cards';





const TabTarjetas = () => {

    const dispatch = useDispatch();
    
    const [visible, setVisible] = useState(false);
    const cards = useSelector( state => state.cards.cards);

    const [valueName, setValueName] = useState('');
    const [valueDescprition, setValueDescription] = useState('');

    const [formValidate, setFormValidate] = useState(true);
    
    const iconAddCard= (props) => (
        <FontAwesome5 name='plus-circle' color={'#ffffff'} size={20}/>
    )
    const iconGoBack= () => (
        <FontAwesome5 name='chevron-left' color={'#0469ee'} size={20}/>
    )
    const renderItem = ({ item, index }) => (
        <ListItem
        title={`${item.name}`}
        description={`${item.name}`}
        />
    );

    const renderTopNavigation = () => (
        <TopNavigationAction icon={iconGoBack} onPress={() => setVisible(false)} />
    )

  const pressAddSpent = () => {
    console.log("Se da clic al add")
    setVisible(true)

  }

  const saveCard = () => {

    if ( valueName === '' || valueDescprition === ''){
        setFormValidate(false)
    } else{
        setFormValidate(true)
        createAlertSaveCard()
        
    }
  }

  const createAlertSaveCard = () =>
    Alert.alert('Atención', `¿Esás seguro de guardar la terjeta de crédito ${valueName}?`, [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Sí', onPress: () => {

        let newCard = {
            id: cards.length + 1,
            name: valueName 
        }

        dispatch(addCard(newCard));

        setVisible(false);
        setValueName('');
        setValueDescription('');
        }
    },
    ]);

  return (
        <TemplateMenu TabSelected={2}>
            <Layout 
                level='1'
            >
                <Card>
                    <List
                    data={cards}
                    ItemSeparatorComponent={Divider}
                    renderItem={renderItem}
                    />
                </Card>
                <Text>  </Text>
                <Button accessoryLeft={iconAddCard} onPress={pressAddSpent}> Añadir Tarjeta</Button>

                <Modal visible= {visible} animationType='slide'>
                    <SafeAreaView  style={{flex:1, paddingTop: Platform.OS==="android"?25:0}}>
                        <TopNavigation 
                            accessoryLeft={renderTopNavigation}
                            title='Agregar Tarjeta de Crédito'
                        />
                        <View  style={{paddingHorizontal:15}}>
                            <Text category='h6'>Nombre:</Text>
                            <Input 
                                placeholder='Ingresa el nombre'
                                value={valueName}
                                onChangeText={newValue=>setValueName(newValue)}
                                status={ !formValidate && valueName==='' ? 'danger' : 'basic' }
                            />
                            <Text category='h6'>Descripción:</Text>
                            <Input 
                                placeholder='Ingresa la descripción'
                                value={valueDescprition}
                                onChangeText={newValue=>setValueDescription(newValue)}
                                status={ !formValidate && valueDescprition==='' ? 'danger' : 'basic' }
                            />
                            <View style={styles.buttons}>
                            {
                                !formValidate ? (
                                    <Text style={{color: 'red', fontSize: 13}}> El nombre y la descripción no pueden estar vacíos.</Text>

                                ) : (
                                    <Text style={{color: 'red', fontSize: 13}}></Text>
                                )
                            }
                                <Button onPress={saveCard} > Guardar</Button>
                            </View>
                        </View> 
                    </SafeAreaView>
                </Modal>
            </Layout>
        </TemplateMenu>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 20,
  },
  buttons: {
    display: 'flex',
    alignItems: 'center'
  }
});

export default TabTarjetas
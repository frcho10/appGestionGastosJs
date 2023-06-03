import React, { useState } from 'react';
import { StyleSheet , Modal, View, SafeAreaView} from 'react-native';
import { Divider, List, ListItem, Card, Button, Layout, Text, TopNavigation, TopNavigationAction, Input } from '@ui-kitten/components';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { useSelector } from 'react-redux';
import TemplateMenu from '../TemplateMenu';





const TabTarjetas = () => {
    
    const [visible, setVisible] = useState(false);
    const cards = useSelector( state => state.cards.cards)

    const [valueName, setValueName] = useState('');
    const [valueDescprition, setValueDescription] = useState('');
    
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
                <Button accessoryLeft={iconAddCard} onPress={pressAddSpent}> Añadir Tarjeta</Button>

                <Modal visible= {visible}>
                    <SafeAreaView  style={{flex:1, paddingTop: Platform.OS==="android"?25:0}}>
                        <View>
                            <TopNavigation 
                                accessoryLeft={renderTopNavigation}
                                title='Agregar Tarjeta de Crédito'
                            />
                            <Text category='h6'>Nombre:</Text>
                            <Input 
                                placeholder='Ingresa el nombre'
                                value={valueName}
                                onChangeText={newValue=>setValueName(newValue)}
                            />
                            <Text category='h6'>Descripción:</Text>
                            <Input 
                                placeholder='Ingresa la descripción'
                                value={valueDescprition}
                                onChangeText={newValue=>setValueDescription(newValue)}
                            />
                            <View style={styles.buttons}>
                                <Button onPress={()=> console.log("Se da clic en guardar,",valueName)} > Guardar</Button>
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
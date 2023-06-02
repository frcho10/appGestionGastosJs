import React, { useState }  from 'react';
import { BottomNavigation, BottomNavigationTab, Icon , Button , Divider} from '@ui-kitten/components';
import { StyleSheet , View, Text} from 'react-native';
import { useNavigate } from 'react-router';
import { useEffect, } from 'react';
import { useSelector } from 'react-redux';

 function TemplateMenu({children, TabSelected}){

  const [selectedIndex, setSelectedIndex] = useState(TabSelected);
  const navigate = useNavigate();
  const cards = useSelector(state => state.cards.cards)

  const goToTab = (id) => {
    switch (id) {
        case 0:
          navigate('/');
          break;
        case 1:
            navigate('/ingresos');
            break;
        case 2:
            navigate('/tarjetas');
            break;
        default:
          navigate('/');
          break;
      }
  }

//   useEffect( () => {
//     console.log("Imprime selected; ", selectedIndex)
//     goToTab(selectedIndex)
//   },[selectedIndex])

    const pressAddSpent = () => {

        console.log("Se oprime boton")
        if (cards)
            cards.map((card) => {
                console.log("elemento de los cards, ",card)
            })
    }

    const iconAddSpent = (props) => (
        
        <Icon name='plus-circle-outline' {...props}/>
    )

    const iconSaldo = (props) => (
        
        <Icon name='file-text-outline' {...props} />
    )

    const iconIngreso = (props) => (
        
        <Icon name='trending-up-outline' {...props} />
    )

    const iconTarjetas = (props) => (
        
        <Icon name='credit-card-outline' {...props} />
    )
  return (
    <>
    <View style={styles.containerMain}>

    {children}
    
    
    
        
    </View>
    <Button accessoryLeft={iconAddSpent} onPress={pressAddSpent}> Añadir gasto</Button>
    <Divider />
    <BottomNavigation
            selectedIndex={selectedIndex}
            onSelect={index => goToTab(index)}
            appearance='noIndicator'
            >
            <BottomNavigationTab key={0} title='Saldo' icon={iconSaldo}/>
            <BottomNavigationTab key={1} title='Ingresos' icon={iconIngreso} />
            <BottomNavigationTab key={2} title='Tarjetas' icon={iconTarjetas} />
        </BottomNavigation>
    </>
  );
};




var styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
});


export default TemplateMenu

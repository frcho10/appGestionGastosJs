import { StyleSheet, SafeAreaView } from 'react-native';
import * as eva from "@eva-design/eva"
import {ApplicationProvider, IconRegistry} from "@ui-kitten/components"
import { NativeRouter, Routes, Route } from 'react-router-native';
import TabSaldo from './screens/Tabs/TabSaldo';
import TabIngresos from './screens/Tabs/TabIngresos';
import TabTarjetas from './screens/Tabs/TabTarjetas';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store'


export default function App() {
  return (
//<SafeAreaView style={{flex:1}}>{/* ELEMENTO QUE SE USA PARA EVITAR EL NOTCH Y EL SLIDE INFERIOR */}
    //  <PersistGate persistor={persistor}>
      //  <Provider store={store}>{/* ELEMENTOS DE EL REDUX */}
        //  <NativeRouter> {/* ESTE COMPONENTE ENGLOBA TODO EL ROUTES REEMPLAZA EL BROWSER ROUTER EN WEB */}
          //  <IconRegistry icons={EvaIconsPack} />{/* COMPONENTE PARA USAR ICONOS EN UI KITTEN SE LE MANDA POR PROP EL PAQUETE DE EVA ICONS */}
            //  <ApplicationProvider {...eva} theme={eva.light}> ESTO ES DE LA CONFIG INICIAL PARA UI KITTEN
    <SafeAreaView style={{flex:1}}>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <NativeRouter>
            <IconRegistry icons={EvaIconsPack} />
              <ApplicationProvider {...eva} theme={eva.light}>
                <Routes>
                  <Route path='/' element={<TabSaldo />} />
                  <Route path='/ingresos' element={<TabIngresos />} />
                  <Route path='/tarjetas' element={<TabTarjetas />} />
                </Routes>
              </ApplicationProvider>
          </NativeRouter>
        </Provider>
      </PersistGate>
    </SafeAreaView>
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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import {Avatar, Surface, Chip} from 'react-native-paper';
import UnCicle from './components/UnCicle';

const App = () => {
  const [info, setInfo] = useState(require('./utils/dades.json'));
  const [cicleSeleccionat, setCicleSeleccionat] = useState(null);
  const [primerCurs, setPrimerCurs] = useState(false);
  const [segonCurs, setSegonCurs] = useState(false);
  const [cursSeleccionat, setCursSeleccionat] = useState(null);

  return (
    <View style={{flex: 0.8}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'red',
          borderWidth: 1,
        }}>
        <Text style={styles.sectionTitle}>Unitat TICS</Text>
        {console.log(info.unitatTics + '\n' + cicleSeleccionat)}
        <FlatList
          horizontal={true}
          data={info.unitatTics}
          keyExtractor={unaTitulacio =>
            unaTitulacio.cicle + '-' + unaTitulacio.nomCicle
          }
          renderItem={(unaTitulacio) => (
            <UnCicle
              elCicle={unaTitulacio}
              guardaPosicio={setCicleSeleccionat}
              cicleSeleccionat={cicleSeleccionat}
            />
          )}
        />
      </View>
      <View
        style={{
          flex: 0.5,
          borderColor: 'blue',
          borderWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text style={styles.sectionTitle}>Cursos:</Text>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            margin: 5,
            padding: 3,
            justifyContent: 'space-around',
          }}>
          <Chip
            mode="flat"
            selected={primerCurs}
            onPress={() => setPrimerCurs(!primerCurs)}>
            1r Curs
          </Chip>
          <Chip
            mode="flat"
            selected={segonCurs}
            onPress={() => setSegonCurs(!segonCurs)}>
            2n Curs
          </Chip>
        </View>
      </View>
      <View style={{flex: 2, borderColor: 'green', borderWidth: 1}}>
        {cicleSeleccionat !== null ? (
          info.unitatTics[cicleSeleccionat].curs[0].profes.map(
            (unModul, index) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                  key={index}>
                  <Avatar.Icon size={36} icon={unModul.foto} />
                  <Text>{unModul.nom}</Text>
                </View>
              );
            },
          )
        ) : (
          <Text>
            Selecciona un cicle. Sempre es visualitzaran els profes de 1r curs
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  estilCard: {
    width: Dimensions.get('window').width / 3,
    margin: 5,
    padding: 3,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 9,
  },
  estilCardSeleccionat: {
    width: Dimensions.get('window').width / 3,
    margin: 5,
    padding: 3,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 9,
    backgroundColor: '#9933FF',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    flexWrap: 'wrap',
    fontSize: 14,
    fontWeight: '400',
  },
});

export default App;

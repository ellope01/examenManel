/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Avatar} from 'react-native-paper';

const App = () => {
  const [info, setInfo] = useState(require('./utils/dades.json'));

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'red',
          borderWidth: 1,
        }}>
        <Text style={styles.sectionTitle}>Llistat de Profes 2n DAM</Text>
      </View>
      <View style={{flex: 2, borderColor: 'green', borderWidth: 1}}>
        <FlatList
          data={info.unitatTics[0].curs[1].profes}
          keyExtractor={unProfe => unProfe.nom + '-' + unProfe.modul}
          renderItem={unProfe => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Avatar.Icon size={36} icon={unProfe.item.foto} />
                <Text>{unProfe.item.nom}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default App;

import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Surface} from 'react-native-paper';
/**
 * Component implementa un element d'una llista. Mostra el cicle i el nom complet del cicle
 * @param {*} elCicle Objecte que conté un element de la llista
 * atributs: index Indica la posició que ocupa en l'array de dades.
 * atributs: item Conté l'objecte (l'element) amb les dades de l'array de dades que volem mostrar.
 * @returns res
 */
const UnCicle = props => {
  /**
   * Tenim 2 estils diferents, un per a l'element seleccionat i altre per als elements que no estan seleccionats.
   * L'element pare sap quin element de l'array està seleccionat. Ací compararem si l'element que estem
   * renderitzant coincideix amb l'element seleccionat i li aplicarem un estil o altre.
   */
  return (
    <Surface
      style={
        props.cicleSeleccionat !== null &&
        props.elCicle.index === props.cicleSeleccionat
          ? styles.estilCardSeleccionat
          : styles.estilCard
      }
      elevation={4}>
      <View>
        <Text
          style={styles.sectionTitle}
          onPress={() => props.guardaPosicio(props.elCicle.index)}>
          {props.elCicle.item.cicle}
        </Text>
        <Text
          style={styles.sectionDescription}
          onPress={() => props.guardaPosicio(props.elCicle.index)}>
          {props.elCicle.item.nomCicle}
        </Text>
      </View>
    </Surface>
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
});
export default UnCicle;

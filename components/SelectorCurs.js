import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Chip} from 'react-native-paper';

const SelectorCurs = props => {
  const [primerCurs, setPrimerCurs] = useState(false);
  const [segonCurs, setSegonCurs] = useState(false);

  return (
    <View
      style={{
        flex: 0.5,
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
          onPress={() => {
            setPrimerCurs(!primerCurs);
            // props.funcioComunica(!primerCurs, segonCurs);
          }}>
          1r Curs
        </Chip>
        <Chip
          mode="flat"
          selected={segonCurs}
          onPress={() => {
            setSegonCurs(!segonCurs);
            // props.funcioComunica(primerCurs, !segonCurs);
          }}>
          2n Curs
        </Chip>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buit: {},
});
export default SelectorCurs;

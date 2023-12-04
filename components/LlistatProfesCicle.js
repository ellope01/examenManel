import React from 'react';
import {Text, View} from 'react-native';
import {Avatar} from 'react-native-paper';

const LlistatProfesCicle = props => {

  function saludo(){
    console.log("Hola ")
  }

  return (
    <View style={{flex: 2, padding: 3}}>
      {props.cicleSeleccionat !== null ? (
        props.dades.unitatTics[props.cicleSeleccionat].curs[0].profes.map(
          (unModul, index) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
                key={index}>
                {/* <Avatar.Icon size={36} icon={unModul.foto} /> */}
                <Text style={{fontSize: 16, fontWeight: '400'}}>{unModul.modul}</Text>
                <Text style={{fontSize: 16, fontWeight: '400'}}>{unModul.nom}</Text>
                <Text style={{fontSize: 16, fontWeight: '400'}}>{unModul.horesSetmanals}h</Text>

              </View>
            );
          },
        )
      ) : (
        <Text style={{fontSize: 18, fontWeight: '400'}}
        >
          Selecciona un cicle. Sempre es visualitzaran els profes de 1r curs
        </Text>
      )}
    </View>
  );
};

export default LlistatProfesCicle;

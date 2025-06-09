import React from 'react';
import {StyleSheet, View,Text} from 'react-native';
import { COLORS } from '../../../utils/colors';

const Statics = ({stats}) => {
  return (
    <View>
      <Text style={[styles.titleStyles]}>Statics</Text>
      <View style={styles.staticsView}>
        <Text style={{color: COLORS.green}}>
          Wins: <Text>{stats?.wins}</Text>
        </Text>
        <Text style={{color: COLORS.red}}>
          Losses: <Text>{stats?.losses}</Text>
        </Text>
        <Text style={{color: COLORS.yellow}}>
          Pending <Text>{stats?.pending}</Text>
        </Text>
      </View>
    </View>
  );
};

export default Statics;

const styles = StyleSheet.create({
  staticsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  titleStyles: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
  },
});

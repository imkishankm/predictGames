import React, { memo } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';
import Icon from '../../../components/Icon';
import {  getFormatedDateTime } from '../../../utils/datetime';
import Animated,{FadeIn,FadeOut} from 'react-native-reanimated';

const GameCard = ({game, onPress}) => {
  const {
    id = '',
    status = '',
    startTime = '',
    homeTeam = {},
    awayTeam = {},
    odds = {},
  } = game || {};

  const statusColor =
    status === 'inProgress'
      ? COLORS.green
      : status === 'final'
      ? COLORS.red
      : COLORS.yellow;

  const statusText =
    status === 'inProgress'
      ? 'live'
      : status === 'final'
      ? 'completed'
      : 'upcoming';

  return (
    <Animated.View entering={FadeIn} exiting={FadeOut}>
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.name}>
        {homeTeam?.name}
        <Text style={[styles.name, {color: COLORS.red}]}>{' v/s '}</Text>
        {awayTeam?.name}
      </Text>
      <Text>Odds: {odds?.spread}</Text>
      {statusText=='upcoming' && <Text>Start at: {getFormatedDateTime(startTime)}</Text>}
      <View style={styles.rowViewhead}>
        <Text style={{color: statusColor}}>{statusText}</Text>
        <View style={styles.detailRow}>
          <Text style={{color: COLORS.grey,marginRight:4,marginBottom:2}}>more</Text>
          <Icon name='chevron-right' size={14} color={COLORS.grey}/>
        </View>
      </View>
    </TouchableOpacity>
    </Animated.View>
  );
};

export default memo(GameCard);

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginTop: 12,
    backgroundColor: COLORS.white,
  },
  name: {
    fontSize: 18,
  },
  rowViewhead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailRow:{
   flexDirection: 'row',  
    alignItems: 'center',
  }
});

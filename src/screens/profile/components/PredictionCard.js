import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {getGameData} from '../../../utils/games';
import {GamesContext} from '../../../utils/contexts';

const PredictionCard = ({data, onPress}) => {
  const {
    gameId = '',
    pick = '',
    amount = 0,
    result = '',
    payout = 0,
  } = data || {};

  const [gameDetails, setGameDetails] = useState({});
  const {games = []} = useContext(GamesContext);

  useEffect(() => {
    if (gameId) {
      const gameData = getGameData(gameId, games);
      setGameDetails(gameData?.[0] || {});
    }
  }, []);

  const {status = '', homeTeam = {}, awayTeam = {}} = gameDetails || {};

  const statusColor =
    result === 'win'
      ? COLORS.green
      : status === 'loss'
      ? COLORS.red
      : COLORS.yellow;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {homeTeam?.name}
        <Text style={[styles.name, {color: COLORS.red}]}>{' v/s '}</Text>
        {awayTeam?.name}
      </Text>
      <Text>Picked Team: {pick}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text>
          Invested: <Text style={styles.investedstyle}>${amount}</Text>
        </Text>
        {!!payout && (
          <Text style={{marginLeft: 8}}>
            Payout: <Text style={styles.payoutstyle}>${payout}</Text>
          </Text>
        )}
      </View>
      <View style={styles.rowViewhead}>
        <Text style={{color: statusColor}}>{result}</Text>
      </View>
    </View>
  );
};

export default PredictionCard;

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
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  investedstyle: {
    color: COLORS.red,
  },
  payoutstyle: {
    color: COLORS.green,
  },
});

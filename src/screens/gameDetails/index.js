import React, {useContext} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../utils/colors';
import {getFormatedDateTime} from '../../utils/datetime';
import CustomButton from '../../components/CustomButton';
import {UserContext} from '../../utils/contexts';

const GameDetailScreen = ({route}) => {
  const {game = {}} = route?.params;
  const {user, setUser} = useContext(UserContext);

  const {
    id = '',
    status = '',
    startTime = '',
    homeTeam = {},
    awayTeam = {},
    odds = {},
    winner = '',
    period = '',
  } = game || {};
  const navigation = useNavigation();

  const backPress = () => {
    navigation.goBack();
  };

  const teamPickPressed = team => {
    Alert.alert('Are you sure?', `You are selecting Team "${team}"`, [
      {
        text: 'Cancel',
        onPress: () => null,
      },
      {
        text: 'Select',
        onPress: () => setPredictTeamData(team),
      },
    ]);
  };

  const setPredictTeamData = team => {
    const predictionData = {
      gameId: id,
      pick: team,
      amount: 100,
      result: 'pending',
    };
    setUser({...user, predictions: [...user?.predictions, predictionData]});
  };

  const oddsColor = odds?.spread?.startsWith('+') ? COLORS.green : COLORS.red;

  return (
    <View style={styles.container}>
      <Header title={'Game Details'} onBackPress={backPress} />
      <View style={styles.subContainer}>
        {odds?.spread && (
          <Text>
            Odds:{' '}
            <Text style={{color: oddsColor, fontWeight: 'bold'}}>
              {odds?.spread}
            </Text>
          </Text>
        )}
        {winner && (
          <Text>
            Winner Team:{' '}
            <Text style={{color: COLORS.green, fontWeight: 'bold'}}>
              {winner}
            </Text>{' '}
          </Text>
        )}
        {!winner && <Text>Favorite Team: {odds?.favorite}</Text>}
        {!!period && <Text>Period: {period}</Text>}
        {status == 'scheduled' && (
          <Text>
            Game Will Start at:{' '}
            <Text style={{color: COLORS.red}}>
              {getFormatedDateTime(startTime)}
            </Text>
          </Text>
        )}
        <Text style={styles.heading}>Home Team -</Text>
        <Text style={styles.name}>
          {homeTeam?.name} ({homeTeam?.abbreviation})
        </Text>
        <Text style={styles.name}>Record: {homeTeam?.record}</Text>
        {homeTeam?.score && (
          <Text style={styles.name}>Score: {homeTeam?.score}</Text>
        )}
        <Text style={styles.heading}>Away Team -</Text>
        <Text style={styles.name}>
          {awayTeam?.name} ({awayTeam?.abbreviation})
        </Text>
        <Text style={styles.name}>Record: {awayTeam?.record}</Text>
        {!!awayTeam?.score && (
          <Text style={styles.name}>Score: {awayTeam?.score}</Text>
        )}
        {status != 'final' && (
          <>
            <Text style={styles.heading}>Make a Prediction-</Text>
            <CustomButton
              buttonText={'Team Home Wins'}
              onPress={() => teamPickPressed(homeTeam?.abbreviation)}
            />
            <CustomButton
              buttonText={'Team Away Wins'}
              onPress={() => teamPickPressed(awayTeam?.abbreviation)}
            />
          </>
        )}
        {}
      </View>
    </View>
  );
};

export default GameDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    padding: 16,
  },
  headerComp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
  },
});

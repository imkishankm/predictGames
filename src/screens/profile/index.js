import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {UserContext} from '../../utils/contexts';
import Header from '../../components/Header';
import {COLORS} from '../../utils/colors';
import Statics from './components/Statics';
import PredictionCard from './components/PredictionCard';

const ProfileScreen = () => {
  const {user} = useContext(UserContext);
  const {stats = {}, predictions = []} = user || {};

  return (
    <View style={styles.container}>
      <Header title={'Profile'} />
      <View style={styles.subContiner}>
        <View style={styles.usernameView}>
          <Text>Username: {user?.username}</Text>
          <Text>Balance:  <Text style={{color:COLORS.green}}>${user?.balance}</Text></Text>
        </View>

        <Statics stats={stats} />
        <Text style={[styles.titleStyles]}>Predictions:</Text>
        {predictions.map((entry, index) => (
         <PredictionCard key={entry?.gameId} data={entry}/>
        ))}
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContiner: {
    padding: 16,
  },
  usernameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyles: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
  },
});

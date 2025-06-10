import React, {useCallback, useContext, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import GameCard from './components/GameCard';
import {GamesContext} from '../../utils/contexts';
import Header from '../../components/Header';
import CustomDropdown from '../../components/CustomDropdown';
import {GAME_STATUS_OPTIONS} from '../../utils/constants';

const DashboardScreen = () => {
  const [optedOption, setOptedOption] = useState(GAME_STATUS_OPTIONS[0]);
  const navigation = useNavigation();
  const {games = []} = useContext(GamesContext);

  const navigateTo = useCallback(item => {
    navigation.navigate('GameDetail', {game: item});
  });

  const _renderItem = ({item}) => {
    return <GameCard key={item?.id} game={item} onPress={() => navigateTo(item)} />;
  };

  const filteredGames =
    optedOption?.value === 'all'
      ? games
      : games.filter(game => game.status === optedOption?.value);

  const onOptionPress = option => {
    setOptedOption(option);
  };

  return (
    <View style={styles.container}>
      <Header title={'Dashboard'} />
      <View style={styles.subContainer}>
        <View style={styles.headerComp}>
          <Text style={styles.heading}>Games</Text>
          <CustomDropdown
            options={GAME_STATUS_OPTIONS}
            defaultValue={optedOption}
            onOptionPress={onOptionPress}
          />
        </View>
        <FlatList
          data={filteredGames}
          keyExtractor={item => item.id}
          renderItem={_renderItem}
          contentContainerStyle={{paddingBottom: 120}}
        />
      </View>
    </View>
  );
};

export default DashboardScreen;

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
    fontSize: 20,
  },
});

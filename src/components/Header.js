import React from 'react';
import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../utils/colors';
import Icon from './Icon';

const Header = ({title, onBackPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        {!!onBackPress && (
          <Pressable onPress={onBackPress}>
            <Icon name="chevron-left" size={24} color={COLORS.white} />
          </Pressable>
        )}
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 18,
    marginLeft: 8,
    color: COLORS.white,
  },
});

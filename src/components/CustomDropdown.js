import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {COLORS} from '../utils/colors';
import Icon from './Icon';

const CustomDropdown = ({
  options = [],
  defaultValue = {},
  onOptionPress = () => {},
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const dropDownPress = () => {
    setShowOptions(!showOptions);
  };

  const optionPress=(option)=>{
    setShowOptions(false)
    onOptionPress(option)
  }

  return (
    <View>
      <Pressable style={styles.container} onPress={dropDownPress}>
        <Text style={styles.textStyle}>{defaultValue?.label}</Text>
         <Icon name='chevron-down' size={16}/>
      </Pressable>
      {showOptions && (
        <View style={styles.optionsContainer}>
          {options?.map(option => (
            <Pressable key={option?.value} onPress={()=>optionPress(option)}>
              <Text style={styles.labelStyle}>{option.label}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderWidth: 1,
    minWidth: 100,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius:4
  },
  optionsContainer: {
    minWidth: 100,
    borderWidth: 1,
    padding: 8,
    zIndex:1,
    position:'absolute',
    backgroundColor:COLORS.white,
    top:30,
    borderRadius:4
  },
  labelStyle: {
    marginTop: 8,
    fontSize: 16,
  },
  textStyle:{
    marginRight:4
  }
});

import React from 'react';
import VIcon from 'react-native-vector-icons/FontAwesome';

const Icon = ({name = '', color ='', size = 24}) => {
  return <VIcon name={name} size={size} color={color} />;
};

export default Icon;

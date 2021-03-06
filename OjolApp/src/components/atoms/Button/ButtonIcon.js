import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconBack} from '../../../assets';

const ButtonIcon = ({...rest}) => {
  return (
    <TouchableOpacity {...rest}>
      {rest.name === 'back' && <IconBack width={25} height={25} />}
    </TouchableOpacity>
  );
};

export default ButtonIcon;

import React from 'react';
import { SvgXml  } from 'react-native-svg';
import { color } from '@style/variables';

export default function Image(props){
  return (
    <SvgXml
        style={{color: color['gray-700'] }}
       {...props}
     />
    
  );
}
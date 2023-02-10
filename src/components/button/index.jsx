import React from 'react'; 
import PropTypes from "prop-types";
import { color } from '@style/variables'
import Image from '@components/image';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

export default function Button({ image, widthIcon, heightIcon, onPress, backgroundColor, borderRadius, style, iconColor, children }) {
    let butonStyle  = {  
        backgroundColor: backgroundColor, 
        borderRadius: borderRadius,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height:70,
        ...style,
    }

    return (
        <TouchableOpacity  
            style={butonStyle}
            onPress={onPress}>
               <Text style={{fontSize: 20}}>{children}</Text>
            { image ? <Image xml={image} width={widthIcon} height={heightIcon} style={{color: color[iconColor]}} /> : null }
        </TouchableOpacity>
    )
}

Button.defaultProps = {
    image: false,
    backgroundColor: color.gray,  
    font: 'semiBold',
    onPress: ()=>{},
    widthIcon: "20",
    heightIcon: "20",
    padding: 25,
    borderRadius: 500,
    iconColor: 'black'
}


Button.propTypes = {
    image:  PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.node
      ]),
    backgroundColor: PropTypes.string, 
    widthIcon: PropTypes.string,
    heightIcon: PropTypes.string,
    font: PropTypes.string, 
    onPress: PropTypes.func,
    padding: PropTypes.number,
    borderRadius: PropTypes.number,
    iconColor: PropTypes.string,
}
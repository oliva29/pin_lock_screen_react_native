import React, { useState } from 'react';
import { Image, View, StatusBar, Platform, FlatList, Text } from 'react-native';
import PropTypes from "prop-types";
import asterisk from '@assets/asterisk.png'; 
import Button from '@components/button';
import styles from './style';
import Bg from '@assets/bg.png';
import trash from '@assets/trash.png';
import backspace from '@assets/backspace.png';
import { color } from '@style/variables';

const DATA = [
    {
        id: "1",
        title: "1",
    },
    {
        id: "2",
        title: "2",
    },
    {
        id: "3",
        title: "3",
    },
    {
        id: "4",
        title: "4",
    },
    {
        id: "5",
        title: "5",
    },
    {
        id: "6",
        title: "6",
    },
    {
        id: "7",
        title: "7",
    },
    {
        id: "8",
        title: "8",
    },
    {
        id: "9",
        title: "9",
    },
    {
        id: "0",
        title: "0",
    },
    {
        id: "b",
        title: "back",
        image: backspace,
    },
    {
        id: "c",
        title: "clear",
        image: trash,
    },
];

export default function Pin({ backgroundColorStatusBar }){
    const barStyle = Platform.OS === 'ios' ? 'dark-content' : 'light-content';
    const [validatePinStatus, setValidatePinStatus] = useState(true);

    const [dataInput, setDataInput] = useState([
        {
            id: "1",
            title: "",
        },
        {
            id: "2",
            title: "",
        },
        {
            id: "3",
            title: "",
        },
        {
            id: "4",
            title: "",
        }
    ])

    const onSubmit = async (pin) => {
      console.log(pin)
    }

    const pushPin = (title) => {
        let result = dataInput
        switch (title) {
            case 'back':
                for (const iterator of result.reverse()) {
                    if (iterator.title !== "") {
                        iterator.title = "";
                        break;
                    }
                }

                setDataInput([...result].reverse())
                break;

            case 'clear':
                for (const iterator of result) {
                    iterator.title = "";
                }

                setDataInput([...result])
                break;

            default:
                let pin = ""
                for (const iterator of result) {
                    pin = `${pin}${iterator.title}`;
                    if (iterator.title === "") {
                        iterator.title = title;

                        if (iterator.id === "4") {
                            pin = `${pin}${iterator.title}`;
                            onSubmit(pin)
                        }
                        break;
                    }
                }
                setDataInput([...result])
                break;
        }  
    }
    
    return (
        <View style={styles.container}>
             <StatusBar barStyle={barStyle} backgroundColor={backgroundColorStatusBar} animated />
             <Image
                style={styles.bg}
                source={Bg}
             />
             <View style={styles.containerHeader} >
                <View>
                    <FlatList
                        data={dataInput}
                        renderItem={({ item, index }) => (
                            <View style={{marginHorizontal: 10}}>
                                 <Button 
                                    image={item.title !== "" ? asterisk : null}  
                                    backgroundColor={item.title !== "" ? color.green : color.primary} 
                                 />
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                        numColumns={4}
                        extraData={dataInput}
                    />
                </View> 
            </View>
            <View 
               style={styles.containerBody}>
               <View>
                   <FlatList
                       data={DATA}
                       renderItem={({ item, index }) => (
                        <View style={{margin: 10}}>
                            <Button image={item?.image ? item?.image : false } widthIcon={22} heightIcon={22} onPress={e => pushPin(item.title)}>
                                {item?.image ? null : item.title }
                            </Button>
                        </View>
                       )}
                       keyExtractor={(item) => item.title}
                       numColumns={3}
                   />
               </View>
           </View>
           {validatePinStatus && (
                <View style={styles.containerMessageAlert}>
                    <Text style={styles.messageAlert}>
                        * Incorrect pin
                    </Text>
                </View>
            )}
        </View>
    )
}
 
Pin.defaultProps = {
    visible: true,
    backgroundColorStatusBar: '#2c26ac'
}

Pin.propTypes = {
    visible: PropTypes.bool,
    backgroundColorStatusBar: PropTypes.string,
}

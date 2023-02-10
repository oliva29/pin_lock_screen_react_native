import { StyleSheet } from 'react-native'; 
import { color } from '@style/variables';

export default StyleSheet.create({
    form: {
        paddingTop: 40
    },
    bg : {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        position: 'absolute',
        height: '100%',
        width: '100%'
      },
    container: {
        flex: 1,
        backgroundColor: '#fff', 
        justifyContent: 'center',
        alignContent: 'center'
    },
    containerHeader: {  
        justifyContent: 'center', 
        flexDirection: "row", 
        width: '100%', 
    },
    containerBody: {
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: "row", 
        width: '100%', 
        marginTop: 80
    },
    containerMessageAlert: {
        justifyContent: 'center',  
        flexDirection: "row", 
        paddingTop: 40,
    },
    messageAlert: { 
        fontSize: 16,
        color: color.white,
    }
})

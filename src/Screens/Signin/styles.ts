import {StyleSheet,Dimensions} from 'react-native'
import {theme } from '../../global/styles/theme'
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
      flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
   img: {
       width: '100%',
        height: 360,
       resizeMode: 'cover',
     
    
   },
   content:{
    marginTop: -40,  
    paddingHorizontal:50,
   },
   title: {
    color:theme.colors.heading,
    fontSize:40,
    textAlign: 'center',
    fontFamily:theme.fonts.title700,
    lineHeight:40,
    
   },
   subtitle: {
    fontSize:15,
    textAlign: 'center',
    color:theme.colors.heading,
    fontFamily:theme.fonts.title500,
    marginBottom:'5%'

   }
})
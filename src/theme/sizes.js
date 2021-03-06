import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

export default {
    //Window Dimessions
    screen: {
        height: screenHeight,
        width: screenWidth,

        widthHalf: screenWidth * 0.5,
        widthThird: screenWidth * 0.333
    },
    navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
    statusBarHeight: (Platform.OS === 'ios') ? 16 : 0,
    tabbarHeight: 51,

    padding: 20,
    paddingSml: 10,

    borderRadius: 2,

}
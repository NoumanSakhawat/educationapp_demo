import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import globalStyle from '../../../constants/globalStyle';
import { fontSizes, marginSizesHeight } from '../../../constants/sizes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    secondaryContainer: {
        margin: globalStyle.screenPadding,

    },
    mainHeading: {
        ...globalStyle.heading,
    },
    secondaryHeading: {
        ...globalStyle.regularTitleStyle,
        fontSize: fontSizes._18,
        fontWeight: "normal"
    },
    flatList: {
        marginVertical: marginSizesHeight._16
    },
    radioButton: {
        marginTop: marginSizesHeight._16
    },

});

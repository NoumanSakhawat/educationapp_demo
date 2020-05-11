import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
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
        fontWeight: "normal",
        marginBottom: marginSizesHeight._16
    },
    card: {
        ...globalStyle.card,
        alignSelf: 'auto',
        flexDirection: 'column',
        flexWrap: "wrap",
        alignItems: 'center',
        marginHorizontal: marginSizesHeight._1,
    },
    text: {
        ...globalStyle.textStyle_212121
    },
    checkBox: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    checkBoxSecondary: {
        flexDirection: 'row',
    },


});

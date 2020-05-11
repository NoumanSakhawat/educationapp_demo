import { StyleSheet } from "react-native";
import { marginSizesHeight, fontSizes, heightSize, marginSizesWidth } from "../../constants/sizes";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import colors from "../../constants/colors";
import globalStyle from "../../constants/globalStyle";
import { sizesSVGs } from "../../helper/LocalImages";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    logoView: {
        marginVertical: marginSizesHeight._16,
        alignSelf: 'center'
    },
    loginText: {
        ...globalStyle.heading,
        fontSize: fontSizes._30,
        alignSelf: 'center',
        paddingVertical: marginSizesHeight._16
    },
    inputContainer: {
        marginHorizontal: globalStyle.screenPadding
    },
    buttonContainer: {
        marginTop: 0,
        marginHorizontal: globalStyle.screenPadding
    },
    button: {
        marginVertical: marginSizesHeight._8
    },
    textContainer: {
        marginHorizontal: globalStyle.screenPadding,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginVertical: marginSizesHeight._1
    },
    blueText: {
        ...globalStyle.textStyle_212121,
        color: colors.text80AED4,
        fontSize: fontSizes._16
    },
    middleText: {
        ...globalStyle.textStyle_212121,
        color: colors.textBDC1C3,
        fontSize: fontSizes._16
    },
    socialContainer: {
        marginHorizontal: globalStyle.screenPadding,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: globalStyle.screenBottom
    },
    social: {
        width: sizesSVGs.social,
        height: sizesSVGs.social,
        borderRadius: 5,
        borderColor: colors.border,
        borderWidth: 0.5,
        marginHorizontal: marginSizesWidth._6

    },
});

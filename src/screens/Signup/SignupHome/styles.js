import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";
import { marginSizesHeight, fontSizes, marginSizesWidth, heightSize } from "../../../constants/sizes";
import globalStyle from "../../../constants/globalStyle";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions";
import { sizesSVGs } from "../../../helper/LocalImages";

const tc = {
    marginHorizontal: globalStyle.screenPadding,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginVertical: marginSizesHeight._1
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,

    },
    logoContainer: {
        alignSelf: 'center',
        marginVertical: marginSizesHeight._16,
        marginBottom: marginSizesHeight._30,
        marginTop: heightSize._10// globalStyle.screenTop
    },
    heading: {
        ...globalStyle.heading,
        fontSize: fontSizes._30,
        alignSelf: 'center',
        paddingVertical: marginSizesHeight._16
    },
    textContainer: {
        ...tc
    },
    textContainerWithCenter: {
        ...tc,
        alignSelf: 'center',
    },
    text: {
        ...globalStyle.textStyle_212121,
        fontSize: fontSizes._16
    },
    socialContainer: {
        marginHorizontal: globalStyle.screenPadding,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: globalStyle.screenBottom,
        marginVertical: marginSizesHeight._16
    },
    social: {
        width: sizesSVGs.social,
        height: sizesSVGs.social,
        borderRadius: 5,
        borderColor: colors.border,
        borderWidth: 0.5,
        marginHorizontal: marginSizesWidth._6

    },
    dividerContainer: {
        flexDirection: 'row'
    },
    middleText: {
        ...globalStyle.textStyle_212121,
        fontSize: fontSizes._16,
        marginHorizontal: marginSizesWidth._8,
        color: colors.textBDC1C3,
        alignSelf: 'center',
    },
    button: {
        alignSelf: 'center',
        marginVertical: marginSizesHeight._16
    },
    alreadyRegisteredText: {
        ...globalStyle.textStyle_212121,
        color: colors.textBDC1C3,
        fontSize: fontSizes._16,
    },
    loginText: {
        ...globalStyle.textStyle_212121,
        color: colors.textFC5356,
        fontSize: fontSizes._18,
    },


    LogoView: {
        width: '100%',
        height: responsiveHeight(10),
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    HeadingView: {
        width: '100%',
        marginTop: 35,
        // height: responsiveHeight(8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    writing: {
        marginTop: 30,
        // height: responsiveHeight(14),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    images: {
        marginTop: responsiveHeight(1),
        width: '100%',
        height: responsiveHeight(11),
        justifyContent: 'center',
        alignItems: 'center',
    },
    dividerView: {
        marginTop: 22,
        width: '90%',
        height: responsiveHeight(4),
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    btnView1: {
        marginTop: responsiveHeight(4),
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: responsiveHeight(10),
    },

    FooterTextView: {
        marginTop: responsiveHeight(1.5),
        flexDirection: 'row',
        alignSelf: 'center',
        width: '90%',
        height: responsiveHeight(5),
        alignItems: 'flex-end',
    },

    /******** Remove Inline Styling **************/
    headingViewText: {
        color: 'black',
        fontFamily: 'Roboto-Bold',
        fontSize: responsiveFontSize(5),
    },
    writingText: {
        textAlign: 'center',
        width: '75%',
        // color: body2,
        fontSize: responsiveFontSize(2.2),
        fontFamily: 'Roboto-Regular',
        lineHeight: 28,
    },
    google: {
        width: responsiveWidth(13),
        height: responsiveHeight(7),
        borderRadius: 5,
        borderColor: 'grey',
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    facebook: {
        marginLeft: responsiveWidth(2.5),
        width: responsiveWidth(13),
        height: responsiveHeight(7),
        borderRadius: 5,
        borderColor: 'grey',
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    divider: {
        width: '44%',
        height: responsiveHeight(0.05),
        // backgroundColor: body2,
    },
    dividerTextContainer: {
        width: '10%',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingBottom: 2
    },

    dividerText: {
        fontFamily: 'Roboto-Regular',
        textAlign: 'justify',
        // width: '15%',
        color: '#bdc1c3',
        fontSize: responsiveFontSize(2),
        textAlign: 'center',

        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerViewText: {
        color: '#bdc1c3',
        fontSize: responsiveFontSize(2),
        fontFamily: 'Roboto-Regular',
    },
    footerViewText2: {
        // color: primary,
        fontSize: responsiveFontSize(2),
        fontFamily: 'Roboto-Regular',
    },
});
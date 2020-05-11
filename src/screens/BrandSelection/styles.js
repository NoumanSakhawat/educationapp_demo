import { StyleSheet } from "react-native";
import { marginSizesHeight, widthSize, marginSizesWidth, heightSize } from "../../constants/sizes";
import globalStyle from "../../constants/globalStyle";

const cardWidth = widthSize._45;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: marginSizesHeight._16,
    },
    headingContainer: {
        marginVertical: marginSizesHeight._16,
        marginHorizontal: globalStyle.screenPadding
    },
    ScrollView: {

    },
    heading: {
        alignSelf: 'center',
        ...globalStyle.heading
    },
    secondHeading: {
        fontWeight: "normal",
        alignSelf: 'flex-start',
        ...globalStyle.regularTitleStyle,
    },
    flatList: {
        marginHorizontal: globalStyle.screenPadding,
    },
    itemContainer: {
        ...globalStyle.card,
        width: cardWidth,
        marginRight: marginSizesWidth._16,
        alignSelf: 'center',
        padding: 0
    },
    image: {
        width: cardWidth,
        height: heightSize._20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        resizeMode: 'stretch'
    },
    textContainer: {
        alignSelf: 'center',
        paddingVertical: marginSizesHeight._8
    },
    text: {
        ...globalStyle.textStyle_212121,

    }
});
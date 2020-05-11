import { StyleSheet } from "react-native";
import globalStyle from "../../constants/globalStyle";
import { marginSizesHeight } from "../../constants/sizes";

export const styles = StyleSheet.create({
    textContainer: {
        ...globalStyle.flex, marginTop: marginSizesHeight._16, marginHorizontal: globalStyle.screenPadding
    },
    dateContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        padding: 16,
        flexDirection: 'row'
    },
    date: {
        color: 'rgba(33, 33, 33, 0.5)',
        fontSize: 20,
        fontWeight: '500',
    },
    dateSubScript: {
        color: 'rgba(33, 33, 33, 0.5)',
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 38,
    }
});//end of Styles
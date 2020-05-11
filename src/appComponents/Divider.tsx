import React, { Component } from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import globalStyle from '../constants/globalStyle';
import { marginSizesHeight } from '../constants/sizes';
//END OF IMPORT's


interface componentInterface {
    style: StyleProp<ViewStyle>;
}//end of INTERFACE 

export default class Divider extends Component<componentInterface, any> {

    public static defaultProps = {
        style: null,
    };//end of DEFAULT PROPS DECLARATION

    render() {
        let { style } = this.props;
        return (
            <View style={[globalStyle.divider, style, {
                marginVertical: marginSizesHeight._16
            }]} />
        )
    } // end of Function Render

} //end of class Divider

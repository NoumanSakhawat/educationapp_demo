import React, { Component } from 'react';
import { StyleSheet, View, StyleProp, ViewStyle, Keyboard, ActivityIndicator } from 'react-native';
import { Button, DefaultTheme } from "react-native-paper";
import colors from '../constants/colors';
import globalStyle from '../constants/globalStyle';
//END OF IMPORT's


interface componentInterface {
	style?: StyleProp<ViewStyle>;
	labelStyle?: StyleProp<ViewStyle>;
	backgroundColor?: any;
	color?: any;
	text?: any;
	disabled?: boolean;
	mode?: "default" | "text";
	onPress(): any;
	loading: boolean
}//end of INTERFACE 


export default class CLPButton extends Component<componentInterface, any> {

	constructor(props: componentInterface) {
		super(props);
		this.state = {
		};
	}//end of CONSTRUCTOR

	public static defaultProps = {
		backgroundColor: colors.button,
		color: colors.buttonText,
		text: "Default",
		disabled: false,
		mode: "default",
		onPress() { },
		loading: false
	};//end of DEFAULT PROPS DECLARATION

	buttonPress = () => {
		let { onPress, loading } = this.props;
		if (loading) return
		Keyboard.dismiss();
		onPress();
	}

	renderLoading = () => {
		let { color } = this.props;
		return (<ActivityIndicator color={color} size="large" />)
	}

	render() {
		let { style, labelStyle, backgroundColor, color, text, disabled, mode, loading } = this.props;
		if (disabled) {
			backgroundColor = backgroundColor !== colors.button ? backgroundColor : colors.buttonDisable;
			color = color !== colors.buttonText ? color : colors.buttonDisableText;
		}
		if (mode === "text") {
			backgroundColor = backgroundColor !== colors.button ? backgroundColor : colors.buttonTransparent;
			color = color !== colors.buttonText ? color : colors.buttonTransparentText;
		}
		return (
			<Button style={[styles.containerStyle, style, {
				backgroundColor: backgroundColor
			}]}
				disabled={disabled}
				labelStyle={[styles.buttonLabelStyle, labelStyle, {
					color: color
				}]}
				loading={loading}
				compact={false}
				onPress={this.buttonPress}
				theme={{
					...DefaultTheme,
					colors: {
						...DefaultTheme.colors,
						primary: mode === "text" ? "rgba(255,255,255,0.8)" : color,
						backdrop: "transparent",
					},
				}}
			>
				{loading ? '' : text}
			</Button>
		)
	} // end of Function Render

} //end of class CLPButton


const styles = StyleSheet.create({
	containerStyle: {

	},
	buttonLabelStyle: {

	}
}); //end of StyleSheet STYLES

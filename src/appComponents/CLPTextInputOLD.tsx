import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import CustomIcon from '../components/CustomIcon';
import { emptyValidate } from "../helper/genericFunctions";
import { TextInputMask } from 'react-native-masked-text';

interface CTInterface {
	containerStyle: object;
	mode: "flat" | "outlined";
	keyboardType: "ascii-capable" | "decimal-pad" | "default" | "email-address" | "name-phone-pad" | "number-pad"
	| "numbers-and-punctuation" | "numeric" | "phone-pad" | "twitter" | "url" | "visible-password" | "web-search";
	error: boolean;
	errorText: any;
	secureTextEntry: boolean;

	rightIconType: 'Ionicons' | 'AntDesign' | 'Entypo' | 'EvilIcons' | 'Feather' | 'FontAwesome' | 'Fontisto' | 'MaterialCommunityIcons' | 'MaterialIcons';
	rightIconStyle: object;
	rightIconName: any;
	rightIconSize: number;
	rightIconColor: any;
	rightIconVisible: boolean;
	rightIconPress(): any;
	required: boolean;
	label: any;
	value: any;
	onChangeText(text: any): any;

	onKeyPress(event: any): any;
	onFocus(): any;
	onBlur(): any;
	maskApply: boolean;
	mask: any;
	maskType: 'credit-card' | 'cpf' | 'cnpj' | 'zip-code' | 'only-numbers' | 'money' | 'cel-phone' | 'datetime' | 'custom',
	dddMask: any;
	withDDD: boolean;

	maxLength: number;
	hideLabelAfterType: boolean;

	belowTextVisible: boolean;
	belowText: any;
};


const colors = {
	placeholderSelected: '#c3cdce',
	placeholderUnselected: '#FC5356',
	placeholderDisabled: '#dbdbdb',
	text: '#212121',
	primaryTrue: '#748891',
	primaryFalse: '#FC5356',
	underlineColor: 'transparent',
	background: '#ffffff',
	white: "#fff",
	correctIcon: '#d1d9da',
};

export default class CLPTextInput extends Component<CTInterface, any> {
	public static defaultProps = {
		containerStyle: null,
		mode: "outlined",
		keyboardType: "default",
		error: false,
		errorText: "",
		secureTextEntry: false,

		rightIconType: 'Entypo',
		rightIconName: 'eye-with-line',
		rightIconColor: colors.primaryTrue,
		rightIconSize: 30,
		rightIconStyle: null,
		rightIconVisible: true,
		required: false,

		label: "Default",
		value: null,
		onChangeText() { },
		onKeyPress() { },
		onFocus() { },
		onBlur() { },

		mask: "",
		maskType: "custom",
		dddMask: "+92 ",
		withDDD: true,
		maskApply: false,

		maxLength: 1000,
		hideLabelAfterType: false,

		belowTextVisible: false,
		belowText: null
	};

	constructor(props: CTInterface) {
		super(props);


		this.state = {
			text: '',
			selected: false,
			eyeIcon: "eye-with-line",
			eyeSecure: true,
			keyboardTypeState: "default",
			end: false
		}
	}

	onBlur = () => {
		this.setState({
			// selected: false,
			end: true
		})
	}

	onFocus = () => {
		this.setState({
			// selected: false
		})
	}

	eyePress = () => {
		let { eyeIcon } = this.state;
		if (eyeIcon === "eye") {
			this.setState({
				eyeIcon: "eye-with-line",
				eyeSecure: true,
				keyboardTypeState: "default"
			})
		}
		else if (eyeIcon === "eye-with-line") {
			if (Platform.OS === "android") {
				this.setState({
					eyeIcon: "eye",
					eyeSecure: false,
					keyboardTypeState: "visible-password"
				})
			}
			else {
				this.setState({
					eyeIcon: "eye",
					eyeSecure: false,
					keyboardTypeState: "default"
				})
			}

		}
	}

	render() {
		let { containerStyle, mode, keyboardType, error, errorText, secureTextEntry,
			rightIconColor, rightIconName, rightIconSize, rightIconStyle, rightIconType, rightIconVisible,
			label, value, onChangeText, onKeyPress, onBlur, onFocus, mask, maskType, dddMask, withDDD,
			maxLength, maskApply, hideLabelAfterType,
			belowTextVisible, belowText } = this.props;

		let { selected, eyeIcon, eyeSecure, keyboardTypeState } = this.state;

		let rightIconNameIsEye = rightIconName === "eye" || rightIconName === "eye-with-line" ? true : false;
		rightIconName = secureTextEntry ? "eye" : "check";

		label = this.state.end ? hideLabelAfterType ? "" : label : label

		if (maskApply) {
			return (
				<View style={{ ...styles.container, ...containerStyle }}>
					<TextInput
						label={label}
						value={value}
						onChangeText={text => onChangeText(text)}
						onFocus={() => { this.onFocus; onFocus() }}
						onBlur={() => { this.onBlur; onBlur() }}
						mode={mode}
						maxLength={maxLength}
						error={error}
						onKeyPress={(e) => { onKeyPress(e) }}
						keyboardType={rightIconNameIsEye && secureTextEntry ? keyboardTypeState : keyboardType}
						secureTextEntry={rightIconNameIsEye && secureTextEntry ? eyeSecure : secureTextEntry}
						theme={selected ? themeSelected : themeUnselected}
						render={props => {

							return (
								//@ts-ignore
								<TextInputMask
									type={maskType}
									{...props}
									options={{
										mask: mask,
										withDDD: withDDD,
										dddMask: dddMask
									}}
								/>
							)
						}}
					/>
					{secureTextEntry &&
						<TouchableOpacity style={styles.iconContainer} onPress={this.eyePress}>
							<CustomIcon name={rightIconNameIsEye && secureTextEntry ? eyeIcon : rightIconName} color={rightIconColor} size={rightIconSize} style={rightIconStyle} iconType={rightIconType} />
						</TouchableOpacity>
					}

					{error && emptyValidate(errorText) ? <Text style={styles.errorText}>{errorText}</Text> : null}
				</View>
			)
		}//end of EMPTY VALIDATE MASK
		else {
			return (
				<View style={{ ...styles.container, ...containerStyle }}>
					<TextInput
						label={label}
						value={value}
						onChangeText={text => onChangeText(text)}
						onFocus={() => { this.onFocus(); onFocus() }}
						onBlur={() => { onBlur(); this.onBlur(); }}
						mode={mode}
						maxLength={maxLength}
						error={error}
						onKeyPress={(e) => { onKeyPress(e) }}
						keyboardType={rightIconNameIsEye && secureTextEntry ? keyboardTypeState : keyboardType}
						secureTextEntry={rightIconNameIsEye && secureTextEntry ? eyeSecure : secureTextEntry}
						theme={selected ? themeUnselected : themeSelected}

					/>
					{secureTextEntry && rightIconVisible ?
						<TouchableOpacity style={styles.iconContainer} onPress={this.eyePress}>
							<CustomIcon name={rightIconNameIsEye && secureTextEntry ? eyeIcon : rightIconName} color={rightIconColor} size={rightIconSize} style={rightIconStyle} iconType={rightIconType} />
						</TouchableOpacity> : rightIconVisible && this.state.end ?
							<View style={styles.iconContainer}>
								<CustomIcon name={rightIconName} color={rightIconColor} size={rightIconSize} style={rightIconStyle} iconType={rightIconType} />
							</View>
							: null
					}
					{!error && emptyValidate(belowText) &&
						<View style={styles.belowTextContainer}>
							<HelperText
								type={"info"}
								visible={!error && emptyValidate(belowText)}>
								{belowText}
							</HelperText>
						</View>
					}
					{error && emptyValidate(errorText) &&
						<View style={styles.belowTextContainer}>
							<HelperText
								type={error && emptyValidate(errorText) ? "error" : "info"}
								visible={error && emptyValidate(errorText)}>
								{errorText}
							</HelperText>
						</View>
					}
				</View>
			)
		}

	} // end of Function Render
} //end of class CLPTextInput

const styles = StyleSheet.create({
	container: {
		marginTop: "7%",
		// marginVertical: 16,
		width: "90%",
		alignSelf: 'center'
	},
	iconContainer: {
		zIndex: 1,
		position: 'absolute',
		right: 10,
		top: "25%",
		justifyContent: 'center'
	},
	belowTextContainer: {
		marginLeft: -10
	},
	errorText: {

	}
});


const themeUnselected = {
	colors: {
		placeholder: colors.placeholderUnselected,
		text: colors.text,
		primary: colors.primaryFalse,
		underlineColor: colors.underlineColor,
		background: colors.background,
	},
};
const themeSelected = {
	colors: {
		placeholder: colors.placeholderSelected,
		text: colors.text,
		primary: colors.primaryTrue,
		underlineColor: colors.underlineColor,
		background: colors.background,
	},
};
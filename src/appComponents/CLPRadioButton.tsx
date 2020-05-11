import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, Image, Platform, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { TouchableRipple, RadioButton } from 'react-native-paper';

interface CRBInterface {
	style: object;
	checked: boolean;
	checkIcon: string;
	unCheckIcon: string;
	value: any;
	name: any;
	checkColor: any;
	unCheckColor: any;
	onPress(): string;
	nameStyle: object;
	rippleColor: any;
}

export default class CustomRadioButton extends Component<CRBInterface, any> {
	public static defaultProps = {
		checkIcon: 'md-radio-button-on',
		unCheckIcon: 'ios-radio-button-off',
		name: 'Default',
		value: 0,
		nameStyle: null,
		rippleColor: null
	};

	constructor(props: CRBInterface) {
		super(props);
	}

	render() {
		let { style, checked, onPress, checkIcon, unCheckIcon, value, name, rippleColor, checkColor, unCheckColor, nameStyle } = this.props;

		checkColor = checkColor ? checkColor : colors.FC5356;
		unCheckColor = unCheckColor ? unCheckColor : colors.A6A6A6;
		rippleColor = rippleColor ? rippleColor : colors.FC5356;

		return (
			<View style={[styles.mainContainer, { ...style }]}>
				{Platform.OS === 'ios' ? (
					<View style={styles.radioButtonIOSContainer}>
						<TouchableRipple
							onPress={() => {
								onPress();
							}}
							rippleColor={rippleColor}
						>
							<Icon
								name={checked ? checkIcon : unCheckIcon}
								color={checked ? checkColor : unCheckColor}
								size={25}
								style={styles.radioButtonIcon}
							/>
						</TouchableRipple>
					</View>
				) : (
						<RadioButton
							value={value}
							status={checked ? 'checked' : 'unchecked'}
							onPress={() => {
								onPress();
							}}
							color={checkColor}
							uncheckedColor={unCheckColor}
						/>
					)}
				<TouchableRipple
					onPress={() => {
						onPress();
					}}
					rippleColor={colors.transparent}
				>
					<Text style={{ ...styles.radioButtonText, ...nameStyle }}>{name}</Text>
				</TouchableRipple>
			</View>
		);
	} // end of Function Render
} //end of class CustomRadioButton

const styles = StyleSheet.create({
	mainContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		// justifyContent: 'center'
	},
	radioButtonIOSContainer: {
		flexDirection: 'row',
		marginTop: responsiveHeight(0.54),
		left: 10,
	},

	radioButtonIcon: {
		marginRight: 15,
	},
	radioButtonText: {
		fontFamily: 'Roboto-Regular',
		// marginTop: responsiveHeight(0.54),
		color: '#212121',
		fontSize: responsiveFontSize(2.5),
		left: 20,
	},
}); //end of StyleSheet STYLES

const colors = {
	FC5356: '#FC5356',
	A6A6A6: '#A6A6A6',
	212121: '#212121',
	transparent: 'transparent',
};

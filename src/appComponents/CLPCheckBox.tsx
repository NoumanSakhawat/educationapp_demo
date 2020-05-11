import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Checkbox, TouchableRipple } from 'react-native-paper';
import Ionicon from 'react-native-vector-icons/Ionicons';

interface CCBInterface {
	style: object;
	onPress(): any;
	checked: boolean;
	rippleColor: any;
	unCheckColor: any;
	checkColor: any;
	disabled: boolean;
}

const colors = {
	FC5356: '#FC5356',
	A6A6A6: '#A6A6A6',
};

export default class CLPCheckBox extends Component<CCBInterface, any> {
	public static defaultProps = {
		checked: false,
		rippleColor: null,
		checkColor: null,
		unCheckColor: null,
		disabled: false
	};

	constructor(props: CCBInterface) {
		super(props);
		this.state = {};
	}

	componentDidMount = async () => { };

	render() {
		let { style, onPress, checked, rippleColor,
			checkColor, unCheckColor, disabled } = this.props;
		rippleColor = rippleColor ? rippleColor : colors.FC5356;
		checkColor = checkColor ? checkColor : colors.FC5356;
		unCheckColor = unCheckColor ? unCheckColor : colors.A6A6A6;

		return (
			<View style={[styles.mainContainer, { ...style }]}>
				{Platform.OS === 'ios' ? (
					<View style={styles.IOSContainer}>
						<TouchableRipple onPress={() => onPress()}
							disabled={disabled}
							rippleColor={rippleColor}>
							<Ionicon
								name={checked ? 'ios-checkbox' : 'ios-square-outline'}
								color={checked ? checkColor : unCheckColor}
								size={25}
								style={styles.icon}
							/>
						</TouchableRipple>
					</View>
				) : (
						<Checkbox
							disabled={disabled}
							status={checked ? 'checked' : 'unchecked'}
							onPress={() => onPress()}
							color={checked ? checkColor : unCheckColor}
						/>
					)}
			</View>
		);
	} // end of Function Render
} //end of class CLPCheckBox

const styles = StyleSheet.create({
	mainContainer: {},
	IOSContainer: {
		flexDirection: 'row',
		left: 10,
	},
	icon: {
		marginRight: 20,
	},
}); //end of StyleSheet STYLES

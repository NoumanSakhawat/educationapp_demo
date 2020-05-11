import React, { Component } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomIcon from '../components/CustomIcon';
import { fontSizes } from '../constants/sizes';
//END OF IMPORT's
let { height } = Dimensions.get("window");

interface componentInterface {
	containerStyle: object;
	selectedOption: any;
	options: [];
	onChangeItem(value: object): any;
	defaultOpen: boolean;
}//end of INTERFACE 

const colors = {
	background: '#fffff',
	shadowColor: "#000",
	borderColor: "rgba(206, 218, 220, 0.8)",
	textColor: "rgba(206, 218, 220, 0.9)",
	selectedText: "#212121",
	iconColor: "rgba(0, 0, 0, 0.45)",
	itemText: "#818181"
};//end of COLORS

export default class CLPDropDown extends Component<componentInterface, any> {

	constructor(props: componentInterface) {
		super(props);
		this.state = {
			iconName: this.props.defaultOpen ? "caretup" : "caretdown",
			iconType: "AntDesign",
			iconSize: 12,
			itemSelected: false,
			open: this.props.defaultOpen
		};
	}//end of CONSTRUCTOR

	public static defaultProps = {
		containerStyle: null,
		selectedOption: "Default",
		options: ["A", "B", "C"],
		onChangeItem() { },
		defaultOpen: false
	};//end of DEFAULT PROPS DECLARATION

	closePress = () => {
		if (this.state.iconName === "caretdown") {
			this.setState({
				iconName: "caretup",
				open: false
			})
		}
		else {
			this.setState({
				iconName: "caretdown",
				open: false
			})
		}
	}

	itemPress = (item: any, index: any) => {
		let values = {};
		//@ts-ignore
		values["index"] = index;
		//@ts-ignore
		values["value"] = item;
		this.props.onChangeItem(values);
		this.setState({
			iconName: "caretdown",
			itemSelected: true
		})
	}

	closeModalText = () => {
		let { selectedOption } = this.props;
		return (
			<TouchableOpacity style={{ ...closeStyle.container, }} onPress={() => this.closePress()}>
				<Text style={this.state.itemSelected ? { ...closeStyle.selectedOptionTextSelected } : { ...closeStyle.selectedOptionText }}>{selectedOption}</Text>
				<View style={{ ...closeStyle.iconContainer }}>
					<CustomIcon iconType={this.state.iconType} name={this.state.iconName} color={colors.iconColor} size={this.state.iconSize} />
				</View>

			</TouchableOpacity>
		)
	}

	openModal = () => {
		let { selectedOption, options } = this.props;
		return (
			<View style={{ ...openStyle.container, paddingBottom: 6 }}>
				<TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.closePress()}>
					<Text style={{ ...openStyle.selectedOptionText }}>{selectedOption}</Text>
					<View style={{ ...openStyle.iconContainer }}>
						<CustomIcon iconType={this.state.iconType} name={this.state.iconName} color={colors.iconColor} size={this.state.iconSize} />
					</View>
				</TouchableOpacity>
				<View style={{ paddingTop: 16 }} />
				<ScrollView style={{ maxHeight: height * 0.3 }} showsVerticalScrollIndicator={false}>
					{options.map((item, index) => {
						return (
							<TouchableOpacity style={{ ...openStyle.itemContainer }} onPress={() => this.itemPress(item, index)}>
								<Text style={{ ...openStyle.itemText }}>{item}</Text>
							</TouchableOpacity>
						)
					})}
				</ScrollView>
			</View>
		)
	}

	render() {
		let { containerStyle, } = this.props;

		return (
			<View style={{ ...styles.containerStyle, ...containerStyle }}>
				{this.state.open ? this.openModal() :
					this.state.iconName === "caretdown" ? this.closeModalText() : this.openModal()}

			</View>
		)
	} // end of Function Render

} //end of class CLPDropDown

const openStyle = StyleSheet.create({
	container: {
		flexDirection: 'column',
		paddingVertical: 16,
		paddingHorizontal: 8,
		borderWidth: 1,
		borderColor: colors.borderColor,
		borderRadius: 6
	},
	selectedOptionText: {
		color: colors.textColor,
		fontSize: fontSizes._14,

	},
	iconContainer: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'flex-end'
	},
	itemContainer: {
		// paddingVertical: 8,
		paddingTop: 8,
		paddingBottom: 8
	},
	itemText: {
		color: colors.itemText,
		fontSize: fontSizes._14,
	}
})

const closeStyle = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingVertical: 16,
		paddingHorizontal: 8,
		borderWidth: 1,
		borderColor: colors.borderColor,
		borderRadius: 6
	},
	containerSelected: {
		flexDirection: 'row',
		paddingVertical: 16,
		paddingHorizontal: 8,
		borderWidth: 1,
		borderColor: colors.borderColor,
		borderRadius: 6
	},
	selectedOptionText: {
		color: colors.textColor,
		fontSize: fontSizes._14,

	},
	selectedOptionTextSelected: {
		color: colors.selectedText,
		fontSize: fontSizes._14,
	},
	iconContainer: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'flex-end'
	},
});

const styles = StyleSheet.create({
	containerStyle: {

	},
	shadow: {
		shadowColor: colors.shadowColor,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.9,
		shadowRadius: 3.84,
		elevation: 5,
	}
}); //end of StyleSheet STYLES

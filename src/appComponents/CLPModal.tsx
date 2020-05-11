import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Dialog, Paragraph, Portal } from 'react-native-paper';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const colors = {
	rippleColor: 'transparent',
	buttonTextColor: '#fc5356',
	buttonBackgroundColor: '#fff',
};

interface CMInterface {
	visible: boolean;
	onDismiss(): any;
	title: any;
	paragraph: any;
	cancelPress(): any;
	cancelText: any;
	acceptPress(): any;
	acceptText: any;
}

export default class CustomModal extends Component<CMInterface, any> {
	constructor(props: CMInterface) {
		super(props);
		this.state = {};
	}

	public static defaultProps = {
		title: 'Title',
		paragraph: 'Are you sure?',
		cancelText: 'Cancel',
		acceptText: 'Yes',
	};

	render() {
		let { visible, onDismiss, title, paragraph, cancelPress, cancelText, acceptPress, acceptText } = this.props;

		return (
			<Portal>
				<Dialog visible={visible} onDismiss={onDismiss}>
					<Dialog.Title style={styles.title}>{title}</Dialog.Title>
					<Dialog.Content>
						<Paragraph style={styles.paragraph}>{paragraph}</Paragraph>
					</Dialog.Content>
					<Dialog.Actions>
						{/* FIRST CANCEL THEN ACCEPT */}
						<View style={styles.buttonMainContainer}>
							{/* Start of Cancel Button */}
							<View style={styles.buttonContainer}>
								<TouchableOpacity
									onPress={cancelPress ? cancelPress : onDismiss}
								// rippleColor={colors.rippleColor}
								>
									<Text style={styles.buttonText}>{cancelText}</Text>
								</TouchableOpacity>
							</View>

							{/* End of Cancel Button */}

							{/* Start of Accept Button */}
							<View style={styles.buttonContainer}>
								<TouchableOpacity
									onPress={acceptPress ? acceptPress : onDismiss}
								// rippleColor={colors.rippleColor}
								>
									<Text style={styles.buttonText}>{acceptText}</Text>
								</TouchableOpacity>
							</View>

							{/* End of Accept Button */}
						</View>
					</Dialog.Actions>
				</Dialog>
			</Portal>
		);
	}
}

const styles = StyleSheet.create({
	title: {},
	paragraph: {
		fontSize: responsiveFontSize(2),
		color: '#818181',
		// width: '100%',
	},
	buttonMainContainer: {
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		alignContent: 'space-around',
		flexDirection: 'row',
		marginBottom: 10,
		marginTop: 5,
	},
	buttonContainer: {
		marginRight: 30,
	},
	buttonText: {
		color: colors.buttonTextColor,
		fontSize: 16,
		paddingVertical: 7,
		backgroundColor: colors.buttonBackgroundColor,
		fontWeight: '500',
	},
});

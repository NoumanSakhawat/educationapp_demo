import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import LocalImages from '../helper/LocalImages';
import { heightSize } from '../constants/sizes';

interface CBIInterface {
	style: object;
}

export default class CustomBrandImage extends Component<CBIInterface, any> {
	public static defaultProps = {};

	constructor(props: CBIInterface) {
		super(props);
		this.state = {
			brandLogo: null,
		};
	}

	componentDidMount = async () => {

	};

	render() {
		let { style } = this.props;
		let { brandLogo } = this.state;

		return (
			<View style={[styles.mainContainer, { ...style }]}>
				{brandLogo === null ? (
					<Image source={LocalImages.logo} />
				) : (
						<ImageBackground
							style={styles.brandImage}
							source={{ uri: brandLogo }}
							resizeMode="contain"
						></ImageBackground>
					)}
			</View>
		);
	} // end of Function Render
} //end of class CustomBrandImage

const styles = StyleSheet.create({
	mainContainer: {},
	brandImage: {
		borderRadius: 10,
		marginTop: '2%',
		backgroundColor: '#fff',
		height: heightSize._20,
		width: heightSize._20,
		// marginLeft: '4%',
	},
}); //end of StyleSheet STYLES

import React, { Component } from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import CLPButton from '../../appComponents/CLPButton';
import CLPModal from '../../appComponents/CLPModal';
import { marginSizesHeight, marginSizesWidth } from '../../constants/sizes';
import { Language } from '../../locales';
import CustomNavigation from '../../helper/CustomNavigation';
//END OF IMPORT's

interface componentInterface {
    title?: any;
    cancelTitle?: any;
    navigation: any;
    onPress(): any;
}//end of INTERFACE 

interface allInterface extends CLPButton, componentInterface {
}

export default class SignupButtons extends Component<allInterface, any> {
    state = {
        cancelVisible: false
    }

    public static defaultProps = {
        title: Language['1532'],
        cancelTitle: Language['1533'],
        onPress() { }
    };//end of DEFAULT PROPS DECLARATION

    backPress = () => {
        CustomNavigation.gotoLogin(this.props.navigation);
    }

    render() {
        let { title, cancelTitle, onPress, ...OtherProps } = this.props;
        return (
            <View style={styles.buttonContainer}>
                <CLPButton style={styles.button}
                    text={title}
                    onPress={() => onPress()}
                    {...OtherProps} />
                <CLPButton style={styles.button}
                    text={cancelTitle}
                    mode="text"
                    onPress={() => this.setState({ cancelVisible: true })}
                    {...OtherProps} />

                {/* Cancel Button Modal Start */}
                <CLPModal
                    visible={this.state.cancelVisible}
                    onDismiss={() => {
                        this.setState({
                            cancelVisible: false,
                        });
                    }}
                    title={Language['1700']}
                    paragraph={Language['1701']}
                    cancelText={Language['1702']}
                    acceptText={Language['1703']}
                    acceptPress={() => {
                        this.setState({
                            cancelVisible: false,
                        });
                        this.backPress()
                    }}
                    cancelPress={() => {
                        this.setState({
                            cancelVisible: false,
                        });
                    }}
                />
                {/* Cancel Button Modal End */}
            </View>
        )
    } // end of Function Render

} //end of class SignupButtons


const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: marginSizesHeight._16,
        flexDirection: 'row'
    },
    button: {
        alignSelf: 'flex-start',
        marginRight: marginSizesWidth._8
    },
}); //end of StyleSheet STYLES

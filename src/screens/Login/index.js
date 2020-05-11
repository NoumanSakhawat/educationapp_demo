import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import CustomBrandImage from '../../appComponents/BrandImage';
import CLPButton from '../../appComponents/CLPButton';
import CLPTextInput from '../../appComponents/CLPTextInput';
import Divider from '../../appComponents/Divider';
import CustomStatusBar from '../../components/CustomStatusbar';
import colors from '../../constants/colors';
import globalStyle from '../../constants/globalStyle';
import { fontSizes } from '../../constants/sizes';
import { emptyValidate } from '../../helper/genericFunctions';
import { SVGImage } from "../../helper/LocalImages";
import { Language } from '../../locales';
import { RegexValidator } from '../../utils/Regex';
import { styles } from './styles';

export default class Login extends Component {
    static navigationOptions = {
        header: null,
    };


    constructor(props) {
        super(props);
        this.state = {
            brandImage: null,

            // inputEmail Start
            inputEmail: '',
            inputEmailError: false,
            // inputEmail End 

            // inputPassword Start
            inputPassword: '',
            inputPasswordError: false,
            // inputPassword End 

        };
    }

    componentDidMount = async () => {

    }

    backPress = () => {
        this.props.navigation.goBack()
    }

    emailBlur = async () => {
        const validate = await new RegexValidator().email(this.state.inputEmail);
        if (!emptyValidate(this.state.inputEmail) || !validate) {
            this.setState({
                inputEmailError: true
            })
        }
        else {
            this.setState({
                inputEmailError: false
            })
        }
    }

    passwordBlur = async () => {
        if (!emptyValidate(this.state.inputPassword)) {
            this.setState({
                inputPasswordError: true
            })
        }
        else {
            this.setState({
                inputPasswordError: false
            })
        }
    }

    loginPress = async () => {
        if (emptyValidate(this.state.inputEmail) && !this.state.inputEmailError &&
            emptyValidate(this.state.inputPassword) && !this.state.inputPasswordError) {
            alert("Good!")
        }
        else {
            if (!emptyValidate(this.state.inputEmail) || this.state.inputEmailError) {
                this.setState({
                    inputEmailError: true
                })
            }
            if (!emptyValidate(this.state.inputPassword) || this.state.inputPasswordError) {
                this.setState({
                    inputPasswordError: true
                })
            }
        }

    }

    render() {

        return (
            <View style={styles.container}>
                <SafeAreaView />
                <CustomStatusBar barStyle="dark-content" backgroundColor={colors.background} />
                <ScrollView style={globalStyle.flex}>

                    {/* ******************** Logo and Login Heading Start ******************** */}
                    <View style={styles.logoView}>
                        <CustomBrandImage />
                        <Text style={styles.loginText}>{Language['286']} </Text>
                    </View>

                    {/* ******************** Logo and Login Heading End ******************** */}

                    {/* ******************** Email and Password Input Start ******************** */}

                    <View style={styles.inputContainer}>
                        <CLPTextInput
                            rightIconVisible={false}
                            label={Language['287']}
                            errorText={Language['312']}
                            onBlur={() => this.emailBlur()}
                            value={this.state.inputEmail}
                            keyboardType="email-address"
                            onChangeText={inputEmail =>
                                this.setState({
                                    inputEmailError: false,
                                    inputEmail,
                                })
                            }
                            errorVisible={this.state.inputEmailError} />

                        <CLPTextInput
                            rightIconVisible={false}
                            label={Language['288']}
                            errorText={Language['107']}
                            onBlur={() => this.passwordBlur()}
                            value={this.state.inputPassword}
                            secureTextEntry
                            onChangeText={inputPassword =>
                                this.setState({
                                    inputPasswordError: false,
                                    inputPassword,
                                })
                            }
                            errorVisible={this.state.inputPasswordError} />
                    </View>
                    {/* ******************** Email and Password Input End ******************** */}


                    {/* ******************** ButtonContainer Start ******************** */}

                    <View style={{ ...styles.buttonContainer, }}>
                        <CLPButton onPress={this.loginPress}
                            style={styles.button}
                            text={Language['289']}
                            loading={this.state.loginButtonLoading} />

                        <CLPButton
                            onPress={this.backPress}
                            style={styles.button}
                            mode="text"
                            backgroundColor={colors.buttonDisable}
                            text={Language['290']}
                        />
                    </View>

                    {/* ******************** ButtonContainer End ******************** */}

                    {/* ******************** Find & Forget Account Start ******************** */}
                    <View style={styles.textContainer}>

                        <TouchableOpacity
                            onPress={() => {
                                //GOTO FIND ACCOUNT
                            }}>
                            <Text style={styles.blueText}>{Language['291']}</Text>
                        </TouchableOpacity>
                        <Text style={styles.middleText}> {Language['292']} </Text>
                        <TouchableOpacity
                            onPress={() => {
                                //GOTO Forget Account
                            }}>
                            <Text style={styles.blueText}>{Language['293']}</Text>
                        </TouchableOpacity>

                    </View>

                    {/* ******************** Find & Forget Account End ******************** */}



                    {/* ******************** Signup Contianer Start ******************** */}
                    <View style={styles.textContainer}>
                        <Text style={styles.middleText}>{Language['294']} </Text>
                        <TouchableOpacity
                            onPress={() => {
                                //GOTO Signup
                                this.props.navigation.navigate("SignupHome")
                            }}>
                            <Text style={{ ...styles.blueText, fontSize: fontSizes._18 }}>{Language['299']}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* ******************** Signup Contianer End ******************** */}

                    {/* ******************** By Logging... Start ******************** */}
                    <View style={styles.textContainer}>
                        <Text style={styles.middleText}>{Language['295']}</Text>
                    </View>

                    {/* ******************** By Logging... End ******************** */}

                    {/* ******************** Term & Policy Continaer Start ******************** */}
                    <View style={styles.textContainer}>
                        <Text style={styles.blueText}>{Language['296']}</Text>
                        <Text style={styles.middleText}> {Language['297']} </Text>
                        <Text style={styles.blueText}>{Language['298']}</Text>
                    </View>
                    {/* ******************** Term & Policy Continaer End ******************** */}
                    <Divider />


                    {/* ******************** Social Container Start ******************** */}
                    <View style={styles.socialContainer}>
                        <TouchableOpacity style={styles.social}>
                            <SVGImage.Google />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.social}>
                            <SVGImage.Facebook />
                        </TouchableOpacity>
                    </View>

                    {/* ******************** Social Container End ******************** */}

                </ScrollView>
            </View>
        );
    }


}

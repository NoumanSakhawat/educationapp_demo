import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import BrandImage from "../../../appComponents/BrandImage";
import CLPButton from "../../../appComponents/CLPButton";
import Divider from '../../../appComponents/Divider';
import CustomStatusBar from '../../../components/CustomStatusbar';
import colors from '../../../constants/colors';
import globalStyle from '../../../constants/globalStyle';
import { SVGImage } from '../../../helper/LocalImages';
import { Language } from "../../../locales";
import { styles } from './styles';


export default class index extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    backPress = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView />
                <CustomStatusBar barStyle="dark-content" backgroundColor={colors.white} />
                <ScrollView style={globalStyle.flex}>

                    {/* ******************** Logo / Brand & Heading Start ******************** */}
                    <View style={styles.logoContainer}>
                        <BrandImage />
                        <Text style={styles.heading}>{Language['1519']}</Text>
                    </View>

                    {/* ******************** Logo / Brand & Heading End ******************** */}


                    {/* ******************** Use the service.... Start ******************** */}
                    <View style={styles.textContainerWithCenter}>
                        <Text style={styles.text}>
                            {Language['1520']}
                            {'\n'}
                            {Language['1521'].replace('Or,', '\nOR, ')}
                        </Text>
                    </View>

                    {/* ******************** Use the service.... End ******************** */}


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


                    {/* ******************** Divider Start ******************** */}
                    <View style={styles.dividerContainer}>
                        <Divider style={{ width: "48%" }} />
                        <Text style={styles.middleText}>{Language['1522']}</Text>
                        <Divider />
                    </View>

                    {/* ******************** Divider End ******************** */}


                    {/* ******************** Create Account Button Start ******************** */}

                    <CLPButton
                        text={Language['1523']}
                        style={styles.button}
                        onPress={() => {
                            //GOTO SIGNUP PROCESS
                            this.props.navigation.replace("SignupTypeSelection");
                        }}
                    />
                    {/* ******************** Create Account Button End ******************** */}


                    {/* ******************** Already Registered... Start ******************** */}
                    <View style={styles.textContainer}>
                        <Text style={styles.alreadyRegisteredText}>{Language['1524']}</Text>
                        <TouchableOpacity
                            onPress={() => {
                                //BACK TO LOGIN
                                this.backPress()
                            }}
                        >
                            <Text style={styles.loginText}> {Language['1525']}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* ******************** Already Registered... End ******************** */}
                </ScrollView>
            </View>
        );
    }


}


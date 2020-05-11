import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Language } from '../../../locales';
import { styles } from './styles';
import CustomHeader from '../../../components/CustomHeader';
import CLPCheckBox from '../../../appComponents/CLPCheckBox';
import SignupButtons from '../SignupButtons';


// Agree to Term and conditions
export default class index extends Component {
    static navigationOptions = {
        header: null,
    };
    state = {
        checked1: false,
        checked2: '',
        checked3: '',
    };

    componentDidMount = async () => {

    };

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView />
                <CustomHeader leftIconPress={this.backPress} />
                <ScrollView style={styles.secondaryContainer}>

                    {/* ******************** TopHeading Start ******************** */}
                    <Text style={styles.mainHeading}>{Language['1598']}</Text>
                    <Text style={styles.secondaryHeading}>{Language['1599']}</Text>


                    {/* ******************** TopHeading End ******************** */}

                    {/* ******************** Terms of Services Start ******************** */}
                    <View style={styles.card}>
                        <TouchableOpacity onPress={() => { this.checked1Press() }} style={styles.checkBoxSecondary}>
                            <Text style={styles.text}>{Language['1600']}</Text>
                            <CLPCheckBox
                                style={styles.checkBox}
                                onPress={() => this.checked1Press()}
                                checked={this.state.checked1}
                            />
                        </TouchableOpacity>
                        <ScrollView>
                            <Text style={styles.text}>{Language['1600']}</Text>
                        </ScrollView>
                    </View>

                    {/* ******************** Terms of Services End ******************** */}



                    {/* ******************** Privacy Policy Start ******************** */}
                    <View style={styles.card}>
                        <TouchableOpacity onPress={() => { this.checked2Press() }} style={styles.checkBoxSecondary}>
                            <Text style={styles.text}>{Language['1601']}</Text>
                            <CLPCheckBox
                                style={styles.checkBox}
                                onPress={() => this.checked2Press()}
                                checked={this.state.checked2}
                            />
                        </TouchableOpacity>
                        <ScrollView>
                            <Text style={styles.text}>{Language['1600']}</Text>
                        </ScrollView>
                    </View>

                    {/* ******************** Privacy Policy End ******************** */}


                    {/* ******************** Agree to All Start ******************** */}
                    <View style={styles.card}>
                        <TouchableOpacity onPress={() => { this.agreeAll() }} style={styles.checkBoxSecondary}>
                            <Text style={styles.text}>{Language['1602']}</Text>
                            <CLPCheckBox
                                style={styles.checkBox}
                                onPress={() => this.agreeAll()}
                                checked={this.state.checked3}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* ******************** Agree to All End ******************** */}

                    <SignupButtons />
                </ScrollView>
            </View>
        );
    }

    nextPress = async () => {

    };

    checked1Press = () => {
        this.setState(
            {
                checked1: !this.state.checked1,
            },
            () => {
                if (!this.state.checked1) {
                    this.setState({
                        checked3: false,
                    });
                } else {
                    if (this.state.checked1 && this.state.checked2) {
                        this.setState({
                            checked3: true,
                        });
                    }
                }
            }
        );
    };

    checked2Press = () => {
        this.setState(
            {
                checked2: !this.state.checked2,
            },
            () => {
                if (!this.state.checked2) {
                    this.setState({
                        checked3: false,
                    });
                } else {
                    if (this.state.checked1 && this.state.checked2) {
                        this.setState({
                            checked3: true,
                        });
                    }
                }
            }
        );
    };

    agreeAll = () => {
        if (this.state.checked3) {
            this.setState({ checked3: false, checked1: false, checked2: false });
        } else {
            this.setState({ checked3: true, checked1: true, checked2: true });
        }
    };
}
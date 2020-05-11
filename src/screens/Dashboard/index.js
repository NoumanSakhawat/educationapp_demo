import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import Text from '../../components/CustomText';
import globalStyle from '../../constants/globalStyle';
import { drawerToggle, getDate, getMonthNameNumber, getYear } from '../../helper/genericFunctions';
import { styles } from './styles';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    loginRequired = () => {
        this.props.navigation.navigate("Login")
    }

    render() {
        return (
            <View style={globalStyle.flex}>
                <CustomHeader leftIconName="md-menu" leftIconPress={() => { drawerToggle(this.props) }} title="" />
                <TouchableOpacity style={styles.textContainer} onPress={this.loginRequired}>
                    <Text style={globalStyle.heading}>
                        Login Required Menu
                </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.textContainer}>
                    <Text style={globalStyle.heading}>
                        Login Unnecessary Menu
                </Text>
                </TouchableOpacity>

                {/* Date Start */}
                <View style={styles.dateContainer}>
                    <Text style={styles.date}>{getDate()} </Text>
                    <Text style={styles.dateSubScript}>th</Text>
                    <Text style={styles.date}>, {getMonthNameNumber().name} {getYear()}</Text>
                </View>
                {/* Date END */}
            </View>
        );
    }
}
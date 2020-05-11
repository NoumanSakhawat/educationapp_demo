import React, { Component } from 'react';
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native';
import staticData from '../../../../staticData';
import ClpButton from "../../../appComponents/CLPButton";
import CLPModal from '../../../appComponents/CLPModal';
import CLPRadioButton from '../../../appComponents/CLPRadioButton';
import CustomHeader from '../../../components/CustomHeader';
import CustomNavigation from '../../../helper/CustomNavigation';
import { Language } from "../../../locales";
import { singleSelectionWithoutRemoval } from '../../../utils/Selection';
import { styles } from './styles';
import SignupButtons from '../SignupButtons';

export default class index extends Component {
    static navigationOptions = {
        header: null,
    };
    state = {
        checked: '',
        data: staticData.membersType,
        brandCode: '',
        cancelVisible: false,

        buttonLoading: false
    };

    async componentDidMount() {

    }

    backPress = () => {
        CustomNavigation.gotoLogin(this.props);
    }

    changeSelect = async (index) => {
        const data = await singleSelectionWithoutRemoval(this.state.data, "selected", index);
        this.setState({
            data
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView />
                <CustomHeader leftIconPress={this.backPress} />
                <ScrollView style={styles.secondaryContainer}>

                    {/* ******************** TopHeading Start ******************** */}
                    <Text style={styles.mainHeading}>{Language['1530']}</Text>
                    <Text style={styles.secondaryHeading}>{Language['1531']}</Text>

                    {/* ******************** TopHeading End ******************** */}

                    {/* ******************** Types Start ******************** */}
                    {this.state.data !== null &&
                        <FlatList
                            style={styles.flatList}
                            data={this.state.data}
                            scrollEnabled={false}
                            keyExtractor={item => {
                                return item.id;
                            }}
                            renderItem={({ item, index }) => {
                                return (
                                    <CLPRadioButton
                                        onPress={() => {
                                            this.changeSelect(index);
                                        }}
                                        style={styles.radioButton}
                                        name={item.name}
                                        checked={item.selected}
                                    />
                                );
                            }}
                        />
                    }

                    {/* ******************** Types End ******************** */}


                    {/* ******************** Button's Start ******************** */}
                    {this.state.data !== null &&
                        <SignupButtons onPress={() => { this.nextPress() }} navigation={this.props} />
                    }

                    {/* ******************** Button's End ******************** */}
                </ScrollView>
            </View>
        );
    }

    nextPress = () => {
        this.props.navigation.navigate("SignupAffiliationRadioButton")
    };


}
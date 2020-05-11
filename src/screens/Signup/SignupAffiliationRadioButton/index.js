import React, { Component } from 'react';
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native';
import CustomHeader from '../../../components/CustomHeader';
import CLPRadioButton from '../../../appComponents/CLPRadioButton';
import { Language } from '../../../locales';
import { styles } from './styles';
import staticData from '../../../../staticData';
import SignupButtons from '../SignupButtons';

// Affiliation from Radio Button
export default class index extends Component {
    static navigationOptions = {
        header: null,
    };
    state = {
        checked: '',
        data: staticData.Affiliation,
    };

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
                    <Text style={styles.mainHeading}>{Language['1537']}</Text>
                    <Text style={styles.secondaryHeading}>{Language['1538']}</Text>

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
        this.props.navigation.navigate("SignupAffiliationDropDown")
    };

}


import React, { Component } from 'react';
import { ImageBackground, ScrollView, TouchableOpacity, View } from 'react-native';
import staticData from '../../../staticData';
import CLPButton from '../../appComponents/CLPButton';
import CustomFlatList from '../../components/CustomFlatList';
import CustomHeader from '../../components/CustomHeader';
import Text from '../../components/CustomText';
import colors from '../../constants/colors';
import { Language } from '../../locales/index';
import { allUnselection, anySelected, singleSelection } from '../../utils/Selection';
import { styles } from './styles';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: staticData.Brand,
            anySelected: false
        };
    }

    componentDidMount = async () => {
        const data = await allUnselection(this.state.data, "selected");
        this.setState({
            data
        });
    }

    anySelectedCheck = async () => {
        const anySelectedRes = await anySelected(this.state.data, "selected");
        this.setState({
            anySelected: anySelectedRes
        });
    }

    itemPress = async (item, index) => {
        const data = await singleSelection(this.state.data, "selected", index);
        this.anySelectedCheck();
        this.setState({
            data
        });

    }

    render() {
        return (
            <View style={styles.container}>
                <CustomHeader leftIconVisible={false} />
                <ScrollView style={styles.ScrollView}>
                    <View style={styles.headingContainer}>
                        <Text style={{ ...styles.heading }}>
                            {Language["108"]}
                        </Text>
                        <Text style={{ ...styles.secondHeading }}>
                            {Language["109"]}
                        </Text>
                    </View>

                    <CustomFlatList
                        style={styles.flatList}
                        data={this.state.data}
                        numColumns={2}
                        renderItem={(data) => {
                            let { item, index } = data;

                            return (
                                <TouchableOpacity style={{
                                    ...styles.itemContainer,
                                    backgroundColor: item.selected ? colors.cardSelected : colors.card
                                }} onPress={() => {
                                    this.itemPress(item, index)


                                }}>
                                    <ImageBackground source={{ uri: item.brandImage }}
                                        style={styles.image}
                                        imageStyle={styles.image}
                                    />
                                    <View style={styles.textContainer}>
                                        <Text
                                            style={{
                                                ...styles.text,
                                                color: item.selected ? colors.textFFFFFF : colors.text212121
                                            }}>
                                            {item.brandName}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }} />
                </ScrollView>

                {this.state.anySelected &&
                    <CLPButton loading={false} text="Next" onPress={() => {
                        this.props.navigation.navigate("Dashboard")
                    }} />}
            </View>
        );
    }
}//end of CLASS

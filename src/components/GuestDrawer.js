import React, { Component } from 'react';
import { FlatList, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import globalStyle from '../constants/globalStyle';
import { emptyValidate } from '../helper/genericFunctions';
// import Logo from "../../assets/images/svg/logo.svg";
import { Language } from '../locales';
import Text from './CustomText';


const menu = [
    {
        id: 1,
        name: Language["220"],
        child: [{
            id: 1,
            name: Language["110"]
        },
        {
            id: 2,
            name: Language["109"]
        }]
    }
]

const colors = {
    black: "#000000",
    heading: "rgba(33, 33, 33, 0.7)",
    divider: "#E5E5E5",
    text: "#212121"
}

export default class CustomDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginId: null,
            menu: menu,
            name: null,
        };
    }


    render() {
        let { name } = this.state;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    {/* ******************** Logo and Heading Start ******************** */}
                    <View style={styles.logoContainer}>
                        {/* <Logo height={150} width={250} /> */}
                    </View>
                    {name !== null &&
                        <Text style={styles.title}>{name}</Text>
                    }

                    {/* ******************** Logo and Heading End ******************** */}

                    <View style={{ ...globalStyle.divider, width: "auto", ...styles.divider }} />

                    <FlatList
                        data={this.state.menu}
                        renderItem={(data) => {
                            let item = data.item;
                            let index = data.index;
                            return (
                                <View style={styles.flatListContainer}>
                                    {emptyValidate(item.name) &&
                                        <Text style={styles.heading}>{item.name}</Text>
                                    }
                                    {this.childRender(item.child)}
                                    {index !== this.state.menu.length - 1 &&
                                        <View style={{ ...globalStyle.divider, ...styles.divider }} />}
                                </View>
                            )
                        }} />

                </View>

            </SafeAreaView>
        );
    }//end of Render

    childRender = (child) => {
        return (
            <FlatList
                data={child}
                renderItem={(data) => {
                    let item = data.item;
                    return (
                        <TouchableOpacity style={renderChild.container} onPress={() => { this.itemPress(item.id) }}>
                            <View style={renderChild.dividerIcon} />
                            <Text style={renderChild.text}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }} />
        )
    }//end of CHILD RENDER

    itemPress = async (id) => {
        console.warn('Drawer ID', id);

    }
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: globalStyle.screenPadding
    },
    logoContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.black
    },
    phoneNumber: {
        fontSize: 16,
        fontWeight: "500",
        color: colors.black
    },

    // flatListRender
    flatListContainer: {
        flex: 1
    },
    heading: {
        color: colors.heading,
        fontSize: 14,
    },
    divider: {
        marginVertical: 16,
    },

});

const renderChild = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 12,
    },
    dividerIcon: {
        marginRight: 8,
        height: 20,
        width: 20,
        borderRadius: 5,
        backgroundColor: colors.divider,
    },
    text: {
        color: colors.text,
        fontSize: 16,
    }
})
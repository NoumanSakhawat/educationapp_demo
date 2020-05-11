import React, { Component } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, StyleProp, ViewStyle } from 'react-native';
//END OF IMPORT's


interface componentInterface {
    containerStyle: StyleProp<ViewStyle>;
    data: any;
    metaData: boolean;
    horizontal: boolean;
    ItemSeparatorComponentStyle: StyleProp<ViewStyle>;
    renderItem({ }): any;
    onEndReached(distanceFromEnd: any): any;
    endLoading: boolean;
    refreshLoading: boolean;
    onRefresh(): any;
    style?: StyleProp<ViewStyle>;
    scrollEnabled: boolean;
    numColumns: number;
}//end of INTERFACE 

const colors = {
    background: '#fffff'
};//end of COLORS

export default class CustomFlatList extends Component<componentInterface, any> {

    constructor(props: componentInterface) {
        super(props);
        this.state = {

        };
    }//end of CONSTRUCTOR

    public static defaultProps = {
        containerStyle: null,
        data: [],
        metaData: false,
        horizontal: false,
        ItemSeparatorComponentStyle: { marginVertical: 4, },
        renderItem(data: any) { },
        onEndReached(distanceFromEnd: any) { },
        endLoading: false,
        refreshLoading: false,
        onRefresh() { },
        style: {},
        scrollEnabled: true,
        numColumns: 1
    };//end of DEFAULT PROPS DECLARATION

    render() {
        let { style, containerStyle, data, numColumns, metaData, horizontal, scrollEnabled, ItemSeparatorComponentStyle, renderItem, onEndReached, endLoading, refreshLoading, onRefresh } = this.props;
        return (
            <View style={[styles.containerStyle, containerStyle]}>
                <FlatList
                    data={data}
                    style={[style]}
                    extraData={metaData}
                    scrollEnabled={scrollEnabled}
                    horizontal={horizontal}
                    numColumns={numColumns}
                    keyExtractor={item => {
                        // @ts-ignore
                        return item.id;
                    }}
                    refreshing={refreshLoading}
                    onRefresh={() => { onRefresh(); }}
                    ItemSeparatorComponent={() => {
                        return <View style={ItemSeparatorComponentStyle} />;
                    }}
                    ListFooterComponent={() => {
                        if (endLoading) {
                            return <ActivityIndicator />;
                        } else {
                            return <View />;
                        }
                    }}
                    onEndReachedThreshold={0.2}
                    onEndReached={({ distanceFromEnd }) => {
                        if (!endLoading) {
                            onEndReached(distanceFromEnd)
                        }
                    }}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index, separators }) => {
                        return renderItem({ item, index, separators })
                    }}
                />
            </View>
        )
    } // end of Function Render

} //end of class CustomFlatList


const styles = StyleSheet.create({
    containerStyle: {
    }
}); //end of StyleSheet STYLES

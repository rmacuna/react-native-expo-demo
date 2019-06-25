import React from 'react'
import {FlatList } from 'react-native'
import Item from './Item/Item';
import ImagePlaceholder from './../ImagePlaceholder/ImagePlaceholder';

const IconList = (props) => {
    return (
        <FlatList 
            data={props.listData}
            renderItem={(data) => (
                <Item 
                    pillName={data.item.label} 
                    pillImage={data.item.image} 
                    onPressItem={() => props.onItemSelected(data.item.key)}/>
            )}
            ListEmptyComponent={ImagePlaceholder}
        />
    )
}

export default IconList

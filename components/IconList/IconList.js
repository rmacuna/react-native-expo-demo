import React from 'react'
import {FlatList } from 'react-native'
import Item from './Item/Item';
import ImagePlaceholder from './../ImagePlaceholder/ImagePlaceholder';

const IconList = (props) => {
    return (
        /**
         *  Debe recibir un objeto que tenga un label y un image como atributo 
         */
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

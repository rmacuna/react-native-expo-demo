import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './CategoryList.style';

import CardItem from './../CardItem/CardItem';

const CategoryList = (props) => {
    let categories = props.categories;
    return (
        <ScrollView>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                {
                    categories.map((value) => (
                        <CardItem key={value.cid} category={value} />
                    ))
                }
            </View>

        </ScrollView>
    )
}

export default CategoryList

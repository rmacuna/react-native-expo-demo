import React from 'react';
import styles from './CategorySlider.style';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { COLOR_EMPHASIS } from './../../../constants/constants';

const CategorySlider = (props) => {
    return (
        <View>
            <View style={styles.horizontalWrapper}>
                <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Text style={styles.inlineSubtitle}>Categoria</Text>
                    <Text style={[styles.hint, { fontSize: 16, marginTop: -10, paddingLeft: -5, color: COLOR_EMPHASIS }]}>Jhon Doe</Text>
                </View>
            </View>
            <View style={styles.horizontalWrapper} >
                {/* Debería ser un componente */}
                <TouchableWithoutFeedback onPress={props.pillPress} >
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Pastillas</Text>
                        <View style={{ width: '100%', paddingTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                style={{ width: 75, height: 75 }}
                                source={require('./../../../assets/images/medicine.png')}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={props.datePress}>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Citas</Text>
                        <View style={{ width: '100%', paddingTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                style={{ width: 75, height: 75 }}
                                source={require('./../../../assets/images/calendar.png')}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        </View>

    )
};

export default CategorySlider;




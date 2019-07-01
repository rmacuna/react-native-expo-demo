import React, { Component } from 'react'
import { Text, View, ImageBackground, ScrollView, Animated } from 'react-native'
import { SafeAreaView, NavigationEvents } from 'react-navigation';
import styles from './Category.styles';
import NavyButton from '../../../components/UI/NavyButton/NavyButton';
import { COLOR_EMPHASIS } from '../../../constants/constants';
import CategoryList from './../../../components/Category/CategoryList/CategoryList';
export default class CateScreen extends Component {

    state = {
        initialFadePage: new Animated.Value(0),
        categories: [
            {
                cid: 1,
                categoryName: 'Roberto',
                colorBar: '#4485B4',
            },
            {
                cid: 2,
                categoryName: 'Tommy',
                colorBar: '#44B44F',
            },
            {
                cid: 3,
                categoryName: 'Mama',
                colorBar: '#44B44F',
            },
        ]
    }



    tooggleFade = () => {
        Animated.timing(
            this.state.initialFadePage,
            {
                toValue: 1,
            }
        ).start()
    }

    hideScreen = () => {
        Animated.timing(
            this.state.initialFadePage,
            {
                toValue: 0,
            }
        ).start()
    }


    render() {

        let categories = null;

        categories = (
            <CategoryList categories={this.state.categories} />
        );

        if (this.state.categories.length === 0) {
            categories = (
                <View style={styles.hintWrapper}>
                    <Text style={styles.hintNoObjectsFound}>No hay categorias aun</Text>
                </View>
            )
        }
        return (
            <View style={styles.mainWrapper}>
                <NavigationEvents
                    onDidFocus={this.tooggleFade}
                    onDidBlur={this.hideScreen}
                />
                <ImageBackground
                    style={{ width: '100%', height: 280 }}
                    source={require('./../../../assets/images/svgRoundedCategory.png')}>
                    <SafeAreaView>
                        <Animated.View style={[styles.categoryTitleHolder, {opacity: this.state.initialFadePage}]}>
                            <Text style={styles.categoryTitle}>
                                Explora las categorias, añade  recordatorios para ti  y tu familia
                            </Text>
                            <NavyButton
                                underlayColor="#E78067"
                                color="#fff"
                                onPress={() => alert('Clicked')}
                                backgroundColor={COLOR_EMPHASIS}
                                style={{ width: 250, marginTop: 35 }}>Añadir</NavyButton>
                        </Animated.View>
                    </SafeAreaView>
                </ImageBackground>
                <View style={styles.horizontalTitleWrapper}>
                    <Text style={styles.subtitle}>Todas las categorias</Text>
                </View>
                {categories}
            </View>

        )
    }
}
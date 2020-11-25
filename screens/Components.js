import React, { useState } from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform, TextInput } from 'react-native';
import { Block, Text, theme, Input, Button } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';

import { Icon } from '../components';
import { Images, materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";
import { Link } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

// function cal(props) {
//   render() {
//     const final_state = this.props.len * this.props.fac;
//     return (
      
//     )
//   }
// };

export default class Calculator extends React.Component {

  constructor(props){ 
    super(props);
    this.state = {  
        len: 0,
        fac: 0,
        ans: 0,
    };
    this.alpha1 = this.alpha1.bind(this);
  //  this.alpha2 = this.alpha2.bind(this);
  }

  // componentDidUpdate(props, state){  
  //   if(state.initialValue!==this.state.initialValue){  
  //       console.log('input changed');  
  //       this.setState({ ans: this.state.len * this.state.fac });  
  //   }
  // }
  // const len = useState('');
  // const fac = useState('')
  alpha1 (ev) {
    this.setState({ [this.state.fac]: 0.65 });
  } 
  alpha2 (ev) {
    this.setState({ [this.state.len]: 20 });
  } 
   render() {
    // const { len, fac, ans } = this.state;
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={{uri: Images.Profile}}
            style={styles.profileContainer}
            imageStyle={styles.profileImage}>
            <Block flex style={styles.profileDetails}>
              <Block style={styles.profileTexts}>
                <Text color="white" center size={30} style={{ paddingBottom: 8 }}>Calculate Effective Length of Column</Text>
                <Block row space="between">
                  <Block row>
                  </Block>
                  {/* <Block>
                    <Text color={theme.COLORS.MUTED} size={16}>
                      <Icon name="map-marker" family="font-awesome" color={theme.COLORS.MUTED} size={16} />
                      {` `} New Delhi, INDIA
                      </Text>
                  </Block> */}
                </Block>
              </Block>
              <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.gradient} />
            </Block>
          </ImageBackground>

        </Block>
        <Block flex style={styles.options}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Block row center style={{ padding: theme.SIZES.BASE, }}>
              <Block middle>
                <Text muted size={18}>Enter Length in meters</Text>
                <Input color="black"
                  style={styles.search} 
                  type="numeric" 
                  //value={this.state.len} 
                  placeholder="20"
                  //onChangeText={this.alpha2} 
                  name="len" 
                  id="len"/>
              </Block>
            </Block>
            <Block row center style={{ padding: theme.SIZES.BASE, }}>
              <Block middle>
                <Text muted size={18}>Choose Effective Length Factor</Text>
                <Input
                  type='numeric'
                   color="black"
                  style={styles.search}
                  name="fac"
                  placeholder="0.2"
                  name='len'
                  //onChangeText={this.alpha1}
                />
                <Text onPress={() => this.props.navigation.navigate('Help')} size={12} muted>View Helping Chart</Text>
              </Block>
            </Block>
            <Block row center style={{ padding: theme.SIZES.BASE, }}>
              <Block middle>
                <Text muted size={20}>Effective Length of Column</Text>
                <Text bold size={24} style={{marginBottom: 8}}>{20 * 0.65}m</Text>
                
              </Block>
            </Block>
            
            {/* <Block row space="between" style={{ paddingVertical: 16, alignItems: 'baseline' }}>
              <Text size={16}>Recently viewed</Text>
              <Text size={12} color={theme.COLORS.PRIMARY} onPress={() => this.props.navigation.navigate('Home')}>View All</Text>
            </Block>
            <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
              <Block row space="between" style={{ flexWrap: 'wrap' }} >
                {Images.Viewed.map((img, imgIndex) => (
                  <Image
                    source={{ uri: img }}
                    key={`viewed-${img}`}  
                    resizeMode="cover"
                    style={styles.thumb}
                  />
                ))}
              </Block>
            </Block> */}
          </ScrollView>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    marginBottom: -HeaderHeight * 2,
  },
  profileImage: {
    width: width * 1.1,
    height: 'auto',
  },
  profileContainer: {
    width: width,
    height: height / 3,
    opacity: 1,
    fontSize: 20
  },
  profileDetails: {
    paddingTop: theme.SIZES.BASE * 4,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    zIndex: 2
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 38,
  },
  seller: {
    marginRight: theme.SIZES.BASE / 2,
  },
  options: {
    position: 'relative',
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: -theme.SIZES.BASE * 23,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: '30%',
    position: 'absolute',
  },
});

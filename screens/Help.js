import React from 'react';
import { StyleSheet, Image, Dimensions, ImageBackground } from "react-native";
import { Images, materialTheme } from "../constants";
import { Block, Button, Text, theme } from 'galio-framework';
import { HeaderHeight } from "../constants/utils";
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

export default class Help extends React.Component {
    render() {
        return (
            <Block>
                <ImageBackground
                    source={require("../assets/images/fac4.png")}
                    style={styles.profileContainer}
                    imageStyle={styles.profileImage}>
                <Block flex style={styles.profileDetails}>
                <Block style={styles.profileTexts}>
                    {/* <Text color="white" center size={30} style={{ paddingBottom: 8 }}>Calculate Effective Length of Column</Text> */}
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
                {/* <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.gradient} /> */}
                </Block>
            </ImageBackground>
            <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.BUTTON_COLOR}
                onPress={() => this.props.navigation.navigate('Calculator')}>
                GO BACK
              </Button>
           
          </Block>
        )
    }
}

const styles = StyleSheet.create({
    profile: {
      marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
      marginBottom: -HeaderHeight * 5,
      marginLeft: 12,
      paddingLeft: 10
    },
    profileImage: {
    //   width: width,
    //   height: 'auto',
      marginTop: 10,
      marginLeft: 5,
      paddingLeft: 5,
      marginBottom: 100
    },
    profileContainer: {
      width: width,
      height: height / 2,
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
    button: {
        width: width - theme.SIZES.BASE * 4,
        height: theme.SIZES.BASE * 3,
        shadowRadius: 0,
        shadowOpacity: 0,
        marginTop: 50,
        marginLeft: 25,
        justifyContent: "center",
        alignContent: "center"
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
  
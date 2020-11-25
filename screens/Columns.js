import React from 'react';
import { StyleSheet, Switch, FlatList, Platform, TouchableOpacity, View } from "react-native";
import { Block, Text, theme, Icon } from "galio-framework";

import materialTheme from '../constants/Theme';
import { Product2 } from '../components/';
import products from '../constants/products';
import { ScrollView } from 'react-native-gesture-handler';

export default class Columns extends React.Component {
  state = {};

  toggleSwitch = switchNumber => this.setState({ [switchNumber]: !this.state[switchNumber] });

  renderItem = ({ item }) => {
    const {navigate} = this.props.navigation;

    // return (
    //   <Block row middle space="between" style={styles.rows}>
    //         {/* <Text size={14}>{item.title}</Text> */}
    //         <Product2 Product2={products[5]} horizontal />
    //         {/* <Switch
    //           onValueChange={() => this.toggleSwitch(item.id)}
    //           ios_backgroundColor={materialTheme.COLORS.SWITCH_OFF}
    //           thumbColor={Platform.OS === 'android' ? materialTheme.COLORS.SWITCH_OFF : null}
    //           trackColor={{ false: materialTheme.COLORS.SWITCH_OFF, true: materialTheme.COLORS.SWITCH_ON }}
    //           value={this.state[item.id]}
    //         /> */}
    //       </Block>
    // )

    switch(item.type) {
      case 'switch': 
        return (
          <Block row middle space="between" style={styles.rows}>
            {/* <Text size={14}>{item.title}</Text> */}
            <Product2 product={products[item.id]} horizontal />
          </Block>
        );
      case 'button': 
        return (
          <Block style={styles.rows}>
            <TouchableOpacity onPress={() => navigate('Pro')}>
              <Block row middle space="between" style={{paddingTop:7}}>
                <Text size={14}>{item.title}</Text>
                <Icon name="angle-right" family="font-awesome" style={{ paddingRight: 5 }} />
              </Block>
            </TouchableOpacity>
          </Block>);
      default:
        break;
    }
  }

  render() {
    const recommended = [
      { title: "Tied Column", id: "5", type: "switch" },
      { title: "Auto-Lock security", id: "6", type: "switch" },
      { title: "Notifications", id: "7", type: "switch" },
    ];

    const payment = [
      { title: "Manage Payment Options", id: "8", type: "switch" },
      { title: "Manage Gift Cards", id: "9", type: "switch" },
    ];
    
    const privacy = [
      { title: "User Agreement", id: "10", type: "switch" },
      { title: "Privacy", id: "11", type: "switch" },
      { title: "About", id: "12", type: "switch" },
    ];

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.columns}>
        <FlatList
          data={recommended}
          keyExtractor={(item, index) => item.id}
          renderItem={this.renderItem}
          ListHeaderComponent={
            <Block style={styles.title}>
              <Text bold center size={20} style={{ paddingBottom: 5 }}>
                Columns Based on Shape
              </Text>
            </Block>
          }
        />
        {/* <Block style={styles.title}>
          <Text bold center size={theme.SIZES.BASE} style={{ paddingBottom: 5 }}>
          Payment columns
          </Text>
          <Text center muted size={12}>
            These are also important columns
          </Text>
        </Block> */}
        <FlatList
          data={payment}
          keyExtractor={(item, index) => item.id}
          renderItem={this.renderItem}
        />
        {/* <Block style={styles.title}>
          <Text bold center size={theme.SIZES.BASE} style={{ paddingBottom: 5 }}>
          Privacy columns
          </Text>
          <Text center muted size={12}>
          Third most important columns
          </Text>
        </Block> */}
        <FlatList
          data={privacy}
          keyExtractor={(item, index) => item.id}
          renderItem={this.renderItem}
        />
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  columns: {
    paddingVertical: theme.SIZES.BASE / 3,
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE * 2,
  },
  rows: {
    height: theme.SIZES.BASE * 9,
    paddingHorizontal: theme.SIZES.BASE,
    marginBottom: theme.SIZES.BASE / 6,
  },
  col: {
    color: theme.COLORS.BASE,
    paddingBottom: theme.SIZES.BASE * 2,
  }
});

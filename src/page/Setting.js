import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {comment, key, left, lock, profilepicture, qr, user} from '../assets';

const Setting = () => {
  const listSetings = [
    {
      icon: key,
      title: 'Account',
      desc: 'Description account',
    },
    {
      icon: lock,
      title: 'Privacy',
      desc: 'Description privacy',
    },
    {
      icon: user,
      title: 'Avatar',
      desc: 'Description avatar',
    },
    {
      icon: comment,
      title: 'Chats',
      desc: 'Description chats',
    },
  ];
  return (
    <View style={styles.container}>
      {/* Navigation header */}
      <View
        style={{
          height: 50,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          backgroundColor: 'white',
          elevation: 5,
        }}>
        <Image source={left} style={{height: 30, width: 30}} />
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
          }}>
          Settings
        </Text>
      </View>
      <ScrollView>
        {/* Profile Header */}
        <View
          style={{
            height: 100,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
          }}>
          <Image
            source={profilepicture}
            style={{height: 60, width: 60, borderRadius: 60}}
          />
          <View style={{flex: 1, marginHorizontal: 10}}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              Nama User
            </Text>
            <Text
              style={{
                color: 'gray',
                marginLeft: 10,
              }}>
              Undefined
            </Text>
          </View>
          <Image source={qr} style={{height: 30, width: 30}} />
        </View>
        {/* List Setting */}
        {listSetings.map((value, index) => {
          return (
            <View
              key={index}
              style={{
                height: 70,
                width: '100%',
                flexDirection: 'row',
                paddingHorizontal: 16,
                alignItems: 'center',
              }}>
              <Image source={value.icon} style={{height: 30, width: 30}} />
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginLeft: 10,
                  }}>
                  {value.title}
                </Text>
                <Text
                  style={{
                    color: 'gray',
                    marginLeft: 10,
                  }}>
                  {value.desc}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default Setting;

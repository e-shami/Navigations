import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  const images = [require("../../images/bulb.jpg"), require("../../images/car.jpg")]

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          padding: 5,
          width: '100%',
          height: 60,
          alignItems: 'center',
          marginTop: 10,
        }}>
        <TouchableOpacity
          style={{marginLeft: 15}}
          onPress={() => navigation.openDrawer()}>
          <MaterialCommunityIcons name="hamburger" size={40} />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 20,
            fontWeight: 700,
            alignItems: 'center',
            marginLeft: 25,
          }}>
          My Personal Gallery
        </Text>
      </View>

      <View style={{flex: 1, margin: 20}}>
        <Text style={{fontSize: 16, fontWeight: 500, alignItems: 'center'}}>
          Cute picks of the day
        </Text>

        <View
          style={{
            borderColor: 'lightgrey',
            borderWidth: 1,
            width: '100%',
            marginVertical: 10,
          }}
        />

        <View >
          <FlatList
            data={images}
            renderItem={({item}) => {
              return (
                <TouchableOpacity>
                  <Image
                  source={item}
                  style={{
                    width: 50,
                    height: 50,
                  }
                  
                }
                />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

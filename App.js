import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

const DATA = [
  {
    id: '1',
    judul: 'Sapi 1',
    subtitle: 'Rp. 10.000.000',
    gambar: {uri: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/10/28064854/12.-Tips-Merawat-Anak-Kucing-Munchkin.jpg'},
    starImage: require('./assets/images/kucing.jpg'),
    textStar: '5.0'
  },
  {
    id: '2',
    judul: 'Sapi 2',
    subtitle: 'Rp. 20.000.000',
    gambar: {uri: 'https://images.tokopedia.net/img/KRMmCm/2022/6/28/0edcfe50-7fb9-4a77-9a6a-62f23aa45a93.jpg'},
    starImage: {uri:'https://www.kindpng.com/picc/m/402-4025941_star-icon-yellow-star-with-black-background-hd.png'},
    textStar: '5.0'
  },
  {
    id: '3',
    judul: 'Sapi 3',
    subtitle: 'Rp. 30.000.000',
    gambar: {uri: 'https://awsimages.detik.net.id/visual/2018/04/30/e4a4a23d-4ec6-4d88-b9d7-a8464dd27b9a.jpeg?w=650'},
    starImage: {uri:'https://www.kindpng.com/picc/m/402-4025941_star-icon-yellow-star-with-black-background-hd.png'},
    textStar: '5.0'
  },
];

const Item = ({ title, subtitle, sumber, starImage, textStar }) => (
  <View style={styles.item}>
    <View style={styles.content}>
      <View style={styles.leftContent}>
        <Image style={styles.imageStyle} source={sumber} />
        <View style={styles.textStyle}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View> 
      </View>
      <View style={styles.star}>
        <Image style={styles.starStyle} source={starImage} />
        <Text style={styles.subtitle}>{textStar}</Text>
      </View>
    </View>
    
  </View>
);

const Main = () => {
  const yangditampilkan = ({ item }) => (
    <Item 
      title={item.judul}
      subtitle={item.subtitle}
      sumber={item.gambar}
      starImage={item.starImage}
      textStar={item.textStar} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={yangditampilkan}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: '#F1F3F6',
    marginVertical: 8,
    marginHorizontal: 8,
    flexDirection: 'row',
    padding: 12,
    borderRadius: 8
  },
  leftContent: {
    flexDirection: 'row',
  },
  star: {
    flexDirection: 'column',
    alignSelf: 'center',
  },
  textStyle: {
    flexDirection: 'column',
    marginLeft: 12
  },
  title: {
    color: 'black',
    fontSize: 18,
  },
  subtitle: {
    fontSize: 14,
  },
  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 8,
  },
  
  starStyle: {
    height: 20,
    width: 20
  }
});

export default Main;
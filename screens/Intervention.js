import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Linking,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { DetailsScreen } from "./Details";
import photos from "../data/intervention.js";
import { GridItem } from "../components/GridItem";

// video
const paddingElement = 20;
const windowWidth = Dimensions.get("window").width - paddingElement;
const originalHeightElement = 450;
const originalWidthElement = 800;
const ratio = originalWidthElement / windowWidth;
const heightElement = originalHeightElement / ratio;

// image grid
const imagePadding = 5;
const imagePaddingCount = 6;
const windowWidthForGrid =
  Dimensions.get("window").width - imagePadding * imagePaddingCount;
const numberElements = 3;
const imageWidth = windowWidthForGrid / numberElements;
const imageHeight = 170;
const containerHeight = imageHeight * 2 + 4 * imagePadding;

function InterventionScreen({ navigation }) {
  const ImageGrid = ({ photos, episode }) => {
    const gridData = React.useMemo(
      () => photos.filter((photo) => photo.episode === episode),
      [episode]
    );
    return (
      <View style={styles.imageGrid}>
        {gridData.map((item, index) => (
          <GridItem
            key={index}
            item={item}
            itemContainer={styles.itemContainer}
            image={styles.image}
            navigation={navigation}
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>
          PEINTURE FRAÎCHE FESTIVAL REVIENT ! La nouvelle édition se prolonge
          jusqu'au 7 novembre 2021, toujours à la Halle Debourg (Lyon 7)
        </Text>
        <View style={styles.section}>
          <Text style={styles.sectionText}>
            Encore plus de nouveautés cette année ! Malgré les conditions
            inédites d’organisation, la seconde édition de Peinture Fraîche a su
            rassembler 58 138 festivaliers en 21 jours ! Motivés par cet
            extraordinaire engouement, nous vous donnons rendez-vous pour une
            troisième édition, du 1er octobre au 7 novembre 2021. La Halle
            Debourg sera de nouveau le terrain de jeu de street artistes
            nationaux et internationaux : 50 d’entre eux répondront à l’appel !
          </Text>
          <Text style={styles.sectionText}>
            Peinture Fraîche élabore un festival avec la conviction qu’il doit
            présenter un instantané ambitieux de la scène street art qui
            rassemble différents courants. Des esthétiques plurielles qui vont
            du graffiti au post graffiti, de l’artivisme à l’onirisme, de
            l’hyper réalisme à l’abstraction. 
          </Text>
          <Text style={styles.sectionText}>
            Cette année, quatre tendances
            fortes se dégagent de la programmation : les nouvelles technologies,
            l’écologie, les regards féminins et l’abstraction.
          </Text>
        </View>

        <Text style={styles.chapterHeader}>LE LIEU
LA HALLE DEBOURG</Text>
        <Text style={styles.chapterSubHeader}>Un site central imprégné du patrimoine industriel</Text>
        <View style={styles.section}>
         
          <Text style={styles.sectionText}>
          Enjeu des politiques culturelles publiques, la présence du street art dans les villes est devenue un marqueur de dynamisme. Les métropoles réceptives aux cultures innovantes font de l’art urbain un faire-valoir touristique et urbanistique. La ville de Lyon s’est positionnée très tôt en tant que précurseur à travers les commandes des célèbres murs peints des Lyonnais à la Croix-Rousse ou en Presqu’île. Le Musée Urbain Tony Garnier ou encore la fresque de Joost Swarte située dans le 9e arrondissement sont nées dans la continuité de cet élan artistique respectivement en 1989 et 1984. 

Mise à disposition par la Métropole de Lyon, la Halle Debourg est un ancien entrepôt de fret-triage située en plein cœur du septième arrondissement, à proximité immédiate du métro Debourg. Elle sera à nouveau le centre névralgique du festival durant un mois.
          </Text>
        
        </View>
        <TouchableOpacity
          style={styles.video}
          onPress={() => {
            Linking.openURL(
              "https://www.youtube.com/watch?v=ZxWjtD2OfMk"
            );
          }}
        >
          <ImageBackground
            style={styles.imageBackground}
            source={require("../assets/images/videos/ep1.jpg")}
          ></ImageBackground>
        </TouchableOpacity>

        

        
          
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 15,
    textDecorationLine: "underline",
  },
  chapterHeader: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 10,
  },
  chapterSubHeader: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 5,
    textDecorationLine: "underline",
  },
  video: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionText: {
    fontSize: 20,
    textAlign: "justify",
    paddingBottom: 10,
  },
  section: {
    padding: 10,
  },
  imageBackground: {
    width: windowWidth,
    height: heightElement,
    resizeMode: "cover",
  },
  itemContainer: {
    margin: imagePadding,
    width: imageWidth,
    height: imageHeight,
  },
  image: {
    width: imageWidth,
    height: imageHeight,
    resizeMode: "cover",
  },
  imageGrid: {
    flex: 1,
    width: windowWidthForGrid,
    height: containerHeight,
    alignItems: "baseline",
    flexWrap: "wrap",
  },
});

const InterventionStack = createStackNavigator();

export function InterventionStackScreen() {
  return (
    <InterventionStack.Navigator initialRouteName="Intervention">
      <InterventionStack.Screen
        name="Intervention"
        component={InterventionScreen}
        options={{ title: "STREET ART EXPO" }}
      />
      <InterventionStack.Screen name="Details" component={DetailsScreen} />
    </InterventionStack.Navigator>
  );
}

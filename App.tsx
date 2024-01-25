import { StyleSheet, Text, View } from 'react-native';
import Lesson1 from './Lectures/Lesson1';


export default function App() {
  /*<Text style={styles.example}>Hello react native developer!</Text>
      <Lesson1 props="students" />
      <Lesson1 props="new one" />*/
  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <View style={{ flex: 1, backgroundColor: "blue", height: '100%' }}></View>
        <View style={{ flex: 2, backgroundColor: "green", height: '100%' }}></View>
      </View>
      <View style={styles.secondRow}></View>
      <View style={styles.thirdRow}>
        <View
          style={{ flex: 1, backgroundColor: "orange", height: '100%' }}
        ></View>
        <View style={{ flex: 1, backgroundColor: "black", height: '100%' }}></View>
        <View
          style={{ flex: 1, backgroundColor: "orange", height: '100%' }}
        ></View>
      </View>
      <View style={styles.fourRow}>
        <View style={{ flex: 1, backgroundColor: "yellow", height: '100%' }}></View>
        <View style={{ flex: 1, backgroundColor: "purple", height: '100%' }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    paddingTop: 40,
  },
  firstRow: {
    flex: 1,
    flexDirection: "row",
  },
  secondRow: {
    flex: 2,
    backgroundColor:'red',
    width:'100%'
  },
  thirdRow: {
    flex: 1,
    flexDirection:'row',
  },
  fourRow: {
    flex: 1,
    flexDirection:'column',
    width:'100%',
  },
});
  

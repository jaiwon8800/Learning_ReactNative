import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>RN 프로젝트 렛츠고</Text>
      </View>
      {/* 인라인 스타일링 방식 */}
      {/* <Text
        style={{ margin: 16, borderWidth: 2, borderColor: "red", padding: 16 }}
      > */}
      <Text style={styles.dummyText}>Hello World! 재원</Text>
      <Button title="클릭하세요" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: "blue",
  },
});

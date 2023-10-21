import { StyleSheet, Text, View, Button } from "react-native";
import { TextInput } from "react-native-web";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="강의 목표를 입력하세요"
        />
        <Button title="목표 추가하기" />
      </View>
      <View>
        <Text>목표 리스트</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    // (row일 때)행 안에서 정렬되는 방식
    // (column일 때)열 안에서 정렬되는 방식
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
});

// RN에서의 View는 특정 스타일을 설정하지 않아도 기본값으로 플렉스 박스를 사용함
// RN에서의 플렉스 박스의 기본값은 세로 정렬
// 웹에서의 플렉스 박스의 기본값은 가로 정렬

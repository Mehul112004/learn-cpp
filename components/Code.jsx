import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import SyntaxHighlighter from "react-native-syntax-highlighter";
import { docco } from "react-syntax-highlighter/styles/hljs";

const Code = (codeString) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SyntaxHighlighter
        language="cpp"
        style={docco}
        highlighter="hljs" // You can also use 'prism' as the highlighter
      >
        {codeString}
      </SyntaxHighlighter>
    </ScrollView>
  );
};

export default Code;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

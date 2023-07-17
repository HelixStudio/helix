import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 0,
    padding: 0,
  },
  col: {
    flexDirection: "column",
    margin: 0,
    padding: 0,
  },
  item: {
    height: 20,
    border: "1px solid black",
    width: 300,
    padding: 3,
    margin: 0,
  },
});

const TableRow = ({ items }: { items: string[][] }) => {
  const rows = items.map((item) => (
    <View style={styles.row} key={item[0]}>
      {item.map((subitem) => (
        <Text key={subitem} style={styles.item}>
          {subitem}
        </Text>
      ))}
    </View>
  ));
  return <View style={styles.col}>{rows}</View>;
};

export default TableRow;

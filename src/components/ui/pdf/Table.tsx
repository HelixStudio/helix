import { View, StyleSheet } from "@react-pdf/renderer";
import ItemsTable from "./ItemsTable";

const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    flexDirection: "column",
    paddingVertical: 5,
  },
});

const Table = ({ data }: { data: { items: string[][] } }) => (
  <View style={styles.page}>
    <ItemsTable data={data} />
  </View>
);

export default Table;

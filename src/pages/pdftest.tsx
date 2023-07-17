import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  Line,
  StyleSheet,
  Svg,
} from "@react-pdf/renderer";
import AppShell from "~/components/ui/AppShell";
import Table from "~/components/ui/pdf/Table";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    justifyContent: "space-between",
    fontFamily: "Helvetica",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  header: {
    fontSize: 15,
  },
  subheader: {
    fontSize: 10,
    paddingBottom: 5,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingRight: 5,
  },
  col: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    paddingVertical: 3,
    fontSize: 10,
  },
  h1: {
    fontSize: 15,
    fontFamily: "Helvetica-Bold",
  },

  h2: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    paddingTop: 5,
  },
});

const PdfTest = () => {
  if (typeof window === "undefined")
    return (
      <div>
        <iframe />
      </div>
    );

  return (
    <AppShell>
      <PDFViewer height={"100%"} width={"100%"}>
        <Document author="Asandei Stefan-Alexandru" title="hello">
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <View style={styles.row}>
                <View>
                  <Text style={styles.header}>Helix</Text>
                  <Text style={styles.subheader}>
                    Copyright Asandei Stefan-Alexandru 2023
                  </Text>
                </View>
                <View>
                  <Text style={styles.subheader}>17 Iulie 2023</Text>
                </View>
              </View>
              <Svg height="10" width="600">
                <Line
                  x1="0"
                  y1="0"
                  x2="550"
                  y2="0"
                  strokeWidth={1.5}
                  stroke="black"
                />
              </Svg>
              <Text style={styles.h1}>Titlul problemei</Text>
              <Text style={styles.content}>backstory</Text>
              <Text style={styles.h2}>Cerinta</Text>
              <Text style={styles.content}>statement</Text>
              <Text style={styles.h2}>Date de intrare</Text>
              <Text style={styles.content}>input format</Text>
              <Text style={styles.h2}>Date de iesire</Text>
              <Text style={styles.content}>input data</Text>
              <Text style={styles.h2}>Restrictii si precizari</Text>
              <Text style={styles.content}>requirments</Text>
              <Text style={styles.h2}>Exemplu</Text>
              <Table
                data={{
                  items: [
                    ["Intrare", "Iesire"],
                    ["2", "YES"],
                    ["5", "NO"],
                  ],
                }}
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.content}>
                Timp maxim de execuţie/test: 0.1 secunde
              </Text>
              <Text style={styles.content}>
                Memorie totală disponibilă: 8 MB din care 4 MB pentru stivă
              </Text>
              <Svg height="10" width="600" style={{ paddingTop: 5 }}>
                <Line
                  x1="0"
                  y1="0"
                  x2="550"
                  y2="0"
                  strokeWidth={1.5}
                  stroke="black"
                />
              </Svg>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </AppShell>
  );
};

export default PdfTest;

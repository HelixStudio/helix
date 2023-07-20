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
import { useRouter } from "next/router";
import dayjs from "dayjs";
import AppShell from "~/components/ui/AppShell";
import { LoadingSection } from "~/components/ui/Loading";
import Table from "~/components/ui/pdf/Table";
import { api } from "~/utils/api";
import { zip } from "../draft/tests";

const PDFPreview = () => {
  const router = useRouter();

  const problem = api.problem.getProblemById.useQuery({
    id: parseInt(router.query.id as string),
  });

  if (problem.isLoading) return <LoadingSection />;

  if (problem.data?.draft)
    return (
      <AppShell>
        <p>PDF is not available yet!</p>
      </AppShell>
    );

  return (
    <AppShell>
      <PDFViewer height={"100%"} width={"100%"}>
        <Document author="Asandei Stefan-Alexandru" title={problem.data?.title}>
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
                  <Text style={styles.subheader}>
                    {dayjs(problem.data?.createdAt).format("DD MMM YYYY")}
                  </Text>
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
              <Text style={styles.h1}>{problem.data?.title}</Text>
              <Text style={styles.content}>{problem.data?.statement}</Text>
              <Text style={styles.h2}>Input format</Text>
              <Text style={styles.content}>{problem.data?.inputFormat}</Text>
              <Text style={styles.h2}>Output format</Text>
              <Text style={styles.content}>{problem.data?.outputFormat}</Text>
              <Text style={styles.h2}>Notes</Text>
              <Text style={styles.content}>{problem.data?.notes}</Text>
              <Text style={styles.h2}>Example</Text>
              <Table
                data={{
                  items: [
                    ["Input", "Output"],
                    ...(zip(
                      problem.data?.inputs as string[],
                      problem.data?.outputs as string[]
                    ) as string[][]),
                  ],
                }}
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.content}>
                Time limit: {problem.data?.timeLimitMs} ms
              </Text>
              <Text style={styles.content}>
                Total maximum memory: {problem.data?.memLimitBytes} bytes
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

export default PDFPreview;

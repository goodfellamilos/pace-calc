import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Cell, Row, Table, TableWrapper } from "react-native-table-component";

import CHART_DATA from "../constants/chart";
import colors from "../constants/colors";

const TABLE_HEAD = [
  "min/km",
  "min/mile",
  "5K",
  "10K",
  "Half Marathon",
  "Marathon"
];
const COL_WIDTHS = [65, 65, 80, 80, 80, 80];

const ChartScreen = () => (
  <View style={styles.container}>
    <ScrollView horizontal={true}>
      <View>
        <Table borderStyle={styles.border}>
          <Row
            data={TABLE_HEAD}
            widthArr={COL_WIDTHS}
            style={styles.head}
            textStyle={[styles.text, styles.headText]}
          />
        </Table>
        <ScrollView style={{ marginTop: -1 }}>
          <Table borderStyle={styles.border}>
            {CHART_DATA.map((rowData, rowIndex) => (
              <TableWrapper key={rowIndex} style={styles.row}>
                {rowData.map((cellData, cellIndex) => (
                  <Cell
                    key={cellIndex}
                    data={cellData.replace("x", "")}
                    width={COL_WIDTHS[cellIndex]}
                    height={40}
                    textStyle={[
                      styles.text,
                      cellData.includes("x") && styles.cellTextHighlighted
                    ]}
                  />
                ))}
              </TableWrapper>
            ))}
          </Table>
        </ScrollView>
      </View>
    </ScrollView>
  </View>
);

export default ChartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mostlyBlack,
    padding: 20
  },
  text: {
    color: colors.veryLightGray,
    fontFamily: "space-mono",
    textAlign: "center"
  },
  border: {
    borderColor: colors.veryLightGray,
    borderWidth: 1
  },
  head: {
    height: 50
  },
  headText: {
    fontFamily: "space-mono-bold"
  },
  row: {
    flexDirection: "row",
    height: 40
  },
  cellTextHighlighted: {
    fontFamily: "space-mono-bold",
    color: colors.moderatePink
  }
});

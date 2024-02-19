import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
  },
  section: {
    padding:  10,
    flexGrow:  1,
    display: "flex"
  },
  imageWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: 'wrap',
  },
  img: {
    width: '32%',
  }
});

// Create Document Component
const MyDocument = ({title, orientation,pageFormat,isBranded}) => (
  <Document>
    <Page size={pageFormat} style={styles.page} orientation={orientation}>
      <View style={styles.section}>
        <Text>{title}</Text>
      </View>
      <View style={styles.imageWrapper}>
        {
          Array(100).fill(1).map((e, index) => (
            <Image style={styles.img} src={'https://picsum.photos/1200/1200'}/>
          ))
        }
        </View>
    </Page>
  </Document>
);

export default MyDocument;

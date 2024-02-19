import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4'
  },
  section: {
    padding:  10,
    flexGrow:  1
  },
});

// Create Document Component
const MyDocument = ({title, orientation,pageFormat,isBranded}) => (
  <Document>
    <Page size={pageFormat} style={styles.page} orientation={orientation}>
      {
        Array(100).fill(1).map((e, index) => (
      <View style={styles.section}>
            <Text>{title} #{
              index
            }</Text>
            <Image  src={'https://picsum.photos/1200/1200'}/>
      </View>
        ))
      }
    </Page>
  </Document>
);

export default MyDocument;

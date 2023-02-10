import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";

import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
} from "@react-pdf/renderer";


const styles = StyleSheet.create({
    page: {
        // backgroundColor: "#d11fb6",
        color: "black",
    },
    section: {
        margin: 10,
        padding: 10,
    },
    viewer: {
        width: window.innerWidth, //the pdf viewer will take up all of the width and height
        height: window.innerHeight,
    },
});


const PdfViewer = () => {
    const { state } = useLocation();
    
    const { data } = state;

    useEffect(() => {
        console.log("react=====> ", data);
    });
    return (
        <PDFViewer style={styles.viewer}>
            {/* Start of the document*/}
            <Document>
                {/*render a single page*/}
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>{data}</Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )
}

export default PdfViewer
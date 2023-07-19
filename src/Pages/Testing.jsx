import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import NJB_Banner from "../assets/images/njb_banner.jpg";
// Create styles
const styles = StyleSheet.create({
  page: {
    // backgroundColor: "#d11fb6",
    // color: "white",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  image: {
    width: "50%",
    height: "auto",
    marginBottom: 10,
  },
  header1: {
    width: "270px",
    backgroundColor: "#5A4AE3",
    color: "white",
    paddingVertical: "5px",
    paddingLeft: "5px",
    fontSize: "12px",
    paddingTop: "3px",
    fontWeight: "700",
  },
  header2: {
    width: "100px",
    backgroundColor: "#5A4AE3",
    color: "white",
    borderLeft: "1px solid black",
    paddingVertical: "5px",
    paddingLeft: "5px",
    fontSize: "12px",
    paddingTop: "3px",
  },
  header3: {
    width: "100px",
    backgroundColor: "#5A4AE3",
    color: "white",
    borderLeft: "1px solid black",
    paddingVertical: "5px",
    fontSize: "12px",
    paddingTop: "3px",
    paddingLeft: "5px",
  },
  header4: {
    width: "99px",
    backgroundColor: "#5A4AE3",
    color: "white",
    borderLeft: "1px solid black",
    paddingVertical: "5px",
    fontSize: "12px",
    paddingTop: "3px",
    paddingLeft: "5px",
  },
  cell1: {
    width: "271px",
    fontSize: "12px",
    paddingTop: "3px",
    paddingLeft: "5px",
  },
  cell2: {
    width: "100px",
    borderLeft: "1px solid black",
    fontSize: "12px",
    paddingTop: "3px",
    paddingLeft: "5px",
  },
  cell3: {
    width: "100px",
    borderLeft: "1px solid black",
    fontSize: "12px",
    paddingTop: "3px",
    paddingLeft: "5px",
  },
  cell4: {
    width: "100px",
    borderLeft: "1px solid black",
    fontSize: "12px",
    paddingTop: "3px",
    paddingLeft: "5px",
  },
});

// Create Document Component
function Testing() {
  // Temp Data
  const TempData = [
    { name: "1/2 Steel", qty: 100, price: 150, amount: 15000 },
    { name: "1/2 Steel", qty: 100, price: 150, amount: 15000 },
    { name: "1/2 Steel", qty: 100, price: 150, amount: 15000 },
    { name: "1/2 Steel", qty: 100, price: 150, amount: 15000 },
    { name: "1/2 Steel", qty: 100, price: 150, amount: 15000 },
  ];
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          {/* Header */}
          <View
            style={{
              flex: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Image src={NJB_Banner} style={styles.image} />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                paddingHorizontal: "8px",
              }}
            >
              {/* Left */}
              <View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text
                    style={{
                      width: "75px",
                      textAlign: "right",
                    }}
                  >
                    Name:{" "}
                  </Text>
                  <Text>Muhammad Ismail</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text
                    style={{
                      width: "75px",
                      textAlign: "right",
                    }}
                  >
                    Contact:{" "}
                  </Text>
                  <Text>03110312452</Text>
                </View>
              </View>
              {/* Right */}
              <View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text
                    style={{
                      width: "75px",
                      textAlign: "right",
                    }}
                  >
                    CNIC:{" "}
                  </Text>
                  <Text>1710129928803</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text
                    style={{
                      width: "75px",
                      textAlign: "right",
                    }}
                  >
                    Address:{" "}
                  </Text>
                  <Text>Prang Saffar Khel Charsadda</Text>
                </View>
              </View>
            </View>
          </View>
          {/* Bottom Line */}
          <View
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "#5A4AE3",
              marginTop: "10px",
            }}
          ></View>
          {/* Body */}
          <View style={{ flex: 9 }}>
            {/* Table */}
            <View
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              {/* Row Header */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  border: "1px solid black",
                }}
              >
                {/* Description */}
                <Text style={styles.header1}>Description</Text>
                {/* qty */}
                <Text style={styles.header2}>Quantity</Text>
                {/* price */}
                <Text style={styles.header3}>Price</Text>
                {/* amount */}
                <Text style={styles.header4}>Amount</Text>
              </View>
              {/* Rows Data */}
              {TempData.map((data) => {
                return (
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      border: "1px solid black",
                      borderTop: "0px solid black",
                    }}
                  >
                    {/* Description */}
                    <Text style={styles.cell1}>{data.name}</Text>
                    {/* qty */}
                    <Text style={styles.cell2}>{data.qty}</Text>
                    {/* price */}
                    <Text style={styles.cell3}>{data.price}</Text>
                    {/* amount */}
                    <Text style={styles.cell4}>{data.amount}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          {/* Footer */}
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderTop: "1px",
              borderTopColor: "#5A4AE3",
            }}
          >
            <Text>
              Developed By: Zain Ul Basit {"    "}Email:
              zainulbasit486@gmail.com
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
export default Testing;

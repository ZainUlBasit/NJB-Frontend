import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
  Font,
} from "@react-pdf/renderer";
import NJB_Banner from "../assets/images/transparent.png";
import Phone from "../assets/images/phone.png";
import Urdu from "../assets/images/Urdu.png";
import Urdu1 from "../assets/images/Urdu1.png";

// Import the font files
import RegularFont from "../assets/fonts/Raleway-Regular.ttf";
import BoldFont from "../assets/fonts/Raleway-Bold.ttf";
import { useEffect } from "react";

// Register the fonts
Font.register({
  family: "CustomFont",
  fonts: [
    { src: RegularFont, fontWeight: "normal" },
    { src: BoldFont, fontWeight: "bold" },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 30,
    paddingVertical: 10,
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
    width: "120px",
    height: "120px",
    margin: 5,
  },
  header1: {
    width: "240px",
    // color: "white",
    paddingVertical: "5px",
    paddingLeft: "5px",
    fontSize: "12px",
    paddingTop: "3px",
    fontWeight: "700",
  },
  header2: {
    width: "100px",
    paddingVertical: "5px",
    paddingLeft: "5px",
    fontSize: "12px",
    paddingTop: "3px",
  },
  header3: {
    width: "100px",
    paddingVertical: "5px",
    fontSize: "12px",
    paddingTop: "3px",
    paddingLeft: "5px",
  },
  header4: {
    width: "99px",
    paddingVertical: "5px",
    fontSize: "12px",
    paddingTop: "3px",
    paddingLeft: "5px",
  },
  cell1: {
    fontFamily: "CustomFont",
    fontWeight: "normal",
    width: "240px",
    fontSize: "12px",
    paddingTop: "3px",
    paddingLeft: "5px",
  },
  cell2: {
    fontFamily: "CustomFont",
    fontWeight: "normal",
    width: "100px",
    fontSize: "12px",
    paddingTop: "3px",
    paddingLeft: "5px",
  },
  cell3: {
    fontFamily: "CustomFont",
    fontWeight: "normal",
    width: "100px",
    fontSize: "12px",
    paddingTop: "3px",
    paddingLeft: "5px",
  },
  cell4: {
    fontFamily: "CustomFont",
    fontWeight: "normal",
    width: "100px",
    fontSize: "12px",
    paddingTop: "3px",
    paddingLeft: "5px",
  },
  accountInfoWrraper: {
    width: "220px",
    marginTop: 20,
    borderBottom: "2px solid gray",
  },
  accountInfoCard: {
    width: "220px",
    paddingVertical: 3,
    display: "flex",
    flexDirection: "row",
  },
  accountInfoTitle: {
    fontFamily: "CustomFont",
    fontWeight: "bold",
    fontSize: "13px",
    width: "120px",
    textAlign: "right",
    paddingRight: 3,
  },
  accountInfo: {
    width: "100px",
    fontFamily: "CustomFont",
    fontWeight: "normal",
    fontSize: "13px",
    textAlign: "right",
  },
  accountGrandWrraper: {
    width: "220px",
    paddingVertical: 5,
  },
});

// Create Document Component
function Testing(props) {
  useEffect(() => {}, []);
  // Temp Data
  const TempData = [
    { name: "1/2 Steel", qty: 100, price: 150, amount: 15000 },
    { name: "1/2 Steel", qty: 100, price: 150, amount: 15000 },
    { name: "1/2 Steel", qty: 100, price: 150, amount: 15000 },
    { name: "1/2 Steel", qty: 100, price: 150, amount: 15000 },
    { name: "1/2 Steel", qty: 100, price: 150, amount: 15000 },
  ];
  return (
    <Document>
      {/*render a single page*/}
      <Page size="A4" style={styles.page}>
        {/* ************************************** */}
        {/* Header */}
        {/* ************************************** */}
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
          fixed
        >
          <Text
            style={{
              fontFamily: "CustomFont",
              fontWeight: "bold",
              fontSize: "10px",
            }}
          >
            Developed By: Zain Ul Basit
          </Text>
          <Text
            style={{
              fontFamily: "CustomFont",
              fontWeight: "bold",
              fontSize: "10px",
            }}
          >
            Contact:0311-0312452
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginVertical: 30,
          }}
        >
          <Image src={NJB_Banner} style={styles.image} />
          <View>
            <Image src={Urdu} style={{ width: "200px" }} />
          </View>
          <View>
            <Text
              style={{
                fontFamily: "CustomFont",
                fontWeight: "bold",
                fontSize: 25,
                marginBottom: 15,
              }}
            >
              INVOICE
            </Text>
            <View>
              <Text
                style={{
                  fontFamily: "CustomFont",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Niamat Jan & Brothers
              </Text>
              <Text
                style={{
                  fontFamily: "CustomFont",
                  fontWeight: "normal",
                  fontSize: 13,
                }}
              >
                {`Steel & Cement Dealer\nCharsadda, KPK`}
              </Text>
            </View>
            {/* Contacts */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                // justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <Image
                src={Phone}
                style={{
                  width: "15px",
                  height: "15px",
                  margin: 5,
                }}
              />
              <View>
                <Text
                  style={{
                    fontFamily: "CustomFont",
                    fontWeight: "bold",
                    fontSize: 13,
                  }}
                >
                  0311-5000024
                </Text>
                <Text
                  style={{
                    fontFamily: "CustomFont",
                    fontWeight: "bold",
                    fontSize: 13,
                  }}
                >
                  0311-5000083
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* ************************************** */}
        {/* Description */}
        {/* ************************************** */}
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={Urdu1} style={{ width: "400px" }} />
        </View>
        {/* ************************************** */}
        {/* Bottom Line */}
        {/* ************************************** */}
        <View
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "#032248",
            marginTop: "10px",
          }}
        ></View>
        {/* ************************************** */}
        {/* Bill Detail */}
        {/* ************************************** */}
        <View
          style={{
            marginVertical: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left Side */}
          <View>
            <Text
              style={{
                fontFamily: "CustomFont",
                fontWeight: "bold",
                fontSize: 13,
              }}
            >
              {props.cName}
            </Text>
            <Text
              style={{
                fontFamily: "CustomFont",
                fontWeight: "normal",
                fontSize: 13,
              }}
            >
              {props.cContact}
            </Text>
            <Text
              style={{
                fontFamily: "CustomFont",
                fontWeight: "normal",
                fontSize: 13,
              }}
            >
              {props.cAddress}
            </Text>
          </View>
          {/* Right Side */}
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "130px",
              }}
            >
              <Text
                style={{
                  textAlign: "right",
                  fontFamily: "CustomFont",
                  fontWeight: "bold",
                  fontSize: 13,
                  width: "70px",
                }}
              >
                Invoice #:
              </Text>
              <Text
                style={{
                  fontFamily: "CustomFont",
                  fontWeight: "normal",
                  fontSize: 13,
                  paddingLeft: 3,
                }}
              >
                {props.bBillNo}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "160px",
              }}
            >
              <Text
                style={{
                  textAlign: "right",
                  fontFamily: "CustomFont",
                  fontWeight: "bold",
                  fontSize: 13,
                  width: "70px",
                }}
              >
                Date:
              </Text>
              <Text
                style={{
                  fontFamily: "CustomFont",
                  fontWeight: "normal",
                  fontSize: 13,
                  paddingLeft: 3,
                }}
              >
                {props.bDate}
              </Text>
            </View>
          </View>
        </View>
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
                borderBottom: "2px solid #032248",
              }}
            >
              {/* Description */}
              <Text style={styles.header1}>Items</Text>
              {/* qty */}
              <Text style={styles.header2}>Quantity</Text>
              {/* price */}
              <Text style={styles.header3}>Unit Price</Text>
              {/* amount */}
              <Text style={styles.header4}>Amount</Text>
            </View>
            {/* Rows Data */}
            {props.Data.map((data) => {
              return (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
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
            {/* ************************************* */}
            {/* Bottom Line */}
            {/* ************************************* */}
            <View
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "#032248",
                marginTop: "10px",
              }}
            ></View>
            {/* ********************************************* */}
            {/* Bill Account Info */}
            {/* ********************************************* */}
            {/* Main Wrapper */}
            <View
              style={{
                width: "100%",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              {/* Inner Wrapper */}
              <View style={styles.accountInfoWrraper}>
                <View style={styles.accountInfoCard}>
                  <Text style={styles.accountInfoTitle}>Current Total: </Text>
                  <Text style={styles.accountInfo}>{props.cTotal}/-</Text>
                </View>
                <View style={styles.accountInfoCard}>
                  <Text style={styles.accountInfoTitle}>Loading Charges:</Text>
                  <Text style={styles.accountInfo}>+{props.cLoading}/-</Text>
                </View>
                <View style={styles.accountInfoCard}>
                  <Text style={styles.accountInfoTitle}>Delivery Charges:</Text>
                  <Text style={styles.accountInfo}>+{props.cDelivery}/-</Text>
                </View>
                <View style={styles.accountInfoCard}>
                  <Text style={styles.accountInfoTitle}>Discount: </Text>
                  <Text style={styles.accountInfo}>-{props.cDiscount}/-</Text>
                </View>
              </View>
              <View style={styles.accountGrandWrraper}>
                <View style={styles.accountInfoCard}>
                  <Text style={styles.accountInfoTitle}>Grand Total: </Text>
                  <Text style={styles.accountInfo}>{props.cGrand}/-</Text>
                </View>
                <View style={styles.accountInfoCard}>
                  <Text style={styles.accountInfoTitle}>Paid Amount: </Text>
                  <Text style={styles.accountInfo}>-{props.cPaid}/-</Text>
                </View>
                <View style={styles.accountInfoCard}>
                  <Text style={styles.accountInfoTitle}>Balance: </Text>
                  <Text style={styles.accountInfo}>
                    {Number(props.cGrand) - Number(props.cPaid)}/-
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
export default Testing;

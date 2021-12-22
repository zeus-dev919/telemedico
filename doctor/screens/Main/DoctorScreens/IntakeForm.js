import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import { COLORS, icons } from "../../../constants";
import Checkbox from "expo-checkbox";

const IntakeForm = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");
  //   doctor
  const [dname, setDname] = useState("");
  const [dspec, setDspec] = useState("");
  const [dsince, setDsince] = useState("");
  const [daddress, setDaddress] = useState("");
  const [demail, setDemail] = useState("");
  const [dphone, setDphone] = useState("");

  //   Error
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [boxError, setBoxError] = useState("");
  const [birthError, setBirthError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [heightError, setHeightError] = useState("");
  const [weightError, setWeightError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [fileError, setFileError] = useState("");
  //   doctor
  const [dnameError, setDnameError] = useState("");
  const [dspecError, setDspecError] = useState("");
  const [dsinceError, setDsinceError] = useState("");
  const [daddressError, setDaddressError] = useState("");
  const [demailError, setDemailError] = useState("");
  const [dphoneError, setDphoneError] = useState("");
  const handleSubmit = () => {
    navigation.navigate("home");
  };
  const handleBox1 = () => {
    setBox1(true);
    setBox2(false);
  };
  const handleBox2 = () => {
    setBox1(false);
    setBox2(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {/* Red Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerSub}
            onPress={() => navigation.openDrawer()}
          >
            <IconFeather
              name="menu"
              size={20}
              color="black"
              style={styles.icon_style}
            />
          </TouchableOpacity>
          <View>
            <Image
              style={styles.logo}
              source={icons.avatar}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
      {/* ScrollView */}
      <ScrollView style={styles.scrollView}>
        {/* Card1 */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle}>Telemedicine Patient</Text>
          <Text style={styles.cardTitle}>Intake Form</Text>
          {/* Form */}
          <View style={styles.inputsContainer}>
            <View style={styles.inputContainer2}>
              <View style={styles.codeContainer}>
                <TextInput
                  style={styles.input}
                  value={firstName}
                  onChangeText={setFirstName}
                  placeholder="First Name"
                  placeholderTextColor={"grey"}
                  keyboardType="default"
                />
                {firstNameError.length === 0 ? null : (
                  <Text style={styles.error}>{firstNameError}</Text>
                )}
              </View>
              <View style={styles.codeContainer}>
                <TextInput
                  style={styles.input}
                  value={lastName}
                  onChangeText={setLastName}
                  placeholder="Last Name"
                  placeholderTextColor={"grey"}
                  keyboardType="default"
                  maxLength={3}
                />
                {lastNameError.length === 0 ? null : (
                  <Text style={styles.error}>{lastNameError}</Text>
                )}
              </View>
            </View>
          </View>
        </View>
        {/* Card2 */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>Consultation for</Text>
          <View style={styles.personCard}>
            <Text style={{ marginHorizontal: 5, marginRight: 10 }}>Self</Text>
            <Checkbox
              value={box1}
              onValueChange={handleBox1}
              style={styles.checkbox}
              color={"#40e0d0"}
            />
            <Text style={{ marginHorizontal: 5, marginRight: 10 }}>Others</Text>
            <Checkbox
              value={box2}
              onValueChange={handleBox2}
              style={styles.checkbox}
              color={"#40e0d0"}
            />
          </View>
          {boxError.length === 0 ? null : (
            <Text style={styles.error}>{boxError}</Text>
          )}
          {/* Form */}
          <View style={styles.inputsContainer}>
            {/* Birth */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={birth}
                onChangeText={setBirth}
                placeholder="Birth Date (Autofill if Consultation for self))"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
              {birthError.length === 0 ? null : (
                <Text style={styles.error}>{birthError}</Text>
              )}
            </View>
            {/* Gender */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={gender}
                onChangeText={setGender}
                placeholder="Gender (Autofill if Consultation for self))"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
              {genderError.length === 0 ? null : (
                <Text style={styles.error}>{genderError}</Text>
              )}
            </View>
            {/* Height */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={height}
                onChangeText={setHeight}
                placeholder="Height (Autofill if Consultation for self))"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
              {heightError.length === 0 ? null : (
                <Text style={styles.error}>{heightError}</Text>
              )}
            </View>
            {/* Weight */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={weight}
                onChangeText={setWeight}
                placeholder="Weight (Autofill if Consultation for self))"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
              {weightError.length === 0 ? null : (
                <Text style={styles.error}>{weightError}</Text>
              )}
            </View>
            {/* Email */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email (Autofill if Consultation for self))"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
              {emailError.length === 0 ? null : (
                <Text style={styles.error}>{emailError}</Text>
              )}
            </View>
            {/* File */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={file}
                onChangeText={setFile}
                placeholder="Upload document file"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
              {fileError.length === 0 ? null : (
                <Text style={styles.error}>{fileError}</Text>
              )}
            </View>
          </View>
        </View>
        {/* Card3 */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>Personal Doctor Details</Text>
          {/* Form */}
          <View style={styles.inputsContainer}>
            <View style={styles.inputContainer2}>
              <View style={styles.codeContainer}>
                <TextInput
                  style={styles.input}
                  value={dname}
                  onChangeText={setDname}
                  placeholder="Name"
                  placeholderTextColor={"grey"}
                  keyboardType="default"
                />
                {dnameError.length === 0 ? null : (
                  <Text style={styles.error}>{dnameError}</Text>
                )}
              </View>
              <View style={styles.codeContainer}>
                <TextInput
                  style={styles.input}
                  value={dspec}
                  onChangeText={setDspec}
                  placeholder="Specialization"
                  placeholderTextColor={"grey"}
                  keyboardType="default"
                  maxLength={3}
                />
                {dspecError.length === 0 ? null : (
                  <Text style={styles.error}>{dspecError}</Text>
                )}
              </View>
            </View>
            <View style={styles.inputContainer2}>
              <View style={styles.codeContainer}>
                <TextInput
                  style={styles.input}
                  value={dsince}
                  onChangeText={setDsince}
                  placeholder="Doctor Since"
                  placeholderTextColor={"grey"}
                  keyboardType="default"
                />
                {dsinceError.length === 0 ? null : (
                  <Text style={styles.error}>{dsinceError}</Text>
                )}
              </View>
              <View style={styles.codeContainer}>
                <TextInput
                  style={styles.input}
                  value={daddress}
                  onChangeText={setDaddress}
                  placeholder="Address"
                  placeholderTextColor={"grey"}
                  keyboardType="default"
                  maxLength={3}
                />
                {daddressError.length === 0 ? null : (
                  <Text style={styles.error}>{daddressError}</Text>
                )}
              </View>
            </View>
            <View style={styles.inputContainer2}>
              <View style={styles.codeContainer}>
                <TextInput
                  style={styles.input}
                  value={demail}
                  onChangeText={setDemail}
                  placeholder="Email"
                  placeholderTextColor={"grey"}
                  keyboardType="default"
                />
                {demailError.length === 0 ? null : (
                  <Text style={styles.error}>{demailError}</Text>
                )}
              </View>
              <View style={styles.codeContainer}>
                <TextInput
                  style={styles.input}
                  value={dphone}
                  onChangeText={setDphone}
                  placeholder="Phone"
                  placeholderTextColor={"grey"}
                  keyboardType="default"
                  maxLength={3}
                />
                {dphoneError.length === 0 ? null : (
                  <Text style={styles.error}>{dphoneError}</Text>
                )}
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button1} onPress={handleSubmit}>
          <Text style={styles.signup}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IntakeForm;

const styles = StyleSheet.create({
  // Header
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor1,
    paddingTop: 20,
  },
  subContainer: {
    // flex: 1,
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.bgColor1,
    height: 60,
    paddingHorizontal: 30,
  },
  logo: {
    width: 30,
    height: 30,
  },
  headerSub: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon_style: {
    marginRight: 10,
  },
  // Card
  card: {
    borderRadius: 25,
    backgroundColor: COLORS.bgColor2,
    paddingHorizontal: 10,
    paddingVertical: 30,
    margin: 10,
  },

  //   Find Doctor
  cardTitle: {
    color: COLORS.fontColor4,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    margin: 0,
    lineHeight: 29,
  },

  cardTitle2: {
    color: COLORS.fontColor4,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
  },
  shadow1: {
    shadowColor: "#cdcddd",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0,
    shadowRadius: 8,
    elevation: 4,
  },
  //   ScrollView
  scrollView: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: COLORS.bgColor1,
  },
  //   Input
  inputsContainer: {
    alignItems: "center",
    marginVertical: 15,
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    // paddingVertical: 20,
    borderRadius: 20,
    marginBottom: 0,
  },
  inputContainer: {
    width: "100%",
  },
  inputContainer2: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    fontSize: 14,
    backgroundColor: COLORS.bgColor1,
    borderRadius: 8,
    padding: 10,
    width: "100%",
    marginTop: 15,
    color: "black",
  },
  codeContainer: {
    width: "45%",
  },
  //   PersonCard
  personCard: {
    flexDirection: "row",
    paddingLeft: 5,
  },
  checkbox: {
    marginRight: 10,
    borderRadius: 6,
  },
  //   Submit
  button1: {
    marginVertical: 15,
    padding: 5,
  },
  signup: {
    backgroundColor: COLORS.blueBtn,
    color: "white",
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
});

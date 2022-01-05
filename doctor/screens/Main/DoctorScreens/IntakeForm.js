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
  // f1
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // f2
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");
  // f3
  const [f3, setF3] = useState("");
  // f4
  const [f4, setF4] = useState([]);
  const [f4_1, setF4_1] = useState(false);
  const [f4_2, setF4_2] = useState(false);
  const [f4_3, setF4_3] = useState(false);
  const [f4_4, setF4_4] = useState(false);
  const [f4_5, setF4_5] = useState(false);
  const [f4_6, setF4_6] = useState(false);
  const [f4_7, setF4_7] = useState(false);
  const [f4_8, setF4_8] = useState(false);
  const [f4_9, setF4_9] = useState(false);
  const [f4_10, setF4_10] = useState(false);
  const [f4_11, setF4_11] = useState(false);
  const [f4_12, setF4_12] = useState(false);
  const [f4_13, setF4_13] = useState(false);
  const [f4_14, setF4_14] = useState(false);
  const [f4_15, setF4_15] = useState(false);
  const [f4_16, setF4_16] = useState(false);
  const [f4_17, setF4_17] = useState(false);
  const [f4_18, setF4_18] = useState(false);
  const [f4_19, setF4_19] = useState(false);
  const [f4_20, setF4_20] = useState(false);
  const [f4_21, setF4_21] = useState(false);
  const [f4_22, setF4_22] = useState(false);
  const [f4_23, setF4_23] = useState(false);
  const [f4_24, setF4_24] = useState(false);
  const [f4_25, setF4_25] = useState(false);
  const [f4_26, setF4_26] = useState(false);
  const [f4_27, setF4_27] = useState(false);
  const [f4_28, setF4_28] = useState(false);
  const [f4_29, setF4_29] = useState(false);
  const [f4_30, setF4_30] = useState(false);
  // f5
  // f5_1
  const [f5_1, setF5_1] = useState("");
  const [f5_1_1, setF5_1_1] = useState(false);
  const [f5_1_2, setF5_1_2] = useState(false);
  const [f5_1_3, setF5_1_3] = useState(false);
  const [f5_1_4, setF5_1_4] = useState(false);
  // f5_2
  const [f5_2, setF5_2] = useState("");
  const [f5_2_1, setF5_2_1] = useState(false);
  const [f5_2_2, setF5_2_2] = useState(false);
  const [f5_2_3, setF5_2_3] = useState(false);
  // f5_3
  const [f5_3, setF5_3] = useState("");
  const [f5_3_1, setF5_3_1] = useState(false);
  const [f5_3_2, setF5_3_2] = useState(false);
  const [f5_3_3, setF5_3_3] = useState(false);
  const [f5_3_4, setF5_3_4] = useState(false);
  // f5_4
  const [f5_4, setF5_4] = useState("");
  const [f5_4_1, setF5_4_1] = useState(false);
  const [f5_4_2, setF5_4_2] = useState(false);
  const [f5_4_3, setF5_4_3] = useState(false);
  const [f5_4_4, setF5_4_4] = useState(false);
  // f5_5
  const [f5_5, setF5_5] = useState("");
  const [f5_5_1, setF5_5_1] = useState(false);
  const [f5_5_2, setF5_5_2] = useState(false);
  const [f5_5_3, setF5_5_3] = useState(false);
  const [f5_5_4, setF5_5_4] = useState(false);
  // f6
  const [father, setFather] = useState('');
  const [mother, setMother] = useState('');
  const [gfather, setGfather] = useState('');
  const [gmother, setGmother] = useState('');
  const [brother, setBrother] = useState('');
  const [sister, setSister] = useState('');
  const [uncle, setUncle] = useState('');
  const [aunts, setAunts] = useState('');

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

  // f2
  const handleBox1 = () => {
    setBox1(true);
    setBox2(false);
  };
  const handleBox2 = () => {
    setBox1(false);
    setBox2(true);
  };
  // f4
  const handleOtherf4 = () => {
    setF4_30(!f4_30);
  };
  // f5
  // f5_1
  const handlef5_1_1 = () => {
    setF5_1_1(true);
    setF5_1_2(false);
    setF5_1_3(false);
    setF5_1_4(false);
  };
  const handlef5_1_2 = () => {
    setF5_1_1(false);
    setF5_1_2(true);
    setF5_1_3(false);
    setF5_1_4(false);
  };
  const handlef5_1_3 = () => {
    setF5_1_1(false);
    setF5_1_2(false);
    setF5_1_3(true);
    setF5_1_4(false);
  };
  const handlef5_1_4 = () => {
    setF5_1_1(false);
    setF5_1_2(false);
    setF5_1_3(false);
    setF5_1_4(true);
  };
  // f5_2
  const handlef5_2_1 = () => {
    setF5_2_1(true);
    setF5_2_2(false);
    setF5_2_3(false);
  };
  const handlef5_2_2 = () => {
    setF5_2_1(false);
    setF5_2_2(true);
    setF5_2_3(false);
  };
  const handlef5_2_3 = () => {
    setF5_2_1(false);
    setF5_2_2(false);
    setF5_2_3(true);
  };
  // f5_3
  const handlef5_3_1 = () => {
    setF5_3_1(true);
    setF5_3_2(false);
    setF5_3_3(false);
    setF5_3_4(false);
  };
  const handlef5_3_2 = () => {
    setF5_3_1(false);
    setF5_3_2(true);
    setF5_3_3(false);
    setF5_3_4(false);
  };
  const handlef5_3_3 = () => {
    setF5_3_1(false);
    setF5_3_2(false);
    setF5_3_3(true);
    setF5_3_4(false);
  };
  const handlef5_3_4 = () => {
    setF5_3_1(false);
    setF5_3_2(false);
    setF5_3_3(false);
    setF5_3_4(true);
  };
  // f5_4
  const handlef5_4_1 = () => {
    setF5_4_1(true);
    setF5_4_2(false);
    setF5_4_3(false);
    setF5_4_4(false);
  };
  const handlef5_4_2 = () => {
    setF5_4_1(false);
    setF5_4_2(true);
    setF5_4_3(false);
    setF5_4_4(false);
  };
  const handlef5_4_3 = () => {
    setF5_4_1(false);
    setF5_4_2(false);
    setF5_4_3(true);
    setF5_4_4(false);
  };
  const handlef5_4_4 = () => {
    setF5_4_1(false);
    setF5_4_2(false);
    setF5_4_3(false);
    setF5_4_4(true);
  };
  // f5_5
  const handlef5_5_1 = () => {
    setF5_5_1(true);
    setF5_5_2(false);
    setF5_5_3(false);
    setF5_5_4(false);
  };
  const handlef5_5_2 = () => {
    setF5_5_1(false);
    setF5_5_2(true);
    setF5_5_3(false);
    setF5_5_4(false);
  };
  const handlef5_5_3 = () => {
    setF5_5_1(false);
    setF5_5_2(false);
    setF5_5_3(true);
    setF5_5_4(false);
  };
  const handlef5_5_4 = () => {
    setF5_5_1(false);
    setF5_5_2(false);
    setF5_5_3(false);
    setF5_5_4(true);
  };

  const handleSubmit = () => {
    navigation.navigate("home");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {/* Red Header */}
        <View style={styles.header}>
          <View>
            <Image
              style={styles.logo}
              source={icons.avatar}
              resizeMode="contain"
            />
          </View>
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
            <Text
              style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
            >
              Self
            </Text>
            <Checkbox
              value={box1}
              onValueChange={handleBox1}
              style={styles.checkbox}
              color={"#40e0d0"}
            />
            <Text
              style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
            >
              Others
            </Text>
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
          <Text style={styles.cardTitle2}>
            Reason For Consulting The Doctor
          </Text>
          {/* Form */}
          <View style={styles.inputsContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={f3}
                onChangeText={setF3}
                placeholder="Reason for consulting the doctor"
                placeholderTextColor={"grey"}
                keyboardType="default"
                // multiline="true"
              />
              {fileError.length === 0 ? null : (
                <Text style={styles.error}>{fileError}</Text>
              )}
            </View>
          </View>
        </View>
        {/* Card4 */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>Patient Medical History</Text>
          <Text style={styles.cardTitle3}>
            Have you ever had (Please check all that apply)
          </Text>
          {/* Form */}
          <View style={styles.inputsContainer}>
            {/* Line 1 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_1}
                  onValueChange={() => setF4_1(!f4_1)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Anemia
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_2}
                  onValueChange={() => setF4_2(!f4_2)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Asthma
                </Text>
              </View>
            </View>
            {/* Line 2 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_3}
                  onValueChange={() => setF4_3(!f4_3)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Arthritis
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_4}
                  onValueChange={() => setF4_4(!f4_4)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Cancer
                </Text>
              </View>
            </View>
            {/* Line 3 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_5}
                  onValueChange={() => setF4_5(!f4_5)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Gout
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_6}
                  onValueChange={() => setF4_6(!f4_6)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Diabetes
                </Text>
              </View>
            </View>
            {/* Line 4 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_7}
                  onValueChange={() => setF4_7(!f4_7)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Emotional Disorder
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_8}
                  onValueChange={() => setF4_8(!f4_8)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Epilepsy Seizures
                </Text>
              </View>
            </View>
            {/* Line 5 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_9}
                  onValueChange={() => setF4_9(!f4_9)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Fainting Spells
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_10}
                  onValueChange={() => setF4_10(!f4_10)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Gallstones
                </Text>
              </View>
            </View>
            {/* Line 6 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_11}
                  onValueChange={() => setF4_11(f4_11)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Heart Disease
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_12}
                  onValueChange={() => setF4_12(!f4_12)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Heart Attack
                </Text>
              </View>
            </View>
            {/* Line 7 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_13}
                  onValueChange={() => setF4_13(!f4_13)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Rheumatic Fever
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_14}
                  onValueChange={() => setF4_14(!f4_14)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  High Blood Pressure
                </Text>
              </View>
            </View>
            {/* Line 8 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_15}
                  onValueChange={() => setF4_15(!f4_15)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Digestive Problems
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_16}
                  onValueChange={() => setF4_16(!f4_16)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Ulcerative Colitis
                </Text>
              </View>
            </View>
            {/* Line 9 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_17}
                  onValueChange={() => setF4_17(!f4_17)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Ulcer Disease
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_18}
                  onValueChange={() => setF4_18(!f4_18)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Hepatitis
                </Text>
              </View>
            </View>
            {/* Line 10 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_19}
                  onValueChange={() => setF4_19(!f4_19)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Kidney Disease
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_20}
                  onValueChange={() => setF4_20(!f4_20)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Liver Disease
                </Text>
              </View>
            </View>
            {/* Line 11 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_21}
                  onValueChange={() => setF4_21(!f4_21)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Sleep Apnea
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_22}
                  onValueChange={() => setF4_22(!f4_22)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Use a C-PAP machine
                </Text>
              </View>
            </View>
            {/* Line 12 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_23}
                  onValueChange={() => setF4_23(!f4_23)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Thyroid Problems
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_24}
                  onValueChange={() => setF4_24(!f4_24)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Tuberculosis
                </Text>
              </View>
            </View>
            {/* Line 13 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_25}
                  onValueChange={() => setF4_25(!f4_25)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Venereal Disease
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_26}
                  onValueChange={() => setF4_26(!f4_26)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Neurological Disorders
                </Text>
              </View>
            </View>
            {/* Line 14 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_27}
                  onValueChange={() => setF4_27(!f4_27)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Bleeding Disorders
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_28}
                  onValueChange={() => setF4_28(!f4_28)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Lung Disease
                </Text>
              </View>
            </View>
            {/* Line 15 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_29}
                  onValueChange={() => setF4_29(!f4_29)}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Emphysema
                </Text>
              </View>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_30}
                  onValueChange={handleOtherf4}
                  style={styles.checkbox}
                  color={"#40e0d0"}
                />
                <Text
                  style={{ marginHorizontal: 5, marginRight: 10, fontSize: 10 }}
                >
                  Other
                </Text>
              </View>
            </View>
          </View>
        </View>
        {f4_30 && (
          <>
            {/* Card5 */}
            <View style={[styles.card, styles.shadow1]}>
              <Text style={styles.cardTitle2}>
                Please List any Operations and Dates of each
              </Text>
              {/* Form */}
              <View style={styles.inputsContainer}>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={file}
                    onChangeText={setFile}
                    placeholder="Operations and Dates of each"
                    placeholderTextColor={"grey"}
                    keyboardType="default"
                    // multiline={true}
                  />
                  {fileError.length === 0 ? null : (
                    <Text style={styles.error}>{fileError}</Text>
                  )}
                </View>
              </View>
            </View>
            {/* Card6 */}
            <View style={[styles.card, styles.shadow1]}>
              <Text style={styles.cardTitle2}>
                Please list your Current Medications
              </Text>
              {/* Form */}
              <View style={styles.inputsContainer}>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={file}
                    onChangeText={setFile}
                    placeholder="Current Medications"
                    placeholderTextColor={"grey"}
                    keyboardType="default"
                    // multiline={true}
                  />
                  {fileError.length === 0 ? null : (
                    <Text style={styles.error}>{fileError}</Text>
                  )}
                </View>
              </View>
            </View>
            {/* Card7 */}
            <View style={[styles.card, styles.shadow1]}>
              <Text style={styles.cardTitle2}>
                Please list any Allergies [ Medicine / Food / Seasonal ]
              </Text>
              {/* Form */}
              <View style={styles.inputsContainer}>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={file}
                    onChangeText={setFile}
                    placeholder="Allergies [ Medicine / Food / Seasonal ]"
                    placeholderTextColor={"grey"}
                    keyboardType="default"
                    // multiline={true}
                  />
                  {fileError.length === 0 ? null : (
                    <Text style={styles.error}>{fileError}</Text>
                  )}
                </View>
              </View>
            </View>
          </>
        )}
        {/* Card8 */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>Healthy & Unhealthy Habits</Text>
          {/* Form */}
          <View style={styles.inputsContainer}>
            {/* Exercise */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Exercise</Text>
              {/* Line 1 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_1_1}
                    onValueChange={handlef5_1_1}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    Never
                  </Text>
                </View>
              </View>
              {/* Line 2 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_1_2}
                    onValueChange={handlef5_1_2}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    1-2 days
                  </Text>
                </View>
              </View>
              {/* Line 3 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_1_3}
                    onValueChange={handlef5_1_3}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    3-4 days
                  </Text>
                </View>
              </View>
              {/* Line 4 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_1_4}
                    onValueChange={handlef5_1_4}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    5+ days
                  </Text>
                </View>
              </View>
            </View>
            {/* Eating following a diet */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Eating following a diet</Text>
              {/* Line 1 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_2_1}
                    onValueChange={handlef5_2_1}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    I have a loose diet
                  </Text>
                </View>
              </View>
              {/* Line 2 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_2_2}
                    onValueChange={handlef5_2_2}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    I have a strict diet
                  </Text>
                </View>
              </View>
              {/* Line 3 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_2_3}
                    onValueChange={handlef5_2_3}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    I don’t have a diet plan
                  </Text>
                </View>
              </View>
            </View>
            {/* Alcohol Consumption */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Alcohol Consumption</Text>
              {/* Line 1 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_3_1}
                    onValueChange={handlef5_3_1}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    I don’t drink
                  </Text>
                </View>
              </View>
              {/* Line 2 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_3_2}
                    onValueChange={handlef5_3_2}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    1-2 glasses/day
                  </Text>
                </View>
              </View>
              {/* Line 3 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_3_3}
                    onValueChange={handlef5_3_3}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    3-4 glasses/day
                  </Text>
                </View>
              </View>
              {/* Line 4 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_3_4}
                    onValueChange={handlef5_3_4}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    5+ glasses/day
                  </Text>
                </View>
              </View>
            </View>
            {/* Caffeine Consumption */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Caffeine Consumption</Text>
              {/* Line 1 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_4_1}
                    onValueChange={handlef5_4_1}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    I don’t use caffeine
                  </Text>
                </View>
              </View>
              {/* Line 2 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_4_2}
                    onValueChange={handlef5_4_2}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    1-2 cups/day
                  </Text>
                </View>
              </View>
              {/* Line 3 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_4_3}
                    onValueChange={handlef5_4_3}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    3-4 cups/day
                  </Text>
                </View>
              </View>
              {/* Line 4 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_4_4}
                    onValueChange={handlef5_4_4}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    5+ cups/day
                  </Text>
                </View>
              </View>
            </View>
            {/* Do you smoke? */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Do you smoke?</Text>
              {/* Line 1 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_5_1}
                    onValueChange={handlef5_5_1}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    No
                  </Text>
                </View>
              </View>
              {/* Line 2 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_5_2}
                    onValueChange={handlef5_5_2}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    0-1 pack/day
                  </Text>
                </View>
              </View>
              {/* Line 3 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_5_3}
                    onValueChange={handlef5_5_3}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    1-2 packs/day
                  </Text>
                </View>
              </View>
              {/* Line 4 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={f5_5_4}
                    onValueChange={handlef5_5_4}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    2+ packs/day
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* Card9 */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>Patient Family History</Text>
          {/* Form */}
          <View style={styles.inputsContainer}>
            {/* Father */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Father</Text>
              <TextInput
                style={styles.input}
                value={father}
                onChangeText={setFather}
                placeholder="Father"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
            </View>
            {/* Mother */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Mother</Text>
              <TextInput
                style={styles.input}
                value={mother}
                onChangeText={setMother}
                placeholder="Mother"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
            </View>
            {/* Grandfather */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Grandfather</Text>
              <TextInput
                style={styles.input}
                value={gfather}
                onChangeText={setGfather}
                placeholder="Grandfather"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
            </View>
            {/* Grandmother */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Grandmother</Text>
              <TextInput
                style={styles.input}
                value={gmother}
                onChangeText={setGmother}
                placeholder="Grandmother"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
            </View>
            {/* Brother (s) */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Brother (s)</Text>
              <TextInput
                style={styles.input}
                value={brother}
                onChangeText={setBrother}
                placeholder="Brother (s)"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
            </View>
            {/* Sister (s) */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Sister (s)</Text>
              <TextInput
                style={styles.input}
                value={sister}
                onChangeText={setSister}
                placeholder="Sister (s)"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
            </View>
            {/* Uncle (s) */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Uncle (s)</Text>
              <TextInput
                style={styles.input}
                value={uncle}
                onChangeText={setUncle}
                placeholder="Uncle (s)"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
            </View>
            {/* Aunts (s) */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Aunts (s)</Text>
              <TextInput
                style={styles.input}
                value={aunts}
                onChangeText={setAunts}
                placeholder="Aunts (s)"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
            </View>
          </View>
        </View>
        {/* Card10 */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>
            {" "}
            Patient Mental Health History: (optional / mandatory for Mental
            Health related consultations)
          </Text>
          {/* Form */}
          <View style={styles.inputsContainer}>
            {/* Exercise */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>
                Do you have any below Current Symptoms
              </Text>
              {/* Options Mental */}
              <View style={styles.inputsContainer}>
                {/* Line 1 */}
                <View style={styles.inputContainer22}>
                  <View style={styles.checkbox_container}>
                    <Checkbox
                      value={box1}
                      onValueChange={handleBox1}
                      style={styles.checkbox}
                      color={"#40e0d0"}
                    />
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginRight: 10,
                        fontSize: 10,
                        maxWidth: 80,
                      }}
                    >
                      Depressed Mood
                    </Text>
                  </View>
                  <View style={styles.checkbox_container}>
                    <Checkbox
                      value={box1}
                      onValueChange={handleBox1}
                      style={styles.checkbox}
                      color={"#40e0d0"}
                    />
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginRight: 10,
                        fontSize: 10,
                        maxWidth: 80,
                      }}
                    >
                      Racing Thoughts
                    </Text>
                  </View>
                </View>
                {/* Line 2 */}
                <View style={styles.inputContainer22}>
                  <View style={styles.checkbox_container}>
                    <Checkbox
                      value={box1}
                      onValueChange={handleBox1}
                      style={styles.checkbox}
                      color={"#40e0d0"}
                    />
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginRight: 10,
                        fontSize: 10,
                        maxWidth: 80,
                      }}
                    >
                      Excessive Worry
                    </Text>
                  </View>
                  <View style={styles.checkbox_container}>
                    <Checkbox
                      value={box1}
                      onValueChange={handleBox1}
                      style={styles.checkbox}
                      color={"#40e0d0"}
                    />
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginRight: 10,
                        fontSize: 10,
                        maxWidth: 80,
                      }}
                    >
                      Unable to Enjoy Activities
                    </Text>
                  </View>
                </View>
                {/* Line 3 */}
                <View style={styles.inputContainer22}>
                  <View style={styles.checkbox_container}>
                    <Checkbox
                      value={box1}
                      onValueChange={handleBox1}
                      style={styles.checkbox}
                      color={"#40e0d0"}
                    />
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginRight: 10,
                        fontSize: 10,
                        maxWidth: 80,
                      }}
                    >
                      Impulsivity
                    </Text>
                  </View>
                  <View style={styles.checkbox_container}>
                    <Checkbox
                      value={box1}
                      onValueChange={handleBox1}
                      style={styles.checkbox}
                      color={"#40e0d0"}
                    />
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginRight: 10,
                        fontSize: 10,
                        maxWidth: 80,
                      }}
                    >
                      Anxiety Attacks
                    </Text>
                  </View>
                </View>
                {/* Line 4 */}
                <View style={styles.inputContainer22}>
                  <View style={styles.checkbox_container}>
                    <Checkbox
                      value={box1}
                      onValueChange={handleBox1}
                      style={styles.checkbox}
                      color={"#40e0d0"}
                    />
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginRight: 10,
                        fontSize: 10,
                        maxWidth: 80,
                      }}
                    >
                      Sleep Pattern Disturbance
                    </Text>
                  </View>
                  <View style={styles.checkbox_container}>
                    <Checkbox
                      value={box1}
                      onValueChange={handleBox1}
                      style={styles.checkbox}
                      color={"#40e0d0"}
                    />
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginRight: 10,
                        fontSize: 10,
                        maxWidth: 80,
                      }}
                    >
                      Increase Risky Behavior
                    </Text>
                  </View>
                </View>
                {/* Line 5 */}
                <View style={styles.inputContainer22}>
                  <View style={styles.checkbox_container}>
                    <Checkbox
                      value={box1}
                      onValueChange={handleBox1}
                      style={styles.checkbox}
                      color={"#40e0d0"}
                    />
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginRight: 10,
                        fontSize: 10,
                        maxWidth: 80,
                      }}
                    >
                      Avoidance
                    </Text>
                  </View>
                  <View style={styles.checkbox_container}>
                    <Checkbox
                      value={box1}
                      onValueChange={handleBox1}
                      style={styles.checkbox}
                      color={"#40e0d0"}
                    />
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginRight: 10,
                        fontSize: 10,
                        maxWidth: 80,
                      }}
                    >
                      Loss of Interest
                    </Text>
                  </View>
                </View>
                {/* Line 6 */}
                <View style={styles.inputContainer22}>
                  <View style={styles.checkbox_container}>
                    <Checkbox
                      value={box1}
                      onValueChange={handleBox1}
                      style={styles.checkbox}
                      color={"#40e0d0"}
                    />
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginRight: 10,
                        fontSize: 10,
                        maxWidth: 80,
                      }}
                    >
                      Increased Libido
                    </Text>
                  </View>
                  <View style={styles.checkbox_container}>
                    <Checkbox
                      value={box1}
                      onValueChange={handleBox1}
                      style={styles.checkbox}
                      color={"#40e0d0"}
                    />
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginRight: 10,
                        fontSize: 10,
                        maxWidth: 80,
                      }}
                    >
                      Hallucinations
                    </Text>
                  </View>
                </View>
                {/* Line 7 */}
                <View style={styles.inputContainer22}>
                  <View style={styles.checkbox_container}>
                    <Checkbox
                      value={box1}
                      onValueChange={handleBox1}
                      style={styles.checkbox}
                      color={"#40e0d0"}
                    />
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginRight: 10,
                        fontSize: 10,
                        maxWidth: 80,
                      }}
                    >
                      Concentration/Forgetfulness
                    </Text>
                  </View>
                  <View style={styles.checkbox_container}>
                    <Checkbox
                      value={box1}
                      onValueChange={handleBox1}
                      style={styles.checkbox}
                      color={"#40e0d0"}
                    />
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginRight: 10,
                        fontSize: 10,
                        maxWidth: 80,
                      }}
                    >
                      Decrease need for Sleep
                    </Text>
                  </View>
                </View>
                {/* Line 8 */}
                <View style={styles.inputContainer22}>
                  <View style={styles.checkbox_container}>
                    <Checkbox
                      value={box1}
                      onValueChange={handleBox1}
                      style={styles.checkbox}
                      color={"#40e0d0"}
                    />
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginRight: 10,
                        fontSize: 10,
                        maxWidth: 80,
                      }}
                    >
                      Suspiciousness
                    </Text>
                  </View>
                  <View style={styles.checkbox_container}>
                    <Checkbox
                      value={box1}
                      onValueChange={handleBox1}
                      style={styles.checkbox}
                      color={"#40e0d0"}
                    />
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginRight: 10,
                        fontSize: 10,
                        maxWidth: 80,
                      }}
                    >
                      Change in Appetite
                    </Text>
                  </View>
                </View>
                {/* Line 9 */}
                <View style={styles.inputContainer22}>
                  <View style={styles.checkbox_container}>
                    <Checkbox
                      value={box1}
                      onValueChange={handleBox1}
                      style={styles.checkbox}
                      color={"#40e0d0"}
                    />
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginRight: 10,
                        fontSize: 10,
                        maxWidth: 80,
                      }}
                    >
                      Excessive Energy
                    </Text>
                  </View>
                  <View style={styles.checkbox_container}>
                    <Checkbox
                      value={box1}
                      onValueChange={handleBox1}
                      style={styles.checkbox}
                      color={"#40e0d0"}
                    />
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginRight: 10,
                        fontSize: 10,
                        maxWidth: 80,
                      }}
                    >
                      Excessive Guilt
                    </Text>
                  </View>
                </View>
                {/* Line 10 */}
                <View style={styles.inputContainer22}>
                  <View style={styles.checkbox_container}>
                    <Checkbox
                      value={box1}
                      onValueChange={handleBox1}
                      style={styles.checkbox}
                      color={"#40e0d0"}
                    />
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginRight: 10,
                        fontSize: 10,
                        maxWidth: 80,
                      }}
                    >
                      Increased Irritability
                    </Text>
                  </View>
                  <View style={styles.checkbox_container}>
                    <Checkbox
                      value={box1}
                      onValueChange={handleBox1}
                      style={styles.checkbox}
                      color={"#40e0d0"}
                    />
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginRight: 10,
                        fontSize: 10,
                        maxWidth: 80,
                      }}
                    >
                      Fatigue
                    </Text>
                  </View>
                </View>
                {/* Line 11 */}
                <View style={styles.inputContainer22}>
                  <View style={styles.checkbox_container}>
                    <Checkbox
                      value={box1}
                      onValueChange={handleBox1}
                      style={styles.checkbox}
                      color={"#40e0d0"}
                    />
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginRight: 10,
                        fontSize: 10,
                        maxWidth: 80,
                      }}
                    >
                      Crying Spells
                    </Text>
                  </View>
                  <View style={styles.checkbox_container}>
                    <Checkbox
                      value={box1}
                      onValueChange={handleBox1}
                      style={styles.checkbox}
                      color={"#40e0d0"}
                    />
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginRight: 10,
                        fontSize: 10,
                        maxWidth: 80,
                      }}
                    >
                      Decreased Libido
                    </Text>
                  </View>
                </View>
                {/* Line 12 */}
                <View style={styles.inputContainer22}>
                  <View style={styles.checkbox_container}>
                    <Checkbox
                      value={box1}
                      onValueChange={handleBox1}
                      style={styles.checkbox}
                      color={"#40e0d0"}
                    />
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginRight: 10,
                        fontSize: 10,
                        maxWidth: 80,
                      }}
                    >
                      Other
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* Card11 */}
        <View style={[styles.card, styles.shadow1]}>
          <View style={styles.inputsContainer}>
            {/* ever had feelings */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>
                Have you ever had feelings or thoughts that you didn’t want to
                live?
              </Text>
              {/* Line 1 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={box1}
                    onValueChange={handleBox1}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    Yes
                  </Text>
                </View>
              </View>
              {/* Line 2 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={box1}
                    onValueChange={handleBox1}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    No
                  </Text>
                </View>
              </View>
            </View>
            {/* currently feelings */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>
                Do you currently feel that you don’t want to live?
              </Text>
              {/* Line 1 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={box1}
                    onValueChange={handleBox1}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    Yes
                  </Text>
                </View>
              </View>
              {/* Line 2 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={box1}
                    onValueChange={handleBox1}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    No
                  </Text>
                </View>
              </View>
            </View>
            {/*  How often do you have these thoughts? */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={file}
                onChangeText={setFile}
                placeholder=" How often do you have these thoughts?"
                placeholderTextColor={"grey"}
                keyboardType="default"
                // multiline={true}
              />
              {fileError.length === 0 ? null : (
                <Text style={styles.error}>{fileError}</Text>
              )}
            </View>
            {/* When was the last time you had thoughts of dying? */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={file}
                onChangeText={setFile}
                placeholder="When was the last time you had thoughts of dying?"
                placeholderTextColor={"grey"}
                keyboardType="default"
                // multiline={true}
              />
              {fileError.length === 0 ? null : (
                <Text style={styles.error}>{fileError}</Text>
              )}
            </View>
            {/* Have you seen a counselor, psychologist */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>
                Have you seen a counselor, psychologist, psychiatrist or other
                mental health professional before?
              </Text>
              {/* Line 1 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={box1}
                    onValueChange={handleBox1}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    Yes
                  </Text>
                </View>
              </View>
              {/* Line 2 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={box1}
                    onValueChange={handleBox1}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    No
                  </Text>
                </View>
              </View>
            </View>
            {/* Would you like to seek any help */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>
                Would you like to seek any help? (We take our users privacy very
                seriously)
              </Text>
              {/* Line 1 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={box1}
                    onValueChange={handleBox1}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    Yes
                  </Text>
                </View>
              </View>
              {/* Line 2 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={box1}
                    onValueChange={handleBox1}
                    style={styles.checkbox}
                    color={"#40e0d0"}
                  />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginRight: 10,
                      fontSize: 10,
                    }}
                  >
                    No
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* Top 5 questions */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>
            Top 5 questions for your specialists?{" "}
          </Text>
          {/* Form */}
          <View style={styles.inputsContainer}>
            {/* Question 1 */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Question 1</Text>
              <TextInput
                style={styles.input}
                value={file}
                onChangeText={setFile}
                placeholder="Question 1"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
              {fileError.length === 0 ? null : (
                <Text style={styles.error}>{fileError}</Text>
              )}
            </View>
            {/* Question 2 */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Question 2</Text>
              <TextInput
                style={styles.input}
                value={file}
                onChangeText={setFile}
                placeholder="Question 2"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
              {fileError.length === 0 ? null : (
                <Text style={styles.error}>{fileError}</Text>
              )}
            </View>
            {/* Question 3 */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Question 3</Text>
              <TextInput
                style={styles.input}
                value={file}
                onChangeText={setFile}
                placeholder="Question 3"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
              {fileError.length === 0 ? null : (
                <Text style={styles.error}>{fileError}</Text>
              )}
            </View>
            {/* Question 4 */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Question 4</Text>
              <TextInput
                style={styles.input}
                value={file}
                onChangeText={setFile}
                placeholder="Question 4"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
              {fileError.length === 0 ? null : (
                <Text style={styles.error}>{fileError}</Text>
              )}
            </View>
            {/* Question 5 */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Question 5</Text>
              <TextInput
                style={styles.input}
                value={file}
                onChangeText={setFile}
                placeholder="Question 5"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
              {fileError.length === 0 ? null : (
                <Text style={styles.error}>{fileError}</Text>
              )}
            </View>
          </View>
        </View>
        {/* Comments */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>
            Include other comments regarding your Medical History
          </Text>
          {/* Form */}
          <View style={styles.inputsContainer}>
            {/* Coments */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={file}
                onChangeText={setFile}
                placeholder="Include other comments regarding your Medical History"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
              {fileError.length === 0 ? null : (
                <Text style={styles.error}>{fileError}</Text>
              )}
            </View>
          </View>
        </View>
        {/* Reports */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>Upload Images / Reports</Text>
          <View style={styles.inputsContainer}>
            {/* Photo1 */}
            <View style={styles.inputContainer}>
              <View style={styles.reportImg_container}></View>
            </View>
            <Text style={styles.cardTitle4}>Image 1</Text>
            {/* Photo2 */}
            <View style={styles.inputContainer}>
              <View style={styles.reportImg_container}></View>
            </View>
            <Text style={styles.cardTitle4}>Image 2</Text>
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
  cardTitle3: {
    color: COLORS.fontColor4,
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
  },
  cardTitle4: {
    color: COLORS.fontColor4,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
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
  inputContainer22: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
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
  // Checkbox
  checkbox_container: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
  },
  // Report
  reportImg_container: {
    width: "100%",
    height: 150,
    backgroundColor: COLORS.bgColor1,
    borderRadius: 8,
    marginVertical: 10,
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

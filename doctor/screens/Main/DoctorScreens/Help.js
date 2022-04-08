import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Modal,
  Image,
} from "react-native";
import { COLORS, icons } from "../../../constants";
import Checkbox from "expo-checkbox";

const Help = ({ navigation }) => {
  const [indicatorLoad, setIndicatorLoad] = useState(false);
  const [help, setHelp] = useState(false);
  const [help2, setHelp2] = useState(false);

  // f2
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  // f3
  const [f3, setF3] = useState("");
  // f4
  // const [f4, setF4] = useState([]);
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
  const [f4_other, setF4_other] = useState("");
  // Medication
  const [medication, setMedication] = useState("");
  // Allergies
  const [allergies, setAllergies] = useState("");

  // f5
  // f5_1
  const [f5_1_1, setF5_1_1] = useState(false);
  const [f5_1_2, setF5_1_2] = useState(false);
  const [f5_1_3, setF5_1_3] = useState(false);
  const [f5_1_4, setF5_1_4] = useState(false);
  // f5_3
  const [f5_3_1, setF5_3_1] = useState(false);
  const [f5_3_2, setF5_3_2] = useState(false);
  const [f5_3_3, setF5_3_3] = useState(false);
  const [f5_3_4, setF5_3_4] = useState(false);

  // f5_5
  const [f5_5_1, setF5_5_1] = useState(false);
  const [f5_5_2, setF5_5_2] = useState(false);
  const [f5_5_3, setF5_5_3] = useState(false);
  const [f5_5_4, setF5_5_4] = useState(false);
  // f6
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [brother, setBrother] = useState("");
  const [sister, setSister] = useState("");
  // Top 5 Questions
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  // Appointment
  const [appointment1, setAppointment1] = useState(false);
  const [appointment2, setAppointment2] = useState(false);
  const [appointment3, setAppointment3] = useState(false);
  const [appointment4, setAppointment4] = useState(false);
  //   Error
  const [nameError, setNameError] = useState("");
  const [birthError, setBirthError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  // f4
  const handleOtherf4 = () => {
    setF4_1(false);
    setF4_2(false);
    setF4_3(false);
    setF4_4(false);
    setF4_5(false);
    setF4_6(false);
    setF4_7(false);
    setF4_8(false);
    setF4_9(false);
    setF4_10(false);
    setF4_11(false);
    setF4_12(false);
    setF4_13(false);
    setF4_14(false);
    setF4_15(false);
    setF4_16(false);
    setF4_17(false);
    setF4_18(false);
    setF4_19(false);
    setF4_20(false);
    setF4_21(false);
    setF4_22(false);
    setF4_23(false);
    setF4_24(!f4_24);
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
  // Appoitment
  const handleAppointment1 = () => {
    setAppointment1(true);
    setAppointment2(false);
    setAppointment3(false);
    setAppointment4(false);
  };
  const handleAppointment2 = () => {
    setAppointment1(false);
    setAppointment2(true);
    setAppointment3(false);
    setAppointment4(false);
  };
  const handleAppointment3 = () => {
    setAppointment1(false);
    setAppointment2(false);
    setAppointment3(true);
    setAppointment4(false);
  };
  const handleAppointment4 = () => {
    setAppointment1(false);
    setAppointment2(false);
    setAppointment3(false);
    setAppointment4(true);
  };
  // Submit
  const handleSubmit = async () => {
    // f4
    let f4 = "";
    if (f4_1) f4.concat("Anemia, ");
    if (f4_2) f4.concat("Asthma, ");
    if (f4_3) f4.concat("Arthritis, ");
    if (f4_4) f4.concat("Cancer, ");
    if (f4_5) f4.concat("Gout , ");
    if (f4_6) f4.concat("Diabetes, ");
    if (f4_7) f4.concat("Emotional Disorder, ");
    if (f4_8) f4.concat("Epilepsy Seizures, ");
    if (f4_9) f4.concat("Fainting Spells, ");
    if (f4_10) f4.concat("Gallstones, ");
    if (f4_11) f4.concat("Heart Disease, ");
    if (f4_12) f4.concat("Heart Attack, ");

    if (f4_17) f4.concat("Thyroid Problems, ");
    if (f4_18) f4.concat("Tuberculosis, ");
    if (f4_19) f4.concat("Venereal Disease, ");
    if (f4_20) f4.concat("Neurological Disorders, ");
    if (f4_21) f4.concat("Disorders, ");
    if (f4_22) f4.concat("Lung Disease, ");
    if (f4_24) f4.concat(f4_other);
    // exercices
    let exercices = "";
    if (f5_1_1) exercices = "Never";
    if (f5_1_2) exercices = "Regularly";
    // alcohol
    let alcohol = "";
    if (f5_3_1) alcohol = "Don’t drink";
    if (f5_3_2) alcohol = "Occasional";
    if (f5_3_3) alcohol = "Daily";
    // smoke
    let smoke = "";
    if (f5_5_1) smoke = "Never";
    if (f5_5_2) smoke = "Stopped";
    if (f5_5_3) smoke = "Daily";
    let appointment = "";
    if (appointment1) appointment = "ASAP";
    if (appointment2) appointment = "4-7 Days";
    if (appointment3) appointment = "Morning India time: 5.30am - 10am";
    if (appointment4) appointment = "Evening India time: 5.30pm - 12am";
    if (
      name.length === 0 ||
      birth.length === 0 ||
      gender.length === 0 ||
      phone.length === 0 ||
      f4.length === 0 ||
      father.length === 0 ||
      mother.length === 0 ||
      brother.length === 0 ||
      sister.length === 0 ||
      medication.length === 0 ||
      allergies.length === 0 ||
      exercices.length === 0 ||
      alcohol.length === 0 ||
      smoke.length === 0 ||
      f3.length === 0 ||
      q1.length === 0 ||
      q2.length === 0 ||
      q3.length === 0 ||
      append.length === 0
    ) {
      setHelp2(true);
    } else {
      await fetch("http://164.52.218.166:8000/intake/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: {
          customer: "special_request",
          name: name,
          birth: birth,
          gender: gender,
          phone: phone,
          patient_medical_history: f4,
          father: father,
          mother: mother,
          brother: brother,
          sister: sister,
          current_medication: medication,
          list_allergies: allergies,
          exercices: exercices,
          alcohol: alcohol,
          smoke: smoke,
          reason_for_consultation: f3,
          question1: q1,
          question2: q2,
          question3: q3,
          appointment: appointment,
        },
      })
        .then((response) => response.text())
        .then((res) => {
          setIndicatorLoad(false);
          console.log("Response Fecth =>", res);
        })
        .catch((err) => {
          setIndicatorLoad(false);
          console.log("==============================================");
          console.log("Error =>", err);
        });
      setHelp(true);
      console.log("DONE");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* ScrollView */}
      <ScrollView style={styles.scrollView}>
        {/* Card1 */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle}>Telemedicine Patient</Text>
          <Text style={styles.cardTitle}>Intake Form</Text>
          <Text style={[styles.cardTitle, { textDecorationLine: "underline" }]}>
            Special request
          </Text>
        </View>
        {/* Consultation for */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>Consultation for</Text>
          {/* Form */}
          <View style={styles.inputsContainer}>
            {/* Name */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Name (Autofill if Consultation for self))"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
              {nameError.length === 0 ? null : (
                <Text style={styles.error}>{nameError}</Text>
              )}
            </View>
            {/* Birth */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={birth}
                onChangeText={setBirth}
                placeholder="Age (Autofill if Consultation for self))"
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
            {/* Phone Number */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                placeholder="PhoneNumber (Autofill if Consultation for self))"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
              {phoneError.length === 0 ? null : (
                <Text style={styles.error}>{phoneError}</Text>
              )}
            </View>
          </View>
        </View>
        {/* Patient Medical History */}
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
                  Thyroid Problems
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
                  Tuberculosis
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
                  Venereal Disease
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
                  Neurological Disorders
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
                  Disorders
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
                  Lung Disease
                </Text>
              </View>
            </View>
            {/* Line 12 */}
            <View style={styles.inputContainer22}>
              <View style={styles.checkbox_container}>
                <Checkbox
                  value={f4_24}
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
            {f4_24 && (
              <>
                <TextInput
                  style={styles.input}
                  value={f4_other}
                  onChangeText={setF4_other}
                  placeholder="Please type your medical history here"
                  placeholderTextColor={"grey"}
                  keyboardType="default"
                />
              </>
            )}
          </View>
        </View>
        {/* Patient Family History */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>Patient Family History</Text>
          {/* Form */}
          <View style={styles.inputsContainer}>
            {/* Father */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>
                Please tell if your family member suffer(ed) from any health
                conditions
              </Text>
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
          </View>
        </View>
        {/* Current Medications */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>Current Medications</Text>
          {/* Form */}
          <View style={styles.inputsContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={medication}
                onChangeText={setMedication}
                placeholder="Please list all medications currently taking"
                placeholderTextColor={"grey"}
                keyboardType="default"
                // multiline={true}
              />
            </View>
          </View>
        </View>
        {/* Allergies */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>Allergies</Text>
          {/* Form */}
          <View style={styles.inputsContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={allergies}
                onChangeText={setAllergies}
                placeholder="Any Food, Medicine, Seasonal allergies"
                placeholderTextColor={"grey"}
                keyboardType="default"
                // multiline={true}
              />
            </View>
          </View>
        </View>
        {/* Healthy & Unhealthy Habits */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>Healthy & Unhealthy Habits</Text>
          {/* Form */}
          <View style={styles.inputsContainer}>
            {/* Exercise */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Exercise</Text>
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
                    Regularly
                  </Text>
                </View>
              </View>
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
                    Don’t drink
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
                    Occasional
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
                    Daily
                  </Text>
                </View>
              </View>
            </View>
            {/* Do you smoke? */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Smoke</Text>
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
                    Never
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
                    Stopped
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
                    Daily
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* Reason for Consultation */}
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
            </View>
          </View>
        </View>
        {/* Top 3 questions */}
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
                value={q1}
                onChangeText={setQ1}
                placeholder="Question 1"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
            </View>
            {/* Question 2 */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Question 2</Text>
              <TextInput
                style={styles.input}
                value={q2}
                onChangeText={setQ2}
                placeholder="Question 2"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
            </View>
            {/* Question 3 */}
            <View style={styles.inputContainer}>
              <Text style={styles.cardTitle4}>Question 3</Text>
              <TextInput
                style={styles.input}
                value={q3}
                onChangeText={setQ3}
                placeholder="Question 3"
                placeholderTextColor={"grey"}
                keyboardType="default"
              />
            </View>
          </View>
        </View>
        {/* Healthy & Unhealthy Habits */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle2}>
            Appointment time slot preference
          </Text>
          {/* Form */}
          <View style={styles.inputsContainer}>
            {/* Exercise */}
            <View style={styles.inputContainer}>
              {/* Line 1 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={appointment1}
                    onValueChange={handleAppointment1}
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
                    ASAP
                  </Text>
                </View>
              </View>
              {/* Line 2 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={appointment2}
                    onValueChange={handleAppointment2}
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
                    4-7 Days
                  </Text>
                </View>
              </View>
              {/* Line 3 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={appointment3}
                    onValueChange={handleAppointment3}
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
                    Morning India time: 5.30am - 10am
                  </Text>
                </View>
              </View>
              {/* Line 4 */}
              <View style={styles.inputContainer22}>
                <View style={styles.checkbox_container}>
                  <Checkbox
                    value={appointment4}
                    onValueChange={handleAppointment4}
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
                    Evening India time: 5.30pm - 12am
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {}
        <TouchableOpacity style={styles.button1} onPress={handleSubmit}>
          {indicatorLoad ? (
            <Text style={styles.signup}>
              <ActivityIndicator size="large" color="#ffffff" />
            </Text>
          ) : (
            <Text style={styles.signup}>Submit Request</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
      {/* Help */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={help}
        onRequestClose={() => {
          setHelp(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.ModelTitleView}>
              <Text style={styles.titleModal}>
                Your Request have been submitted Successfully
              </Text>
            </View>
            <View style={styles.ModelTitleView}>
              <Text style={styles.titleModal}>
                Our patient advisor will be reaching out to you in the next 24
                hours
              </Text>
            </View>
            <TouchableOpacity
              style={styles.signup2}
              onPress={() => {
                setHelp(false);
                navigation.navigate("home");
              }}
            >
              <Text style={styles.textStyle}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* Help2 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={help2}
        onRequestClose={() => {
          setHelp2(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Image
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fcancel.png?alt=media&token=871e1a80-7e50-4d5b-b6df-67eae1af334c",
                }}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
            </View>
            <View style={[styles.ModelTitleView, { marginBottom: 20 }]}>
              <Text style={styles.titleModal}>
                Please fill all fields before submit
              </Text>
            </View>
            <TouchableOpacity
              style={styles.signup2}
              onPress={() => {
                setHelp2(false);
              }}
            >
              <Text style={styles.textStyle}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Help;

const styles = StyleSheet.create({
  // Header
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor1,
    paddingTop: 0,
  },
  subContainer: {
    // flex: 1,
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: COLORS.bgColor1,
    height: 60,
    paddingHorizontal: 30,
  },
  logo: {
    width: 35,
    height: 35,
    marginTop: 5,
    borderRadius: 200,
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
    marginLeft: 3,
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
    marginLeft: 3,
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
  //   Model
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  ModelTitleView: {
    flexDirection: "row",
  },
  titleModal: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  signup2: {
    backgroundColor: COLORS.blueBtn,
    color: "white",
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, icons, images } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import * as DocumentPicker from "expo-document-picker";
import { gql, useMutation } from "@apollo/client";

const mapState = ({ user }) => ({
  currentProperty: user.currentProperty,
  userD: user.userD,
  errors: user.errors,
});

const MUTATE_QUERY = gql`
  mutation MutateUser(
    $email: String!
    $firstName: String!
    $lastName: String!
    $profilePic: String!
    $phoneNumber: String!
  ) {
    customerInput(
      email: $email
      firstName: $firstName
      lastName: $lastName
      profilePic: $profilePic
      phoneNumber: $phoneNumber
    ) {
      success
      errors
      refreshToken
      token
    }
  }
`;

const Profile = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { currentProperty, userD, errors } = useSelector(mapState);
  console.log("maptate => ", { currentProperty, userD, errors });
  const [MutateUser, { data, loading }] = useMutation(MUTATE_QUERY);
  const { ch } = route?.params || "empty";
  console.log("Profile Type =>", ch);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    if (userD) {
      setFirstName(userD.firstName);
      setLastName(userD.lastName);
      setEmail(userD.email);
      setAvatar(userD.profilePic);
      setPhone("");
    }
  }, [userD]);

  const handleChangePicture = async () => {
    let result = await DocumentPicker.getDocumentAsync({ type: "image/*" });
    console.log("Response2 =>", result);
    setAvatar(result.uri);
  };
  const handleSubmit = async () => {
    console.log("Saved !!");
    await MutateUser({
      variables: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        profilePic: profilePic,
        phoneNumber: phoneNumber,
      },
    }).then((res) => {
      console.log(" ===================== ");
      console.log("DONE", res);
      navigation.navigate("home");
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {/* Red Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerSub}
            onPress={() => navigation.navigate("home")}
          >
            <Ionicons
              name="ios-arrow-back-sharp"
              size={24}
              color="black"
              style={styles.icon_style}
            />
          </TouchableOpacity>
          <View style={styles.titleConatiner}>
            <Text style={styles.title1}>Profile</Text>
          </View>
          <View style={styles.titleConatiner}>
            <TouchableOpacity onPress={handleSubmit}>
              {/* <Text style={styles.title2}>Done</Text> */}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* ScrollView */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileContainer}>
          {/* Avatar */}
          <View style={styles.avatarContainer}>
            {avatar.length > 0 ? (
              <Image
                style={styles.avatar}
                source={{ uri: avatar }}
                resizeMode="cover"
              />
            ) : (
              <Image
                style={styles.avatar}
                source={icons.placeholder}
                resizeMode="cover"
              />
            )}
            <TouchableOpacity onPress={handleChangePicture}>
              <Text style={styles.title3}>Change profile picture</Text>
            </TouchableOpacity>
          </View>
          {/* Details */}
          <View style={styles.detailsContainer}>
            {/* First Name */}
            <View style={[styles.searchContainer, styles.shadow]}>
              <Text style={styles.title4}>First Name</Text>
              <TextInput
                style={styles.searchInput}
                value={firstName}
                onChangeText={setFirstName}
              />
            </View>
            {/* Last Name */}
            <View style={[styles.searchContainer, styles.shadow]}>
              <Text style={styles.title4}>Last Name</Text>
              <TextInput
                style={styles.searchInput}
                value={lastName}
                onChangeText={setLastName}
              />
            </View>
            {/* E mail */}
            <View style={[styles.searchContainer, styles.shadow]}>
              <Text style={styles.title4}>E mail</Text>
              <TextInput style={styles.searchInput} value={email} />
            </View>
            {/* Phone Number */}
            <View style={[styles.searchContainer, styles.shadow]}>
              <Text style={styles.title4}>Phone Number</Text>
              <TextInput
                style={styles.searchInput}
                value={phone}
                onChangeText={setPhone}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

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
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.bgColor1,
    height: 60,
    paddingHorizontal: 30,
  },
  headerSub: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  icon_style: {
    marginRight: 10,
  },
  titleConatiner: {
    padding: 5,
  },
  title1: {
    color: COLORS.fontColor4,
    fontSize: 22,
    fontWeight: "bold",
    margin: 0,
    lineHeight: 29,
    textAlign: "center",
  },
  title2: {
    color: COLORS.fontColor4,
    fontSize: 16,
    margin: 0,
    padding: 0,
    lineHeight: 29,
    textAlign: "center",
  },
  title3: {
    color: COLORS.fontColor4,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  title4: {
    color: COLORS.fontColor4,
    fontSize: 10,
  },
  //  ScrollView
  scrollView: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: COLORS.bgColor1,
  },
  //  avatar
  avatarContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 50,
  },
  //   Details
  searchContainer: {
    backgroundColor: "white",
    color: COLORS.primary,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  searchInput: {
    fontSize: 18,
  },
  shadow: {
    shadowColor: "#cdcddd",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0,
    shadowRadius: 2,
    elevation: 2,
  },
});

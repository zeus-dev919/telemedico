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
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import * as DocumentPicker from "expo-document-picker";
import { gql, useMutation, useQuery } from "@apollo/client";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../../firebase/utils";
import uuid from "react-native-uuid";
import { setUser, setUserame } from "../../../redux/User/user.actions";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
} from "firebase/firestore";

const mapState = ({ user }) => ({
  userD: user.userD,
});

const ME_QUERY = gql`
  query {
    users {
      edges {
        node {
          username
          email
        }
      }
    }
  }
`;

const MUTATE_QUERY = gql`
  mutation a(
    $firstName: String!
    $lastName: String!
    $phone: String!
    $profilePic: String!
  ) {
    createCustomer(
      input: {
        id: 1
        firstName: $firstName
        lastName: $lastName
        phoneNumber: $phone
        avatarPic: $profilePic
      }
    ) {
      customer {
        firstName
      }
      errors {
        messages
      }
    }
  }
`;

const Profile = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { userD } = useSelector(mapState);
  console.log(userD);
  const [a, { data2, loading2 }] = useMutation(MUTATE_QUERY);
  const { data, loading } = useQuery(ME_QUERY);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [DOB, setDOB] = useState("");
  const [country, setCountry] = useState("");
  const [avatar, setAvatar] = useState("");
  const [url, setUrl] = useState(null);
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [firebaseDocId, setFirebaseDocId] = useState(null);

  // Func*

  const addNewUser = async () => {
    console.log("this line 1");
    const docRef = await addDoc(collection(db, "users"), {
      fullname: userD.username,
      email: userD.email,
      phone: "",
      dob: "",
      city: "",
    });
    setFirebaseUser({
      fullname: userD.username,
      email: userD.email,
      phone: "",
      dob: "",
      city: "",
    });
    setFirebaseDocId(docRef.id);
  };

  useEffect(() => {
    const q = query(collection(db, "users"), where("email", "==", userD.email));
    const querySnapshot = onSnapshot(q, (snapshot) => {
      if (snapshot.docs.length === 0) {
        addNewUser();
      } else {
        console.log("this line 2");
        snapshot.docs.map((doc) => {
          console.log("Doc");
          setFirebaseUser(doc.data());
          setFirebaseDocId(doc.id);
        });
      }
    });
    return () => {
      querySnapshot();
    };
  }, []);

  useEffect(() => {
    console.log("firebaseUser: ", firebaseUser);
    console.log("firebaseDocId: ", firebaseDocId);
  }, [firebaseUser, firebaseDocId]);

  // const updateAvatarUser = async (downloadURL) => {
  //   const userRef = doc(db, "users", userDocId);
  //   await updateDoc(userRef, {
  //     avatar: downloadURL,
  //     updatedAt: new Date(),
  //   })
  //     .then(() => {
  //       console.log("Avatar switched !!");
  //     })
  //     .catch((err) => console.error(err));
  // };
  // const handleUpload = async () => {
  //   if (avatar.length > 0) {
  //     const url_uuid = uuid.v4();
  //     const storageRef = ref(storage, `${userD?.email}/${url_uuid}.png`);
  //     try {
  //       const r = await fetch(avatar);
  //       const b = await r.blob();
  //       uploadBytes(storageRef, b)
  //         .then(() => {
  //           getDownloadURL(storageRef).then(async (downloadURL) => {
  //             updateAvatarUser(downloadURL);
  //           });
  //         })
  //         .catch((error) => {
  //           console.log("catch", error);
  //         });
  //     } catch (error) {
  //       console.log("Catch ", error);
  //     }
  //   }
  //   if (firstName !== userD?.name) {
  //     const userRef = doc(db, "users", userDocId);
  //     await updateDoc(userRef, {
  //       name: firstName,
  //       updatedAt: new Date(),
  //     })
  //       .then(() => {
  //         console.log("FirstName switched !!");
  //       })
  //       .catch((err) => console.error(err));
  //   }
  //   navigation.goBack();
  // };

  // Func*

  useEffect(() => {
    if (data) {
      let i = 0;
      while (
        data.users.edges[i]?.node?.email !== userD.email &&
        i < data.users?.edges?.length
      ) {
        i++;
      }
      if (data.users?.edges[i]?.node?.email === userD.email) {
        dispatch(
          setUserame(
            data.users?.edges[i]?.node?.username,
            userD.email,
            userD.password
          )
        );
      }
    }
  }, [data]);
  useEffect(() => {
    if (userD) {
      setAvatar(userD.profilePic);
      setFirstName(userD.username);
      setEmail(userD.email);
      setPhone(userD.phoneNumber);
    }
  }, [userD]);

  const handleChangePicture = async () => {
    let result = await DocumentPicker.getDocumentAsync({ type: "image/*" });
    console.log("Response2 =>", result);
    setAvatar(result.uri);
  };
  const handleSubmit = async () => {
    console.log("Here Line 169");
    await handleUpload();
    console.log("Here Line 171");
    let user = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      profilePic: url,
      phoneNumber: phone,
    };
    dispatch(setUser(user));
    navigation.navigate("home");
    await a({
      variables: {
        firstName: firstName,
        lastName: lastName,
        profilePic: url,
        phoneNumber: phone,
      },
    }).then((res) => {
      console.log(" ===========DONE========== ");
      let user = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        profilePic: url,
        phoneNumber: phone,
      };
      dispatch(setUser(user));
      navigation.navigate("Home");
    });
    console.log("Here Line 192");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {/* Red Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerSub}
            onPress={() => navigation.navigate("Home")}
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
          <View style={{ width: 50 }}></View>
          {/* <View style={styles.titleConatiner}>
            <TouchableOpacity onPress={() => handleSubmit()}>
              <Text style={styles.title2}>Done</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
      {/* ScrollView */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileContainer}>
          {/* Avatar */}
          <View style={styles.avatarContainer}>
            {avatar?.length > 0 ? (
              <Image
                style={styles.avatar}
                source={{
                  uri: avatar,
                }}
                resizeMode="cover"
              />
            ) : (
              <Image
                style={styles.avatar}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fplaceholder.png?alt=media&token=50c889a1-fb4c-4e92-af36-034f6a9f6cdf",
                }}
                resizeMode="cover"
              />
            )}
            <TouchableOpacity onPress={() => handleChangePicture()}>
              <Text style={styles.title3}>Change profile picture</Text>
            </TouchableOpacity>
          </View>
          {/* Details */}
          <View style={styles.detailsContainer}>
            {/* First Name */}
            <View style={[styles.searchContainer, styles.shadow]}>
              <Text style={styles.title4}>Full Name</Text>
              <TextInput
                style={styles.searchInput}
                value={firstName}
                onChangeText={setFirstName}
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
            {/* DOB */}
            <View style={[styles.searchContainer, styles.shadow]}>
              <Text style={styles.title4}>DOB</Text>
              <TextInput
                style={styles.searchInput}
                value={DOB}
                onChangeText={setDOB}
              />
            </View>
            {/* City, country */}
            <View style={[styles.searchContainer, styles.shadow]}>
              <Text style={styles.title4}>City, country</Text>
              <TextInput
                style={styles.searchInput}
                value={country}
                onChangeText={setCountry}
              />
            </View>
            <TouchableOpacity onPress={handleSubmit} style={styles.relevant}>
              <Text style={styles.relevantTitle}>Done</Text>
            </TouchableOpacity>
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
    width: 50,
  },
  icon_style: {
    marginRight: 0,
  },
  titleConatiner: {
    padding: 0,
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
    width: 50,
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
  relevant: {
    backgroundColor: COLORS.blueBtn,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 15,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  relevantTitle: {
    fontSize: 18,
    color: "white",
  },
});

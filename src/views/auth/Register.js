import { StyleSheet, View } from "react-native";
import React from "react";
import colorCollection from "../../utils/global/colors";
import NavigationButtons from "../../components/navigation/NavigationButtons";
import UserForm from "../../components/auth/UserForm";

const Register = () => {
  return (
    <>
      <View style={styles.container}>
        <NavigationButtons />
        <UserForm
          onRegister={true}
          onUpdate={false}
          profile={""}
          localId={""}
        />
      </View>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: colorCollection.lightviolet,
  },
});

import React, { useState, useContext } from "react";
import Selection from "./Selection";
import VidCall from "./VidCall";
import Navigation from "./Navigation";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { FireBaseAuthContext } from "../Context";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function Home() {
  const provider = new GoogleAuthProvider();
  const { user,setUser } = useContext(FireBaseAuthContext);
  console.log(user);
  const singIn = async () => {
    const res = await signInWithPopup(auth, provider).catch(error => {
      console.error(error)
    });
    console.log(res)
    setUser(res?.user)
  };
  const [selected, setSelected] = useState(false);
  return user ? (
    <>
      <Navigation />
      {!selected && <Selection setSelected={setSelected} />}
      {selected && <VidCall />}
    </>
  ) : (
    <>
      <Navigation />
      <Alert variant="info">SingIn With Google to Start Meeting Strangers</Alert>
      <Button style={{ width: "97vw", margin: "10px" }} onClick={singIn}>
        Sign In
      </Button>
    </>
  );
}

export default Home;

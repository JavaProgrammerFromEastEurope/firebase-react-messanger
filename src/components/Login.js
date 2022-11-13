import React, { useContext } from "react";
import { Button, Container, Grid, Box } from "@material-ui/core";
import Context from "../context";
import firebase from "firebase";

const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid
          container
          style={{ width: 400, background: "lightgray" }}
          alignItems={"center"}
          direction={"column"}
        >
          <Box p={5}>
            <Button onClick={login} variant={"outlined"}>
              Google Authorization
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;

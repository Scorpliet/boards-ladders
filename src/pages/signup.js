import React, { Fragment, useState } from "react";
import InitialDetails from "../components/initialDetails";
import RoleDetails from "../components/roleDetails";
import UserDetails from "../components/userDetails";
import Starting from "../components/starting";
import Header from "../components/header";
import { db } from "../utils/firebaseconfig";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from "../utils/authcontext";
import {
  Loading,
  AccConfirm,
  Layout,
} from "../components/subComp";
import { Navigate, redirect } from "react-router-dom";

const Signup = () => {
  const [x, setX] = useState(0);
  const [step, setStep] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState("");
  const { signup} = useAuth();
  const userCollectionRef = collection(db, "user_details");
  const [details, setDetails] = useState({
    comp_name: "",
    investor_type: "",
    role: "",
    comp_email: "",
    comp_pass: "",
    pass_confirm: "",
  });

  const nextStep = (e) => {
    setStep(step + 1);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setDetails({
      ...details,
      [e.target.name]: value,
    });
  };

  const values = Object.values(details);

  const appendData = async () => {
    setHasError("");

    if (values[4] !== values[5]) {
      console.log("Passwords do not match");
      setHasError("Passwords do not match");
      return false;
    }
    setIsLoading(true);
    try {
      await addDoc(userCollectionRef, {
        comp_name: values[0],
        investor_type: values[1],
        role: values[2],
      });
      console.log(values[3], values[4]);
      await signup(values[3], values[4]);
      console.log("acc created");
    } catch (error) {
      setHasError("Failed to create an account");
      console.log("failed creating account");
    }
    setIsLoading(false);
    return (<Navigate to="/verifyEmail"/>)
  };

  switch (step) {
    case 1:
      return (
        <>
          <Starting />
          <InitialDetails
            nextStep={nextStep}
            handleChange={handleChange}
            x={x}
            setX={setX}
          />
        </>
      );

    case 2:
      return (
        <>
          <RoleDetails
            nextStep={nextStep}
            handleChange={handleChange}
            x={x}
            setX={setX}
          />
        </>
      );
    case 3:
      return (
        <>
          <AccConfirm message={hasError}></AccConfirm>
          <UserDetails
            store={appendData}
            nextStep={nextStep}
            handleChange={handleChange}
            x={x}
            setX={setX}
          />
        </>
      );

    default:
      return <div className="form-area">Error</div>;
  }
};

const SignUp = () => {
  return (
    <>
      <Header start={true} bar={true} />
      <Layout />
      <Signup />
    </>
  );
};

export default SignUp;

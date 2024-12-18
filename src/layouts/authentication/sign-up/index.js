// react-router-dom components
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MetaMaskAuth from "components/MetaMaskAuth";
// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
// Material Dashboard 2 React components

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function Cover() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle Register button click
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Register button clicked!");
    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }
    console.log("User signed up with form data:", { name, email });
    navigate("/authentication/sign-in");
  };

  // Handle MetaMask signup
  const handleMetaMaskAuth = (data) => {
    console.log("MetaMask signup data:", data);
    // You can send `data.address`, `data.signature`, and `data.nonce` to the backend
    localStorage.setItem("authToken", "metaMaskDummyToken");
    console.log("User signed up successfully with MetaMask!");
    navigate("/dashboard");
  };

  //   // Simulated email check
  //   if (email === "test@example.com") {
  //     setHasAccount(true); // Show error message
  //     setError("This email is already registered. Please Sign In.");
  //   } else {
  //     setHasAccount(false); // Clear error
  //     console.log("User registered successfully!");
  //     navigate("/authentication/sign-in"); // Redirect to Sign In page
  //   }
  // };

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleRegister}>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Name"
                variant="standard"
                fullWidth
                value={name} // Bind name state
                onChange={(e) => setName(e.target.value)} // Update name state
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
                value={email} // Bind email state
                onChange={(e) => setEmail(e.target.value)} // Update email state
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                variant="standard"
                fullWidth
                value={password} // Bind password state
                onChange={(e) => setPassword(e.target.value)} // Update password state
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth type="submit">
                Register
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}
export default Cover;

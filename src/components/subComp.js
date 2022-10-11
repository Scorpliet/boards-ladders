import React from "react";
import { useAuth } from "../utils/authcontext";
import Header from "./header";

const Loading = () => {
  return (
    <div className="content">
      <div className="loading-area">
        <div className="loading-icon">
          <i className="material-icons">hive</i>
        </div>
      </div>
    </div>
  );
};

const AccConfirm = ({ message }) => {
  return <div className="error-alert">{message}</div>;
};

const EmailConfirmation = () => {
  const { verifyEmail, currentUser } = useAuth();
  const verifyData = async () => {
    console.log(currentUser.email);
    await verifyEmail();
    console.log("email sent to" + currentUser.email);
  };

  const Continue = (e) => {
    e.preventDefault();
    verifyData();
  };

  return (
    <div style={{ overflowY: "hidden" }}>
      <Header transparent={true} logo2={true} white_bar={true}></Header>
      <h1 className="page-4">
        Welcome to Boards + tables, {currentUser.email}
      </h1>
      <div className="page-4box page-4para">
        <p>
          You're receiving this message because you recently signed up for a
          Boards + tables account.
        </p>
        <br />
        <p>
          Confirm your email address by clicking the button below. This step
          adds extra security to your account by verifying you own this email.
        </p>
        <button className="btn-next btn-container btn-4" onClick={Continue}>
          Confirm Email
        </button>
      </div>
      <svg
        style={{ marginTop: "150px" }}
        width="100%"
        height="270"
        viewBox="0 0 600 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M599 80.6822H-1V24.6822C18 17.6822 66.3 2.9822 107.5 0.182205C159 -3.3178 190 44.6822 218.5 51.6822C247 58.6822 290.5 15.7528 320 18.1822C362.5 21.6822 365.5 24.1822 390.5 51.1822C415.5 78.1822 470 40.6822 511.5 18.1822C544.28 0.409746 580.733 23.9071 598.333 35.2525L599 35.6822V80.6822Z"
          fill="#C33764"
          fillOpacity="0.11"
        />
        <path
          d="M860 95H-45V49.8847C-16.3417 44.2453 56.5108 32.4026 118.654 30.1468C196.333 27.3271 243.092 65.9973 286.079 71.6367C329.067 77.2761 394.679 42.6909 439.175 44.6481C503.279 47.4678 507.804 49.4819 545.513 71.2339C583.221 92.9859 665.425 62.7748 728.021 44.6481C777.464 30.3301 832.447 49.2602 858.994 58.4004L860 58.7467V95Z"
          fill="url(#paint0_linear_247_313)"
          fillOpacity="0.6"
        />
        <path
          d="M644 94H-220V37.7794C-192.64 30.7519 -123.088 15.994 -63.76 13.1829C10.4 9.66914 55.04 57.8582 96.08 64.8858C137.12 71.9133 199.76 28.8148 242.24 31.2538C303.44 34.7676 307.76 37.2774 343.76 64.3838C379.76 91.4901 458.24 53.8424 518 31.2538C565.204 13.4114 617.695 37.0012 643.04 48.3913L644 48.8228V94Z"
          fill="url(#paint1_linear_247_313)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_247_313"
            x1="407.5"
            y1="30"
            x2="407.5"
            y2="95"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#222771" />
            <stop offset="1" stopColor="#222771" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_247_313"
            x1="212"
            y1="13"
            x2="212"
            y2="94"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C33764" stopOpacity="0" />
            <stop offset="1" stopColor="#C33764" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
function BoardFallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div
      role="alert"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button className="btn-next" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
}
const Layout = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-area">
          <div className="sidebar-content sidebar-content-p">
            Get Started
            <br />
            <br />
            <br />
            <p>
              View and share important company and board docs seccurally and
              confidentiality on the blockchain
            </p>
          </div>
        </div>
        <div className="sidebar-down">
          <img
            className="key"
            src={require("../images/key.png")}
            alt="key"
          ></img>
        </div>
      </div>
    </>
  );
};

export {
  Loading,
  AccConfirm,
  EmailConfirmation,
  BoardFallbackComponent,
  Layout,
};

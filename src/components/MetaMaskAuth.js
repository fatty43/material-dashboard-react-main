// import React, { useState } from "react";
// import Web3 from "web3";
// import detectEthereumProvider from "@metamask/detect-provider";

// const MetaMaskAuth = ({ onAuthenticate }) => {
//   const [account, setAccount] = useState("");
//   const [status, setStatus] = useState("Not connected");
//   const [error, setError] = useState("");

//   // Connect MetaMask
//   const connectMetaMask = async () => {
//     try {
//       const provider = await detectEthereumProvider();
//       if (!provider) {
//         setError("MetaMask is not installed. Please install it to continue.");
//         return;
//       }

//       const web3 = new Web3(provider);

//       // Request account access
//       await provider.request({ method: "eth_requestAccounts" });

//       const accounts = await web3.eth.getAccounts();
//       const userAddress = accounts[0];
//       setAccount(userAddress);

//       // Generate a nonce and sign it for authentication
//       const nonce = `Sign this message to verify: ${new Date().toISOString()}`;
//       const signature = await web3.eth.personal.sign(nonce, userAddress, "");

//       // Pass data back to parent (for handling login/signup)
//       onAuthenticate({
//         address: userAddress,
//         signature,
//         nonce,
//       });

//       setStatus("Authenticated successfully!");
//     } catch (err) {
//       console.error("MetaMask connection failed:", err);
//       setError("Failed to connect to MetaMask.");
//     }
//   };

//   return (
//     <div>
//       <button
//         style={{
//           padding: "10px 20px",
//           backgroundColor: "#f6851b",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//         onClick={connectMetaMask}
//       >
//         Connect MetaMask
//       </button>
//       {account && <p>Connected Address: {account}</p>}
//       <p>{status}</p>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };



// export default MetaMaskAuth;
import React, { useState } from "react";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";

const MetaMaskAuth = ({ onAuthenticate }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [error, setError] = useState("");

  const connectMetaMask = async () => {
    try {
      // Detect MetaMask provider
      const provider = await detectEthereumProvider();

      if (!provider) {
        setError("MetaMask not detected. Please install it to continue.");
        return;
      }

      // Request account access
      const web3 = new Web3(provider);
      await provider.request({ method: "eth_requestAccounts" });
      const accounts = await web3.eth.getAccounts();
      const userAddress = accounts[0];

      // Set wallet address and callback to parent
      setWalletAddress(userAddress);
      onAuthenticate({ address: userAddress });
      console.log("Connected Wallet Address:", userAddress);
    } catch (err) {
      console.error("Error connecting to MetaMask:", err);
      setError("Failed to connect to MetaMask.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <button
        onClick={connectMetaMask}
        style={{
          padding: "10px 20px",
          backgroundColor: "#f6851b",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Connect MetaMask
      </button>

      {walletAddress && <p>Connected Wallet: <strong>{walletAddress}</strong></p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default MetaMaskAuth;

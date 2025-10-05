// // import React, { useState } from "react";

// // export default function AuditingForm() {
// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //     qualityStatus: "Good", // dropdown default
// //     checkYes: false,
// //     checkNo: false,
// //     qaComment: "",
// //   });

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setForm((prev) => ({
// //       ...prev,
// //       [name]: type === "checkbox" ? checked : value,
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Here you can add validation or API calls
// //     alert("Submitted Data:\n" + JSON.stringify(form, null, 2));
// //   };

// //   return (
// //     <div style={{ maxWidth: 900, margin: "60px auto", padding: 30, background: "#f6f9fc", borderRadius: 12, boxShadow: "0 3px 12px #a6beda55" }}>
// //       <h2 style={{ color: "#1e90ff", marginBottom: 24, textAlign: "center" }}>Auditing Credentials Form</h2>
// //       <form onSubmit={handleSubmit}>

// //         <div style={{ marginBottom: 16 }}>
// //           <label htmlFor="name" style={{ display: "block", fontWeight: "600", marginBottom: 6 }}>Name</label>
// //           <input
// //             id="name"
// //             name="name"
// //             type="text"
// //             value={form.name}
// //             onChange={handleChange}
// //             required
// //             placeholder="Enter full name"
// //             style={{ width: "50%", padding: "10px 12px", borderRadius: 6, border: "1px solid #ccc", fontSize: 16 }}
// //           />
// //         </div>

// //         <div style={{ marginBottom: 16 }}>
// //           <label htmlFor="email" style={{ display: "block", fontWeight: "600", marginBottom: 6 }}>Email</label>
// //           <input
// //             id="email"
// //             name="email"
// //             type="email"
// //             value={form.email}
// //             onChange={handleChange}
// //             required
// //             placeholder="Enter email"
// //             style={{ width: "50%", padding: "10px 12px", borderRadius: 6, border: "1px solid #ccc", fontSize: 16 }}
// //           />
// //         </div>

// //         <div style={{ marginBottom: 16 }}>
// //           <label htmlFor="password" style={{ display: "block", fontWeight: "600", marginBottom: 6, }}>Password</label>
// //           <input
// //             id="password"
// //             name="password"
// //             type="password"
// //             value={form.password}
// //             onChange={handleChange}
// //             required
// //             placeholder="Enter password"
// //             style={{ width: "50%", padding: "10px 12px", borderRadius: 6, border: "1px solid #ccc", fontSize: 16 }}
// //           />
// //         </div>

// //         <div style={{ marginBottom: 16 }}>
// //           <label htmlFor="qualityStatus" style={{ display: "block", fontWeight: "600", marginBottom: 6 }}>Quality Status</label>
// //           <select
// //             id="qualityStatus"
// //             name="qualityStatus"
// //             value={form.qualityStatus}
// //             onChange={handleChange}
// //             style={{ width: "50%", padding: "10px 12px", borderRadius: 6, border: "1px solid #ccc", fontSize: 16 }}
// //           >
// //             <option value="Good">Good</option>
// //             <option value="Bad">Bad</option>
// //           </select>
// //         </div>

// //         <fieldset style={{ marginBottom: 16, border: "none", padding: 0 }}>
// //           <legend style={{ fontWeight: "600", marginBottom: 8 }}>Options</legend>
// //           <label style={{ marginRight: 16 }}>
// //             <input
// //               type="checkbox"
// //               name="checkYes"
// //               checked={form.checkYes}
// //               onChange={handleChange}
// //             /> Yes
// //           </label>
// //           <label>
// //             <input
// //               type="checkbox"
// //               name="checkNo"
// //               checked={form.checkNo}
// //               onChange={handleChange}
// //             /> No
// //           </label>
// //         </fieldset>

// //         <div style={{ marginBottom: 24 }}>
// //           <label htmlFor="qaComment" style={{ display: "block", fontWeight: "600", marginBottom: 6 }}>QA Comments</label>
// //           <textarea
// //             id="qaComment"
// //             name="qaComment"
// //             value={form.qaComment}
// //             onChange={handleChange}
// //             placeholder="Enter any comments or notes for QA"
// //             rows={5}
// //             style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "1px solid #ccc", fontSize: 16, resize: "vertical" }}
// //           />
// //         </div>

// //         <button
// //           type="submit"
// //           style={{
// //             backgroundColor: "#1e90ff",
// //             color: "#fff",
// //             border: "none",
// //             padding: "12px 28px",
// //             fontSize: 18,
// //             fontWeight: "700",
// //             borderRadius: 8,
// //             cursor: "pointer",
// //             display: "block",
// //             margin: "0 auto"
// //           }}
// //         >
// //           Submit
// //         </button>

// //       </form>
// //     </div>
// //   );
// // }



// import React, { useState } from "react";

// export default function AuditingForm() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     accountNumber: "",
//     coordNumber: "",
//     slNumber: "",
//     newZone: "",
//     typeOfRequest: "Zone Transfer",
//     campaign: "",
//     zmConsent: false,
//     qualityStatus: "Good",
//     checkYes: false,
//     checkNo: false,
//     qaComment: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Submitted Data:\n" + JSON.stringify(form, null, 2));
//   };

//   return (
//     <div
//       style={{
//         maxWidth: 900,
//         margin: "60px auto",
//         padding: 30,
//         background: "#f6f9fc",
//         borderRadius: 12,
//         boxShadow: "0 3px 12px #a6beda55",
//       }}
//     >
//       <h2
//         style={{
//           color: "#1e90ff",
//           marginBottom: 24,
//           textAlign: "center",
//         }}
//       >
//         Auditing Credentials Form
//       </h2>

//       <form onSubmit={handleSubmit}>
//         {/* Name */}
//         <div style={{ marginBottom: 16 }}>
//           <label
//             htmlFor="name"
//             style={{ display: "block", fontWeight: "600", marginBottom: 6 }}
//           >
//             Name
//           </label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             value={form.name}
//             onChange={handleChange}
//             required
//             placeholder="Enter full name"
//             style={{
//               width: "50%",
//               padding: "10px 12px",
//               borderRadius: 6,
//               border: "1px solid #ccc",
//               fontSize: 16,
//             }}
//           />
//         </div>

//         {/* Email */}
//         {/* <div style={{ marginBottom: 16 }}>
//           <label
//             htmlFor="email"
//             style={{ display: "block", fontWeight: "600", marginBottom: 6 }}
//           >
//             Email
//           </label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             placeholder="Enter email"
//             style={{
//               width: "50%",
//               padding: "10px 12px",
//               borderRadius: 6,
//               border: "1px solid #ccc",
//               fontSize: 16,
//             }}
//           />
//         </div> */}

//         {/* Password */}
//         {/* <div style={{ marginBottom: 16 }}>
//           <label
//             htmlFor="password"
//             style={{ display: "block", fontWeight: "600", marginBottom: 6 }}
//           >
//             Password
//           </label>
//           <input
//             id="password"
//             name="password"
//             type="password"
//             value={form.password}
//             onChange={handleChange}
//             required
//             placeholder="Enter password"
//             style={{
//               width: "50%",
//               padding: "10px 12px",
//               borderRadius: 6,
//               border: "1px solid #ccc",
//               fontSize: 16,
//             }}
//           />
//         </div>
//  */}
//         {/* Account Number */}
//         <div style={{ marginBottom: 16 }}>
//           <label
//             htmlFor="accountNumber"
//             style={{ display: "block", fontWeight: "600", marginBottom: 6 }}
//           >
//             Account Number
//           </label>
//           <input
//             id="accountNumber"
//             name="accountNumber"
//             type="text"
//             value={form.accountNumber}
//             onChange={handleChange}
//             placeholder="Enter account number"
//             style={{
//               width: "50%",
//               padding: "10px 12px",
//               borderRadius: 6,
//               border: "1px solid #ccc",
//               fontSize: 16,
//             }}
//           />
//         </div>

//         {/* Coord Number */}
//         <div style={{ marginBottom: 16 }}>
//           <label
//             htmlFor="coordNumber"
//             style={{ display: "block", fontWeight: "600", marginBottom: 6 }}
//           >
//             Coord Number
//           </label>
//           <input
//             id="coordNumber"
//             name="coordNumber"
//             type="text"
//             value={form.coordNumber}
//             onChange={handleChange}
//             placeholder="Enter coord number"
//             style={{
//               width: "50%",
//               padding: "10px 12px",
//               borderRadius: 6,
//               border: "1px solid #ccc",
//               fontSize: 16,
//             }}
//           />
//         </div>

//         {/* SL Number */}
//         <div style={{ marginBottom: 16 }}>
//           <label
//             htmlFor="slNumber"
//             style={{ display: "block", fontWeight: "600", marginBottom: 6 }}
//           >
//             SL Number
//           </label>
//           <input
//             id="slNumber"
//             name="slNumber"
//             type="text"
//             value={form.slNumber}
//             onChange={handleChange}
//             placeholder="Enter SL number"
//             style={{
//               width: "50%",
//               padding: "10px 12px",
//               borderRadius: 6,
//               border: "1px solid #ccc",
//               fontSize: 16,
//             }}
//           />
//         </div>

//         {/* New Zone */}
//         <div style={{ marginBottom: 16 }}>
//           <label
//             htmlFor="newZone"
//             style={{ display: "block", fontWeight: "600", marginBottom: 6 }}
//           >
//             New Zone
//           </label>
//           <input
//             id="newZone"
//             name="newZone"
//             type="text"
//             value={form.newZone}
//             onChange={handleChange}
//             placeholder="Enter new zone"
//             style={{
//               width: "50%",
//               padding: "10px 12px",
//               borderRadius: 6,
//               border: "1px solid #ccc",
//               fontSize: 16,
//             }}
//           />
//         </div>

//         {/* Type of Request */}
//         <div style={{ marginBottom: 16 }}>
//           <label
//             htmlFor="typeOfRequest"
//             style={{ display: "block", fontWeight: "600", marginBottom: 6 }}
//           >
//             Type of Request
//           </label>
//           <select
//             id="typeOfRequest"
//             name="typeOfRequest"
//             value={form.typeOfRequest}
//             onChange={handleChange}
//             style={{
//               width: "50%",
//               padding: "10px 12px",
//               borderRadius: 6,
//               border: "1px solid #ccc",
//               fontSize: 16,
//             }}
//           >
//             <option value="Zone Transfer">Zone Transfer</option>
//             <option value="SL Change">SL Change</option>
//           </select>
//         </div>

//         {/* Campaign */}
//         <div style={{ marginBottom: 16 }}>
//           <label
//             htmlFor="campaign"
//             style={{ display: "block", fontWeight: "600", marginBottom: 6 }}
//           >
//             Campaign
//           </label>
//           <input
//             id="campaign"
//             name="campaign"
//             type="text"
//             value={form.campaign}
//             onChange={handleChange}
//             placeholder="Enter campaign name"
//             style={{
//               width: "50%",
//               padding: "10px 12px",
//               borderRadius: 6,
//               border: "1px solid #ccc",
//               fontSize: 16,
//             }}
//           />
//         </div>

//         {/* Quality Status */}
//         <div style={{ marginBottom: 16 }}>
//           <label
//             htmlFor="qualityStatus"
//             style={{ display: "block", fontWeight: "600", marginBottom: 6 }}
//           >
//             Quality Status
//           </label>
//           <select
//             id="qualityStatus"
//             name="qualityStatus"
//             value={form.qualityStatus}
//             onChange={handleChange}
//             style={{
//               width: "50%",
//               padding: "10px 12px",
//               borderRadius: 6,
//               border: "1px solid #ccc",
//               fontSize: 16,
//             }}
//           >
//             <option value="Good">Good</option>
//             <option value="Bad">Bad</option>
//           </select>
//         </div>

//         {/* Options */}
//         {/* <fieldset
//           style={{ marginBottom: 16, border: "none", padding: 0 }}
//         >
//           <legend style={{ fontWeight: "600", marginBottom: 8 }}>Options</legend>
//           <label style={{ marginRight: 16 }}>
//             <input
//               type="checkbox"
//               name="checkYes"
//               checked={form.checkYes}
//               onChange={handleChange}
//             />{" "}
//             Yes
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="checkNo"
//               checked={form.checkNo}
//               onChange={handleChange}
//             />{" "}
//             No
//           </label>
//         </fieldset> */}

//         {/* QA Comment */}
//         <div style={{ marginBottom: 16 }}>
//           <label
//             htmlFor="qaComment"
//             style={{ display: "block", fontWeight: "600", marginBottom: 6 }}
//           >
//             QA Comments
//           </label>
//           <textarea
//             id="qaComment"
//             name="qaComment"
//             value={form.qaComment}
//             onChange={handleChange}
//             placeholder="Enter any comments or notes for QA"
//             rows={5}
//             style={{
//               width: "100%",
//               padding: "10px 12px",
//               borderRadius: 6,
//               border: "1px solid #ccc",
//               fontSize: 16,
//               resize: "vertical",
//             }}
//           />
//         </div>

//         {/* ZM Consent */}
//         <div style={{ marginBottom: 24 }}>
//           <label style={{ fontWeight: "600" }}>
//             <input
//               type="checkbox"
//               name="zmConsent"
//               checked={form.zmConsent}
//               onChange={handleChange}
//               style={{ marginRight: 8 }}
//             />
//             ZM Consent
//           </label>
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           style={{
//             backgroundColor: "#1e90ff",
//             color: "#fff",
//             border: "none",
//             padding: "12px 28px",
//             fontSize: 18,
//             fontWeight: "700",
//             borderRadius: 8,
//             cursor: "pointer",
//             display: "block",
//             margin: "0 auto",
//           }}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }




import React, { useState } from "react";

export default function AuditingForm() {
  const [form, setForm] = useState({
    qaEmail: "",
    qaName: "",
    agentEmail: "",
    agentName: "",
    auditDate: "",
    agentID: "",
    tlEmail: "",
    tlName: "",
    market: "",
    accountNumber: "",
    process: "",
    qaComment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted Data:\n" + JSON.stringify(form, null, 2));
  };

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "50px auto",
        padding: "30px 40px",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        border: "1px solid #e0e0e0",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "left",
          color: "#002D62",
          fontSize: "22px",
          fontWeight: "700",
          marginBottom: "25px",
        }}
      >
        Audit Details
      </h2>

      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px 30px",
            marginBottom: "20px",
          }}
        >
          <div>
            <label style={labelStyle}>Zone Number</label>
            <input
              type="email"
              name="qaEmail"
              value={form.qaEmail}
              onChange={handleChange}
              placeholder="Enter Zone Number"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Rep Name</label>
            <input
              type="text"
              name="qaName"
              value={form.qaName}
              onChange={handleChange}
              placeholder="Enter Rep Name"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Rep Email</label>
            <select
              name="agentEmail"
              value={form.agentEmail}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Find Items</option>
              <option value="agent1@avon.com">agent1@avon.com</option>
              <option value="agent2@avon.com">agent2@avon.com</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>Rep Account Number</label>
            <input
              type="text"
              name="accountNumber"
              value={form.accountNumber}
              onChange={handleChange}
              placeholder="Enter Account Number"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>SL Name</label>
            <input
              type="text"
              name="agentName"
              value={form.agentName}
              onChange={handleChange}
              placeholder="Enter SL Name"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Rep DOB</label>
            <input
              type="date"
              name="auditDate"
              value={form.auditDate}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Coord Number</label>
            <input
              type="text"
              name="agentID"
              value={form.agentID}
              onChange={handleChange}
              placeholder="Enter Coord Number"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>SL Email</label>
            <input
              type="email"
              name="slEmail"
              value={form.tlEmail}
              onChange={handleChange}
              placeholder="Enter SL Email"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>ZM Name</label>
            <input
              type="text"
              name="slName"
              value={form.tlName}
              onChange={handleChange}
              placeholder="Enter ZM Name"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Country</label>
            <select
              name="market"
              value={form.market}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Find Items</option>
              <option value="India">India</option>
              <option value="UK">UK</option>
              <option value="USA">USA</option>
            </select>
          </div>

          {/* <div>
            <label style={labelStyle}>Rep Account Number</label>
            <input
              type="text"
              name="accountNumber"
              value={form.accountNumber}
              onChange={handleChange}
              placeholder="Enter Account Number"
              style={inputStyle}
            />
          </div> */}

          

          <div>
            <label style={labelStyle}>Request type</label>
            <select
              name="process"
              value={form.process}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Find Items</option>
              <option value="Sales">Sales</option>
              <option value="Support">Support</option>
            </select>
          </div>

          <div style={{ gridColumn: "1 / span 3" }}>
            <label style={labelStyle}>QA Comments</label>
            <textarea
              name="qaComment"
              value={form.qaComment}
              onChange={handleChange}
              placeholder="Enter QA Comments"
              rows={4}
              style={{
                ...inputStyle,
                width: "100%",
                resize: "vertical",
              }}
            />
          </div>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <button type="button" style={buttonStyleSecondary}>
            Next
          </button>
          <button type="submit" style={buttonStylePrimary}>
            Validate
          </button>
        </div>
      </form>
    </div>
  );
}

// Styles
const labelStyle = {
  display: "block",
  fontWeight: "600",
  color: "#002D62",
  marginBottom: "6px",
  fontSize: "14px",
};

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "15px",
  background: "#f9f9f9",
};

const buttonStylePrimary = {
  backgroundColor: "#0078D7",
  color: "#fff",
  padding: "10px 24px",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
};

const buttonStyleSecondary = {
  backgroundColor: "#ffffff",
  color: "#0078D7",
  padding: "10px 24px",
  border: "2px solid #0078D7",
  borderRadius: "6px",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
};


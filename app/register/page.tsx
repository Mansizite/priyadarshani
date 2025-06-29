// "use client";

// import React, { useState } from "react";
//         import Navbar from "@/components/Navbar";
//         import Footer from "@/components/Footer";

// export default function RegisterPage() {
//   const [form, setForm] = useState({
//     studentName: "",
//     dob: "",
//     class: "",
//     parentName: "",
//     contact: "",
//     email: "",
//     address: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Registration submitted successfully!");
//     console.log(form);
//   };

//   return (
//     <>
//     <Navbar/>
//     <div className="container my-5" style={{ maxWidth: "600px" }}>
//       <h1 className="text-center mb-4 text-primary">Student Registration Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="studentName" className="form-label">
//             Student Name <span className="text-danger">*</span>
//           </label>
//           <input
//             type="text"
//             id="studentName"
//             name="studentName"
//             className="form-control"
//             value={form.studentName}
//             onChange={handleChange}
//             required
//             placeholder="Enter student's full name"
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="dob" className="form-label">
//             Date of Birth <span className="text-danger">*</span>
//           </label>
//           <input
//             type="date"
//             id="dob"
//             name="dob"
//             className="form-control"
//             value={form.dob}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="class" className="form-label">
//             Class Applying For <span className="text-danger">*</span>
//           </label>
//           <select
//             id="class"
//             name="class"
//             className="form-select"
//             value={form.class}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Class</option>
//             <option value="Nursery">Nursery</option>
//             <option value="KG">KG</option>
//             <option value="1st">1st</option>
//             <option value="2nd">2nd</option>
//             <option value="3rd">3rd</option>
//             {/* Add more classes as needed */}
//           </select>
//         </div>

//         <div className="mb-3">
//           <label htmlFor="parentName" className="form-label">
//             Parent/Guardian Name <span className="text-danger">*</span>
//           </label>
//           <input
//             type="text"
//             id="parentName"
//             name="parentName"
//             className="form-control"
//             value={form.parentName}
//             onChange={handleChange}
//             required
//             placeholder="Enter parent or guardian's name"
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="contact" className="form-label">
//             Contact Number <span className="text-danger">*</span>
//           </label>
//           <input
//             type="tel"
//             id="contact"
//             name="contact"
//             className="form-control"
//             value={form.contact}
//             onChange={handleChange}
//             required
//             placeholder="Enter contact number"
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email ID
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="form-control"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="Enter email (optional)"
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="address" className="form-label">
//             Address
//           </label>
//           <textarea
//             id="address"
//             name="address"
//             className="form-control"
//             rows="3"
//             value={form.address}
//             onChange={handleChange}
//             placeholder="Enter address (optional)"
//           ></textarea>
//         </div>

//         <button type="submit" className="btn btn-primary w-100">
//           Submit Application
//         </button>
//       </form>
//     </div>
//     <Footer/>
//     </>
//   );
// }
// "use client";

// import React, { useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// export default function RegisterPage() {
//   const [form, setForm] = useState({
//     studentName: "",
//     dob: "",
//     class: "",
//     parentName: "",
//     contact: "",
//     email: "",
//     address: "",
//   });

//   const handleChange = (e) => {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Registration submitted successfully!");
//     console.log(form);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container my-5" style={{ maxWidth: "600px" }}>
//         {/* <h1 className="text-center mb-4 text-primary">Student Registration Form</h1> */}

//         <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow" >
//           {/* Student Name */}
//           <div className="mb-3">
//             <label htmlFor="studentName" className="form-label">
//               Student Name <span className="text-danger">*</span>
//             </label>
//             <input
//               type="text"
//               id="studentName"
//               name="studentName"
//               className="form-control"
//               placeholder="Enter student's full name"
//               value={form.studentName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Date of Birth */}
//           <div className="mb-3">
//             <label htmlFor="dob" className="form-label">
//               Date of Birth <span className="text-danger">*</span>
//             </label>
//             <input
//               type="date"
//               id="dob"
//               name="dob"
//               className="form-control"
//               value={form.dob}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Class Applying For */}
//           <div className="mb-3">
//             <label htmlFor="class" className="form-label">
//               Class Applying For <span className="text-danger">*</span>
//             </label>
//             <select
//               id="class"
//               name="class"
//               className="form-select"
//               value={form.class}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select Class</option>
//               <option value="Nursery">Nursery</option>
//               <option value="KG">KG</option>
//               <option value="1st">1st</option>
//               <option value="2nd">2nd</option>
//               <option value="3rd">3rd</option>
//             </select>
//           </div>

//           {/* Parent/Guardian Name */}
//           <div className="mb-3">
//             <label htmlFor="parentName" className="form-label">
//               Parent/Guardian Name <span className="text-danger">*</span>
//             </label>
//             <input
//               type="text"
//               id="parentName"
//               name="parentName"
//               className="form-control"
//               placeholder="Enter parent or guardian's name"
//               value={form.parentName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Contact Number */}
//           <div className="mb-3">
//             <label htmlFor="contact" className="form-label">
//               Contact Number <span className="text-danger">*</span>
//             </label>
//             <input
//               type="tel"
//               id="contact"
//               name="contact"
//               className="form-control"
//               placeholder="Enter contact number"
//               value={form.contact}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Email ID */}
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email ID
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="form-control"
//               placeholder="Enter email (optional)"
//               value={form.email}
//               onChange={handleChange}
//             />
//           </div>

//           {/* Address */}
//           <div className="mb-4">
//             <label htmlFor="address" className="form-label">
//               Address
//             </label>
//             <textarea
//               id="address"
//               name="address"
//               className="form-control"
//               rows="3"
//               placeholder="Enter address (optional)"
//               value={form.address}
//               onChange={handleChange}
//             />
//           </div>

//           {/* Submit Button */}
//           <button type="submit" className="btn btn-primary w-100">
//             Submit Application
//           </button>
//         </form>
//       </div>
//       <Footer />
//     </>
//   );
// }
"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RegisterPage() {
  const [form, setForm] = useState({
    studentName: "",
    dob: "",
    class: "",
    parentName: "",
    contact: "",
    email: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Registration submitted successfully!");
    console.log(form);
  };

  return (
    <>
      <Navbar />

      <div className="max-w-2xl mx-auto px-4 py-10" style={{marginTop:'100px'}}>
       
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6 space-y-5"
        >
          {/* Student Name */}
          <div>
            <label htmlFor="studentName" className="block font-medium mb-1">
              Student Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter student's full name"
              value={form.studentName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor="dob" className="block font-medium mb-1">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={form.dob}
              onChange={handleChange}
              required
            />
          </div>

          {/* Class Applying For */}
          <div>
            <label htmlFor="class" className="block font-medium mb-1">
              Class Applying For <span className="text-red-500">*</span>
            </label>
            <select
              id="class"
              name="class"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={form.class}
              onChange={handleChange}
              required
            >
              <option value="">Select Class</option>
              <option value="Nursery">Nursery</option>
              <option value="KG">KG</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
            </select>
          </div>

          {/* Parent Name */}
          <div>
            <label htmlFor="parentName" className="block font-medium mb-1">
              Parent/Guardian Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter parent or guardian's name"
              value={form.parentName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Contact Number */}
          <div>
            <label htmlFor="contact" className="block font-medium mb-1">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter contact number"
              value={form.contact}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email ID */}
          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter email (optional)"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block font-medium mb-1">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows={3}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter address (optional)"
              value={form.address}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

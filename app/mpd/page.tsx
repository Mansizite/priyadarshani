
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import React from "react";

// const MandatoryDisclosure = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto p-6" style={{ marginTop: '100px', width: '80%' }}>
//         <h2 className="text-2xl font-bold text-center mb-6">
//           Mandatory Public Disclosure
//         </h2>

//         {/* General Information Section */}
//         <section className="border p-4 rounded-lg shadow-lg mb-6">
//           <h3 className="text-lg font-semibold mb-2">A. General Information</h3>
//           <table className="w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border p-2">SR NO.</th>
//                 <th className="border p-2">INFORMATION</th>
//                 <th className="border p-2">DETAILS</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="border p-2">1</td>
//                 <td className="border p-2">Name of the School</td>
//                 <td className="border p-2">Priyadarshani School, Bhosari</td>
//               </tr>
//               <tr>
//                 <td className="border p-2">2</td>
//                 <td className="border p-2">Affiliation No.</td>
//                 <td className="border p-2">-</td>
//               </tr>
//               <tr>
//                 <td className="border p-2">3</td>
//                 <td className="border p-2">School Code</td>
//                 <td className="border p-2">-</td>
//               </tr>
//               <tr>
//                 <td className="border p-2">4</td>
//                 <td className="border p-2">Complete Address</td>
//                 <td className="border p-2">Priyadarshani School Bhosari-413171</td>
//               </tr>
//               <tr>
//                 <td className="border p-2">5</td>
//                 <td className="border p-2">Principal Name</td>
//                 <td className="border p-2">Ms. Shilpi Shukla</td>
//               </tr>
//               <tr>
//                 <td className="border p-2">6</td>
//                 <td className="border p-2">Principal Qualification</td>
//                 <td className="border p-2">-</td>
//               </tr>
//               <tr>
//                 <td className="border p-2">7</td>
//                 <td className="border p-2">School Email ID</td>
//                 <td className="border p-2">priyadarshanischool@gmail.com</td>
//               </tr>
//               <tr>
//                 <td className="border p-2">8</td>
//                 <td className="border p-2">Contact Details</td>
//                 <td className="border p-2">+91 8956788450 / 7066064189</td>
//               </tr>
//             </tbody>
//           </table>
//         </section>

     
//         <section className="border p-4 rounded-lg shadow-lg mb-6">
//   <h3 className="text-lg font-semibold mb-2">B. Documents and Information</h3>
//   <table className="w-full border-collapse border border-gray-300">
//     <thead>
//       <tr className="bg-gray-200">
//         <th className="border p-2">SR NO.</th>
//         <th className="border p-2">Documents / Information</th>
//         <th className="border p-2">Link</th>
//       </tr>
//     </thead>
//     <tbody>
//       {[
//         { id: 1, label: "Recognition Certificate under RTE Act, 2009", file: "Recognition Certificate RTE.pdf" },
//         { id: 2, label: "Self-Certification for Affiliation / Upgradation / Extension", file: "self-certification.pdf" },
//         { id: 3, label: "Building Safety Certificate", file: "Stability Certificate.pdf" },
//         { id: 4, label: "Fire Safety Certificate", file: "Fire NOC.pdf" },
//         { id: 5, label: "Health and Sanitation Certificate", file: "Safe drinking water and sanitary condition certificate.pdf" },
//         { id: 6, label: "Property Tax Bill", file: "Tax Bill.pdf" },
//         { id: 7, label: "Water Quality & Storage Certificate", file: "All Water Storage Tanks in Above Premise.pdf" },
//         { id: 8, label: "School Fee Structure", file: "Fee Structure.pdf" },
//         { id: 9, label: "Annual Academic Calendar", file: "Annual Calender.pdf" },
//         { id: 10, label: "School Management Committee (SMC) Details", file: "School Management Committee.pdf" },
//         { id: 11, label: "Parent Teacher Association (PTA) Details", file: "PTA Member.pdf" },
//         { id: 12, label: "Society / Trust Registration Certificate", file: "Societies Registration.pdf" },
//         { id: 13, label: "Class-wise Seating Arrangement", file: "Class Wise Seating Arrangment.pdf" },
//         { id: 14, label: "Namuna 2 Certificate", file: "Namuna 2.pdf" },
//         { id: 15, label: "Suchi 2 Certificate", file: "Suchi-2.pdf" },
//         { id: 16, label: "Manyata Patr Certificate", file: "Manyata Patr.pdf" },
//         { id: 17, label: "Staff Details", file: "staff-details1.pdf" },
//         { id: 18, label: "Pest Control & Fumigation Report", file: "Fumigation For Mosquitoes and general pest Treatment.pdf" },
//         { id: 19, label: "Annual Holiday List", file: "Holiday List.pdf" },
//       ].map((item) => (
//         <tr key={item.id}>
//           <td className="border p-2">{item.id}</td>
//           <td className="border p-2">{item.label}</td>
//           <td className="border p-2">
//             <a
//               href={`/documents/${item.file}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 underline"
//             >
//               View
//             </a>
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
//   <section className="border p-4 rounded-lg shadow-lg mb-6">
//    <h3 className="text-lg font-semibold mb-2">Results & Academics</h3>
//    <table className="w-full border-collapse border border-gray-300">
//      <thead>
//        <tr className="bg-gray-200">
//          <th className="border p-2">SR NO.</th>
//        <th className="border p-2">DOCUMENTS/INFORMATION</th>
//        <th className="border p-2">LINK</th>
//      </tr>
//    </thead>
//    <tbody>
//      <tr>
//        <td className="border p-2">1</td>
//        <td className="border p-2">Fee Structure of the School</td>
//        <td className="border p-2">
//          <a href="/documents/Fee Structure.pdf">View</a>
//        </td>
//      </tr>
//      <tr>
//        <td className="border p-2">2</td>
//        <td className="border p-2">Annual Academic Calendar</td>
//        <td className="border p-2">
//          <a href="/documents/Annual Calender.pdf">View</a>
//        </td>
//      </tr>
//      <tr>
//        <td className="border p-2">3</td>
//        <td className="border p-2">List of School Management Committee (SMC)</td>
//        <td className="border p-2">
//          <a href="/documents/School Management Committee.pdf">View</a>
//        </td>
//      </tr>
//      <tr>
//        <td className="border p-2">4</td>
//        <td className="border p-2">List of Parents Teachers Association (PTA) Members</td>
//        <td className="border p-2">
//          <a href="/documents/PTA Member.pdf">View</a>
//        </td>
//      </tr>
//      <tr>
//        <td className="border p-2">5</td>
//        <td className="border p-2">Last Three-Year Result of the Board Examination</td>
//        <td className="border p-2">
//          <a href="">View</a>
//        </td>
//      </tr>
//    </tbody>
//  </table>
//  </section>
 
//   {/* Staff (Teaching) Section */}
// <section className="border p-4 rounded-lg shadow-lg mb-6">
//   <h3 className="text-lg font-semibold mb-2">Staff (Teaching)</h3>
//   <table className="w-full border-collapse border border-gray-300">
//     <thead>
//       <tr className="bg-gray-200">
//         <th className="border p-2">SR NO.</th>
//         <th className="border p-2">DETAILS</th>
//         <th className="border p-2">INFORMATION</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td className="border p-2">1</td>
//         <td className="border p-2">Principal</td>
//         <td className="border p-2">-</td>
//       </tr>
//       <tr>
//         <td className="border p-2">2</td>
//         <td className="border p-2">Total No. of Teachers</td>
//         <td className="border p-2">-</td>
//       </tr>
//       <tr>
//         <td className="border p-2"></td>
//         <td className="border p-2">PGT</td>
//         <td className="border p-2">-</td>
//       </tr>
//       <tr>
//         <td className="border p-2"></td>
//         <td className="border p-2">TGT</td>
//         <td className="border p-2">-</td>
//       </tr>
//       <tr>
//         <td className="border p-2"></td>
//         <td className="border p-2">PRT</td>
//         <td className="border p-2">-</td>
//       </tr>
//       <tr>
//         <td className="border p-2">3</td>
//         <td className="border p-2">Teachers Section Ratio</td>
//         <td className="border p-2">-</td>
//       </tr>
//       <tr>
//         <td className="border p-2">4</td>
//         <td className="border p-2">Details of Special Educator</td>
//         <td className="border p-2">-</td>
//       </tr>
//       <tr>
//         <td className="border p-2">5</td>
//         <td className="border p-2">Details of Counsellor and Wellness Teacher</td>
//         <td className="border p-2">-</td>
//       </tr>
//     </tbody>
//   </table>
// </section>
// </section>

 
//       {/* Result & Academics */}
//       <section className="border p-4 rounded-lg shadow-lg mb-6">
//         <h3 className="text-lg font-semibold mb-2">C. Result & Academics</h3>

//         <h4 className="font-semibold mt-2">Result Class: X</h4>
//         <table className="w-full border-collapse border border-gray-300 mb-4">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">Year</th>
//               <th className="border p-2">No. of Registered Students</th>
//               <th className="border p-2">No. of Students Passed</th>
//               <th className="border p-2">Pass Percentage</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border p-2">1</td>
//               <td className="border p-2"></td>
//               <td className="border p-2"></td>
//               <td className="border p-2"></td>
//             </tr>
//           </tbody>
//         </table>
        
//         <h4 className="font-semibold mt-2">Result Class: XII</h4>
//         <table className="w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">Year</th>
//               <th className="border p-2">No. of Registered Students</th>
//               <th className="border p-2">No. of Students Passed</th>
//               <th className="border p-2">Pass Percentage</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border p-2">1</td>
//               <td className="border p-2"></td>
//               <td className="border p-2"></td>
//               <td className="border p-2"></td>
//             </tr>
//           </tbody>
//         </table>
      
// </section>

//         {/* School Infrastructure Section */}
//         <section className="border p-4 rounded-lg shadow-lg mb-6">
//           <h3 className="text-lg font-semibold mb-2">D: School Infrastructure</h3>
//           <table className="w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border p-2">SR NO.</th>
//                 <th className="border p-2">DETAILS</th>
//                 <th className="border p-2">INFORMATION</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="border p-2">1</td>
//                 <td className="border p-2">Total Campus Area of the School (in sq. mtr)</td>
//                 <td className="border p-2">-</td>
//               </tr>
//               <tr>
//                 <td className="border p-2">2</td>
//                 <td className="border p-2">No. and Size of the Classrooms (in sq. mtr)</td>
//                 <td className="border p-2">-</td>
//               </tr>
//               <tr>
//                 <td className="border p-2">3</td>
//                 <td className="border p-2">No. and Size of Laboratories including Computer Labs (in sq. mtr)</td>
//                 <td className="border p-2">-</td>
//               </tr>
//               <tr>
//                 <td className="border p-2">4</td>
//                 <td className="border p-2">Internet Facility</td>
//                 <td className="border p-2">-</td>
//               </tr>
//               <tr>
//                 <td className="border p-2">5</td>
//                 <td className="border p-2">No. of Girls Toilets</td>
//                 <td className="border p-2">-</td>
//               </tr>
//               <tr>
//                 <td className="border p-2">6</td>
//                 <td className="border p-2">No. of Boys Toilets</td>
//                 <td className="border p-2">-</td>
//               </tr>
//               <tr>
//                 <td className="border p-2">7</td>
//                 <td className="border p-2">Drinking Water Facility</td>
//                 <td className="border p-2">-</td>
//               </tr>
//               <tr>
//                 <td className="border p-2">8</td>
//                 <td className="border p-2">Transport Facility</td>
//                 <td className="border p-2">-</td>
//               </tr>
//               <tr>
//                 <td className="border p-2">9</td>
//                 <td className="border p-2">Medical Facility</td>
//                 <td className="border p-2">-</td>
//               </tr>
//             </tbody>
//           </table>
//         </section>

//       </div>
//       <Footer />
//     </>
//   );
// };

// export default MandatoryDisclosure;
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const MandatoryDisclosure = () => {
  const viewButtonClass =
    "bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition";

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6" style={{ marginTop: '100px', width: '80%' }}>
        <h2 className="text-2xl font-bold text-center mb-6">
          Mandatory Public Disclosure
        </h2>

        {/* General Information Section */}
        <section className="border p-4 rounded-lg shadow-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">A. General Information</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">SR NO.</th>
                <th className="border p-2">INFORMATION</th>
                <th className="border p-2">DETAILS</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Name of the School", "Priyadarshani School, Bhosari"],
                ["Affiliation No.", "-"],
                ["School Code", "-"],
                ["Complete Address", "Priyadarshani School Bhosari-413171"],
                ["Principal Name", "Ms. Shilpi Shukla"],
                ["Principal Qualification", "-"],
                ["School Email ID", "priyadarshanischool@gmail.com"],
                ["Contact Details", "+91 8956788450 / 7066064189"]
              ].map(([label, value], index) => (
                <tr key={index}>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{label}</td>
                  <td className="border p-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Documents and Information */}
        <section className="border p-4 rounded-lg shadow-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">B. Documents and Information</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">SR NO.</th>
                <th className="border p-2">Documents / Information</th>
                <th className="border p-2">Link</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Recognition Certificate under RTE Act, 2009", "Recognition Certificate RTE.pdf"],
                ["Self-Certification for Affiliation / Upgradation / Extension", "self-certification.pdf"],
                ["Building Safety Certificate", "Stability Certificate.pdf"],
                ["Fire Safety Certificate", "Fire NOC.pdf"],
                ["Health and Sanitation Certificate", "Safe drinking water and sanitary condition certificate.pdf"],
                ["Property Tax Bill", "Tax Bill.pdf"],
                ["Water Quality & Storage Certificate", "All Water Storage Tanks in Above Premise.pdf"],
                ["School Fee Structure", "Fee Structure.pdf"],
                ["Annual Academic Calendar", "Annual Calender.pdf"],
                ["School Management Committee (SMC) Details", "School Management Committee.pdf"],
                ["Parent Teacher Association (PTA) Details", "PTA Member.pdf"],
                ["Society / Trust Registration Certificate", "Societies Registration.pdf"],
                ["Class-wise Seating Arrangement", "Class Wise Seating Arrangment.pdf"],
                ["Namuna 2 Certificate", "Namuna 2.pdf"],
                ["Suchi 2 Certificate", "Suchi-2.pdf"],
                ["Manyata Patr Certificate", "Manyata Patr.pdf"],
                ["Staff Details", "staff-details1.pdf"],
                ["Pest Control & Fumigation Report", "Fumigation For Mosquitoes and general pest Treatment.pdf"],
                ["Annual Holiday List", "Holiday List.pdf"]
              ].map(([label, file], index) => (
                <tr key={index}>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{label}</td>
                  <td className="border p-2">
                    <a
                      href={`/documents/${file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={viewButtonClass}
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Result & Academics (Short Table) */}
        <section className="border p-4 rounded-lg shadow-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">C. Results & Academics</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">SR NO.</th>
                <th className="border p-2">DOCUMENTS / INFORMATION</th>
                <th className="border p-2">LINK</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Fee Structure of the School", "Fee Structure.pdf"],
                ["Annual Academic Calendar", "Annual Calender.pdf"],
                ["List of School Management Committee (SMC)", "School Management Committee.pdf"],
                ["List of Parents Teachers Association (PTA) Members", "PTA Member.pdf"],
                ["Last Three-Year Result of the Board Examination", ""]
              ].map(([label, file], index) => (
                <tr key={index}>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{label}</td>
                  <td className="border p-2">
                    {file ? (
                      <a
                        href={`/documents/${file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={viewButtonClass}
                      >
                        View
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Teaching Staff */}
        <section className="border p-4 rounded-lg shadow-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">D. Staff (Teaching)</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">SR NO.</th>
                <th className="border p-2">DETAILS</th>
                <th className="border p-2">INFORMATION</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Principal", "-"],
                ["Total No. of Teachers", "-"],
                ["PGT", "-"],
                ["TGT", "-"],
                ["PRT", "-"],
                ["Teachers Section Ratio", "-"],
                ["Details of Special Educator", "-"],
                ["Details of Counsellor and Wellness Teacher", "-"]
              ].map(([label, value], index) => (
                <tr key={index}>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{label}</td>
                  <td className="border p-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Result Table */}
        <section className="border p-4 rounded-lg shadow-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">E. Result Summary</h3>
          <h4 className="font-semibold mt-2">Class X Results</h4>
          <table className="w-full border-collapse border border-gray-300 mb-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Year</th>
                <th className="border p-2">Registered Students</th>
                <th className="border p-2">Passed Students</th>
                <th className="border p-2">Pass Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">1</td>
                <td className="border p-2">-</td>
                <td className="border p-2">-</td>
                <td className="border p-2">-</td>
              </tr>
            </tbody>
          </table>

          <h4 className="font-semibold mt-2">Class XII Results</h4>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Year</th>
                <th className="border p-2">Registered Students</th>
                <th className="border p-2">Passed Students</th>
                <th className="border p-2">Pass Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">1</td>
                <td className="border p-2">-</td>
                <td className="border p-2">-</td>
                <td className="border p-2">-</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Infrastructure Section */}
        <section className="border p-4 rounded-lg shadow-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">F. School Infrastructure</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">SR NO.</th>
                <th className="border p-2">DETAILS</th>
                <th className="border p-2">INFORMATION</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Total Campus Area (in sq. mtr)",
                "No. and Size of Classrooms",
                "No. and Size of Laboratories",
                "Internet Facility",
                "No. of Girls Toilets",
                "No. of Boys Toilets",
                "Drinking Water Facility",
                "Transport Facility",
                "Medical Facility"
              ].map((label, index) => (
                <tr key={index}>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{label}</td>
                  <td className="border p-2">-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default MandatoryDisclosure;

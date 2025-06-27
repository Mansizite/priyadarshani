import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const MandatoryDisclosure = () => {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-6" style={{marginTop:'100px',width:'80%'}}>
      <h2 className="text-2xl font-bold text-center mb-6">
        Mandatory Public Disclosure
      </h2>

      {/* General Information Section */}
      <section className="border p-4 rounded-lg shadow-lg mb-6">
        <h3 className="text-lg font-semibold mb-2">A. General Information</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">SL NO.</th>
              <th className="border p-2">INFORMATION</th>
              <th className="border p-2">DETAILS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">1</td>
              <td className="border p-2">Name of the School</td>
              <td className="border p-2">Priyadarshani School, Bhosari</td>
            </tr>
            <tr>
              <td className="border p-2">2</td>
              <td className="border p-2">Affiliation No.</td>
              <td className="border p-2">-</td>
            </tr>
            <tr>
              <td className="border p-2">3</td>
              <td className="border p-2">School Code</td>
              <td className="border p-2">-</td>
            </tr>
            <tr>
              <td className="border p-2">4</td>
              <td className="border p-2">Complete Address</td>
              <td className="border p-2">
              Priyadarshani School Bhosari-413171
              </td>
            </tr>
            <tr>
              <td className="border p-2">5</td>
              <td className="border p-2">Principal Name</td>
              <td className="border p-2">Ms.Shilpi Shukla</td>
            </tr>
            <tr>
              <td className="border p-2">6</td>
              <td className="border p-2">Principal Qualification</td>
              <td className="border p-2">-</td>
            </tr>
            <tr>
              <td className="border p-2">7</td>
              <td className="border p-2">School Email ID</td>
              <td className="border p-2">priyadarshanischool@gmail.com</td>
            </tr>
            <tr>
              <td className="border p-2">8</td>
              <td className="border p-2">Contact Details</td>
              <td className="border p-2">+91 8956788450 / 7066064189</td>
            </tr>
          </tbody>
        </table>
      </section>

    
    
      {/* Documents Section */}
      <section className="border p-4 rounded-lg shadow-lg mb-6">
        <h3 className="text-lg font-semibold mb-2">B. Documents and Information</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">SL NO.</th>
              <th className="border p-2">DOCUMENTS/INFORMATION</th>
              <th className="border p-2">LINK</th>
            </tr>
          </thead>
          <tbody>
           
            <tr>
              <td className="border p-2">1</td>
              <td className="border p-2">
                Copies of Societies/Trust/Company Registration/Renewal Certificate, as applicable
              </td>
              <td className="border p-2">
                <a href="/documents/Societies Registration.pdf">View</a>
              </td>
            </tr>
            <tr>
              
              <td className="border p-2">2</td>
              <td className="border p-2">
                Copies of Recognition Certificate under RTE Act, 2009, and its renewal if applicable
              </td>
              <td className="border p-2">
                <a href="">View</a>
              </td>
            </tr>
            <tr>
              <td className="border p-2">3</td>
              <td className="border p-2">
                Copy of Valid Building Safety Certificate as per the National Building Code
              </td>
              <td className="border p-2">
                <a href="/documents/Stability Certificate.pdf">View</a>
              </td>
            </tr>
            <tr>
              <td className="border p-2">4</td>
              <td className="border p-2">
                Copy of Valid Fire Safety Certificate issued by the Competent Authority
              </td>
              <td className="border p-2">
                <a href="/documents/Fire NOC.pdf">View</a>
              </td>
            </tr>
            <tr>
              <td className="border p-2">5</td>
              <td className="border p-2">
                Copy of the Self Certification submitted by the School for Affiliation/Upgradation/Extension of Affiliation
              </td>
              <td className="border p-2">
                <a href="">View</a>
              </td>
            </tr>
            <tr>
              <td className="border p-2">6</td>
              <td className="border p-2">
                Copies of Valid Water, Health, and Sanitation Certificates
              </td>
              <td className="border p-2">
                <a href="/documents/Safe drinking water and sanitary condition certificate.pdf">View</a>
              </td>
            </tr>
            
           
            
          </tbody>
        </table>
      </section>
      {/* Results & Academics Section */}
<section className="border p-4 rounded-lg shadow-lg mb-6">
  <h3 className="text-lg font-semibold mb-2">Results & Academics</h3>
  <table className="w-full border-collapse border border-gray-300">
    <thead>
      <tr className="bg-gray-200">
        <th className="border p-2">SL NO.</th>
        <th className="border p-2">DOCUMENTS/INFORMATION</th>
        <th className="border p-2">LINK</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border p-2">1</td>
        <td className="border p-2">Fee Structure of the School</td>
        <td className="border p-2">
          <a href="/documents/Fee Structure.pdf">View</a>
        </td>
      </tr>
      <tr>
        <td className="border p-2">2</td>
        <td className="border p-2">Annual Academic Calendar</td>
        <td className="border p-2">
          <a href="/documents/Annual Calender.pdf">View</a>
        </td>
      </tr>
      <tr>
        <td className="border p-2">3</td>
        <td className="border p-2">List of School Management Committee (SMC)</td>
        <td className="border p-2">
          <a href="/documents/School Management Committee.pdf">View</a>
        </td>
      </tr>
      <tr>
        <td className="border p-2">4</td>
        <td className="border p-2">List of Parents Teachers Association (PTA) Members</td>
        <td className="border p-2">
          <a href="/documents/PTA Member.pdf">View</a>
        </td>
      </tr>
      <tr>
        <td className="border p-2">5</td>
        <td className="border p-2">Last Three-Year Result of the Board Examination</td>
        <td className="border p-2">
          <a href="">View</a>
        </td>
      </tr>
    </tbody>
  </table>
</section>

{/* Staff (Teaching) Section */}
<section className="border p-4 rounded-lg shadow-lg mb-6">
  <h3 className="text-lg font-semibold mb-2">Staff (Teaching)</h3>
  <table className="w-full border-collapse border border-gray-300">
    <thead>
      <tr className="bg-gray-200">
        <th className="border p-2">SL NO.</th>
        <th className="border p-2">DETAILS</th>
        <th className="border p-2">INFORMATION</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border p-2">1</td>
        <td className="border p-2">Principal</td>
        <td className="border p-2">-</td>
      </tr>
      <tr>
        <td className="border p-2">2</td>
        <td className="border p-2">Total No. of Teachers</td>
        <td className="border p-2">-</td>
      </tr>
      <tr>
        <td className="border p-2"></td>
        <td className="border p-2">PGT</td>
        <td className="border p-2">-</td>
      </tr>
      <tr>
        <td className="border p-2"></td>
        <td className="border p-2">TGT</td>
        <td className="border p-2">-</td>
      </tr>
      <tr>
        <td className="border p-2"></td>
        <td className="border p-2">PRT</td>
        <td className="border p-2">-</td>
      </tr>
      <tr>
        <td className="border p-2">3</td>
        <td className="border p-2">Teachers Section Ratio</td>
        <td className="border p-2">-</td>
      </tr>
      <tr>
        <td className="border p-2">4</td>
        <td className="border p-2">Details of Special Educator</td>
        <td className="border p-2">-</td>
      </tr>
      <tr>
        <td className="border p-2">5</td>
        <td className="border p-2">Details of Counsellor and Wellness Teacher</td>
        <td className="border p-2">-</td>
      </tr>
    </tbody>
  </table>
</section>


      {/* Result & Academics */}
      <section className="border p-4 rounded-lg shadow-lg mb-6">
        <h3 className="text-lg font-semibold mb-2">C. Result & Academics</h3>

        <h4 className="font-semibold mt-2">Result Class: X</h4>
        <table className="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Year</th>
              <th className="border p-2">No. of Registered Students</th>
              <th className="border p-2">No. of Students Passed</th>
              <th className="border p-2">Pass Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">1</td>
              <td className="border p-2"></td>
              <td className="border p-2"></td>
              <td className="border p-2"></td>
            </tr>
          </tbody>
        </table>

        <h4 className="font-semibold mt-2">Result Class: XII</h4>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Year</th>
              <th className="border p-2">No. of Registered Students</th>
              <th className="border p-2">No. of Students Passed</th>
              <th className="border p-2">Pass Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">1</td>
              <td className="border p-2"></td>
              <td className="border p-2"></td>
              <td className="border p-2"></td>
            </tr>
          </tbody>
        </table>
      </section>
      {/* School Infrastructure Section */}
<section className="border p-4 rounded-lg shadow-lg mb-6">
  <h3 className="text-lg font-semibold mb-2">E: School Infrastructure</h3>
  <table className="w-full border-collapse border border-gray-300">
    <thead>
      <tr className="bg-gray-200">
        <th className="border p-2">SL NO.</th>
        <th className="border p-2">DETAILS</th>
        <th className="border p-2">INFORMATION</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border p-2">1</td>
        <td className="border p-2">Total Campus Area of the School (in sq. mtr)</td>
        <td className="border p-2">-</td>
      </tr>
      <tr>
        <td className="border p-2">2</td>
        <td className="border p-2">No. and Size of the Classrooms (in sq. mtr)</td>
        <td className="border p-2">-</td>
      </tr>
      <tr>
        <td className="border p-2">3</td>
        <td className="border p-2">No. and Size of Laboratories including Computer Labs (in sq. mtr)</td>
        <td className="border p-2">-</td>
      </tr>
      <tr>
        <td className="border p-2">4</td>
        <td className="border p-2">Internet Facility</td>
        <td className="border p-2">-</td>
      </tr>
      <tr>
        <td className="border p-2">5</td>
        <td className="border p-2">No. of Girls Toilets</td>
        <td className="border p-2">-</td>
      </tr>
      <tr>
        <td className="border p-2">6</td>
        <td className="border p-2">No. of Boys Toilets</td>
        <td className="border p-2">-</td>
      </tr>
      <tr>
        <td className="border p-2">7</td>
        <td className="border p-2">
          Link to YouTube Video of School Inspection (covering Infrastructure)
        </td>
        <td className="border p-2">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View Video
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</section>

    </div>
    <Footer/>
    </>
  );
};

export default MandatoryDisclosure;

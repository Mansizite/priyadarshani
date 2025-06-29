// "use client";

// import React from "react";
// import Image from "next/image";

// const alumni = [
//   {
//     name: "Mahendra Gaikwad",
//     image: "/alumni/engineer.jpg", // Placeholder image
//     details: [
//       "Diploma in Polytechnic and Completed Engineering",
//       "In 2017, Selected through MPSC as Jr. Engineer",
//       "Currently working as Sectional Officer at Dam section, Chas Kaman Dam",
//     ],
//     field: "Engineering",
//   },
//   {
//     name: "Shraddha Salvi",
//     image: "/alumni/dancer.jpg", // Placeholder image
//     details: [
//       "Kathak Visharad & Kathak MA",
//       "Started Padanyas Kathak Nrityalay in 2012 at Indrayani Nagar",
//       "Worked as Kathak teacher at Priyadarshani School, Bhosari",
//     ],
//     field: "Performing Arts",
//   },
//   {
//     name: "Harshad Tathed",
//     image: "/alumni/principal.jpg", // Placeholder image
//     details: [
//       "Working as a Principal Since 2019",
//       "Completed Teach for India fellowship in 2017 and Jagriti Yatra 2017",
//       "Founder of Colour Bugs and Project Nomad",
//     ],
//     field: "Education",
//   },
//   {
//     name: "Minnie Rohilla",
//     image: "/alumni/influencer.jpg", // Placeholder image
//     details: [
//       "Masters in Human Resource Management",
//       "Software Engineer at Maersk",
//       "Minnie is a Model and Social Media Influencer",
//       "Contestant in MTV Roadies Xtreme",
//     ],
//     field: "Technology & Media",
//   },
//   {
//     name: "Dinesh Bhati",
//     image: "/alumni/choreographer.jpg", // Placeholder image
//     details: [
//       "Choreographer, Music Producer & DJ",
//       "Choreographed Annual Functions for our school",
//     ],
//     field: "Entertainment",
//   },
//   {
//     name: "Pratiksha Landge",
//     image: "/alumni/athlete.jpg", // Placeholder image
//     details: [
//       "Represented as Captain for Maharashtra at 65th National School Level Kabaddi Under 14 Girls",
//       "Two Time Participant at National Level",
//       "State Level participant in wrestling",
//     ],
//     field: "Sports",
//   },
//   {
//     name: "Anushka Kumavat",
//     image: "/alumni/scientist.jpg", // Placeholder image
//     details: [
//       "She envisions to be an Author",
//       "She is an Orator and conducts lectures and webinars on space",
//       "Working on physics and Astronomy",
//       "Completed online course of ISRO on Remote Sensing",
//     ],
//     field: "Science",
//   },
// ];

// export default function AlumniPage() {
//   return (
//     <section className="min-h-screen py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
//             Our Distinguished Alumni
//           </h1>
//           <div className="w-24 h-1.5 bg-yellow-500 mx-auto mb-4"></div>
//           <p className="text-xl text-blue-600 max-w-3xl mx-auto">
//             Proud graduates of Priyadarshani High School making waves across diverse fields
//           </p>
//         </div>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {alumni.map((member, index) => (
//             <div
//               key={index}
//               className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
//             >
//               <div className="relative h-48 overflow-hidden">
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
//                 <div className="absolute bottom-4 left-4">
//                   <h3 className="text-xl font-bold text-white">{member.name}</h3>
//                   <span className="inline-block px-3 py-1 mt-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
//                     {member.field}
//                   </span>
//                 </div>
//               </div>
              
//               <div className="p-6">
//                 <ul className="space-y-3">
//                   {member.details.map((item, i) => (
//                     <li key={i} className="flex items-start">
//                       <svg className="w- h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                       </svg>
//                       <span className="text-gray-700">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
                
                
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <h3 className="text-2xl font-semibold text-blue-900 mb-4">Proud of Our Alumni Community</h3>
//           <p className="text-gray-600 max-w-3xl mx-auto mb-6">
//             Join our growing network of successful graduates making a difference in various fields
//           </p>
//           <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md">
//             Connect With Alumni Network
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import React from "react";
import Image from "next/image";
const alumni = [
  {
    name: "Mahendra Gaikwad",
    image: "https://tse3.mm.bing.net/th?id=OIF.fYaQCuzfVlc4ZKZDpe%2bMyg&pid=Api&P=0&h=180", // Placeholder image
    details: [
      "Diploma in Polytechnic and Completed Engineering",
      "In 2017, Selected through MPSC as Jr. Engineer",
      "Currently working as Sectional Officer at Dam section, Chas Kaman Dam",
    ],
    field: "Engineering",
  },
  {
    name: "Shraddha Salvi",
    image: "https://media.istockphoto.com/id/1049768416/photo/content-trendy-cheerful-nice-cute-adorable-lovely-attractive-brunette-girl-with-wavy-hair-in.jpg?s=612x612&w=0&k=20&c=y4HvFZSdr9QBrTa628aX3CrPYQK5HYtnW-tw5Gg5gyQ=", // Placeholder image
    details: [
      "Kathak Visharad & Kathak MA",
      "Started Padanyas Kathak Nrityalay in 2012 at Indrayani Nagar",
      "Worked as Kathak teacher at Priyadarshani School, Bhosari",
    ],
    field: "Performing Arts",
  },
  {
    name: "Harshad Tathed",
    image: "https://images.unsplash.com/photo-1597204081767-4c14a6b7cbec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2xlJTIwcGVyc29ufGVufDB8fDB8fHww", // Placeholder image
    details: [
      "Working as a Principal Since 2019",
      "Completed Teach for India fellowship in 2017 and Jagriti Yatra 2017",
      "Founder of Colour Bugs and Project Nomad",
    ],
    field: "Education",
  },
  {
    name: "Minnie Rohilla",
    image: "https://media.istockphoto.com/id/2190718869/photo/young-woman-looking-at-view-contemplating-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=mDwIuRdjbOGA3VgWvgXnAzIpb1uiFaEGdKhY2HyIpBI=", // Placeholder image
    details: [
      "Masters in Human Resource Management",
      "Software Engineer at Maersk",
      "Minnie is a Model and Social Media Influencer",
      "Contestant in MTV Roadies Xtreme",
    ],
    field: "Technology & Media",
  },
  {
    name: "Dinesh Bhati",
    image: "https://media.istockphoto.com/id/2192499195/photo/studio-portrait-of-happy-multiracial-mid-adult-man-wearing-brown-shirt-toothy-smile.webp?a=1&b=1&s=612x612&w=0&k=20&c=E9MJHHDAkThe7HgNpNqUtzizYT7iXDI0z_pCNYnPRs4=", // Placeholder image
    details: [
      "Choreographer, Music Producer & DJ",
      "Choreographed Annual Functions for our school",
    ],
    field: "Entertainment",
  },
  {
    name: "Pratiksha Landge",
    image: "https://media.istockphoto.com/id/2187293569/photo/concentrated-woman-working-on-laptop-in-calm-home-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=Fg0dqvMaJEoiwEhl71S6f-imVPEorxFno8Ot6fBXOGI=", // Placeholder image
    details: [
      "Represented as Captain for Maharashtra at 65th National School Level Kabaddi Under 14 Girls",
      "Two Time Participant at National Level",
      "State Level participant in wrestling",
    ],
    field: "Sports",
  },
  {
    name: "Anushka Kumavat",
    image: "https://media.istockphoto.com/id/2193991190/photo/smiling-asian-female-entrepreneur-working-on-touchpad-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=lsD2QRQfHehFV0y98Xz1tsDnoFZkkT1h5VzcCV3DgMM=", // Placeholder image
    details: [
      "She envisions to be an Author",
      "She is an Orator and conducts lectures and webinars on space",
      "Working on physics and Astronomy",
      "Completed online course of ISRO on Remote Sensing",
    ],
    field: "Science",
  },
];
export default function AlumniPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 inline-block">Our Alumni</h1>
        <p className="text-lg text-gray-600">
          Celebrating the achievements of Priyadarshani High School graduates
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {alumni.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 relative rounded-full overflow-hidden border-2 border-gray-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  
                </div>
              </div>
              
              <ul className="space-y-2 text-sm text-gray-700 pl-1">
                {member.details.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="max-w-4xl mx-auto mt-16 text-center">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Join Our Alumni Network
          </h3>
          <p className="text-gray-600 mb-4">
            Stay connected with your school community
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Register as Alumni
          </button>
        </div>
      </div> */}
    </div>
  );
}
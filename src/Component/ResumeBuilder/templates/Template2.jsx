// // import React from 'react';

// // const Template2 = ({
// //   data,
// //   boxBgColor,
// //   font,
// //   textSize,
// //   sectionSpacing,
// //   paragraphSpacing,
// //   lineSpacing,
// //   isTemplate1Previewing,
// //   isPreviewScreen,
// //   predefinedText = {},
// // }) => {
// //   // Define classes based on props
// //   const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
// //   const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
// //   const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
// //   const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

// //   // Provide default values for data properties
// //   const { details = [], experiences = [], educations = [], skills = [], sectionadd = [], summary = [] } = data || {};

// //   // Generic function to check if all required fields are filled
// //   const areAllFieldsFilled = (item, fields) => {
// //     return fields.every(field => item[field] && item[field].trim() !== '');
// //   };

// //   // Check if all details are filled
// //   const allDetailsFilled = details.every(detail =>
// //     areAllFieldsFilled(detail, ['Profession', 'phoneNumber', 'email', 'link', 'address', 'name'])
// //   );

// //   const allDetailsFilled2 = experiences.every(experience =>
// //     areAllFieldsFilled(experience, ['Company', 'month1', 'role', 'companydescription'])
// //   );

// //   const allDetailsFilled3 = educations.every(education =>
// //     areAllFieldsFilled(education, ['schoolname', 'edmonth1', 'edmonth2', 'coursename'])
// //   );

// //   const allDetailsFilled4 = skills.every(skill =>
// //     areAllFieldsFilled(skill, ['skillname', 'skilldetails'])
// //   );

// //   const allDetailsFilled5 = sectionadd.every(section =>
// //     areAllFieldsFilled(section, ['sectiontitle', 'sectiondescription'])
// //   );

// //   const allDetailsFilled6 = summary.every(summar =>
// //     areAllFieldsFilled(summar, ['summarydescription'])
// //   );

// //   return (
// //     <div className={`border px-5 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`} style={{ fontFamily: font,  backgroundColor: boxBgColor  }}>
// //       {/* {!isPreviewScreen && !isTemplate1Previewing && (
// //         <div className="">
// //           {allDetailsFilled && (
// //             <div className="w-7 h-7 ps-2.5 mt-1.5 bg-white rounded-2xl absolute top-48 left-1 font-bold">1</div>
// //           )}
// //           {allDetailsFilled2 && (
// //             <div className="w-7 h-8 ps-2.5 pt-0.5  mt-3.5 bg-white rounded-2xl absolute top-56 left-1 font-bold">2</div>
// //           )}
// //           {allDetailsFilled3 && (
// //             <div className="w-7 h-8 ps-2.5 pt-0.5 mt-11  bg-white rounded-2xl absolute top-60 left-1 font-bold">3</div>
// //           )}
// //           {allDetailsFilled4 && (
// //             <div className="w-7 h-7 ps-2.5 mt-2 bg-white rounded-2xl absolute top-80 left-1 font-bold">4</div>
// //           )}
// //           {allDetailsFilled5 && (
// //             <div className="w-7 h-7 ps-2.5 mt-8 bg-white rounded-2xl absolute top-96 left-1 font-bold">6</div>
// //           )}
// //           {allDetailsFilled6 && (
// //             <div className="w-7 h-8 ps-2.5 pt-1 mt-28 bg-white rounded-2xl absolute top-64 left-1 font-bold">5</div>
// //           )}
// //         </div>
// //       )} */}
// //       <div className='flex flex-col md:flex-row'>
// //         <div className='md:w-2/3 md:px-10 pt-4'>
// //           {details.map((del, index) => (
// //             <div key={index}>
// //               <h3 className="text-lg md:text-xl lg:text-3xl text-blue-800 font-bold ">{del.name || predefinedText.details.name}</h3>
// //               <p className='text-lg md:text-xl lg:text-lg mt-2'> {del.Profession || predefinedText.details.profession}</p>

// //               {summary.map((sum, index) => (
// //                 <div key={index}>
// //                 <p
// //                   className={`${paragraphSpacingClass} text-xs sm:text-xs md:text-xs lg:text-xs m-2 w-2/2 break-all`}
// //                   dangerouslySetInnerHTML={{ __html: sum.summarydescription || predefinedText.summary.summarydescription }}
// //                 />

// //               </div>
// //               ))}

// //               <h5 className='text-blue-800 '>WORK EXPERIENCE </h5><br />
// //               <div className="flex-grow border-t border-gray-300 align-super"></div>
// //               {experiences.map((exp, index) => (
// //                   <div key={index}>
// //                   <div className="flex justify-between mt-2">
// //                     <h6 className="font-bold break-all text-xs sm:text-sm md:text-sm lg:text-sm my-2">{exp.Company || predefinedText.experiences.company}</h6>
// //                     <p className="text-xs sm:text-xs md:text-xs lg:text-xs my-2">{exp.month1} - {exp.month2}</p>
// //                   </div>
// //                   <div className="flex justify-between">
// //                     <h6 className="text-xs sm:text-sm md:text-sm lg:text-sm">{exp.role ||  predefinedText.experiences.role }</h6>
// //                     <p className="text-xs sm:text-xs md:text-xs lg:text-xs">{exp.companyplace ||  predefinedText.experiences.companyplace}</p>
// //                   </div>
// //                   <ul className={`${exp.companydescription ? ' text-xs sm:text-xs md:text-xs lg:text-xs' : ''} w-2/2 break-all`}>
// //                     {exp.companydescription ? (
// //                       // If company description is provided, split by new lines and render each line as a list item
// //                       exp.companydescription.split(/\r?\n/).map((line, i) => (
// //                         <li
// //         key={i}
// //         className={`${line.trim() ? 'before:content-[""] before:mr-1' : ''} text-xs sm:text-xs md:text-xs lg:text-xs m-2 w-full break-all`}
// //         style={{ marginBottom: '4px' }} // Adjust margin bottom as needed
// //         dangerouslySetInnerHTML={{ __html: line ? `${line}` : '' }}
// //       />
// //                       ))
// //                     ) : (
// //                       // Otherwise, render predefinedText.experiences.companydescription
// //                       <li
// //                         className={`${paragraphSpacingClass} text-xs sm:text-xs md:text-xs lg:text-xs m-2 w-2/2 break-all`}
// //                         style={{ marginBottom: '4px' }} // Adjust margin bottom as needed
// //                       >
// //                         {predefinedText.experiences.companydescription}
// //                       </li>
// //                     )}
// //                   </ul>
// //                   <br />
// //                 </div>

// //               ))}
// //             </div>
// //           ))}
// //         </div>
// //         <div className="md:w-1/3 md:p-4 bg-gray-200" >
// //           <div>
// //           <h5 className='text-blue-800  '>CONTACT </h5>
// //             <div className="flex-grow border-t border-black align-super mt-5"></div>
// //             <ul className=" text-xs md:text-xs lg:text-xs mt-2">
// //               {details.map((del, index) => (
// //                 <React.Fragment key={index}>
// //                   <li><span className="m-2">&#8226;</span>{del.address || predefinedText.details.address}</li>
// //                   <li className='text-xs md:text-xs lg:text-xs'>
// //                     <span className="m-2">&#8226;</span>{del.phoneNumber || predefinedText.details.phoneNumber}
// //                   </li>
// //                   <li className='text-xs md:text-xs lg:text-xs break-all'>
// //                     <span className="m-2">&#8226;</span>{del.email || predefinedText.details.email}
// //                   </li>
// //                   <li className='text-xs md:text-xs lg:text-xs'>
// //                     <span className="m-2">&#8226;</span><a href={del.link || '#'}>{del.link || predefinedText.details.link}</a>
// //                   </li>
// //                 </React.Fragment>
// //               ))}
// //             </ul>
// //           </div><br />
// //           <h5 className='text-blue-800 '>EDUCATION </h5><br />
// //           <div className="flex-grow border-t border-black align-super"></div>
// //           {educations.map((edu, index) => (
// //             <div key={index}>
// //               <ul className=" text-xs md:text-xs lg:text-xs mt-2">
// //                 <li className='font-bold'>{edu.coursename || predefinedText.educations.coursename}</li>
// //                 <li className='text-xs md:text-xs lg:text-sm mt-2'>{edu.schoolname || predefinedText.educations.schoolname}</li>
// //                 <li className='text-xs md:text-xs lg:text-xs mt-2'>{edu.schoolplace || predefinedText.educations.schoolplace}</li>
// //               </ul>
// //             </div>
// //           ))} <br />
// //           <h5 className='text-blue-800 '>SKILLS  </h5>
// //           <div className="flex-grow border-t border-black align-super mt-2"></div>
// //           {skills.map((skill, index) => (
// //             <div key={index}>
// //               <div className=" text-xs md:text-xs lg:text-xs mt-2">
// //                 <div>
// //                   {skill.skillname || predefinedText.skills.skillname}
// //                 </div>
// //                 {/* <div className='text-xs md:text-xs lg:text-xs'>
// //                   {skill.skilldetails || predefinedText.skills.skilldetails}
// //                 </div> */}
// //               </div>
// //             </div>
// //           ))}
// //           <div>
// //             {sectionadd.map((section, index) => (
// //               <div key={index} className="mt-5">
// //                 <h5 className="text-blue-800  break-all">{section.sectiontitle || predefinedText.additionalSections}</h5>
// //                 <div className="flex-grow border-t border-black align-super my-2 "></div>
// //                 <span className="font-bold text-xs w-32">{section.sectionname || predefinedText.additionalSections}</span>
// //                 <h6 className={`${paragraphSpacingClass} text-xs  break-all`}>{section.sectiondescription || predefinedText.additionalSections}</h6>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Template2;

// // import React, { useState } from "react";

// // const Template2 = ({
// //   data,
// //   boxBgColor,
// //   font,
// //   textSize,
// //   sectionSpacing,
// //   paragraphSpacing,
// //   lineSpacing,
// //   isTemplate1Previewing,
// //   isPreviewScreen,
// //   predefinedText = {},
// // }) => {
// //   const [sections, setSections] = useState([
// //     { name: "Details", content: data.details || [], key: "details" },
// //     { name: "Summary", content: data.summary || [], key: "summary" },
// //     { name: "Experience", content: data.experiences || [], key: "experiences" },
// //     { name: "Education", content: data.educations || [], key: "educations" },
// //     { name: "Skills", content: data.skills || [], key: "skills" },
// //     { name: "Additional", content: data.sectionadd || [], key: "sectionadd" },
// //   ]);
// //   const [draggedIndex, setDraggedIndex] = useState(null);

// //   const textSizeClass =
// //     textSize === "small"
// //       ? "text-sm"
// //       : textSize === "medium"
// //       ? "text-base"
// //       : "text-lg";
// //   const sectionSpacingClass =
// //     sectionSpacing === "small"
// //       ? "space-y-2"
// //       : sectionSpacing === "medium"
// //       ? "space-y-4"
// //       : "space-y-6";
// //   const paragraphSpacingClass =
// //     paragraphSpacing === "small"
// //       ? "mb-2"
// //       : paragraphSpacing === "medium"
// //       ? "mb-4"
// //       : "mb-6";
// //   const lineHeightClass =
// //     lineSpacing === "1"
// //       ? "leading-tight"
// //       : lineSpacing === "1.5"
// //       ? "leading-snug"
// //       : "leading-relaxed";

// //   const handleSectionDragStart = (e, index) => {
// //     setDraggedIndex(index);
// //     e.dataTransfer.effectAllowed = "move";
// //     e.dataTransfer.setData("text/plain", index);
// //   };

// //   const handleSectionDragOver = (e) => {
// //     e.preventDefault();
// //     e.dataTransfer.dropEffect = "move";
// //   };

// //   const handleSectionDrop = (e, index) => {
// //     e.preventDefault();
// //     const draggedIndex = e.dataTransfer.getData("text/plain");
// //     const updatedSections = [...sections];
// //     const [movedSection] = updatedSections.splice(draggedIndex, 1);
// //     updatedSections.splice(index, 0, movedSection);
// //     setSections(updatedSections);
// //     setDraggedIndex(null);
// //   };

// //   return (
// //     <div
// //       className={`border px-5 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
// //       style={{ fontFamily: font, backgroundColor: boxBgColor }}
// //     >
// //       <div className="flex flex-col md:flex-row">
// //         {/* Main Container */}
// //         <div className="md:w-full pt-4">
// //           {sections.map((section, index) => (
// //             <div
// //               key={section.key}
// //               className={`border-b-2 p-4 my-2 ${
// //                 draggedIndex === index ? "bg-gray-200" : ""
// //               }`}
// //               draggable
// //               onDragStart={(e) => handleSectionDragStart(e, index)}
// //               onDragOver={(e) => handleSectionDragOver(e)}
// //               onDrop={(e) => handleSectionDrop(e, index)}
// //             >
// //               <h3 className="text-lg md:text-xl lg:text-3xl text-blue-800 font-bold">
// //                 {section.name === "Details" || section.name === "Additional"
// //                   ? " "
// //                   : section.name}
// //               </h3>
// //               <div className="mt-2">
// //                 {section.key === "details" &&
// //                   section.content.map((item, idx) => (
// //                     <div key={idx}>
// //                       <h4 className="p-2 text-2xl text-blue-800 font-bold">
// //                         {item.name || predefinedText.details.name}
// //                       </h4>
// //                       <p className="p-2 text-lg font-medium">
// //                         {item.Profession || predefinedText.details.profession}
// //                       </p>
// //                     </div>
// //                   ))}
// //                 {section.key === "summary" &&
// //                   section.content.map((item, idx) => (
// //                     <div key={idx} className="p-2">
// //                       <p
// //                         dangerouslySetInnerHTML={{
// //                           __html:
// //                             item.summarydescription ||
// //                             predefinedText.summary.summarydescription,
// //                         }}
// //                       />
// //                     </div>
// //                   ))}
// //                 {/* {section.key === "experiences" &&
// //                   section.content.map((item, idx) => (
// //                     <div key={idx} className="p-2">
// //                       <h6>
// //                         {item.Company || predefinedText.experiences.company}
// //                       </h6>
// //                       <p>
// //                         {item.month1} - {item.month2}
// //                       </p>
// //                       <p>{item.role || predefinedText.experiences.role}</p>
// //                       <p>
// //                         {item.companyplace ||
// //                           predefinedText.experiences.companyplace}
// //                       </p>
// //                       <ul>
// //                         {item.companydescription
// //                           .split(/\r?\n/)
// //                           .map((line, i) => (
// //                             <li
// //                               key={i}
// //                               dangerouslySetInnerHTML={{ __html: line }}
// //                             />
// //                           ))}
// //                       </ul>
// //                     </div>
// //                   ))} */}

// //                 {section.key === "experiences" &&
// //                   section.content.map((item, idx) => (
// //                     <div
// //                       key={idx}
// //                       className="p-4 rounded-md mb-4 "
// //                     >
// //                    <div className="flex justify-between items-center">
// //                    <div className="flex flex-col gap-2">
// //                     <h6 className="text-xl font-semibold text-black mb-1">
// //                         {item.Company || predefinedText.experiences.company}
// //                       </h6>
// //                       <p className="text-sm text-gray-600 mb-2">
// //                         {item.companyplace ||
// //                           predefinedText.experiences.companyplace}
// //                       </p>
// //                     </div>
// //                    <div className="flex flex-col gap-2">
// //                    <p className="text-sm text-gray-600 mb-1">
// //                         {item.month1} - {item.month2}
// //                       </p>
// //                       <p className="text-md font-medium text-gray-700 mb-1">
// //                         {item.role || predefinedText.experiences.role}
// //                       </p>
// //                     </div> 
// //                    </div>
                     
// //                       <ul className="list-disc pl-5">
// //                         {item.companydescription
// //                           .split(/\r?\n/)
// //                           .map((line, i) => (
// //                             <li
// //                               key={i}
// //                               className="text-sm text-gray-700"
// //                               dangerouslySetInnerHTML={{ __html: line }}
// //                             />
// //                           ))}
// //                       </ul>
// //                     </div>
// //                   ))}

// //                 {section.key === "educations" &&
// //                   section.content.map((item, idx) => (
// //                     <div key={idx} className="p-2 flex justify-between ">
// //                       <div className="flex flex-col gap-2">
// //                         <h5>
// //                           {item.coursename ||
// //                             predefinedText.educations.coursename}
// //                         </h5>
// //                         <p>
// //                           {item.schoolname ||
// //                             predefinedText.educations.schoolname}
// //                         </p>
// //                       </div>
// //                       <div className="flex flex-col gap-2">
// //                         <p>
// //                           {item.schoolplace ||
// //                             predefinedText.educations.schoolplace}
// //                         </p>
// //                         <p className="text-gray-400">
// //                           {item.edmonth1 || predefinedText.educations.edmonth1}{" "}
// //                           -{" "}
// //                           {item.edmonth2 || predefinedText.educations.edmonth2}
// //                         </p>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 <div className="flex justify-between items-center">
// //                   {section.key === "skills" &&
// //                     section.content.map((item, idx) => (
// //                       <div key={idx} className="p-2 ">
// //                         <div className="flex gap-2 items-center">
// //                           <p>•</p>
// //                           {item.skillname || predefinedText.skills.skillname}
// //                         </div>
// //                       </div>
// //                     ))}
// //                 </div>
// //                 {section.key === "sectionadd" &&
// //                   section.content.map((item, idx) => (
// //                     <div key={idx} className="flex flex-col gap-2">
// //                       <h5 className="text-2xl text-blue-800 font-bold">
// //                         {item.sectiontitle || predefinedText.additionalSections}
// //                       </h5>

// //                       <h6>
// //                         {item.sectiondescription ||
// //                           predefinedText.additionalSections}
// //                       </h6>
// //                     </div>
// //                   ))}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Template2;


// import React, { useState } from "react";
// import DOMPurify from "dompurify";

// const createMarkup = (html) => {
//   return {
//     __html: DOMPurify.sanitize(html, {
//       ALLOWED_TAGS: ['p', 'br', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li'],
//       ALLOWED_ATTR: ['href', 'target', 'class']
//     }).replace(/<ul>/g, '<ul class="list-disc-bold">')
//       .replace(/<ol>/g, '<ol class="list-decimal-custom">')
//   };
// };

// const Template2 = ({
//   data,
//   boxBgColor,
//   font,
//   textSize,
//   sectionSpacing,
//   paragraphSpacing,
//   lineSpacing,
//   isTemplate1Previewing,
//   isPreviewScreen,
//   predefinedText = {},
// }) => {
//   const [sections, setSections] = useState([
//     { name: "Details", content: data.details || [], key: "details" },
//     { name: "Summary", content: data.summary || [], key: "summary" },
//     { name: "Experience", content: data.experiences || [], key: "experiences" },
//     { name: "Education", content: data.educations || [], key: "educations" },
//     { name: "Skills", content: data.skills || [], key: "skills" },
//     { name: "Additional", content: data.sectionadd || [], key: "sectionadd" },
//   ]);
//   const [draggedIndex, setDraggedIndex] = useState(null);

//   const textSizeClass =
//     textSize === "small"
//       ? "text-sm"
//       : textSize === "medium"
//       ? "text-base"
//       : "text-lg";
//   const sectionSpacingClass =
//     sectionSpacing === "small"
//       ? "space-y-2"
//       : sectionSpacing === "medium"
//       ? "space-y-4"
//       : "space-y-6";
//   const paragraphSpacingClass =
//     paragraphSpacing === "small"
//       ? "mb-2"
//       : paragraphSpacing === "medium"
//       ? "mb-4"
//       : "mb-6";
//   const lineHeightClass =
//     lineSpacing === "1"
//       ? "leading-tight"
//       : lineSpacing === "1.5"
//       ? "leading-snug"
//       : "leading-relaxed";

//   const handleSectionDragStart = (e, index) => {
//     setDraggedIndex(index);
//     e.dataTransfer.effectAllowed = "move";
//     e.dataTransfer.setData("text/plain", index);
//   };

//   const handleSectionDragOver = (e) => {
//     e.preventDefault();
//     e.dataTransfer.dropEffect = "move";
//   };

//   const handleSectionDrop = (e, index) => {
//     e.preventDefault();
//     const draggedIndex = e.dataTransfer.getData("text/plain");
//     const updatedSections = [...sections];
//     const [movedSection] = updatedSections.splice(draggedIndex, 1);
//     updatedSections.splice(index, 0, movedSection);
//     setSections(updatedSections);
//     setDraggedIndex(null);
//   };

//   return (
//     <div
//       className={`border px-5 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
//       style={{ fontFamily: font, backgroundColor: boxBgColor }}
//     >
//       <div className="flex flex-col md:flex-row">
//         {/* Main Container */}
//         <div className="md:w-full pt-4">
//           {sections.map((section, index) => (
//             <div
//               key={section.key}
//               className={`border-b-2 p-4 my-2 ${
//                 draggedIndex === index ? "bg-gray-200" : ""
//               }`}
//               draggable
//               onDragStart={(e) => handleSectionDragStart(e, index)}
//               onDragOver={(e) => handleSectionDragOver(e)}
//               onDrop={(e) => handleSectionDrop(e, index)}
//             >
//               <h3 className="text-lg md:text-xl lg:text-3xl text-blue-800 font-bold">
//                 {section.name === "Details" || section.name === "Additional"
//                   ? " "
//                   : section.name}
//               </h3>
//               <div className="mt-2">
//                 {section.key === "details" &&
//                   section.content.map((item, idx) => (
//                     <div key={idx}>
//                       <h4 className="p-2 text-2xl text-blue-800 font-bold">
//                         {item.name || predefinedText.details.name}
//                       </h4>
//                       <p className="p-2 text-lg font-medium">
//                         {item.Profession || predefinedText.details.profession}
//                       </p>
//                     </div>
//                   ))}
//                 {section.key === "summary" &&
//                   section.content.map((item, idx) => (
//                     <div key={idx} className="p-2">
//                       <p
//                         dangerouslySetInnerHTML={createMarkup(
//                           item.summarydescription ||
//                           predefinedText.summary.summarydescription
//                         )}
//                       />
//                     </div>
//                   ))}
//                 {section.key === "experiences" &&
//                   section.content.map((item, idx) => (
//                     <div
//                       key={idx}
//                       className="p-4 rounded-md mb-4"
//                     >
//                       <div className="flex justify-between items-center">
//                         <div className="flex flex-col gap-2">
//                           <h6 className="text-xl font-semibold text-black mb-1">
//                             {item.Company || predefinedText.experiences.company}
//                           </h6>
//                           <p className="text-sm text-gray-600 mb-2">
//                             {item.companyplace ||
//                               predefinedText.experiences.companyplace}
//                           </p>
//                         </div>
//                         <div className="flex flex-col gap-2">
//                           <p className="text-sm text-gray-600 mb-1">
//                             {item.month1} - {item.month2}
//                           </p>
//                           <p className="text-md font-medium text-gray-700 mb-1">
//                             {item.role || predefinedText.experiences.role}
//                           </p>
//                         </div>
//                       </div>
//                       <ul className="list-disc pl-5">
//                         {item.companydescription
//                           .split(/\r?\n/)
//                           .map((line, i) => (
//                             <li
//                               key={i}
//                               className="text-sm text-gray-700"
//                               dangerouslySetInnerHTML={createMarkup(line)}
//                             />
//                           ))}
//                       </ul>
//                     </div>
//                   ))}
//                 {section.key === "educations" &&
//                   section.content.map((item, idx) => (
//                     <div key={idx} className="p-2 flex justify-between">
//                       <div className="flex flex-col gap-2">
//                         <h5>
//                           {item.coursename ||
//                             predefinedText.educations.coursename}
//                         </h5>
//                         <p>
//                           {item.schoolname ||
//                             predefinedText.educations.schoolname}
//                         </p>
//                       </div>
//                       <div className="flex flex-col gap-2">
//                         <p>
//                           {item.schoolplace ||
//                             predefinedText.educations.schoolplace}
//                         </p>
//                         <p className="text-gray-400">
//                           {item.edmonth1 || predefinedText.educations.edmonth1}{" "}
//                           -{" "}
//                           {item.edmonth2 || predefinedText.educations.edmonth2}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 <div className="flex justify-between items-center">
//                   {section.key === "skills" &&
//                     section.content.map((item, idx) => (
//                       <div key={idx} className="p-2">
//                         <div className="flex gap-2 items-center">
//                           <p>•</p>
//                           {item.skillname || predefinedText.skills.skillname}
//                         </div>
//                       </div>
//                     ))}
//                 {section.key === "sectionadd" &&
//                   section.content.map((item, idx) => (
//                     <div key={idx} className="flex flex-col gap-2">
//                       <h5 className="text-2xl text-blue-800 font-bold">
//                         {item.sectiontitle || predefinedText.additionalSections}
//                       </h5>
//                       <h6>
//                         {item.sectiondescription ||
//                           predefinedText.additionalSections}
//                       </h6>
//                     </div>
//                   ))}
//               </div>
//             </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Template2;

// import React, { useState } from "react";
// import DOMPurify from "dompurify";

// const createMarkup = (html) => {
//   return {
//     __html: DOMPurify.sanitize(html, {
//       ALLOWED_TAGS: ['p', 'br', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li'],
//       ALLOWED_ATTR: ['href', 'target', 'class']
//     }).replace(/<ul>/g, '<ul class="list-disc-bold">')
//       .replace(/<ol>/g, '<ol class="list-decimal-custom">')
//   };
// };

// const Template2 = ({
//   data,
//   boxBgColor,
//   font,
//   textSize,
//   sectionSpacing,
//   paragraphSpacing,
//   lineSpacing,
//   isTemplate1Previewing,
//   isPreviewScreen,
//   predefinedText = {},
// }) => {
//   const [sections, setSections] = useState([
//     { name: "Details", content: data.details || [], key: "details" },
//     { name: "Summary", content: data.summary || [], key: "summary" },
//     { name: "Experience", content: data.experiences || [], key: "experiences" },
//     { name: "Education", content: data.educations || [], key: "educations" },
//     { name: "Skills", content: data.skills || [], key: "skills" },
//     { name: "Additional", content: data.sectionadd || [], key: "sectionadd" },
//   ]);
//   const [draggedIndex, setDraggedIndex] = useState(null);

//   const textSizeClass =
//     textSize === "small"
//       ? "text-sm"
//       : textSize === "medium"
//       ? "text-base"
//       : "text-lg";

//   const sectionSpacingClass =
//     sectionSpacing === "small"
//       ? "space-y-2"
//       : sectionSpacing === "medium"
//       ? "space-y-4"
//       : "space-y-6";

//   const paragraphSpacingClass =
//     paragraphSpacing === "small"
//       ? "mb-2"
//       : paragraphSpacing === "medium"
//       ? "mb-4"
//       : "mb-6";

//   const lineHeightClass =
//     lineSpacing === "1"
//       ? "leading-tight"
//       : lineSpacing === "1.5"
//       ? "leading-snug"
//       : "leading-relaxed";

//   const handleSectionDragStart = (e, index) => {
//     setDraggedIndex(index);
//     e.dataTransfer.effectAllowed = "move";
//     e.dataTransfer.setData("text/plain", index);
//   };

//   const handleSectionDragOver = (e) => {
//     e.preventDefault();
//     e.dataTransfer.dropEffect = "move";
//   };

//   const handleSectionDrop = (e, index) => {
//     e.preventDefault();
//     const draggedIndex = e.dataTransfer.getData("text/plain");
//     const updatedSections = [...sections];
//     const [movedSection] = updatedSections.splice(draggedIndex, 1);
//     updatedSections.splice(index, 0, movedSection);
//     setSections(updatedSections);
//     setDraggedIndex(null);
//   };

//   return (
//     <div
//       className={`border px-5 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
//       style={{ fontFamily: font, backgroundColor: boxBgColor }}
//     >
//       <div className="flex flex-col md:flex-row">
//         {/* Main Container */}
//         <div className="md:w-full pt-4">
//           {sections.map((section, index) => (
//             <div
//               key={section.key}
//               className={`border-b-2 p-4 my-2 ${
//                 draggedIndex === index ? "bg-gray-200" : ""
//               }`}
//               draggable
//               onDragStart={(e) => handleSectionDragStart(e, index)}
//               onDragOver={(e) => handleSectionDragOver(e)}
//               onDrop={(e) => handleSectionDrop(e, index)}
//             >
//               <h3 className="text-lg md:text-xl lg:text-3xl text-blue-800 font-bold">
//                 {section.name === "Details" || section.name === "Additional"
//                   ? " "
//                   : section.name}
//               </h3>
//               <div className="mt-2">
//                 {section.key === "details" &&
//                   section.content.map((item, idx) => (
//                     <div key={idx}>
//                       <h4 className="p-2 text-2xl text-blue-800 font-bold">
//                         {item.name || predefinedText.details?.name}
//                       </h4>
//                       <p className="p-2 text-lg font-medium">
//                         {item.Profession || predefinedText.details?.profession}
//                       </p>
//                     </div>
//                   ))}
//                 {section.key === "summary" &&
//                   section.content.map((item, idx) => (
//                     <div key={idx} className="p-2">
//                       <p
//                         dangerouslySetInnerHTML={createMarkup(
//                           item.summarydescription ||
//                           predefinedText.summary?.summarydescription
//                         )}
//                       />
//                     </div>
//                   ))}
//                 {section.key === "experiences" &&
//                   section.content.map((item, idx) => (
//                     <div
//                       key={idx}
//                       className="p-4 rounded-md mb-4"
//                     >
//                       <div className="flex justify-between items-center">
//                         <div className="flex flex-col gap-2">
//                           <h6 className="text-xl font-semibold text-black mb-1">
//                             {item.Company || predefinedText.experiences?.company}
//                           </h6>
//                           <p className="text-sm text-gray-600 mb-2">
//                             {item.companyplace ||
//                               predefinedText.experiences?.companyplace}
//                           </p>
//                         </div>
//                         <div className="flex flex-col gap-2">
//                           <p className="text-sm text-gray-600 mb-1">
//                             {item.month1} - {item.month2}
//                           </p>
//                           <p className="text-md font-medium text-gray-700 mb-1">
//                             {item.role || predefinedText.experiences?.role}
//                           </p>
//                         </div>
//                       </div>
//                       <ul className="list-disc pl-5">
//                         {item.companydescription
//                           .split(/\r?\n/)
//                           .map((line, i) => (
//                             <li
//                               key={i}
//                               className="text-sm text-gray-700"
//                               dangerouslySetInnerHTML={createMarkup(line)}
//                             />
//                           ))}
//                       </ul>
//                     </div>
//                   ))}
//                 {section.key === "educations" &&
//                   section.content.map((item, idx) => (
//                     <div key={idx} className="p-2 flex justify-between">
//                       <div className="flex flex-col gap-2">
//                         <h5>
//                           {item.coursename ||
//                             predefinedText.educations?.coursename}
//                         </h5>
//                         <p>
//                           {item.schoolname ||
//                             predefinedText.educations?.schoolname}
//                         </p>
//                       </div>
//                       <div className="flex flex-col gap-2">
//                         <p>
//                           {item.schoolplace ||
//                             predefinedText.educations?.schoolplace}
//                         </p>
//                         <p className="text-gray-400">
//                           {item.edmonth1 || predefinedText.educations?.edmonth1}{" "}
//                           -{" "}
//                           {item.edmonth2 || predefinedText.educations?.edmonth2}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 {section.key === "skills" &&
//                   section.content.map((item, idx) => (
//                     <div key={idx} className="p-2">
//                       <div className="flex gap-2 items-center">
//                         <p>•</p>
//                         {item.skillname || predefinedText.skills?.skillname}
//                       </div>
//                     </div>
//                   ))}
//                 {section.key === "sectionadd" &&
//                   section.content.map((item, idx) => (
//                     <div key={idx} className="flex flex-col gap-2">
//                       <h5 className="text-2xl text-blue-800 font-bold">
//                         {item.sectiontitle || predefinedText.additionalSections}
//                       </h5>
//                       <h6>
//                         {item.sectiondescription ||
//                           predefinedText.additionalSections}
//                       </h6>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Template2;

import DOMPurify from "dompurify";
import React, { useState, useEffect, useMemo } from "react";

const createMarkup = (html) => {
  return {
    __html: DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['p', 'br', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li'],
      ALLOWED_ATTR: ['href', 'target', 'class']
    }).replace(/<ul>/g, '<ul class="list-disc-bold">')
      .replace(/<ol>/g, '<ol class="list-decimal-custom">')
  };
};

const Template2 = ({
  data = {},
  boxBgColor,
  font,
  textSize,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  predefinedText = {},
}) => {
  const textSizeClass =
    textSize === "small"
      ? "text-sm"
      : textSize === "medium"
      ? "text-base"
      : "text-lg";
  const sectionSpacingClass =
    sectionSpacing === "small"
      ? "space-y-2"
      : sectionSpacing === "medium"
      ? "space-y-4"
      : "space-y-6";
  const paragraphSpacingClass =
    paragraphSpacing === "small"
      ? "mb-2"
      : paragraphSpacing === "medium"
      ? "mb-4"
      : "mb-6";
  const lineHeightClass =
    lineSpacing === "1"
      ? "leading-tight"
      : lineSpacing === "1.5"
      ? "leading-snug"
      : "leading-relaxed";

  const [sections, setSections] = useState([]);

  const memoizedSections = useMemo(() => [
    { id: "details", content: data.details || [] },
    { id: "summary", content: data.summary || [] },
    { id: "experiences", content: data.experiences || [] },
    { id: "educations", content: data.educations || [] },
    { id: "skills", content: data.skills || [] },
    { id: "sectionadd", content: data.sectionadd || [] },
  ], [data]);

  useEffect(() => {
    setSections(memoizedSections);
  }, [memoizedSections]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("sectionIndex", index.toString());
  };

  const handleDrop = (e, dropIndex) => {
    const dragIndex = parseInt(e.dataTransfer.getData("sectionIndex"), 10);
    if (dragIndex === dropIndex) return;

    const updatedSections = [...sections];
    const [draggedSection] = updatedSections.splice(dragIndex, 1);
    updatedSections.splice(dropIndex, 0, draggedSection);
    setSections(updatedSections);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`p-7 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
      style={{ fontFamily: font, backgroundColor: boxBgColor }}
    >
      <style jsx>{`
        .list-disc::marker,
        .list-decimal::marker {
          color: black;
          font-weight: bold;
        }
        li {
          padding-left: 0.5em;
        }
      `}</style>
      {sections.map((section, index) => (
        <div
          key={`${section.id}-${index}`}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          onDragOver={handleDragOver}
          className="mb-6"
        >
          {section.id === "details" && (
            <div>
              {section.content && section.content.length > 0 ? (
                section.content.map((del, delIndex) => (
                  <div key={`details-${delIndex}`} className="flex flex-col mb-6">
                    <div className="flex flex-col mb-4">
                      <h3 className="text-2xl text-blue-700 font-bold border-b-2 border-gray-400 pb-1 mb-2">
                        {del?.name || predefinedText.details?.name || "Name not provided"}
                      </h3>
                      <p className="text-xl text-gray-700">
                        {del?.Profession || predefinedText.details?.profession || "Profession not provided"}
                      </p>
                    </div>
                    <div className="rounded-lg p-4 mb-6">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 items-center text-xs py-2 px-4">
                        {[
                          { text: del?.address || predefinedText.details?.address || "Address not provided" },
                          { text: del?.phoneNumber || predefinedText.details?.phoneNumber || "Phone number not provided" },
                          { text: del?.email || predefinedText.details?.email || "Email not provided" },
                          { text: del?.link || predefinedText.details?.link || "LinkedIn not provided", isLink: true, href: del?.linkedin },
                          { text: del?.github || predefinedText.details?.github || "GitHub not provided", isLink: true, href: del?.github },
                        ].map((item, itemIndex) => (
                          <div key={`detail-item-${itemIndex}`} className="flex items-center space-x-2">
                            <span className="text-black font-bold text-xl">•</span>
                            {item.isLink ? (
                              <a href={item.href} className="hover:underline text-xl text-gray-700">{item.text}</a>
                            ) : (
                              <span className="text-xl text-gray-700">{item.text}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-400 italic">No details provided</div>
              )}
            </div>
          )}

          {section.id === "summary" && (
            <div>
              {section.content && section.content.length > 0 ? (
                section.content.map((sum, sumIndex) => (
                  <div key={`summary-${sumIndex}`} className="mb-6">
                    <div className="font-bold text-lg text-blue-700 border-b-2 border-gray-400 pb-1 mb-2">
                      Summary
                    </div>
                    <div
                      className="text-sm prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={createMarkup(sum?.summarydescription || "I am a journalist in a private company, I have been a journalist for 3 years. I am very happy in my work.")}
                    />
                  </div>
                ))
              ) : (
                <div className="text-gray-400 italic">No summary provided</div>
              )}
            </div>
          )}

          {section.id === "experiences" && (
            <div className="mb-6">
              <h5 className="text-blue-700 font-bold border-b-2 border-gray-400 pb-1 mb-4">
                WORK EXPERIENCE
              </h5>
              {section.content && section.content.length > 0 ? (
                section.content.map((exp, expIndex) => (
                  <div key={`exp-${expIndex}`} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <h6 className="font-bold text-lg text-gray-800 break-all">
                        {exp?.Company || predefinedText.experiences?.Company || "Company not provided"}
                      </h6>
                      <p className="text-sm text-gray-600">
                        {exp?.month1} - {exp?.month2}
                      </p>
                    </div>
                    <div className="flex justify-between mb-1">
                      <h6 className="text-sm text-gray-700">
                        {exp?.role || predefinedText.experiences?.role || "Role not provided"}
                      </h6>
                      <p className="text-sm text-gray-600">
                        {exp?.companyplace || predefinedText.experiences?.companyplace || "Company place not provided"}
                      </p>
                    </div>
                    <div 
                      className="text-sm prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={createMarkup(exp.companydescription)}
                    />
                  </div>
                ))
              ) : (
                <div className="text-gray-400 italic">No experience provided</div>
              )}
            </div>
          )}

          {section.id === "educations" && (
            <div className="mb-6 page-break">
              <h5 className="text-blue-700 font-bold border-b-2 border-gray-400 pb-1 mb-4">
                EDUCATION
              </h5>
              {section.content && section.content.length > 0 ? (
                section.content.map((edu, eduIndex) => (
                  <div key={`edu-${eduIndex}`} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <h6 className="font-bold text-lg text-gray-800 break-all">
                        {edu?.schoolname || predefinedText.educations?.schoolname || "School name not provided"}
                      </h6>
                      <p className="text-sm text-gray-600">
                        {edu?.edmonth1} - {edu?.edmonth2}
                      </p>
                    </div>
                    <div className="flex justify-between mb-1">
                      <h6 className="text-sm text-gray-700">
                        {edu?.coursename || predefinedText.educations?.coursename || "Degree not provided"}
                      </h6>
                      <p className="text-sm text-gray-600">
                        {edu?.schoolplace || predefinedText.educations?.schoolplace || "School place not provided"}
                      </p>
                    </div>
                    {/* <div 
                      className="text-sm prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={createMarkup(edu.schooldescription)}
                    /> */}
                  </div>
                ))
              ) : (
                <div className="text-gray-400 italic">No education provided</div>
              )}
            </div>
          )}

          {section.id === "skills" && (
            <div className="mb-6 page-break">
              <h5 className="text-blue-700 font-bold border-b-2 border-gray-400 pb-1 mb-4">
                SKILLS
              </h5>
              {section.content && section.content.length > 0 ? (
                section.content.map((sk, skIndex) => (
                  <div key={`skill-${skIndex}`} className="mb-4">
                    <h6 className=" text-black break-all mb-2">
                      {sk?.skillname || predefinedText.skills?.skillname || "Skill not provided"}
                    </h6>
                    {/* <div className="text-sm prose prose-sm max-w-none" dangerouslySetInnerHTML={createMarkup(sk.skilldescription)} /> */}
                  </div>
                ))
              ) : (
                <div className="text-gray-400 italic">No skills provided</div>
              )}
            </div>
          )}

          {section.id === "sectionadd" && (
            <div className="mb-6 page-break">
              {/* <h5 className="text-black font-bold border-b-2 border-gray-400 pb-1 mb-4">
                ADDITIONAL SECTION
              </h5> */}
              {section.content && section.content.length > 0 ? (
                section.content.map((sec, secIndex) => (
                  <div key={`sec-${secIndex}`} className="mb-4">
                    <h6 className="font-bold text-lg border-b-2 border-gray-400 text-blue-700 break-all mb-2">
                      {sec?.sectiontitle || predefinedText.sectionadd?.section || "Section not provided"}
                    </h6>
                    <div className="text-sm prose prose-sm max-w-none" dangerouslySetInnerHTML={createMarkup(sec.sectiondescription)} />
                  </div>
                ))
              ) : (
                <div className="text-gray-400 italic">No additional sections provided</div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Template2;

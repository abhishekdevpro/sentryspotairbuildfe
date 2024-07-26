// import React from "react";
// const Template7 = ({
//   data,
//   boxBgColor,
//   font,
//   textSize,
//   sectionSpacing,
//   paragraphSpacing,
//   lineSpacing,
//   isPreviewScreen,
//   predefinedText
// }) => {
//   // Define classes based on props
//   const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
//   const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
//   const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
//   const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

//   // Provide default values for data properties
//   const { details = [], experiences = [], educations = [], skills = [], sectionadd = [], summary = [] } = data || {};

//   // Generic function to check if all required fields are filled
//   const areAllFieldsFilled = (item, fields) => {
//     return fields.every(field => item[field] && item[field].trim() !== '');
//   };

//   // Check if all details are filled
//   const allDetailsFilled = details.every(detail =>
//     areAllFieldsFilled(detail, ['Profession', 'phoneNumber', 'email', 'link', 'address', 'name'])
//   );

//   const allDetailsFilled2 = experiences.every(experience =>
//     areAllFieldsFilled(experience, ['Company', 'month1', 'role', 'companydescription'])
//   );

//   const allDetailsFilled3 = educations.every(education =>
//     areAllFieldsFilled(education, ['schoolname', 'edmonth1', 'edmonth2', 'coursename'])
//   );

//   const allDetailsFilled4 = skills.every(skill =>
//     areAllFieldsFilled(skill, ['skillname', 'skilldetails'])
//   );

//   const allDetailsFilled5 = sectionadd.every(section =>
//     areAllFieldsFilled(section, ['sectiontitle', 'sectiondescription'])
//   );

//   const allDetailsFilled6 = summary.every(summar =>
//     areAllFieldsFilled(summar, ['summarydescription'])
//   );

//   return (
//     <div
//       className={`border-2 border-gray-300 px-5 break-all ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
//       style={{ fontFamily: font,  backgroundColor: boxBgColor  }}
//     >
//       {/* Red circle indicating all fields are filled */}
//       {/* {!isPreviewScreen  && (
//         <div className="">
//           {allDetailsFilled && (
//             <div className="w-7 h-7 ps-2.5 mt-1.5 bg-white rounded-2xl absolute top-48 left-1 font-bold">1</div>
//           )}
//           {allDetailsFilled2 && (
//             <div className="w-7 h-8 ps-2.5 pt-0.5  mt-3.5 bg-white rounded-2xl absolute top-56 left-1 font-bold">2</div>
//           )}
//           {allDetailsFilled3 && (
//             <div className="w-7 h-8 ps-2.5 pt-0.5 mt-11  bg-white rounded-2xl absolute top-60 left-1 font-bold">3</div>
//           )}
//           {allDetailsFilled4 && (
//             <div className="w-7 h-7 ps-2.5 mt-2 bg-white rounded-2xl absolute top-80 left-1 font-bold">4</div>
//           )}
//           {allDetailsFilled5 && (
//             <div className="w-7 h-7 ps-2.5 mt-8 bg-white rounded-2xl absolute top-96 left-1 font-bold">6</div>
//           )}
//           {allDetailsFilled6 && (
//             <div className="w-7 h-8 ps-2.5 pt-1 mt-28 bg-white rounded-2xl absolute top-64 left-1 font-bold">5</div>
//           )}
//         </div>
//       )} */}

//       <div className='flex'>
//         <div className='w-2/3 px-10 '>
//           {details.map((del, index) => (
//             <div key={index}>
//               <h3 className="text-lg md:text-xl lg:text-3xl text-orange-800 font-bold">{del.name || predefinedText.details.name}</h3>
//               <p className='font-medium'>{del.Profession || predefinedText.details.profession}</p> <br />
//             </div>
//           ))}

         

//           {experiences.length > 0 && (
//             <div>
//               <h5 className='text-orange-700 font-bold'>WORK EXPERIENCE</h5>
//               <div className="flex-grow border-t border-gray-300 align-super"></div>
//               {experiences.map((exp, index) => (
//                 <div key={index} className='mt-4'>
//                   <div className='flex justify-between'>
//                     <h6 className='font-bold'>{exp.Company || predefinedText.experiences.company}</h6>
//                     <p>{exp.month1} - {exp.month2}</p>
//                   </div>
//                   <h6>{exp.role}</h6>
//                   <ul className={`m-2 ${paragraphSpacingClass}`}>
//                     <li>{exp.companydescription || predefinedText.experiences.companydescription}</li>
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Add other sections here */}

//         </div>

//         <div className="w-1/3 p-4 bg-orange-200" >
//           <div>
//             <h5 className='text-orange-700 font-bold'>CONTACT</h5>
//             <div className="flex-grow border-t border-gray-300 align-super"></div>
//             <ul className="text-xs md:text-xs lg:text-xs mt-2">
//               {details.map((del, index) => (
//                 <React.Fragment key={index}>
//                   <li className="flex items-center">
//                     <span className="h-1 w-1 bg-red-600 rounded-full mr-2 inline-block"></span>
//                     {del.address || predefinedText.details.address}
//                   </li>
//                   <li className='text-xs md:text-xs lg:text-xs flex items-center'>
//                     <span className="h-1 w-1 bg-red-600 rounded-full mr-2 inline-block"></span>
//                     {del.phoneNumber || predefinedText.details.phoneNumber}
//                   </li>
//                   <li className='text-xs md:text-xs lg:text-xs break-all flex items-center'>
//                     <span className="h-1 w-1 bg-red-600 rounded-full mr-2 inline-block"></span>
//                     {del.email || predefinedText.details.email}
//                   </li>
//                   <li className='text-xs md:text-xs lg:text-xs flex items-center'>
//                     <span className="h-1 w-1 bg-red-600 rounded-full mr-2 inline-block"></span>
//                     <a href={del.link || '#'}>{del.link || predefinedText.details.link}</a>
//                   </li>
//                 </React.Fragment>
//               ))}
//             </ul>
//           </div>

//           {skills.length > 0 && (
//             <div>
//               <h5 className='text-orange-700 font-bold'>SKILLS</h5>
//               <div className="flex-grow border-t border-gray-300 align-super"></div>
//               <ul className="mt-2">
//                 {skills.map((skill, index) => (
//                 <div>
//                    <li key={index}>
//                     <span className="font-bold">{skill.skillname || predefinedText.skills.skillname}</span>
                    
//                   </li>
//                   {/* <li>
//                     {skill.skilldetails || predefinedText.skills.skilldetails}
//                   </li> */}
//                 </div>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {educations.length > 0 && (
//             <div>
//               <h5 className='text-orange-700 font-bold'>EDUCATION</h5>
//               <div className="flex-grow border-t border-gray-300 align-super"></div>
//               <ul className="mt-2">
//                 {educations.map((edu, index) => (
//                   <li key={index}>
//                     {edu.coursename || predefinedText.educations.coursename} at
//                      {edu.schoolname || predefinedText.educations.schoolname}, 
//                      {edu.schoolplace || predefinedText.educations.schoolplace}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Template7;


// import DOMPurify from "dompurify";
// import React from "react";

// const createMarkup = (html) => {
//   return {
//     __html: DOMPurify.sanitize(html, {
//       ALLOWED_TAGS: ['p', 'br', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li'],
//       ALLOWED_ATTR: ['href', 'target', 'class']
//     }).replace(/<ul>/g, '<ul class="list-disc-bold">')
//       .replace(/<ol>/g, '<ol class="list-decimal-custom">')
//   };
// };

// const Template7 = ({
//   data,
//   boxBgColor,
//   font,
//   textSize,
//   sectionSpacing,
//   paragraphSpacing,
//   lineSpacing,
//   predefinedText
// }) => {
//   // Define classes based on props
//   const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
//   const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
//   const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
//   const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

//   // Destructure data object
//   const { details = [], experiences = [], educations = [], skills = [] } = data || {};

//   return (
//     <div className={` px-5 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`} style={{ fontFamily: font, backgroundColor: boxBgColor }}>
//       <div className="flex">
//         <div className="w-2/3 px-10">
//           {details.map((detail, index) => (
//             <div key={index}>
//               <h3 className="text-lg md:text-xl lg:text-3xl text-orange-800 font-bold">{detail.name || predefinedText.details.name}</h3>
//               <p className="font-medium">{detail.Profession || predefinedText.details.profession}</p>
//             </div>
//           ))}

//           {experiences.length > 0 && (
//             <div>
//               <h5 className="text-orange-700 font-bold">WORK EXPERIENCE</h5>
//               <div className="flex-grow align-super"></div>
//               {experiences.map((experience, index) => (
//                 <div key={index} className="mt-4">
//                   <div className="flex justify-between">
//                     <h6 className="font-bold">{experience.Company || predefinedText.experiences.company}</h6>
//                     <p>{experience.month1} - {experience.month2}</p>
//                   </div>
//                   <h6>{experience.role}</h6>
//                   <div 
//                       className="text-sm prose prose-sm max-w-none"
//                       dangerouslySetInnerHTML={createMarkup(experience.companydescription)}
//                     />
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Add other sections here */}
//         </div>

//         <div className="w-1/3 p-4 bg-orange-200">
//           <div>
//             <h5 className="text-orange-700 font-bold">CONTACT</h5>
//             <div className="flex-grow align-super"></div>
//             <ul className="text-xs md:text-xs lg:text-xs mt-2">
//               {details.map((detail, index) => (
//                 <React.Fragment key={index}>
//                   <li className="flex items-center">
//                     <span className="h-1 w-1 bg-red-600 rounded-full mr-2 inline-block"></span>
//                     {detail.address || predefinedText.details.address}
//                   </li>
//                   <li className="text-xs md:text-xs lg:text-xs flex items-center">
//                     <span className="h-1 w-1 bg-red-600 rounded-full mr-2 inline-block"></span>
//                     {detail.phoneNumber || predefinedText.details.phoneNumber}
//                   </li>
//                   <li className="text-xs md:text-xs lg:text-xs break-all flex items-center">
//                     <span className="h-1 w-1 bg-red-600 rounded-full mr-2 inline-block"></span>
//                     {detail.email || predefinedText.details.email}
//                   </li>
//                   <li className="text-xs md:text-xs lg:text-xs flex items-center">
//                     <span className="h-1 w-1 bg-red-600 rounded-full mr-2 inline-block"></span>
//                     <a href={detail.link || '#'}>{detail.link || predefinedText.details.link}</a>
//                   </li>
//                 </React.Fragment>
//               ))}
//             </ul>
//           </div>

//           {skills.length > 0 && (
//             <div>
//               <h5 className="text-orange-700 font-bold">SKILLS</h5>
//               <div className="flex-grow align-super"></div>
//               <ul className="mt-2">
//                 {skills.map((skill, index) => (
//                   <li key={index}>
//                     <span className="font-bold">{skill.skillname || predefinedText.skills.skillname}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {educations.length > 0 && (
//             <div>
//               <h5 className="text-orange-700 font-bold">EDUCATION</h5>
//               <div className="flex-grow align-super"></div>
//               <ul className="mt-2">
//                 {educations.map((education, index) => (
//                   <li key={index}>
//                     {education.coursename || predefinedText.educations.coursename} at {education.schoolname || predefinedText.educations.schoolname}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Template7;


import React, { useState, useRef } from "react";
import DOMPurify from "dompurify";

const createMarkup = (html) => {
  return {
    __html: DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['p', 'br', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li'],
      ALLOWED_ATTR: ['href', 'target', 'class']
    }).replace(/<ul>/g, '<ul class="list-disc pl-5">')
      .replace(/<ol>/g, '<ol class="list-decimal pl-5">')
  };
};

const Template7 = ({
  data,
  boxBgColor,
  font,
  textSize,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  predefinedText
}) => {
  const [sections, setSections] = useState(['details', 'experiences', 'educations', 'skills']);
  const [dragging, setDragging] = useState(null);
  const dragItem = useRef();
  const dragOverItem = useRef();

  const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
  const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-4' : sectionSpacing === 'medium' ? 'space-y-6' : 'space-y-8';
  const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
  const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

  const { details = [], experiences = [], educations = [], skills = [] } = data || {};

  const handleDragStart = (e, index) => {
    dragItem.current = index;
    setDragging(index);
  };

  const handleDragEnter = (e, index) => {
    dragOverItem.current = index;
  };

  const handleDragEnd = (e) => {
    const newSections = [...sections];
    const draggedItemContent = newSections[dragItem.current];
    newSections.splice(dragItem.current, 1);
    newSections.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setSections(newSections);
    setDragging(null);
  };

  const renderSection = (sectionName) => {
    switch (sectionName) {
      case 'details':
        return (
          <div className="mb-6">
            {details.map((detail, index) => (
              <div key={index}>
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-orange-800 font-bold mb-2">{detail.name || predefinedText.details.name}</h3>
                <p className="text-lg font-medium text-gray-700">{detail.Profession || predefinedText.details.profession}</p>
              </div>
            ))}
          </div>
        );
      case 'experiences':
        return (
          <div className="mb-6">
            <h5 className="text-xl text-orange-700 font-bold mb-4">WORK EXPERIENCE</h5>
            {experiences.map((experience, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-center">
                  <h6 className="text-lg font-bold text-gray-800">{experience.Company || predefinedText.experiences.company}</h6>
                  <p className="text-sm text-gray-600">{experience.month1} - {experience.month2}</p>
                </div>
                <h6 className="text-md font-semibold text-gray-700 mb-2">{experience.role}</h6>
                <div 
                  className="text-sm prose prose-sm max-w-none text-gray-600"
                  dangerouslySetInnerHTML={createMarkup(experience.companydescription)}
                />
              </div>
            ))}
          </div>
        );
      case 'educations':
        return (
          <div className="mb-6">
            <h5 className="text-xl text-orange-700 font-bold mb-4">EDUCATION</h5>
            <ul className="list-disc pl-5">
              {educations.map((education, index) => (
                <li key={index} className="mb-2 text-gray-700">
                  <span className="font-semibold">{education.coursename || predefinedText.educations.coursename}</span> at {education.schoolname || predefinedText.educations.schoolname}
                </li>
              ))}
            </ul>
          </div>
        );
      case 'skills':
        return (
          <div className="mb-6">
            <h5 className="text-xl text-orange-700 font-bold mb-4">SKILLS</h5>
            <ul className="grid grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <li key={index} className="bg-orange-100 rounded-full px-3 py-1 text-sm font-medium text-orange-800">
                  {skill.skillname || predefinedText.skills.skillname}
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`px-5 py-4 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`} style={{ fontFamily: font, backgroundColor: boxBgColor }}>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 px-4 md:px-10">
          {sections.map((section, index) => (
            <div
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragEnter={(e) => handleDragEnter(e, index)}
              onDragEnd={handleDragEnd}
              onDragOver={(e) => e.preventDefault()}
              className={`cursor-move ${dragging === index ? 'opacity-50' : ''}`}
            >
              {renderSection(section)}
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/3 p-6 bg-orange-200 rounded-lg shadow-md">
          <div className="mb-6">
            <h5 className="text-xl text-orange-700 font-bold mb-4">CONTACT</h5>
            <ul className="space-y-2">
              {details.map((detail, index) => (
                <React.Fragment key={index}>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-red-600 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-700">{detail.address || predefinedText.details.address}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-red-600 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-700">{detail.phoneNumber || predefinedText.details.phoneNumber}</span>
                  </li>
                  <li className="flex items-center break-all">
                    <span className="h-2 w-2 bg-red-600 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-700">{detail.email || predefinedText.details.email}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-red-600 rounded-full mr-2"></span>
                    <a href={detail.link || '#'} className="text-sm text-blue-600 hover:underline">{detail.link || predefinedText.details.link}</a>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template7;
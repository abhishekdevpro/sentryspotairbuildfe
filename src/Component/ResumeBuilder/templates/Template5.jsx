// import React from 'react';

// const Template5 = ({
//   data,
//   boxBgColor,
//   font,
//   textSize,
//   sectionSpacing,
//   paragraphSpacing,
//   lineSpacing,
//   isPreviewScreen,
//   isTemplate1Previewing,
//   predefinedText = {},
// }) => {
//   // Define classes based on props
//   const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
//   const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
//   const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
//   const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

//   // Provide default values for data properties
//   const { details = [], experiences = [], educations = [], skills = [], sectionadd = [] ,summary=[]} = data || {};

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
// const allDetailsFilled6 = summary.every(summar =>
//     areAllFieldsFilled(summar, [ 'summarydescription'])
//   );
//   return (
//     <div className={`border px-5 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`} style={{ fontFamily: font,  backgroundColor: boxBgColor  }}>
//      {/* {!isPreviewScreen && !isTemplate1Previewing && (
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
//       <div className='flex flex-col md:flex-row'>
//         <div className='md:w-2/3 md:px-10 pt-4'>
//           {details.map((del, index) => (
//             <div key={index}>
//               <h3 className="text-lg md:text-xl lg:text-3xl text-blue-800 font-bold ">{del.name|| predefinedText.details.name}</h3>
//               <p className='text-lg md:text-xl lg:text-lg mt-2'> {del.Profession|| predefinedText.details.profession}</p>
//               {summary.map((sum, index) => (
//       <div key={index}>
//       <p
//         className={`${paragraphSpacingClass} text-xs sm:text-sm md:text-sm lg:text-sm m-2 w-2/2 break-all`}
//         dangerouslySetInnerHTML={{ __html: sum.summarydescription || predefinedText.summary.summarydescription }}
//       />
//       <br />
//     </div>
//     ))}
              
//               <h5 className='text-blue-800 '>WORK EXPERIENCE </h5><br />
//               <div className="flex-grow border-t border-gray-300 align-super"></div>
//               {experiences.map((exp, index) => (
//                 <div key={index}>
//                   <div className='flex justify-between mt-4'>
//                     <h6 className='font-bold'>{exp.Company} </h6>
//                     <p>{exp.month1}- {exp.month2}</p>
//                   </div>
//                   <h6>{exp.role}</h6>
//                   <ul className='m-2'>
//                     <li>{exp.companydescription}</li>
//                   </ul>
//                   <br />
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//         <div className="md:w-1/3 md:p-4 bg-gray-200" >
//           <div>
//             <h5 className='text-blue-800  '>CONTACT </h5>
//             <div className="flex-grow border-t border-black align-super mt-5"></div>
//             <ul className=" text-xs md:text-xs lg:text-xs mt-2">
//               {details.map((del, index) => (
//                 <React.Fragment key={index}>
//                   <li><span className="m-2">&#8226;</span>{del.address|| predefinedText.details.address}</li>
//                   <li className='text-xs md:text-xs lg:text-xs'>
//                     <span className="m-2">&#8226;</span>{del.phoneNumber|| predefinedText.details.phoneNumber}
//                   </li>
//                   <li className='text-xs md:text-xs lg:text-xs break-all'>
//                     <span className="m-2">&#8226;</span>{del.email|| predefinedText.details.email}
//                   </li>
//                   <li className='text-xs md:text-xs lg:text-xs'>
//                     <span className="m-2">&#8226;</span><a href="">{del.link|| predefinedText.details.link}</a>
//                   </li>
//                 </React.Fragment>
//               ))}
//             </ul>
//           </div><br />
//           <h5 className='text-blue-800 '>EDUCATION </h5><br />
//           <div className="flex-grow border-t border-black align-super"></div>
//           {educations.map((edu, index) => (
//             <div key={index}>
//               <ul className=" text-xs md:text-xs lg:text-xs mt-2">
//                 <li className='font-bold'>{edu.coursename}</li>
//                 <li className='text-xs md:text-xs lg:text-sm mt-2'>{edu.schoolname}</li>
//                 <li className='text-xs md:text-xs lg:text-xs mt-2'>{edu.schoolplace}</li>
//               </ul>
//             </div>
//           ))} <br />
//           <h5 className='text-blue-800 '>SKILLS  </h5>
//           <div className="flex-grow border-t border-black align-super mt-2"></div>
//           {skills.map((skill, index) => (
//             <div key={index}>
//               <ul className=" text-xs md:text-xs lg:text-xs mt-2">
//                 <li>
//                   <span className="m-2">&#8226;</span>{skill.skillname}
//                 </li>
//                 {/* <li className='text-xs md:text-xs lg:text-xs'>
//                   <span className="m-2">&#8226;</span>{skill.skilldetails}
//                 </li> */}
//               </ul>
//             </div>
//           ))}
//           <div>
//             {sectionadd.map((section, index) => (
//               <div key={index} className="mt-5">
//                 <h5 className="text-blue-800  break-all">{section.sectiontitle}</h5>
//                 <div className="flex-grow border-t border-black align-super my-2 "></div>
//                 <span className="font-bold text-xs w-32">{section.sectionname}</span>
//                 <h6 className={`${paragraphSpacingClass} text-xs  break-all`}>{section.sectiondescription}</h6>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Template5;


// import DOMPurify from 'dompurify';
// import React from 'react';

// const createMarkup = (html) => {
//   return {
//     __html: DOMPurify.sanitize(html, {
//       ALLOWED_TAGS: ['p', 'br', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li'],
//       ALLOWED_ATTR: ['href', 'target', 'class']
//     }).replace(/<ul>/g, '<ul class="list-disc-bold">')
//       .replace(/<ol>/g, '<ol class="list-decimal-custom">')
//   };
// };

// const Template5 = ({
//   data,
//   boxBgColor,
//   font,
//   textSize,
//   sectionSpacing,
//   paragraphSpacing,
//   lineSpacing,
//   isPreviewScreen,
//   isTemplate1Previewing,
//   predefinedText = {},
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
//     <div className={`border px-6 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`} style={{ fontFamily: font, backgroundColor: boxBgColor }}>
//       <div className='flex flex-col md:flex-row'>
//         <div className='md:w-2/3 px-4 pt-4'>
//           {details.map((del, index) => (
//             <div key={index}>
//               <h3 className="text-lg md:text-xl lg:text-3xl text-blue-800 font-bold ">{del.name || predefinedText.details.name}</h3>
//               <p className='text-lg md:text-xl lg:text-lg mt-2'> {del.Profession || predefinedText.details.profession}</p>
              

// {summary && (
//             <div>
//               {summary && summary.length > 0 ? (
//                 summary.map((sum, sumIndex) => (
//                   <div key={`summary-${sumIndex}`} className="mb-6">
//                     <div className=" text-2xl text-blue-800 mb-2">
//                       About Me
//                     </div>
//                     <div
//                       className="text-sm prose prose-sm max-w-none"
//                       dangerouslySetInnerHTML={createMarkup(sum?.summarydescription || "I am a journalist in a private company, I have been a journalist for 3 years. I am very happy in my work.")}
//                     />
//                   </div>
//                 ))
//               ) : (
//                 <div className="text-gray-400 italic">No summary provided</div>
//               )}
//             </div>
//           )}
              
//               <h5 className='text-blue-800 '>WORK EXPERIENCE </h5><br />
//               <div className="flex-grow border-t border-gray-300 align-super"></div>
//               {experiences.map((exp, index) => (
//                 <div key={index}>
//                   <div className='flex justify-between mt-4'>
//                     <h6 className='font-bold'>{exp.Company} </h6>
//                     <p>{exp.month1}- {exp.month2}</p>
//                   </div>
//                   <h6>{exp.role}</h6>
//                   <div 
//                       className="text-sm prose prose-sm max-w-none"
//                       dangerouslySetInnerHTML={createMarkup(exp.companydescription)}
//                     />
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//         <div className="md:w-1/3 md:p-4 bg-gray-200">
//           <div>
//             <h5 className='text-blue-800  '>CONTACT </h5>
//             <div className="flex-grow border-t border-black align-super mt-5"></div>
//             <ul className=" text-xs md:text-xs lg:text-xs mt-2">
//               {details.map((del, index) => (
//                 <React.Fragment key={index}>
//                   <li><span className="m-2">&#8226;</span>{del.address || predefinedText.details.address}</li>
//                   <li className='text-xs md:text-xs lg:text-xs'>
//                     <span className="m-2">&#8226;</span>{del.phoneNumber || predefinedText.details.phoneNumber}
//                   </li>
//                   <li className='text-xs md:text-xs lg:text-xs break-all'>
//                     <span className="m-2">&#8226;</span>{del.email || predefinedText.details.email}
//                   </li>
//                   <li className='text-xs md:text-xs lg:text-xs'>
//                     <span className="m-2">&#8226;</span><a href="">{del.link || predefinedText.details.link}</a>
//                   </li>
//                 </React.Fragment>
//               ))}
//             </ul>
//           </div><br />
//           <h5 className='text-blue-800 '>EDUCATION </h5><br />
//           <div className="flex-grow border-t border-black align-super"></div>
//           {educations.map((edu, index) => (
//             <div key={index}>
//               <ul className=" text-xs md:text-xs lg:text-xs mt-2">
//                 <li className='font-bold'>{edu.coursename}</li>
//                 <li className='text-xs md:text-xs lg:text-sm mt-2'>{edu.schoolname}</li>
//                 <li className='text-xs md:text-xs lg:text-xs mt-2'>{edu.schoolplace}</li>
//               </ul>
//             </div>
//           ))} <br />
//           <h5 className='text-blue-800 '>SKILLS  </h5>
//           <div className="flex-grow border-t border-black align-super mt-2"></div>
//           {skills.map((skill, index) => (
//             <div key={index}>
//               <ul className=" text-xs md:text-xs lg:text-xs mt-2">
//                 <li>
//                   <span className="m-2">&#8226;</span>{skill.skillname}
//                 </li>
//               </ul>
//             </div>
//           ))}
//           <div>
//             {sectionadd.map((section, index) => (
//               <div key={index} className="mt-5">
//                 <h5 className="text-blue-800  break-all">{section.sectiontitle}</h5>
//                 <div className="flex-grow border-t border-black align-super my-2 "></div>
//                 <span className="font-bold text-xs w-32">{section.sectionname}</span>
//                 <h6 className={`${paragraphSpacingClass} text-xs  break-all`}>{section.sectiondescription}</h6>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Template5;


import DOMPurify from 'dompurify';
import React, { useState } from 'react';

const createMarkup = (html) => {
  return {
    __html: DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['p', 'br', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li'],
      ALLOWED_ATTR: ['href', 'target', 'class']
    }).replace(/<ul>/g, '<ul class="list-disc-bold">')
      .replace(/<ol>/g, '<ol class="list-decimal-custom">')
  };
};

const DraggableSection = ({ children, id, index, moveSection }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', index);
    setIsDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    moveSection(draggedIndex, index);
    setIsDragging(false);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnd={() => setIsDragging(false)}
      className={`cursor-move ${isDragging ? 'opacity-50' : ''}`}
    >
      {children}
    </div>
  );
};

const Template5 = ({
  data,
  boxBgColor,
  font,
  textSize,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  isPreviewScreen,
  isTemplate1Previewing,
  predefinedText = {},
}) => {
  const [leftSections, setLeftSections] = useState([
    { type: 'details', data: data.details },
    { type: 'summary', data: data.summary },
    { type: 'experiences', data: data.experiences },
  ]);

  const [rightSections, setRightSections] = useState([
    { type: 'contact', data: data.details },
    { type: 'educations', data: data.educations },
    { type: 'skills', data: data.skills },
    ...data.sectionadd.map(section => ({ type: 'sectionadd', data: [section] }))
  ]);

  const moveSection = (fromIndex, toIndex, isLeft) => {
    const sections = isLeft ? leftSections : rightSections;
    const setSections = isLeft ? setLeftSections : setRightSections;
    
    const newSections = [...sections];
    const [movedSection] = newSections.splice(fromIndex, 1);
    newSections.splice(toIndex, 0, movedSection);
    setSections(newSections);
  };

  // Define classes based on props
  const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
  const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
  const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
  const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

  const renderLeftSection = (section, index) => {
    switch (section.type) {
      case 'details':
        return (
          <DraggableSection key={`details-${index}`} index={index} moveSection={(from, to) => moveSection(from, to, true)}>
            {section.data.map((del, idx) => (
              <div key={idx}>
                <h3 className="text-lg md:text-xl lg:text-3xl text-blue-800 font-bold ">{del.name || predefinedText.details.name}</h3>
                <p className='text-lg md:text-xl lg:text-lg mt-2'> {del.Profession || predefinedText.details.profession}</p>
              </div>
            ))}
          </DraggableSection>
        );
      case 'summary':
        return (
          <DraggableSection key={`summary-${index}`} index={index} moveSection={(from, to) => moveSection(from, to, true)}>
            {section.data.map((sum, sumIndex) => (
              <div key={`summary-${sumIndex}`} className="mb-6">
                <div className=" text-2xl text-blue-800 mb-2">
                  About Me
                </div>
                <div
                  className="text-sm prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={createMarkup(sum?.summarydescription || "I am a journalist in a private company, I have been a journalist for 3 years. I am very happy in my work.")}
                />
              </div>
            ))}
          </DraggableSection>
        );
      case 'experiences':
        return (
          <DraggableSection key={`experiences-${index}`} index={index} moveSection={(from, to) => moveSection(from, to, true)}>
            <h5 className='text-blue-800 '>WORK EXPERIENCE </h5><br />
            <div className="flex-grow border-t border-gray-300 align-super"></div>
            {section.data.map((exp, expIndex) => (
              <div key={expIndex}>
                <div className='flex justify-between mt-4'>
                  <h6 className='font-bold'>{exp.Company} </h6>
                  <p>{exp.month1}- {exp.month2}</p>
                </div>
                <h6>{exp.role}</h6>
                <div 
                  className="text-sm prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={createMarkup(exp.companydescription)}
                />
              </div>
            ))}
          </DraggableSection>
        );
      default:
        return null;
    }
  };

  const renderRightSection = (section, index) => {
    switch (section.type) {
      case 'contact':
        return (
          <DraggableSection key={`contact-${index}`} index={index} moveSection={(from, to) => moveSection(from, to, false)}>
            <h5 className='text-blue-800  '>CONTACT </h5>
            <div className="flex-grow border-t border-black align-super mt-5"></div>
            <ul className=" text-xs md:text-xs lg:text-xs mt-2">
              {section.data.map((del, delIndex) => (
                <React.Fragment key={delIndex}>
                  <li><span className="m-2">&#8226;</span>{del.address || predefinedText.details.address}</li>
                  <li className='text-xs md:text-xs lg:text-xs'>
                    <span className="m-2">&#8226;</span>{del.phoneNumber || predefinedText.details.phoneNumber}
                  </li>
                  <li className='text-xs md:text-xs lg:text-xs break-all'>
                    <span className="m-2">&#8226;</span>{del.email || predefinedText.details.email}
                  </li>
                  <li className='text-xs md:text-xs lg:text-xs'>
                    <span className="m-2">&#8226;</span><a href="">{del.link || predefinedText.details.link}</a>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </DraggableSection>
        );
      case 'educations':
        return (
          <DraggableSection key={`educations-${index}`} index={index} moveSection={(from, to) => moveSection(from, to, false)}>
            <h5 className='text-blue-800 '>EDUCATION </h5><br />
            <div className="flex-grow border-t border-black align-super"></div>
            {section.data.map((edu, eduIndex) => (
              <div key={eduIndex}>
                <ul className=" text-xs md:text-xs lg:text-xs mt-2">
                  <li className='font-bold'>{edu.coursename}</li>
                  <li className='text-xs md:text-xs lg:text-sm mt-2'>{edu.schoolname}</li>
                  <li className='text-xs md:text-xs lg:text-xs mt-2'>{edu.schoolplace}</li>
                </ul>
              </div>
            ))}
          </DraggableSection>
        );
      case 'skills':
        return (
          <DraggableSection key={`skills-${index}`} index={index} moveSection={(from, to) => moveSection(from, to, false)}>
            <h5 className='text-blue-800 '>SKILLS  </h5>
            <div className="flex-grow border-t border-black align-super mt-2"></div>
            {section.data.map((skill, skillIndex) => (
              <div key={skillIndex}>
                <ul className=" text-xs md:text-xs lg:text-xs mt-2">
                  <li>
                    <span className="m-2">&#8226;</span>{skill.skillname}
                  </li>
                </ul>
              </div>
            ))}
          </DraggableSection>
        );
      case 'sectionadd':
        return (
          <DraggableSection key={`sectionadd-${index}`} index={index} moveSection={(from, to) => moveSection(from, to, false)}>
            {section.data.map((add, addIndex) => (
              <div key={addIndex} className="mt-5">
                <h5 className="text-blue-800  break-all">{add.sectiontitle}</h5>
                <div className="flex-grow border-t border-black align-super my-2 "></div>
                <span className="font-bold text-xs w-32">{add.sectionname}</span>
                <h6 className={`${paragraphSpacingClass} text-xs  break-all`}>{add.sectiondescription}</h6>
              </div>
            ))}
          </DraggableSection>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`border px-6 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`} style={{ fontFamily: font, backgroundColor: boxBgColor }}>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-2/3 px-4 pt-4'>
          {leftSections.map((section, index) => renderLeftSection(section, index))}
        </div>
        <div className="md:w-1/3 md:p-4 bg-gray-200">
          {rightSections.map((section, index) => renderRightSection(section, index))}
        </div>
      </div>
    </div>
  );
};

export default Template5;
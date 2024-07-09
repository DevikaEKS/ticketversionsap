// import React from 'react'
// import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './TicketBooking.css';
// function TicketBooking() {
//  const [subject, setSubject] = useState('');
//   const [project, setProject] = useState('');
//   const [ticketBody, setTicketBody] = useState('');
//   const [attachment, setAttachment] = useState(null);
//   const [errors, setErrors] = useState({ subject: false, project: false, ticketBody: false, attachment: false });
//   const [fileName, setFileName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {
//       subject: subject === '',
//       project: project === '',
//       ticketBody: ticketBody === '',
//       attachment: attachment === null,
//     };

//     setErrors(newErrors);

//     if (Object.values(newErrors).some(error => error)) {
//       return;
//     }

//     console.log({
//       subject,
//       project,
//       ticketBody,
//       attachment
//     });
//     alert('Form Saved!');
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setAttachment(file);
//     setFileName(file ? file.name : '');
//   };

//   return (
//     <div className="container-fluid">
//     <div>
//       <h1 className='text-center my-4 text-dark'>CREATE YOUR TICKET</h1>
//       <div className='d-flex  flex-column justify-content-center align-items-center px-5'>
//       <div className='card p-3 shadowcard'>
//       <form onSubmit={handleSubmit}>
//         <div className='row mb-3'>
//           <div className="col-4 form-group d-flex ">
//             <label htmlFor="subject">SUBJECT</label>
//             <input
//               type="text"
//               className={`form-control col-8 ${errors.subject ? 'is-invalid' : ''}`}
//               id="subject"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//             />
//             {errors.subject && <div className="invalid-feedback">Please fill in the subject.</div>}
//           </div>
//           <div className="col-4 form-group d-flex ">
//             <label htmlFor="project" >PROJECT</label>
//             <select
//               className={`form-select col-8 ${errors.project ? 'is-invalid' : ''}`}
//               id="project"
//               value={project}
//               onChange={(e) => setProject(e.target.value)}>
//               <option value="">Select Project</option>
//               <option value="project1">SAP Business One</option>
//               <option value="project2">Project 2</option>
//               <option value="project3">Project 3</option>
//             </select>
//             {errors.project && <div className="invalid-feedback">Please select a project.</div>}
//           </div>
//         </div>
//         <div className='row mb-3'>
//           <div className="col-md-8 form-group">
//             <label htmlFor="ticketBody" className="form-label">TICKET BODY</label>
//             <textarea
//               className={`form-control ${errors.ticketBody ? 'is-invalid' : ''}`}
//               id="ticketBody"
//               rows="3"
//               value={ticketBody}
//               onChange={(e) => setTicketBody(e.target.value)}></textarea>
//             {errors.ticketBody && <div className="invalid-feedback">Please fill in the ticket body.</div>}
//           </div>
//         </div>
//         <div className='d-flex'>
//           <div className=' mx-5'>
//             <label htmlFor="actual-btn" className={`btn btn-primary p-2 ${errors.attachment ? 'is-invalid' : ''}`}>Attach files</label>
//             <input 
//               className="btn btn-warning text-dark form-control" 
//               id="actual-btn" 
//               type="file"
//               accept=".pdf"
//               hidden
//               onChange={handleFileChange}
//             />
//             {errors.attachment && <div className="invalid-feedback">Please attach a file.</div>}
//             {fileName && <div className="file-name">{fileName}</div>}
//           </div>
//           <div className="mx-5">
//             <input type="submit" className="btn btn-primary" value="Create Ticket" />
//           </div>
//         </div>
//       </form>
//       </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default TicketBooking














import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ticketbooking.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function TicketBooking() {
  const [subject, setSubject] = useState('');
  const [project, setProject] = useState('');
  const [ticketBody, setTicketBody] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [errors, setErrors] = useState({ subject: false, project: false, ticketBody: false, attachment: false });
  const [fileName, setFileName] = useState('');

  const {id} = useParams()
  console.log(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      subject: subject === '',
      project: project === '',
      ticketBody: ticketBody === '',
      attachment: attachment === null,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error)) {
      return;
    }

    axios.post("http://192.168.253.117:5000/api/tickets/create",{subject,project,ticketBody,attachment,company_name:"123"})
    .then(res=>{
      console.log({subject,project,ticketBody,attachment });
    })
   
    alert('Form Saved!');

  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAttachment(file);
    setFileName(file ? file.name : '');
  };

  return (
    <div className="container-fluid">
      <div className=' rounded-4'>
        <h1 className='text-center my-4 text-light'>CREATE YOUR TICKET</h1>
        <div className='d-flex flex-column justify-content-center align-items-center px-5'>
          <div className='card p-3 shadowcard my-3'>
            <form onSubmit={handleSubmit}>
              <div className='row mb-3'>
                <div className="col-md-6">
                  <label htmlFor="subject">SUBJECT</label>
                  <input
                    type="text"
                    className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  {errors.subject && <div className="invalid-feedback">Please fill in the subject.</div>}
                </div>
                <div className="col-md-6">
                  <label htmlFor="project">PROJECT</label>
                  <select
                    className={`form-select ${errors.project ? 'is-invalid' : ''}`}
                    id="project"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}>
                    <option value="">Select Project</option>
                    <option value="project1">SAP Business One</option>
                    <option value="project2">Project 2</option>
                    <option value="project3">Project 3</option>
                  </select>
                  {errors.project && <div className="invalid-feedback">Please select a project.</div>}
                </div>
              </div>
              <div className='row mb-3'>
                <div className="col-md-12">
                  <label htmlFor="ticketBody" className="form-label">TICKET BODY</label>
                  <textarea
                    className={`form-control ${errors.ticketBody ? 'is-invalid' : ''}`}
                    id="ticketBody"
                    rows="3"
                    value={ticketBody}
                    onChange={(e) => setTicketBody(e.target.value)}></textarea>
                  {errors.ticketBody && <div className="invalid-feedback">Please fill in the ticket body.</div>}
                </div>
              </div>


              <div className="col-md-6">
                  <label htmlFor="project">PRIORITY</label>
                  <select
                    className={`form-select ${errors.project ? 'is-invalid' : ''}`}
                    id="project"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}>
                    <option value="">Select Priority</option>
                    <option value="High">High</option>
                    <option value="project2">Medium</option>
                    <option value="project3">Low</option>
                  </select>
                  {errors.project && <div className="invalid-feedback">Please select a project.</div>}
                </div>







              <div className='d-flex justify-content-center'>
                <div className='mx-5'>
                  <label htmlFor="actual-btn" className={`btn btn-primary p-2 ${errors.attachment ? 'is-invalid' : ''}`}>Attach files</label>
                  <input
                    className="btn btn-warning text-dark form-control"
                    id="actual-btn"
                    type="file"
                    accept=".jpg,.jpeg"
                    hidden
                    onChange={handleFileChange}
                  />
                  {errors.attachment && <div className="invalid-feedback">Please attach a file.</div>}
                  {fileName && <div className="file-name">{fileName}</div>}
                </div>
                <div className="mx-5">
                  <input type="submit" className="btn btn-primary" value="Create Ticket" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketBooking;

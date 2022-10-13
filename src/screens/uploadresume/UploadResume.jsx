import React from 'react'
import './UploadResume.css'
import { AiOutlineFilePdf } from 'react-icons/ai';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const UploadResume = () => {

    const [file, setFile] = useState(null);
    const [jdtext, setJdtext] = useState('');

  const navigate = useNavigate();

    const handleChange = (event) => {
        setFile(event.target.files[0]);
       
    }

    const  handleUpload = async (e) => {
        e.preventDefault();
        if (file && jdtext !== '') {
        
            const formData = new FormData();
            formData.append("file", file);
            formData.append("jdtext", jdtext);
            const response = await axios.post('http://127.0.0.1:5000/data', formData);
            console.log(response.data);
            var percentage = (response.data[0].percentage);
            percentage = percentage.toFixed(0);
            var hardskills = (response.data[1].technicalskills);
            var softskills = (response.data[2].softskills);
            navigate('/results', { state: { percentage, hardskills, softskills } });
        } else {
            alert("Please fill all the fields");
        }
};

    return (
        <div style={{ height: '100vh', width: '100vw' }} className='container-fluid bgcolor'>
            <div className='row h-100'>
                <div className="col">
                    <div className="card outercard d-flex align-items-center justify-content-center box-color">
                        <div className="card d-flex align-items-center justify-content-center innercard ">
                            <div className="d-flex align-items-center justify-content-center flex-column ">
                                <div className="bgcircle colortheme d-flex align-items-center mb-4 justify-content-center">
                                     <AiOutlineFilePdf />
                                </div>
                                <h5>Upload your resume to get started</h5>
                                <p className='colortheme'>Don't have a resume?</p>
                                <form className='d-flex align-items-center justify-content-center flex-column'>
                                <input required style={{border:'2px solid lightgrey'}} multiple type='file' className="btn py-3 form-control text-secondary text-center px-5" placeholder='Upload your resume' name='file' 
                                      onChange={handleChange}/>
                                <p className='colortheme mt-3 mb-2'>Add search keywords</p>
                                <textarea className="form-control textarea" id="exampleFormControlTextarea1" placeholder='Add search keywords' rows="4" value={jdtext}  required onChange={e => setJdtext(e.target.value)} name='jdtext'></textarea>
                                <input type="submit" className="btn py-2 my-2 bgtheme px-5" onClick={handleUpload} name="home"/>
                                </form>
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadResume;
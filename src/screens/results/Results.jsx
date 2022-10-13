import React, { useState, useEffect } from 'react'
import './Results.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import CircleProgress from '../../components/circleprogress/CircleProgress'
import { HiQuestionMarkCircle } from 'react-icons/hi';
import { FcCheckmark } from 'react-icons/fc';
import { FaTimes } from 'react-icons/fa';
import { BsExclamationTriangle } from 'react-icons/bs';
import {useLocation} from 'react-router-dom';

var root = document.querySelector(':root');

const Results = () => {

  const {state} = useLocation();
  const { percentage, hardskills, softskills } = state;

  
    
  

  const p1 = 70, p2 = 20, p3 = 40, p4 = 40, p5 = 50, p6 = percentage;
  const [variant1, setVariants] = useState("");
  const [variant2, setVariant2] = useState("");
  const [variant3, setVariant3] = useState("");
  const [variant4, setVariant4] = useState("");
  const [variant5, setVariant5] = useState("");
  const [variant6, setVariant6] = useState("");


  useEffect(() => {

    if (p1 < 30) {
      setVariants("danger");
    } else {
      setVariants("info");
    }
    if (p2 < 30) {
      setVariant2('danger');
    } else {
      setVariant2('info');
    }
    if (p3 < 30) {
      setVariant3('danger');
    } else {
      setVariant3('info');
    }
    if (p4 < 30) {
      setVariant4('danger');
    } else {
      setVariant4('info');
    }
    if (p5 < 30) {
      setVariant5('danger');
    } else {
      setVariant5('info');
    }
    if (p6 >= 70) {
      setVariant6('rgb(13,202,240)');
      root.style.setProperty('--variable', 'rgb(13,202,240)');
    } else if (p6 >30 && p6 < 70) {
      setVariant6('rgb(255,193,7)');
      root.style.setProperty('--variable', 'rgb(255,193,7)');
    } else {
      setVariant6('rgb(220,53,69)');
      root.style.setProperty('--variable', 'rgb(220,53,69)');
    }

  }, [p6])



  return (
    <div style={{ height: '100vh', width: '100vw' }} className='container-fluid p-0 m-0 bg-details'>

      <div className='row m-0 p-0 bg-details'>
        <div style={{ backgroundColor: 'white', height: '100vh'}} className="col-2 px-1 d-flex mx-auto flex-column justify-content-center">
          <h2 className='mx-auto mb-5 text-dark'>Match Rate</h2>
          <div style={{position:'relative'}} className="circle-wrap d-flex align-items-center justify-content-center">
            <CircleProgress  progress={p6} strokeColor={variant6} />
            <h3 className='ontop' style={{position: 'absolute',}}>{p6}%</h3>
            </div>
          <button style={{ width: "80%" }} className='btn mx-auto my-4 btn-info px-4 pb-2'>Upload & rescan</button>

          <div className='py-2'>
            <div className="wrap py-1 m-0">
              <p className='smalltext p-0 m-0'>Searchability</p>
              <p className='colortheme smalltext p-0 m-0'>2 issue to fix</p>
            </div>
            <ProgressBar now={p1} variant={variant1} />
          </div>
          <div className='py-2'>
            <div className="wrap py-1 m-0">
              <p className='smalltext p-0 m-0'>Skills match</p>
              <p className='colortheme smalltext p-0 m-0'>29 issue to fix</p>
            </div>
            <ProgressBar now={p2} variant={variant2} />
          </div>
          <div className="py-2">
            <div className="wrap py-1 m-0">
              <p className='smalltext p-0 m-0'>Recruiter tips</p>
              <p className='colortheme smalltext p-0 m-0'>2 issue to fix</p>
            </div>
            <ProgressBar now={p3} variant={variant3} />
          </div>
          <div className="py-2">
            <div className="wrap py-1 m-0">
              <p className='smalltext p-0 m-0'>Formatting</p>
              <p className='colortheme smalltext p-0 m-0'>1 issue to fix</p>
            </div>
            <ProgressBar now={p4} variant={variant4} />
          </div>
          <div className="py-2">
            <div className="wrap py-1 m-0">
              <p className='smalltext p-0 m-0'>Cover constter</p>
              <p className='colortheme smalltext p-0 m-0'>1 issue to fix</p>
            </div>
            <ProgressBar now={p5} variant={variant5} />
          </div>


        </div>
        <div className="col-10 px-5">
          <div className="row py-3 mt-4">
            <div className="col">
              <h2>Searchability</h2>
              <p className='text-secondary'>Applicant Tracking Systems (ATS) are computers that process your resume to understand your work history and relevance to the job description. These findings typically include your work history, job titles, relevant skills and education, as well as contact information like your name, phone number, and email address.
                Tip: Complete all checks below to ensure your resume is easily searchable by recruiters and ATS.</p>
              <div className="table-wrap">
                <table className="table">
                  <tbody >
                    <tr>
                      <td className='py-3 px-4'>ATS Tip</td>
                      <td className='text-secondary'><HiQuestionMarkCircle /></td>
                      <td className='text-success'><FcCheckmark /></td>
                      <td className='text-secondary'></td>

                    </tr>
                    <tr>
                      <td className='py-3 px-4'>Job title match</td>
                      <td className='text-secondary'><HiQuestionMarkCircle /></td>
                      <td className='text-success'><FcCheckmark /></td>
                      <td className='text-secondary'></td>
                    </tr>
                    <tr>
                      <td className='py-3 px-4'>Education match</td>
                      <td className='text-secondary'><HiQuestionMarkCircle /></td>
                      <td className='text-success'><FcCheckmark /></td>
                      <td className='text-secondary'>This job requires or prefers a Bachelor's degree. A Bachelor's degree is found in your resume.</td>
                    </tr>
                    <tr>
                      <td className='py-3 px-4'>Section headings</td>
                      <td className='text-secondary'><HiQuestionMarkCircle /></td>
                      <td className='text-danger'><FaTimes /></td>
                      <td className='py-2 text-secondary'>Name your experience section “Work History" or “Professional Experience” for ATS to recognize work sections.</td>
                    </tr>
                    <tr>
                      <td className='py-3 px-4'>Date formatting</td>
                      <td className='text-secondary'><HiQuestionMarkCircle /></td>
                      <td className='text-success'><FcCheckmark /></td>
                      <td className='text-secondary'>The dates in your work experience section are properly formatted.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row py-3">
            <div className="col">
              <h3>Hard skills</h3>
              <p className='text-secondary'>Hard skills enable you to perform job-specific duties and responsibilities. You can learn hard skills in the classroom, training courses, and on the job. These skills are typically focused on teachable tasks and measurable abilities such as the use of tools, equipment, or software. Hard skills have a high impact on your match score.

                Tip: Match the skills in your resume to the exact spelling in the job description. Prioritize skills that appear most frequently in the job description.

              </p>
              <div className="table-wrap">
                <table class="table">
                  <thead>
                    <tr>
                      <td className='py-2 px-4 text-secondary'>Skill</td>
                      <td className='text-secondary'>Variations<HiQuestionMarkCircle /></td>
                      <td className='text-secondary'>Resume</td>
                      <td className='text-secondary'>Job description</td>
                    </tr>
                  </thead>
                  <tbody>
                  {hardskills.map(hard => {                                                                 
            return (
       
                      <tr>
                      <td style={{textTransform:'capitalize'}} className='py-2 px-4'>{hard}</td>
                      <td className='text-secondary'></td>
                      <td className='text-secondary'></td>
                      <td className='text-secondary'></td>
                    </tr> 
              )
      })}

                    
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row py-3">
            <div className="col">
              <h3>Soft skills</h3>
              <p className='text-secondary'>Soft skills are your traits and abilities that are not unique to any job. Your soft skills are part of your personality, and can be learned also. These skills are the traits that typically make you a good employee for any company such as time management and communication. Soft skills have a medium impact on your match score.

                Tip: Prioritize hard skills in your resume to get interviews, and then showcase your soft skills in the interview to get jobs.</p>
              <div className="table-wrap">
                <table class="table">
                  <thead>
                    <tr>
                      <td className='py-2 px-4 text-secondary'>Skill</td>
                      <td className='text-secondary'>Variations<HiQuestionMarkCircle /></td>
                      <td className='text-secondary'>Resume</td>
                      <td className='text-secondary'>Job description</td>
                    </tr>
                  </thead>
                  <tbody>
                  {softskills.map(soft => {                                                                  
            return (
       
                      <tr>
                      <td style={{textTransform:'capitalize'}} className='py-2 px-4'>{soft}</td>
                      <td className='text-secondary'></td>
                      <td className='text-secondary'></td>
                      <td className='text-secondary'></td>
                    </tr> 
              )
      })}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row py-3">
            <div className="col">
              <h3>Other keywords</h3>
              <p className='text-secondary'>Other keywords are words included in the job description more than 3 times and not hard skills or soft skills. These words are typically buzzwords, industry lingo, or company specific jargon that may be unique to the specific company and help your resume get noticed. Other keywords have a low impact on your match score.

                Tip: Spend less time including these in your resume on a case-by-case basis.</p>
              <div className="table-wrap">
                <table class="table">
                  <thead>
                    <tr>
                      <td className='py-2 px-4 text-secondary'>Skill</td>
                      <td className='text-secondary'>Resume</td>
                      <td className='text-secondary'>Job description</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='py-2 px-4'>Interface</td>
                      <td className='text-danger'><FaTimes /></td>
                      <td className='text-secondary'>1</td>

                    </tr>
                    <tr>
                      <td className='py-2 px-4'>User</td>

                      <td className='text-danger'><FaTimes /></td>
                      <td className='text-secondary'>1</td>
                    </tr>
                    <tr>
                      <td className='py-2 px-4'>Developer</td>

                      <td className='text-secondary'>2</td>
                      <td className='text-secondary'>6</td>
                    </tr>
                    <tr>
                      <td className='py-2 px-4'>Concepts</td>

                      <td className='text-danger'><FaTimes /></td>
                      <td className='text-secondary'>8</td>
                    </tr>
                    <tr>
                      <td className='py-2 px-4'>React</td>

                      <td className='text-danger'><FaTimes /></td>
                      <td className='text-secondary'>7</td>
                    </tr>
                    <tr>
                      <td className='py-2 px-4'>Components</td>

                      <td className='text-danger'><FaTimes /></td>
                      <td className='text-secondary'>5</td>
                    </tr>
                    <tr>
                      <td className='py-2 px-4'>Implementing</td>

                      <td className='text-danger'><FaTimes /></td>
                      <td className='text-secondary'>3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row py-3">
            <div className="col">
              <h3 className='py-2'>Recruiter tips</h3>
              <div className="table-wrap">
                <table class="table">
                  <tbody>
                    <tr>
                      <td className='py-3 px-4'>Word count</td>
                      <td className='text-secondary'><HiQuestionMarkCircle /></td>
                      <td className='text-secondary'><FcCheckmark /></td>
                      <td className='text-secondary'>There are 156 words in your resume, which is under the suggested 1000 word count for relevance and ease of reading reasons.
                      </td>

                    </tr>
                    <tr>
                      <td className='py-3 px-4'>Measurable reults</td>
                      <td className='text-secondary'><HiQuestionMarkCircle /></td>
                      <td className='text-warning'><BsExclamationTriangle /></td>
                      <td className='text-secondary'></td>
                    </tr>
                    <tr>
                      <td className='py-3 px-4'>Job level match</td>
                      <td className='text-secondary'><HiQuestionMarkCircle /></td>
                      <td className='text-secondary'><FcCheckmark /></td>
                      <td className='text-secondary'>You are applying to a(n) junior level role. Given your 2 years of experience, this role is a great fit for your experience.</td>
                    </tr>
                    <tr>
                      <td className='py-3 px-4'>Words to avoid</td>
                      <td className='text-secondary'><HiQuestionMarkCircle /></td>
                      <td className='text-secondary'><FcCheckmark /></td>
                      <td className='text-secondary'></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row py-3">
            <div className="col">
              <h3 className='py-2'>Formatting</h3>
              <div className="table-wrap">
                <table class="table">
                  <tbody>
                    <tr>
                      <td className='py-3 px-4'>Page size</td>
                      <td className='text-secondary'><HiQuestionMarkCircle /></td>
                      <td className='text-danger'><FaTimes /></td>
                      <td className='text-secondary'>the page size should be standard sized for example A4</td>

                    </tr>
                    <tr>
                      <td className='py-3 px-4'>Bold font</td>
                      <td className='text-secondary'><HiQuestionMarkCircle /></td>
                      <td className='text-secondary'><FcCheckmark /></td>
                      <td className='text-secondary'></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Results

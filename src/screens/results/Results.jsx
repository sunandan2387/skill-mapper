import React, { useState, useEffect } from 'react'
import './Results.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import CircleProgress from '../../components/circleprogress/CircleProgress'
import { HiQuestionMarkCircle } from 'react-icons/hi';
import { FcCheckmark } from 'react-icons/fc';
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
    <div className='container-fluid p-0 m-0 bg-details'>

      <div className='row m-0 p-0 bg-details'>
        <div style={{ backgroundColor: 'white', height: '100vh'}} className="col px-1 d-flex mx-auto flex-column justify-content-center">
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
        <div style={{minWidth:'522px'}} className="col-10 px-5">
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
              <h3 className='py-2'>Formatting</h3>
              <div className="table-wrap">
                <table class="table">
                  <tbody>
                    <tr>
                      <td className='py-3 px-4'>Page size</td>
                      <td className='text-secondary'><HiQuestionMarkCircle /></td>
                      <td className='text-danger'><FcCheckmark /></td>
                      <td className='text-secondary'>the page size is standard sized i.e. A4</td>

                    </tr>
                    <tr>
                      <td className='py-3 px-4'>Bold font</td>
                      <td className='text-secondary'><HiQuestionMarkCircle /></td>
                      <td className='text-secondary'><FcCheckmark /></td>
                      <td className='text-secondary'>Bold font is added in between</td>
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

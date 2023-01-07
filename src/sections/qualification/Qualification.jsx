import React from 'react';
import  {useState} from "react";
import "./qualification.css";

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (


    <section className="qualification section">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My Personal journey</span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div className={toggleState === 1 ? "qualification_button qualification_active button--flex"
                 : "qualification_button button--flex"}
                 
                 onClick= {() => toggleTab(1)}
                 
                 >
                    <i className="uil uil-graduation-cap uil-qualification_icon"></i>{" "}
                    Education
                </div>

                <div className={toggleState === 2 ? "qualification_button qualification_active button--flex"
                 : "qualification_button button--flex"}
                 
                 onClick= {() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt uil-qualification_icon"></i>{" "}
                    Experience  
                </div>
            </div>

            <div className="qualification_section">
                <div className={toggleState === 1? 
                "qualification_content qualification_content-active" : "qualification_content"}>
                    <div className="qualification_data">
                        <div>
                        <h3 className="qualification_title">Web Design</h3>
                        <span className="qualification_subtitle">
                            spain - Institute
                        </span>
                        <div className="qualification_calender">
                            <i className="uil uil-calender-alt"></i> 2021 - Present 
                        </div>
                    </div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>

                    </div>
                    </div>
                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                        <h3 className="qualification_title"> Art Director</h3>
                        <span className="qualification_subtitle">Spain - Institute</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calender-alt"></i> 2021 - Present 
                        </div>
                    </div>
                    
                    </div>

                    <div className="qualification_data">
                        <div>
                        <h3 className="qualification_title">Web Developer</h3>
                        <span className="qualification_subtitle">
                            spain - Institute
                        </span>
                        <div className="qualification_calender">
                            <i className="uil uil-calender-alt"></i> 2021 - Present 
                        </div>
                    </div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>

                    </div>
                    </div>
                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                        <h3 className="qualification_title"> UX Expert </h3>
                        <span className="qualification_subtitle">Spain - Institute</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calender-alt"></i> 2021 - Present 
                        </div>
                    </div>
                    
                    </div>
                </div>

                <div className={toggleState === 2? 
                "qualification_content qualification_content-active" : "qualification_content"}>
                    <div className="qualification_data">
                        <div>
                        <h3 className="qualification_title">Web Design</h3>
                        <span className="qualification_subtitle">
                            spain - Institute
                        </span>
                        <div className="qualification_calender">
                            <i className="uil uil-calender-alt"></i> 2021 - Present 
                        </div>
                    </div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>

                    </div>
                    </div>
                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                        <h3 className="qualification_title"> Art Director</h3>
                        <span className="qualification_subtitle">Spain - Institute</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calender-alt"></i> 2021 - Present 
                        </div>
                    </div>
                    
                    </div>

                    <div className="qualification_data">
                        <div>
                        <h3 className="qualification_title">Web Developer</h3>
                        <span className="qualification_subtitle">
                            spain - Institute
                        </span>
                        <div className="qualification_calender">
                            <i className="uil uil-calender-alt"></i> 2021 - Present 
                        </div>
                    </div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>

                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
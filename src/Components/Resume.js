import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
            <ul>
            {Array.isArray(education.description) ? education.description.map(function(line){
                return <li>{line}</li>
            }) : <p>{education.description}</p>}
            </ul>
        </div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <ul>
                {Array.isArray(work.description) ? work.description.map(function(line){
                    return <li>{line}</li>
                }) : <p>{work.description}</p>}
            </ul>
        </div>
      })
        var project = this.props.data.project.map(function(project){
            return <div key={project.title}><h3>{project.title}</h3>
                <p className="info">{project.about}<span>&bull;</span> <em className="date">{project.year}</em></p>
                <ul>
                    {Array.isArray(project.description) ? project.description.map(function(line){
                        return <li>{line}</li>
                    }) : <p>{project.description}</p>}
                </ul>
            </div>
        })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
        var languages = this.props.data.languages.map(function(language){
            var className = 'bar-expand '+language.name.toLowerCase();
            return <li key={language.name}><span style={{width:language.level}}className={className}></span><em>{language.name}</em></li>
        })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

          <div className="row work">

              <div className="three columns header-col">
                  <h1><span>Work</span></h1>
              </div>

              <div className="nine columns main-col">
                  {work}
              </div>
          </div>

          <div className="row project">

              <div className="three columns header-col">
                  <h1><span>Projects</span></h1>
              </div>

              <div className="nine columns main-col">
                  {project}
              </div>
          </div>

      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>

          <div className="row language">

              <div className="three columns header-col">
                  <h1><span>Languages</span></h1>
              </div>

              <div className="nine columns main-col">

                  <div className="bars">
                      <ul className="languages">
                          {languages}
                      </ul>
                  </div>
              </div>
          </div>
   </section>
    );
  }
}

export default Resume;

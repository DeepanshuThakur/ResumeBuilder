import React from 'react';
import {tempNo, setTempNo } from './CSSTemplates/CSSVar';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resume:{
        skills: '',
        achievements: '',
        areaofinterest: '',
        filename: '',
        education: ''
      },


    }

      setTempNo(props.resume.templateno);
      console.log('tempno is set to: ' + tempNo);
//     this.handleSkillsChange = this.handleSkillsChange.bind(this);
//     this.handleAchievementsChange = this.handleAchievementsChange.bind(this);
//     this.handleEducationChange = this.handleEducationChange.bind(this);
//     this.handleFilenameChange = this.handleFilenameChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSkillsChange= (event) => {
    this.setState(prevState => {
      let resume = Object.assign({}, prevState.resume );
      resume.skills = event.target.value;
      return {resume} ;
    })
  }  
  handleAchievementsChange = (event) => {
    this.setState(prevState => {
      let resume = Object.assign({}, prevState.resume );
      resume.achievements= event.target.value;
      return {resume} ;
    })
  }
  handleAreaOfInterestChange = (event) => {
    this.setState(prevState => {
      let resume = Object.assign({}, prevState.resume );
      resume.areaofinterest= event.target.value;
      return {resume} ;
    })
  }
  handleEducationChange = (event) =>{
    this.setState(prevState => {
      let resume = Object.assign({}, prevState.resume );
      resume.education = event.target.value;
      return {resume} ;
    })
  }
  handleFilenameChange = (event) =>{
    this.setState(prevState => {
      let resume = Object.assign({}, prevState.resume );
      resume.filename = event.target.value;
      return {resume} ;
    })
  }

  handleSubmit = () => {
	//   const {resume} = this.props.resume ;
  const toload = {
	   skills: this.state.resume.skills,
	   achievements: this.state.resume.achievements,
	   areaofinterest: this.state.resume.areaofinterest,
	   education: this.state.resume.education,
	   filename: this.state.resume.filename,
	   id: this.props.resume.id,

	   email: this.props.resume.email,
	   templateno: this.props.resume.templateno,
	   name: this.props.resume.name

  }
  console.log('sending to load');
  console.log(toload);
   this.props.loadUser(
     toload
   );
//    console.log('The state in form is: \n');
//    console.log(this.state);
   this.props.onRouteChange('finalPreview');
//     event.preventDefault();
  }

  render() {

    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center">
      <main className="pa4 black-80">

      <div>
        <label>
          Skill:
          <input type="text" name="skill" onChange={this.handleSkillsChange} />
        </label>
	</div>
	<div>
	<label>
          Achievements:
          <input type="text" onChange={this.handleAchievementsChange } />
        </label>
	</div>
	<div>
	<label>
          Area of Interest:
          <input type="text" onChange={this.handleAreaOfInterestChange } />
        </label>
	</div>
	<div>
	 <label>
          Education:
          <input type="text" onChange={this.handleEducationChange} />
        </label>
	</div>
	<div>
	 <label>
          Filename:
          <input type="text" onChange={this.handleFilenameChange} />
        </label>
	</div>
	<div>
	<input type="submit" value="Go to Final Preview" onClick={this.handleSubmit} />
	</div>
	</main>
      </article>
    );
  }
}

export default Form;
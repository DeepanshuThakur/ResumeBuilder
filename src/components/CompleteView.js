import React from 'react';

class CompleteView extends React.Component {
		constructor(props){
		super(props);
		this.state = props.resume;

		// console.log('State recieved in final preview is:\n');
		// console.log(this.state);



	}

  handleNameChange= (event) => {
    this.setState({ name: event.target.value});
    this.props.loadUser(this.state);
  }
  handleEmailChange= (event) => {
    this.setState({ email : event.target.value});
    this.props.loadUser(this.state);
  }
  handleSkillsChange= (event) => {
    this.setState({ skills : event.target.value});
    this.props.loadUser(this.state);
  }
  handleAchievementsChange = (event) => {
    this.setState({ achievements: event.target.value});
    this.props.loadUser(this.state);
  }
  handleAreaOfInterestChange = (event) => {
    this.setState({ areaofinterest: event.target.value});
    this.props.loadUser(this.state);
  }
  handleEducationChange = (event) =>{
    this.setState({ education : event.target.value});
    this.props.loadUser(this.state);
  }
  handleFilenameChange = (event) =>{
    this.setState({ filename : event.target.value});
    this.props.loadUser(this.state);
  }

//   handleSubmit = () => {
// 	//   const {resume} = this.props.resume ;
// 	fetch('http://localhost:3000/addResume' , {
// 		method: 'post',
// 		headers: { 'Content-Type': 'application/json'},
// 		body: JSON.stringify({
// 			input: this.state
// 		})
// 	})
// 	.then(response => response.json())
// 	.then( resume => {
// 	// this.props.loadUser({
// 	//    skills: this.state.skills,
// 	//    achievements: this.state.achievements,
// 	//    education: this.state.education,
// 	//    filename: this.state.filename,
// 	//    id: this.props.resume.id,
// 	//    email: this.props.resume.email,
// 	//    templateno: this.props.resume.templateno,
// 	//    name: this.props.resume.name

// 	// resume
// 	console.log(resume);
//    })
//    .catch(err => console.log(err));

// 	// })




// //    console.log('The state in form is: \n');
// //    console.log(this.state);
// //     event.preventDefault();
//   }

	render() {
		// const { id , name, email } = this.props;
    console.log('The state at the final preview is:');
    console.log(this.props.resume);
		return (
		
	<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center">
      <main className="pa4 black-80">
      <div>
        <label>
          Name: 
          <input type="text" name="name" defaultValue={this.state.name} onChange={this.handleNameChange} />
        </label>
        <label>
          Email: 
          <input type="text" name="email_address" defaultValue={this.state.email} onChange={this.handleEmailChange} />
        </label>
        <label>
          Skills: 
          <input type="text" name="skills" defaultValue={this.state.skills} onChange={this.handleSkillsChange} />
        </label>
	<label>
          Achievements:
          <input type="text" name="achievements" defaultValue={this.state.achievements } onChange={this.handleAchievementsChange } />
        </label>
	<label>
          Area of Interest:
          <input type="text" name="areaofinterest" defaultValue={this.state.areaofinterest} onChange={this.handleAreaOfInterestChange } />
        </label>
	</div>
	<div>
	 <label>
          Education:
          <input type="text" name="education" defaultValue={this.state.education} onChange={this.handleEducationChange} />
        </label>
	</div>
	<div>
	 <label>
          Filename:
          <input type="text" defaultValue={this.state.filename} onChange={this.handleFilenameChange} />
        </label>
	</div>
	<div>
	</div>
	</main>
      </article>	

	);
	}

	

	
}

export default CompleteView;
import React , {Component , useState } from 'react';
import Style from './Style';
import CompleteView from '../components/CompleteView';
import {tempNo}  from '../components/CSSTemplates/CSSVar';
import ReactHelmet from 'react-helmet';
// var fileref = document.createElement("link");
// fileref.rel = "stylesheet";
// fileref.type = "text/css";
// fileref.href = "./CSSTemplates/CSS" + tempNo + ".css";
// document.getElementsByTagName("head")[0].appendChild(fileref);

// console.log('file imported as css is: ' + fileref.href);
// const cssfile = './CSSTemplates/CSS' + tempNo + '.css';


// import './CSSTemplates/CSS4.css';
    
class FinalPreview extends Component {
	constructor(props){
		super(props);
		this.state = {
      resume : this.props.resume,
      profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" ,
      file: [],
    }
		// console.log('State recieved in final preview is:\n');
		// console.log(this.state);
    console.log('The resume received at final preview is:');
    console.log(this.state.resume);

	}

  imageHandler = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(event.target.files[0]);

    this.state.file= event.target.files[0];
    const formData = new FormData();
    formData.append('image', this.state.file);

    fetch(`http://localhost:3000/addPic`, {
      method: 'post',
      body: formData,
      headers: {
        'accept': 'multipart/form-data',
      },
      credentials: 'include',
    })
    .then(res => res.json())
    // .then(res => {
    //   setUploadStatus(res.msg);
    // })
    .catch(error => {
      console.error(error);
    })

  };



  handleNameChange= (event) => {
    this.setState(prevState => {
      let resume = Object.assign({}, prevState.resume );
      resume.name= event.target.value;
      return {resume} ;
    })
    this.props.loadUser(this.state.resume);
  }
  handleEmailChange= (event) => {
    this.setState(prevState => {
      let resume = Object.assign({}, prevState.resume );
      resume.email = event.target.value;
      return {resume} ;
    })
    this.props.loadUser(this.state.resume);
  }
  handleSkillsChange= (event) => {
    this.setState(prevState => {
      let resume = Object.assign({}, prevState.resume );
      resume.skills = event.target.value;
      return {resume} ;
    })
    this.props.loadUser(this.state.resume);
  }
  handleAchievementsChange = (event) => {
    this.setState(prevState => {
      let resume = Object.assign({}, prevState.resume );
      resume.achievements= event.target.value;
      return {resume} ;
    })
    this.props.loadUser(this.state.resume);
  }
  handleAreaOfInterestChange = (event) => {
    this.setState(prevState => {
      let resume = Object.assign({}, prevState.resume );
      resume.areaofinterest = event.target.value;
      return {resume} ;
    })
    this.props.loadUser(this.state.resume);
  }
  handleEducationChange = (event) =>{
    this.setState(prevState => {
      let resume = Object.assign({}, prevState.resume );
      resume.education = event.target.value;
      return {resume} ;
    })
    this.props.loadUser(this.state.resume);
  }
  handleFilenameChange = (event) =>{
    this.setState(prevState => {
      let resume = Object.assign({}, prevState.resume );
      resume.filename = event.target.value;
      return {resume} ;
    })
    this.props.loadUser(this.state.resume);
    console.log('On filenam change, resume state is: ');
    console.log(this.state);
  }

  handleSubmit = (event) => {
	//   const {resume} = this.props.resume ;
    const formData = new FormData();
    formData.append('image', this.state.file);
    formData.append('resume' , this.state.resume );

	fetch('http://localhost:3000/addResume' , {
		method: 'post',
    body: formData,
    headers: {
      'Accept': 'multipart/form-data',
    },
    credentials: 'include',
	})
	.then(response => response.json())
	.then( resume => {
	this.props.loadUser(resume)
	//    skills: this.state.skills,
	//    achievements: this.state.achievements,
	//    education: this.state.education,
	//    filename: this.state.filename,
	//    id: this.props.resume.id,
	//    email: this.props.resume.email,
	//    templateno: this.props.resume.templateno,
	//    name: this.props.resume.name

	// console.log(resume)
   })
   .catch(err => console.log(err));

	// })


//    <PDFExport paperSize={'Letter'}
//     fileName="_____.pdf"
//     title=""
//     subject=""
//     keywords=""
//     ref={(r) => this.resume = r}>
//     <CompleteView resume={this.props.resume} />
//  </PDFExport>


// //    console.log('The state in form is: \n');
// //    console.log(this.state);
    event.preventDefault();
  }

	render() {
		// const { id , name, email } = this.props;

        const { profileImg } = this.state;

    console.log('The state at the final preview is:');
    console.log(this.props.resume);
		return (
		
	<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center">
      <main className="pa4 black-80">
            <div className="img-holder">
            <img src={profileImg} alt="" id="img" className="img" />
          </div>
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            multiple={false}
            id="input"
            onChange={this.imageHandler}
          />
          <div className="label">
            <label className="image-upload" htmlFor="input">
              {/* <i className="material-icons">add_photo_alternate</i> */}
            </label>
          </div>
      <div>
        <label>
         Name:
          <input type="text" name="name" defaultValue={this.state.resume.name} onChange={this.handleNameChange} />
        </label>
        <label>
         Email:
          <input type="text" name="email_address" defaultValue={this.state.resume.email} onChange={this.handleEmailChange} />
        </label>
        <label>
          Skills: 
          <input type="text" name="skills" defaultValue={this.state.resume.skills} onChange={this.handleSkillsChange} />
        </label>
	<label>
          Achievements:
          <input type="text" name="achievements" defaultValue={this.state.resume.achievements } onChange={this.handleAchievementsChange } />
        </label>
	<label>
          Area of Interest:
          <input type="text" name="areaofinterest" defaultValue={this.state.resume.areaofinterest} onChange={this.handleAreaOfInterestChange } />
        </label>
	</div>
	<div>
	 <label>
          Education:
          <input type="text" name="education" defaultValue={this.state.resume.education} onChange={this.handleEducationChange} />
        </label>
	</div>
	<div>
	 <label>
          Filename:
          <input type="text" defaultValue={this.state.resume.filename} onChange={this.handleFilenameChange} />
        </label>
	</div>
	<div>
	<input type="submit" name="save" value="Save" onClick={this.handleSubmit} />
	</div>
		<div>
	<input type="submit" name="download" value="Download" onClick={this.handleSubmit} />
	</div>
</main>
      </article>	


	);
	}

  // render() {
  //   return (
  //     <div>
  //       <CompleteView resume={this.props.resume} loadUser={this.props.loadUser} />
  //       <input type="submit" name="save and download" value="Save and Download PDF" onClick={this.handleSubmit} />
  //     </div>
  //   )
  // }
	

}

export default FinalPreview;
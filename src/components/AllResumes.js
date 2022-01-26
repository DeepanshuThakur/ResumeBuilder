import React from 'react';
import Entry from './Entry';

class AllResumes extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			resumes: [],
		}
		
		console.log(props);
		

	}

	componentDidMount() {
		this.getResumes();
	}

	getResumes = () => {
		// console.log('props here are: ' + this.props.resume);
		// console.log('id going in query is: ' + this.props.resume.id);
		let url = 'http://localhost:3000/showAll/' + this.props.resume.id;
		// console.log('fetch query is: ' + url);
		fetch(url)
		.then(response => response.json())
		// .then(response => console.log(response))
		// .then(resumes => {console.log('resume list response is:' + resumes)})
		.then(resumes => {
			this.setState({resumes: resumes});
			// console.log('State is now set as:');
			// console.log(this.state.resumes);
		})
		.catch(err => console.log(err));
	}

	render() {
		const name = this.props.resume.name;
		const currentResume = this.props.resume ;
		console.log('name of the user received at show all screen is: ' + name );
		console.log('resume received is: ');
		console.log(this.props.resume );
		const resumeList = this.state.resumes;
		console.log('resume list is:');
		console.log(resumeList);

		const listsize = resumeList.length ;

		if(!listsize)
		{
			return <h1 align="center" >No resumes yet</h1>
		}
		else{
			return (
				<div className="showAll">
					<h1>{`All resumes of user: ${name}`}</h1>
					<h2>{`Note: Here we will display all the resumes of the
						current user using better graphics/front-end features`}</h2>
						<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center">
						<main className="pa4 black-80">

						<div> 
							{
								resumeList.map((resume,i) => {
									return(
										<Entry
										key={i}
										entryNo={i}
										resume={resume}
										currentResume={currentResume}
										onRouteChange={this.props.onRouteChange}
										loadUser={this.props.loadUser}
										/>
									);
							})
							}
						</div>
						</main>
						</article>
				</div>
			)
		}
	}
}

export default AllResumes;
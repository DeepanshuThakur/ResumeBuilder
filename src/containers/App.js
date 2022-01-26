import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Form from '../components/Form';
import robots from '../robots';
import FinalPreview from '../components/FinalPreview';
import AllResumes from '../components/AllResumes';
import ErrorBoundary from '../components/ErrorBoundary';
// import './App.css';
// import '../components/CSSTemplates/CSS4.css';



class App extends React.Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: '',
			route: 'template',
			resume: {
				id: 0,
				name: '',
				email: '',
				skills: '',
				areaofinterest: '',
				achievements: '',
				templateno: '',
				filename: '',
				education: ''
			}
		}
	}

	componentDidMount() {
		// fetch('https://jsonplaceholder.typicode.com/users')
		// .then(response => response.json())
		// .then(users => {this.setState({robots: users})});
		this.setState({robots: robots});
		   const cssUrl = "/src/components/CSSTemplates/CSS4.css";
        this.addStyle(cssUrl);
	}

	  addStyle = url => {
        const style = document.createElement("link");
        style.href = url;
        style.rel = "stylesheet";
        style.async = true;
        console.log('css url is:' + url);
        document.head.appendChild(style);
    };


	showCurrentState = () => {
		console.log('Current state:\n');
		console.log(this.state);
	}

	onSearchChange = (event) => {
		this.setState( {searchfield: event.target.value} );
		

	}

	seeAllResumes = () => {
		this.setState( { route: 'all resumes'});
	}

	onRouteChange = (route) => {
		console.log('received state: ' + route );
		this.setState({route: route});
	}

	loadUser = (data) => {
		console.log('Data received is:\n');
		console.log(data);
		this.setState( {resume: {
			id: data.id,
			name: data.name,
			email: data.email,
			templateno: data.templateno,
			filename: data.filename,
			areaofinterest: data.areaofinterest,
			achievements: data.achievements,
			education: data.education,
			skills: data.skills
		}}
		)
		// this.setState(Object.assign(this.state.resume, {data}))
		console.log('current state of resume is: \n');
		console.log(this.state);
	}

	render() {
		const {robots, searchfield, route } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase()) ;
		});

		console.log('route is: '+ route );
		if(!robots.length) {
			return <h1>Loading</h1>
		}
		else {
			return (
				<div className="App">
				{ 
					route === 'template' ?
					<div >
						<h1 className="template4">RoboFriends</h1>
						<SearchBox searchChange={this.onSearchChange}/>
						<Scroll>
							<ErrorBoundary>
								<CardList robots= {filteredRobots} onRouteChange={this.onRouteChange} loadUser= { this.loadUser } />
							</ErrorBoundary>
						</Scroll>
					</div>
					: ( route === 'form' ?
						<Form resume= {this.state.resume} onRouteChange={this.onRouteChange} loadUser={ this.loadUser} />
					: ( route === 'finalPreview' ?
						<FinalPreview resume= {this.state.resume} 
						loadUser={this.loadUser}
						/>
						: 
						<AllResumes 
						resume= {this.state.resume} 
						loadUser={this.loadUser}
						onRouteChange={this.onRouteChange}
						/>
						)
					)
				}
					
					<input type="submit" value="ShowResumeStatus" onClick={this.showCurrentState} /> 
					<input type="submit" value="See all saved Resumes" onClick={this.seeAllResumes} />
				</div>
			) ;	
		}
	}
	
}

export default App;
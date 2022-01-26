import React from 'react';

// const Card = ({name,email,id}) => {

// 	// handleSubmit(event) {
		
// 	// }

// 	return (
// 		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" >
// 			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
// 			<div>
// 				<h2>{name}</h2>
// 				<p>{email}</p>
// 				<p>template id: {id}</p>
// 			</div>
// 			<input type="submit" value="Proceed" />
// 		</div>
// 	)
// }

class Card extends React.Component {
	constructor(){
		super();
		console.log(this.props);
	}

	onProceed = () => {
		this.props.loadUser({
			id: this.props.id,
			email: this.props.email,
			name: this.props.name,
			filename: (this.props.name + "'s resume"),
			skills: '',
			achievements: '',
			areaofinterest: '',
			education: '',
			templateno: this.props.id
		});
		this.props.onRouteChange('form');
		// console.log('button pushed\n');
		console.log('Now go to the form');
	}

	render() {
		const { id , name, email } = this.props;
		return (
		
		<div className="bg-light-green dib br3 pa3 ma2 bw2 shadow-5" >
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
				<p>template id: {id}</p>
			</div>
			<input type="submit" value="Proceed" onClick={this.onProceed } />
		</div>

	)
	}

	

}

export default Card;
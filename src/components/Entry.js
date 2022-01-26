import  React  from 'react';

class Entry extends React.Component {
	constructor() {
		super();
	}

	handleEdit = () => {
		const { currentResume, resume } = this.props;
		
		console.log('resume to be loaded is:\n');
		this.props.loadUser({
			skills: resume.skills,
			achievements: resume.achievements,
			areaofinterest: resume.areaofinterest,
			education: resume.education,
			filename: resume.filename,
			id: resume.id,
			email: currentResume.email,
			templateno: resume.templateno,
			name: currentResume.name
		});
		this.props.onRouteChange('finalPreview');
	}

	render() {
		const { filename , templateno } = this.props.resume;
		const {entryNo} = this.props;
		// console.log('template no is: \n');
		// console.log(this.props.resume.templateno);
		console.log('resume is:\n');
		console.log(this.props.resume);
		return (
			<div className="bg-light-green dib br3 pa3 ma2 bw2 shadow-5" >
			<div>
				<p>
					{entryNo + 1 } ) <br/>
					{filename} <br/>
					templateNo:{templateno}<br/>
					<input type="submit" value="edit" onClick={this.handleEdit} />
				</p>
			</div>
		</div>
		);
	}
}

export default Entry;
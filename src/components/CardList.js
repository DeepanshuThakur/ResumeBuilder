import React from 'react';
import Card from './Card';

const CardList = ({robots, onRouteChange , loadUser }) => {
	// if(true) {
	// 	throw new Error('NOOOOOO!');
	// }

	return (
		<div>
			{
				robots.map( (user,i) => {
				return (<Card 
					key= {robots[i].id} 
					id= {robots[i].id} 
					name={robots[i].name} 
					email={robots[i].email}
				 	onRouteChange={onRouteChange}	
					loadUser={loadUser}
					/>
				);
			})
			}
    		</div>
	) ;
}

export default CardList;
import React from 'react';


const Camper = (props) => {   
    return (    	
	        <tr>
	            <td>{props.rank}</td>
	            <td><img className='img-thumbnail img-responsive' src={props.img} width='50' height='50'/>&nbsp; {props.username}</td>
	            <td>{props.recentPoints}</td>
	            <td>{props.alltimePoints}</td>
	        </tr>        
    )
}

export default Camper;
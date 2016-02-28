import React from 'react';
import Camper from './camper.jsx';



const Table = (props) => {
    //mapping all the users into an array
    const camperList = props.usersToRender.map((users)=>{
        return (
            <Camper key={users.rank} rank={users.rank} username={users.username}
            recentPoints={users.recpoints} alltimePoints={users.alltimepoints} img={users.img} />
            )
    })

    //click handler for when they click the sorter below
    return (
        <div className='animated fadeIn table-responsive'>
            <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Camper Name</th>
                            <th className='sorter animated shake' onClick={() => props.tableClick(props.recentArr)}>
                            <p>Points in past 30 days</p>&nbsp;&nbsp;<div className={props.recentIcon}><i className="fa fa-arrow-down"></i></div></th>

                            <th className='sorter animated shake' onClick={() => props.tableClick(props.alltimeArr)}>
                            <p>Points all time</p>&nbsp;&nbsp;<div className={props.alltimeIcon}><i className="fa fa-arrow-down"></i></div></th>
                        </tr>                        
                    </thead>
                    <tbody>                                     
                        {camperList}             
                    </tbody>
            </table>
        </div>
        );
}

export default Table;
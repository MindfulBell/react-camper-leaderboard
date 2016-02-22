import React from 'react';
import Camper from './camper.jsx';

const Table = (props) => {

    const camperList = props.topRecentUsers.map((users)=>{
        return (
            <Camper key={users.rank} rank={users.rank} username={users.username}
            recentPoints={users.recpoints} alltimePoints={users.alltimepoints} img={users.img} />
            )
    })

    return (
        <div className='table-responsive'>
            <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Camper Name</th>
                            <th><a href='#'>Points in past 30 days</a></th>
                            <th><a href='#'>Points all time</a></th>
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
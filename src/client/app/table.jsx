import React from 'react';
import Camper from './camper.jsx';

const Table = (props) => {
    return (
        <div className='table-responsive'>
            <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Camper Name</th>
                            <th><a href='#'>Points in past 30 days</a></th>
                            <th><a href='#'>Points all time</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        <Camper />
                    </tbody>
            </table>
        </div>
        );
}

export default Table;
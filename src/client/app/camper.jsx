import React from 'react';
import $ from 'jquery';

const Camper = (props) => {
    //top past 30 days
    var userArr30 = [];
    $.getJSON('https://fcctop100.herokuapp.com/api/fccusers/top/recent', (data) => {
        userArr30 = data.map(function(user, ind){
            return {rank: ind+1, username: user.username, imgurl: user.img, last30: user.recent, alltime: user.alltime};
        });
        console.log(userArr30);
    });
    
    return (
        <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
            <td> null </td>
        </tr>   
    )
}

export default Camper;
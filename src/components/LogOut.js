import React from 'react';
import Login from './Login.js';

const LogOut = () => {


    sessionStorage.removeItem('curr_user');
    alert('Logged Out');

    // const list1 = document.querySelectorAll('#loginDocId', '#registerDocId');
    // const list2 = document.querySelectorAll("#profileDocId", "#chatDocId", '#resourcesDocId', 'addresourcesDocId');

    // for(let i=0;i<list1.length;i++){
    //     list1[i].style.display = "block";
    // }
    // for (let j = 0; j < list2.length; j++) {
    //   list2[j].style.display = "none";
    // }


  return (
    <div>
     <Login/>
    </div>
  );
}

export default LogOut;

import React, { useState } from 'react';
import FormAddMember from './Form';
import Classlist from './List';
export default function ManageMember() {
   const data = localStorage.getItem('memberClass')
      ? JSON.parse(localStorage.getItem('memberClass'))
      : [];
   const [members, setMembers] = useState(data);
   return (
      <div
         style={{
            width: '100%',
            maxWidth: '1024px',
            margin: '50px auto 0',
         }}
      >
         <div className='form'>
            <h2>ENTER CLASS LIST FORM</h2>
            <FormAddMember setMembers={setMembers}/>
         </div>
         <div className='class-member'>
            <h2>CLASS LIST CURRENT</h2>
            <Classlist members={members} setMembers={setMembers}/>
         </div>
      </div>
   );
}

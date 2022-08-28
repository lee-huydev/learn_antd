import { Avatar, List, Row, Input } from 'antd';
import React, {useEffect, useState} from 'react';
import { DeleteOutlined } from '@ant-design/icons';
const Classlist = ({ members, setMembers }) => {
    const [data, setData] = useState(members)
   const removeMember = (_id) => {
      const newMembers = members.filter((member) => member._id !== _id);
      setMembers(newMembers);
      localStorage.setItem('memberClass', JSON.stringify(newMembers));
   };
   const handleFind = (keyword) => {
    const searchResult = members.filter(member => member.name.toLowerCase().indexOf(keyword) > -1)
    setData(searchResult)
   }
   useEffect(() => {setData(members)}, [members])
   return (
      <>
            <Input placeholder='Enter member you want find here...' onChange={({target}) => handleFind(target.value)}/>
         <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(member) => (
               <List.Item key={member._id}>
                  <List.Item.Meta
                     avatar={
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                     }
                     title={member.name}
                     description={
                        <>
                           <Row>Age: {member.age}</Row>
                           <Row>Gender: {member.gender}</Row>
                           <Row>Address: {member.address}</Row>
                           <Row>
                              Favourite:
                              {member.favourite.map((item, index) => (
                                 <b style={{ marginRight: '5px' }} key={index}>
                                    {item.charAt(0).toUpperCase() +
                                       item.slice(1)}
                                 </b>
                              ))}
                           </Row>
                        </>
                     }
                  />
                  <div style={{ marginRight: 20 }}>
                     <DeleteOutlined
                        style={{
                           fontSize: '25px',
                        }}
                        onClick={() => removeMember(member._id)}
                     />
                  </div>
               </List.Item>
            )}
         />
      </>
   );
};

export default Classlist;

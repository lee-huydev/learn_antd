import React, { useState } from 'react';
import { Form, Input, Radio, Checkbox } from 'antd';
const { TextArea } = Input;
const FormAddMember = ({ setMembers }) => {
   const defaultValue = {
      name: '',
      age: '',
      address: '',
      information: '',
      gender: '',
      phone: '',
      favourite: [],
   };
   const [inputValue, setInputValue] = useState(defaultValue);
   const onSubmit = () => {
      const storage = localStorage.getItem('memberClass')
         ? JSON.parse(localStorage.getItem('memberClass'))
         : [];
      const inputValueHaveId = {
         ...inputValue,
         _id: Math.floor(Math.random()*1000),
      };
      setMembers(prev => [...prev, inputValueHaveId])
      const data = [...storage, inputValueHaveId];
      localStorage.setItem('memberClass', [JSON.stringify(data)]);
      setInputValue(defaultValue);
   };
   const handleCheckbox = ({ target }) => {
      if (target.checked) {
         setInputValue({
            ...inputValue,
            favourite: [...inputValue.favourite, target.name],
         });
      } else {
         setInputValue({
            ...inputValue,
            favourite: inputValue.favourite.filter(
               (item) => item !== target.name
            ),
         });
      }
   };
   return (
      <>
         <Form
            labelCol={{
               span: 4,
            }}
            wrapperCol={{
               span: 14,
            }}
            layout="horizontal"
            onSubmitCapture={onSubmit}
         >
            <Form.Item label="First and last name">
               <Input
                  value={inputValue.name}
                  type="text"
                  onChange={({ target }) =>
                     setInputValue({ ...inputValue, name: target.value })
                  }
               />
            </Form.Item>
            <Form.Item label="Age">
               <Input
                  value={inputValue.age}
                  type="number"
                  onChange={({ target }) =>
                     setInputValue({ ...inputValue, age: target.value })
                  }
               />
            </Form.Item>
            <Form.Item label="Gender">
               <Radio.Group
                  value={inputValue.gender}
                  onChange={({ target }) =>
                     setInputValue({ ...inputValue, gender: target.value })
                  }
               >
                  <Radio value="male"> Male </Radio>
                  <Radio value="female"> Female </Radio>
                  <Radio value="other"> Other </Radio>
               </Radio.Group>
            </Form.Item>
            <Form.Item label="Address">
               <Input
                  value={inputValue.address}
                  type="text"
                  onChange={({ target }) =>
                     setInputValue({ ...inputValue, address: target.value })
                  }
               />
            </Form.Item>
            <Form.Item label="Phone number">
               <Input
                  value={inputValue.phone}
                  type="text"
                  onChange={({ target }) =>
                     setInputValue({ ...inputValue, phone: target.value })
                  }
               />
            </Form.Item>
            <Form.Item label="Favourite">
               <Checkbox name="soccer" onChange={handleCheckbox}>
                  Soccer
               </Checkbox>
               <Checkbox onChange={handleCheckbox} name="volleyball">
                  Volleyball
               </Checkbox>
            </Form.Item>
            <Form.Item label="Information about self">
               <TextArea
                  value={inputValue.information}
                  rows={3}
                  onChange={({ target }) =>
                     setInputValue({ ...inputValue, information: target.value })
                  }
               />
            </Form.Item>
            <Form.Item>
               <Input type="submit" value={'Submit'} style={{marginLeft: '170px'}} />
            </Form.Item>
         </Form>
      </>
   );
};

export default FormAddMember;

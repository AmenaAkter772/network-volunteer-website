import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import headerLogo from '../../logos/Group 1329.png'
import { array } from '../Fakedata/Fakedata';

const Register = () => {
  const {Id} = useParams()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const select = array.find(pd => pd.id.toString() === Id);
    const {title,image} = select;
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name= document.getElementById('name').value;
        const email= document.getElementById('email').value;
        const date= document.getElementById('date').value;
        const description= document.getElementById('description').value;
        const title= document.getElementById('title').value;
        const image= document.getElementById('image').value;
        const total = {name, email, date ,description,title,image}
      fetch('https://enigmatic-tundra-12033.herokuapp.com/addRegister', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(total)
        })
        .then(data => {
          if(data){
            history.push('/add');
          }
        })
        
    }

    const style = {
      width:'500px', 
      border:'1px solid gray', 
      textAlign:'center', 
      borderRadius:'15px', 
      marginLeft:'450px', 
      marginTop:'60px'
    }
    return (
      <>
      <img style={{width:'150px', marginLeft:'630px', marginTop:'50px'}} src={headerLogo} alt=""/>
      <div style={style}>
        <h3>Register as a volunteer</h3>
        <form onSubmit={handleSubmit}  style={{width:'450px', margin:'20px'}}>
          <Form.Group>
              <Form.Control type="text"  defaultValue={loggedInUser.name} placeholder="Full Name" id="name" />
          </Form.Group>
          <Form.Group>
              <Form.Control type="text" defaultValue={loggedInUser.email} placeholder="userName or email" id="email" />
          </Form.Group>
          <Form.Group>
              <Form.Control type="date" defaultValue="05/10/2020" placeholder="Date" id="date"/>
          </Form.Group>
          <Form.Group>
              <Form.Control type="text" placeholder="Description" id="description" />
          </Form.Group>
          <Form.Group>
              <Form.Control type="text" defaultValue={title} placeholder="Select Item" id="title" />
          </Form.Group>
          <Form.Group>
              <Form.Control type="text" defaultValue={image} placeholder="Select Item" id="image" />
          </Form.Group>
          <Button  style={{width:'450px'}} variant="primary" type="submit">Registration</Button>
      </form>
      </div>
      </>
    
    );
};

export default Register;
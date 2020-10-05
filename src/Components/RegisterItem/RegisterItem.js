import { Grid } from '@material-ui/core';
import React, {  useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const RegisterItem = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [loginVolunteer, setLoginVolunteer] = useState([])

    useEffect( () => {
    fetch('https://enigmatic-tundra-12033.herokuapp.com/registerItem?email='+loggedInUser.email, {
        method:'GET', 
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(result=>{
            setLoginVolunteer(result)
        })
    })

    const deleteHandler=(id)=>{
        fetch(`https://enigmatic-tundra-12033.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    }

    return (
        <div>
            <Header></Header>
            <Grid container item xs={12} spacing='6'>
                {
                    loginVolunteer.map(volunteer=>{
                       return(
                        
                        <Grid item xs={12} md={6} key={volunteer._id}>
                            <div style={{display:'flex',boxShadow:'5px 5px 10px lightGray', width:'400px',padding:'20px' }}>
                                <div>
                                    <img style={{height:'130px', width:'140px'}} src={volunteer.image} alt=""/>
                                </div>
                                <div style={{marginLeft:'20px', width:'100%'}}>
                                    <h5>{volunteer.title}</h5>
                                    <h6>{volunteer.date}</h6>
                                    <div style={{textAlign:'right', cursor:'pointer'}}>
                                    <Button  onClick={()=>deleteHandler(volunteer._id)} variant="contained">cancel</Button>
                                    </div>
                                    
                                </div>
                            </div>
                        </Grid>
                        
                       )
                    })
                }
            </Grid>
        </div>
    );
};

export default RegisterItem;
import { Button, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CartPart from '../CartPart/CartPart';
import Header from '../Header/Header';

const Home = () => {
    const [volunteer, setVolunteer] = useState([])

    useEffect( () => {
        fetch('https://enigmatic-tundra-12033.herokuapp.com/volunteer')
        .then(res => res.json())
        .then(data => setVolunteer(data))
    }, [])
    return (
        <>
            <Header></Header>
            <div style={{marginTop:'50px'}}>
            <div style={{textAlign:'center'}}>
                <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
                <input style={{height:'35px'}} type="text" value="search"/>
                <Button variant="contained" color="primary">Search</Button>
            </div>
            <Grid
                style={{marginTop:'50px'}}
                container
                direction="row"
                justify="center"
                alignItems="center"
  
                >
                {
                    volunteer.map(volunteer => <CartPart volunteer = {volunteer} key={volunteer.id}></CartPart>)
                }
           </Grid>
            
        </div>
        </>
    );
};

export default Home;
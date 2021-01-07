import React from 'react';
import {Container} from 'reactstrap';
import {Link} from 'react-router-dom'
import './main.scss'
import Banner from 'components/Banner';

function Main(props) {
    return (
        <div  className="photo-main">
            <Banner title="Hello"/>
            <Container className="text-center">
                <Link to="/photos/add">Add new photo</Link>
            </Container>
        </div>
    );
}

export default Main;
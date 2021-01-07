import Banner from 'components/Banner';
import Images from 'constant/images';
import PhotoForm from 'features/Photo/components/PhotoForm';
import React from 'react';
import {Container} from 'reactstrap';

function AddEditPage(props) {
    return (
        <div className="photo-edit">
            <Banner title="Let's insert a photo !" backgroundUrl={Images.DEFAULT_BACKGROUND} />
            <Container className="text-center ">
                <div className="photo-edit__form">
                    <PhotoForm/>
                </div>
            </Container>
        </div>
    );
}

export default AddEditPage;
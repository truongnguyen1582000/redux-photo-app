import React from 'react';
import { Button,  FormGroup, Input, Label } from 'reactstrap';
import './PhotoForm.scss';
import Select from 'react-select';
import { PHOTO_CATEGORY_OPTION } from 'constant/global';
import Images from 'constant/images';
import { Form, Formik, FastField } from 'formik';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';

function PhotoForm(props) {
    const initialValue ={
        title:'',
        name:'',
    }
    return (
            <Formik
            initialValues={initialValue}>
                {
                    formikProps =>{
                        const {values, errors, touched} = formikProps;
                        console.log({values, errors, touched})
                        return (
                            <Form className="photo-form">

                                <FastField
                                // props fast field
                                    name="Title"
                                    component={InputField}

                                    label="Title"
                                    placeholder="Eg: Wow nature ..."
                                />

                                <FastField
                                // props fast field
                                    name="Category"
                                    component={SelectField}

                                    label="category"
                                    placeholder="What's your photo category?"
                                    options={PHOTO_CATEGORY_OPTION}
                                />

                                
                                <FormGroup>
                                    <Label for="categoryId">Category</Label>    
                                    <Select
                                    id="categoryId"
                                    name="categoryId"
                                    placeholder="What's your photo category?"
                                    
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="categoryId">Photo</Label>    

                                    <div><Button type="button" outline color="primary">Random a Photo</Button></div>
                                    <div className="random-photo"><img src={Images.DEFAULT_BACKGROUND} width="200px"/></div>
                                </FormGroup>

                                <FormGroup>
                                    <Button color="primary">Add to album</Button>
                                </FormGroup>
                            </Form>
                        )
                    }
                }
            </Formik>
    );
}

export default PhotoForm;
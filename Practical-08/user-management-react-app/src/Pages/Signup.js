import React, { useRef, useState } from 'react';
// @ts-ignore
import practicalImage from '/home/hemilrajpura/React Training - Dec 2021/react-practicals/Practical-08/user-management-react-app/src/Pages/practical-8.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import bcrypt from 'bcryptjs';


const Signup = () => {
    const salt = bcrypt.genSaltSync(10);
    const dispatch = useDispatch();
    const [photoPath, setPhotoPath] = useState(null);
    const photoRef = useRef();
    const nav = useNavigate();


    return (

        <div className='container'>
            <div id='signup'>
                <h1>Signup</h1>

                <Formik
                    initialValues={
                        {
                            email: '',
                            username: '',
                            number: '',
                            password: '',
                            cpassword: '',
                            photo: null
                        }
                    }
                    validate={values => {
                        //email
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }

                        //USERNAME
                        if (!values.username) {
                            errors.username = 'Required';
                        } else if (values.username.length < 15) {
                            errors.username = 'Username is too short';
                        }

                        //number
                        if (!values.number) {
                            errors.number = 'Required';
                        } else if (values.number.toString().length !== 10) {
                            errors.number = 'Enter a valid Phonenumber';
                        }


                        //pasword
                        if (!values.password) {
                            errors.password = 'Required';
                        }

                        if (!values.cpassword) {
                            errors.cpassword = 'Required';
                        } else
                            if (values.cpassword !== values.password) {
                                errors.cpassword = 'Password Should Match';
                            }

                        //photo

                        if (!values.photo) {
                            errors.photo = 'Required';

                        } else if (values.photo.size > 2000000) {
                            errors.photo = 'Photo is too large';
                        }


                        return errors;

                    }}

                    onSubmit={(values, { setSubmitting }) => {

                        console.log(photoPath);
                        setSubmitting(false);

                        dispatch({
                            type: 'login',
                            username: values.username,
                            email: values.email,
                            img: URL.createObjectURL((values.photo)),
                            number:values.number,
                            password:bcrypt.hashSync(values.password, '$2a$10$CwTycUXWue0Thq9StjUM0u') 
                        });
                        nav("/home");
                    }
                    }

                >

                    {({ isSubmitting, setFieldValue }) => (
                        <Form>
                            { JSON.parse(localStorage.getItem("login")) ? <Navigate to='/home'/> :null }
                            <div className='form-main'>
                                <ul>
                                    <li>
                                        <input type="file"
                                            name="photo"
                                            id="photo"
                                            accept=" .jpg, .png, "
                                            ref={photoRef}
                                            hidden
                                            onChange={(event) => {
                                                setFieldValue("photo", event.currentTarget.files[0]);
                                                    setPhotoPath(URL.createObjectURL(event.currentTarget.files[0]));
                                            }}
                                        />

                                        <ErrorMessage className='error-message' name="photo" component="div" />
                                        <label htmlFor='photo'>Photo+</label>
                                        {photoPath ? (<img id="insertedPhoto" src={photoPath} alt="" />) : null}

                                    </li>
                                    <li>
                                        <p>Name</p>
                                        <Field type="text" name="username" />
                                        <ErrorMessage className='error-message' name="username" component="div" />
                                    </li>

                                    <li>
                                        <p>Email</p>
                                        <Field type="email" name="email" />
                                        <ErrorMessage className='error-message' name="email" component="div" />
                                    </li>

                                    <li>
                                        <p>PhoneNo</p>
                                        <Field type="number" name="number" />
                                        <ErrorMessage className='error-message' name="number" component="div" />
                                    </li>

                                    <li>
                                        <p>Password</p>
                                        <Field type="password" name="password" />
                                        <ErrorMessage className='error-message' name="password" component="div" />
                                    </li>
                                    <li>
                                        <p>Confirm Password</p>
                                        <Field type="password" name="cpassword" />
                                        <ErrorMessage className='error-message' name="cpassword" component="div" />
                                    </li>
                                    <div className='form-buttons'>
                                        <button type="submit" id="submit" disabled={isSubmitting}>
                                            Submit
                                        </button>

                                        <button type="reset" id="reset" //disabled={}
                                        >
                                            Reset
                                        </button>
                                    </div>

                                </ul>
                            </div>
                        </Form>
                    )}

                </Formik>

            </div>
            <div>
                <img src={practicalImage} alt="" />
            </div>
        </div>
    )
}

export default Signup
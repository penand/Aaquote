import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

import { create } from "../../services/data-service";
import { QuoteType } from "../../typings";
import { StyledButton, StyledError, StyledInput, StyledMicroError } from "./style";

const initialValues: QuoteType = {
    author: '',
    category: '',
    title: '',
    image_url: '',
    used: false,
}

const CreateQuoteSchema = Yup.object().shape({
    author: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    category: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(300, 'Too Long!')
      .required('Required'),
    image_url: Yup.string()
      .min(2, 'Too Short!')
      .max(300, 'Too Long!')
      .required('Required'),
  });

const QuoteForm = () => {
    const [error, setError] = useState('');

    const handleSubmit = (values: QuoteType) => {
        create(values).then(response => {
            console.log('SUCCESS! quote was successfully created: ', response);
        }).catch(err => {
            setError(`ERROR: failed to create quote. ${err}`)
        })
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    handleSubmit(values)
                    setSubmitting(false);
                    resetForm({ values: {
                        author: '',
                        category: '',
                        title: '',
                        image_url: ''
                    }})
                }}
                validationSchema={CreateQuoteSchema}
            >{({ values, handleChange, handleBlur, errors, touched, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column' }}>
                    <StyledInput
                        type='author'
                        name='author'
                        placeholder='Author'
                        value={values.author}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <StyledError>
                        <StyledMicroError>
                             {errors.author && touched.author && errors.author}
                        </StyledMicroError>
                    </StyledError> 
                    <StyledInput
                        type='category'
                        name='category'
                        placeholder='Category'
                        value={values.category}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <StyledError>
                        <StyledMicroError>
                            {errors.category && touched.category && errors.category}
                        </StyledMicroError>
                    </StyledError> 
                    <StyledInput
                        type='title'
                        name='title'
                        placeholder='Quote'
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <StyledError>
                        <StyledMicroError>
                            {errors.title && touched.title && errors.title}
                        </StyledMicroError>
                    </StyledError> 
                    <StyledInput
                        type='image_url'
                        name='image_url'
                        placeholder='Image url'
                        value={values.image_url}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <StyledError>
                        <StyledMicroError>
                            {errors.image_url && touched.image_url && errors.image_url}
                        </StyledMicroError>
                    </StyledError> 
                    <StyledButton type='submit' disabled={isSubmitting}>
                        Submit
                    </StyledButton>
                    {error}
                </form>
            )}
            </Formik>
        </div>
    );
}

export default QuoteForm;
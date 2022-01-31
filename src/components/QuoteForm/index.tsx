import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

import { create } from "../../services/data-service";
import { QuoteType } from "../../typings";

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
                <form onSubmit={handleSubmit}>
                    <input
                        type='author'
                        name='author'
                        value={values.author}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.author && touched.author && errors.author}
                    <input
                        type='category'
                        name='category'
                        value={values.category}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.category && touched.category && errors.category}
                    <input
                        type='title'
                        name='title'
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.title && touched.title && errors.title}
                    <input
                        type='image_url'
                        name='image_url'
                        value={values.image_url}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.image_url && touched.image_url && errors.image_url}
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                    {error}
                </form>
            )}
            </Formik>
        </div>
    );
}

export default QuoteForm;
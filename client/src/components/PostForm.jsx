import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useApi from '../hooks/useApi';

export default function PostForm() {
    const { id } = useParams();
    const isEdit = Boolean(id);
    const [form, setForm] = useState({ title: '', content: '' });
    const { get, post, put } = useApi();
    const navigate = useNavigate();

    useEffect(() => {
        if (isEdit) get(`/posts/${id}`).then(data => setForm(data));
    }, [id]);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const action = isEdit ? put : post;
        action(`/posts${isEdit ? `/${id}` : ''}`, form).then(() =>
            navigate('/')
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
            <textarea name="content" value={form.content} onChange={handleChange} placeholder="Content" />
            <button type="submit">{isEdit ? 'Update' : 'Create'}</button>
        </form>
    );
}

// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useContext } from 'react';
// import { PostContext } from '../context/PostContext';

// const validationSchema = Yup.object({
//     title: Yup.string().required('Title is required'),
//     content: Yup.string().min(10, 'Content must be at least 10 characters'),
//     category: Yup.string().required('Category is required'),
// });

// const PostForm = () => {
//     const { addPost } = useContext(PostContext);

//     return (
//         <Formik
//             initialValues={{ title: '', content: '', category: '' }}
//             validationSchema={validationSchema}
//             onSubmit={(values, { resetForm }) => {
//                 addPost(values);
//                 resetForm();
//             }}
//         >
//             {({ isSubmitting }) => (
//                 <Form>
//                     <Field name="title" placeholder="Post Title" />
//                     <ErrorMessage name="title" component="div" />

//                     <Field name="content" placeholder="Post Content" />
//                     <ErrorMessage name="content" component="div" />

//                     <Field name="category" placeholder="Category ID" />
//                     <ErrorMessage name="category" component="div" />

//                     <button type="submit" disabled={isSubmitting}>Create Post</button>
//                 </Form>
//             )}
//         </Formik>
//     );
// };

// export default PostForm;
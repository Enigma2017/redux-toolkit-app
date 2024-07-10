import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/postSlice';	

export const Form = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Обработка данных формы
        console.log('Form Submitted:', { title, text });
        dispatch(addPost({ title, text }));
    };

    return (
        <form className="form">
            <input value={title} onChange={(event) => setTitle(event.target.value)} type="text" />
            <textarea value={text} onChange={(event) => setText(event.target.value)}></textarea>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}
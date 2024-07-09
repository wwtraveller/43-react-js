import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
// import Lesson01 from './lessons/lesson_01/Lesson01';
// import Lesson02 from './lessons/lesson_02/Lesson02';
// import LoginForm from './components/loginForm/LoginForm';
// import Counter from './components/counter/Counter';
import Homework4 from './homeworks/Homework4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    {/* <Lesson01 /> */}
    {/* <Lesson02 /> */}
    {/* <LoginForm /> */}
    {/* <Counter /> */}
    <Homework4 />
  </>
);


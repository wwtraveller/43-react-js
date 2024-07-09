import './loginForm.css'
import MyInput from '../myInput/MyInput.jsx'
import MyButton from '../myButton/MyButton.jsx'

export default function LoginForm(){
    return (
        <form className='myForm'>
            <MyInput label={'Ваш логин'} placeholder={'login'} type={'text'} name ={'login'} />
            <MyInput label={'Ваша почта'} placeholder={'email'} type={'email'} name ={'email'} />
            <MyInput label={'Ваш пароль'} placeholder={'password'} type={'password'} name ={'password'} />
            <MyButton name = {'Отправить форму'} type = {'submit'} />
        </form>
    )
}
import './myButton.css'
import '../myInput/MyInput.jsx'

export default function MyButton({type='button', onClick, name='undefined'} ) {
    console.log(name); // способ посмотреть что там сейчас находится. 
    return (
        <button onClick={onClick} type={type} className="myButton">{name}</button>
        
    )
}
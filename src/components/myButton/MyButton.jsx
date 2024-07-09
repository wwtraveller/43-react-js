import './myButton.css'
import '../myInput/MyInput.jsx'

export default function MyButton({type, onClick, name} ) {
    console.log(name); // способ посмотреть что там сейчас находится. 
    return (
        <button onClick={onClick} type={type} className="myButton">{name}</button>
        
    )
}
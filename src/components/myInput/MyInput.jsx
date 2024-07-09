// ### task:

// # создание формы из переиспользуемых компонентов

// - V Добавьте в компонент MyButton props ключ type (имеется ввиду атрибут type указывающий тип кнопок)

// - V Создайте папку input в папке components, в ней создайте компонент MyInput.

// - Компонент MyInput должен принимать в качестве props:

// 1. name - имеется ввиду атрибут name
// 2. type - имеется ввиду атрибут type
// 3. placeholder - атрибут placeholder
// 4. label - описание input в теге label

// -  V Создайте папку loginForm в папке components, в ней - компонент LoginForm, добавьте стили.

// - Импортируйте в loginForm заготовленные компоненты MyInput и MyButton и создайте из них форму с тремя input: login, email, password (нужно передать эти данные в качестве props) и кнопкой типа submit

// `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form` - пример формы

import './myInput.css'

export default function MyInput(props) {
    
    return (
    <>
        <label className='label'>{props.label}</label>
        <input type={props.type} name = {props.name} placeholder={props.placeholder} />
    </>
    )
}

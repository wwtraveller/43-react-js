import './lesson01.css'
export default function Lesson01(){
    const heading = 'Урок 1'
    const classContainer = 'lesson1-container'

    function formatName() {
        // return user.name + ' ' + user.lastName
        return `Имя: ${user.name}, фамилия: ${user.lastName}`
    }

    const user = {
        name: 'John',
        lastName: 'Doe'
    };

    const isLogin = true

    return (
        <div className={classContainer}>
            <h4>{heading}</h4>
            <p>Особенности компонента:</p>
            <ul>
                <li>Имеет расширение JSX</li>
                <li>Называется с большой буквы</li>
                <li>Компонент это функция</li>
                <li>Возвращает верстку</li>
                <li>Использует import / export</li>
                <li>Не отобразится на странице, если не импортирован</li>
            </ul>
            <h5>Пример работы с динамическими данными:</h5>
            <span>Здравствуй, {formatName(user)}!</span>
            <h5>Пример условного отображения с тернарным оператором:</h5>
            <span>Пользователь {isLogin ? 'в данный момент' : 'нет'} авторизован</span>
        </div>    
        );
}

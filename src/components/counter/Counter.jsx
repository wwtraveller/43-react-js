import { useState } from "react"

export default function Counter() {
    // let count = 0
    // const handlePlus = () => {
    //     count++
    //     console.log(count);
    // }


    // мы вызываем функцию useState()
    // передаем в скобках начальное значение для переменной
    // в ответ мы получаем массив из двух элементов
    // первый - сама волшебная переменная, вызывющая обновление компонента при изменении
    // второй - функция, перезаписывающая значение этой переменной
    // изменить переменную мы будем только с помощью этой функции

    const [count, setCount] = useState(0)

    const handlePlus = () => {
            // setCount(100)
            setCount(prev => prev + 1);
         }
         const handleMinus = () => {
            setCount(prev => prev - 1);
         }

    return (
        <div className="lesson-container">
            <h4>Counter</h4>
            <div>
                <button onClick={handleMinus}>-</button>
                <span>{count}</span>
                <button onClick={handlePlus}>+</button>
            </div>
        </div>
    )
}
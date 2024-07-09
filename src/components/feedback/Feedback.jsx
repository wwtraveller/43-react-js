import { useState } from "react";
import MyButton from "../myButton/MyButton";

export default function Feedback() {
    const [countLikes,setLike] = useState(0)
    const [countDisLikes, setDislike] = useState(0)

    const handleLike = () => {
        setLike(prev => prev + 1);
     }
     const handleDislike = () => {
        setDislike(prev => prev + 1);
     }

     const handleReset = () => {
        setLike(0)
        setDislike(0)
     }

    return (
        <div  className="lesson-container">
            Feedback
            <div>
                {/* <span>{like}</span>
                <MyButton onClick={handleLike} name={'countLikes'}/>
                <MyButton onClick={handleDislike} name={'countDisLikes'}/>
                <span>{dislike}</span> */}
                {/* <span className="counterValue">{countLikes}</span> */}
                <MyButton name={`${countLikes}  👍`} type={'submit'} onClick={handleLike}/>
                <MyButton name={`👎 ${countDisLikes}`} type={'submit'} onClick={handleDislike}/>
                {/* <span className="counterValue">{countDisLikes}</span> */}
            </div>
            <div>
                {/* <MyButton onClick={handleReset} name={'Reset Results'}/> */}
                <MyButton name={'Reset 👍 & 👎'} type={'submit'} onClick={handleReset} className={'resetButton'}/>
            </div>
        </div>
    )
}
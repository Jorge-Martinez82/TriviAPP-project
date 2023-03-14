import React, {useEffect, useState} from 'react'


const Body = () => {
    const [category, setCategory] = useState("")

    const [questions, setQuestions] = useState<any>("");

    const[showAnswer, setShowAnswer] = useState(false)
    const getQuestions = () => {
        fetch('http://localhost:8080/api/questions/?category='+category,
            {
                method:'GET',
                headers:{
                'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }})
            .then((response) => response.json())
            .then((data) =>
                setQuestions(data)
            )
    }

    const saveQuestion = () => {
        fetch('http://localhost:8080/api/questions/saved', {
            method : 'POST',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify(questions)
        })
    }

    useEffect(() => {
        getQuestions()
    }, []);


    function nextQuestion() {
        setShowAnswer(false)
        getQuestions()
    }

    function selectCategory(event: any) {
        setCategory(event.target.value);
    }


    const answer = (e:any) => {
        e.preventDefault();
        setShowAnswer(true)
    }

    return (
        <div className={"body"}>
            <div>
                <select className="selector" onChange={selectCategory}>
                    <option value="artliterature">Art/Literature</option>
                    <option value="language">Languaje</option>
                    <option value="sciencenature">Science/Nature</option>
                    <option value="general">General</option>
                    <option value="fooddrink">Food/Drink</option>
                    <option value="peopleplaces">People/Places</option>
                    <option value="geography">Geography</option>
                    <option value="historyholidays">History/Holidays</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="toysgames">Toys/Games</option>
                    <option value="music">Music</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="religionmythology">Religion/Mythology</option>
                    <option value="sportsleisure">Sports/Leisure</option>
                </select>
            </div>
            <div>
                <p>{questions?.question}</p>
                <div>
                    <button onClick={answer}>Answer</button>
                    {showAnswer && <p>{questions?.answer}</p>}
                </div>
            </div>
            <div>
                <button onClick={nextQuestion}>Next</button>
                <button onClick={saveQuestion}>Save</button>
            </div>
        </div>
    );

};
export default Body;
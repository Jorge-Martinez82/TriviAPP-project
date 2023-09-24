import React, {useEffect, useState} from 'react'


const Body = () => {
    const [category, setCategory] = useState("")
    const [questions, setQuestions] = useState({question: '', answer: ''});
    const [showAnswer, setShowAnswer] = useState(false)
    const [savingMessage, setSavingMessage] = useState('');
    const [isSaving, setIsSaving] = useState(false);


    const getQuestions = () => {
        if (category)
            fetch('http://localhost:8090/api/questions/?category=' + category,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                })
                .then((response) => response.json())
                .then((data) =>
                    setQuestions(data)
                )
        setIsSaving(false)
        setSavingMessage('');
    }
    const saveQuestion = () => {
        setIsSaving(true);

        fetch('http://localhost:8090/api/questions/saved', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(questions),
        })
            .then(() => {
                setSavingMessage('Saving...');
                setTimeout(() => {
                    setSavingMessage('Saved!!!');

                }, 1500);
            })

    };

    useEffect(() => {
        getQuestions()
    }, [category]);

    function nextQuestion() {
        setShowAnswer(false)
        getQuestions()
    }

    function selectCategory(event: any) {
        setCategory(event.target.value);
        setShowAnswer(false)
    }

    const answer = (e: any) => {
        e.preventDefault();
        setShowAnswer(true)
    }

    return (
        <div className={"body"}>
            <div className="select">
                <select onChange={selectCategory}>
                    <option value="" selected disabled hidden>Select category</option>
                    <option value="artliterature">Art/Literature</option>
                    <option value="language">Language</option>
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
                <div className="select_arrow">
                </div>
            </div>
            <div>
                <p>{questions?.question}</p>
                {questions?.question.length!==0 &&
                <div>
                    <button className="body__button" onClick={answer}>Answer</button>
                    {showAnswer && <p>{questions?.answer}</p>}
                </div>}
            </div>
            <div className="div__button">
                {questions?.question.length!==0 &&
                    <>
                        <button className="body__button" onClick={nextQuestion}>Next</button>
                        <button
                            className="body__button"
                            onClick={saveQuestion}
                            disabled={isSaving}
                        >Save
                        </button>
                    </>}
            </div>
            {savingMessage && <p>{savingMessage}</p>}
        </div>
    );

};
export default Body;
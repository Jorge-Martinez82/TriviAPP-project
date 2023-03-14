import React, {useEffect, useState} from 'react'


const MyTriviAPP = () => {

    const [savedQuestions, setSavedQuestions] = useState<any>([]);
    const[showAnswer, setShowAnswer] = useState(false)
    const [editIndex, setEditIndex]= useState(null);


    const getSavedQuestions = () => {
        fetch('http://localhost:8080/api/questions/saved')
            .then((response) => response.json())
            .then((data) =>
                setSavedQuestions(data)
            )
    }



    const answer = (e:any) => {
        e.preventDefault();
        setShowAnswer(true)
    }

    useEffect(() => {
        getSavedQuestions()
    }, []);

    return (
        <div className="mytriviapp">
            <div>
                {savedQuestions.map((saved:any)=><div key={saved?.id}>
                    {saved?.question}
                    {/*<div>*/}
                    {/*    <button onClick={answer}>Answer</button>*/}
                    {/*    {showAnswer && <p>{saved?.answer}</p>}*/}
                    {/*</div>*/}
                    <button
                        onClick={() => setEditIndex(editIndex => editIndex === saved?.id ? null : saved?.id)}
                    >Answer
                    </button>
                    {editIndex === saved?.id && <p>{saved?.answer}</p>}

                </div>)}

            </div>

        </div>
    );

};
export default MyTriviAPP;
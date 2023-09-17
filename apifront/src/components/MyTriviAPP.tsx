import React, {useEffect, useState} from 'react'


const MyTriviAPP = () => {

    interface Question {
        id: string;
        question: string;
        answer: string;
    }

    const [savedQuestions, setSavedQuestions] = useState<Question[]>([]);
    const [editIndex, setEditIndex] = useState(null);

    const getSavedQuestions = () => {
        fetch('http://localhost:8090/api/questions/saved')
            .then((response) => response.json())
            .then((data) =>
                setSavedQuestions(data)
            )
    }

    const deleteSavedQuestion = (id: string) => {
        fetch('http://localhost:8090/api/questions/saved/' + id, {method: 'DELETE'})
            .then(() => {
                const updatedQuestions = savedQuestions.filter((question: Question) => question.id !== id);
                setSavedQuestions(updatedQuestions);
            });
    };


    useEffect(() => {
        getSavedQuestions()
    }, []);

    return (
        <div className="mytriviapp">
            <div className="mytriviapp__content">
                {savedQuestions.map((saved: any) =>
                    <div className="saved" key={saved?.id}>
                    {saved?.question}
                    <br/><button className="mytriviapp__button"
                        onClick={() => setEditIndex(editIndex => editIndex === saved?.id ? null : saved?.id)}
                    >Answer
                    </button>
                    {editIndex === saved?.id && <div>{saved?.answer}
                        <br/><button className="remove__button" onClick={() => deleteSavedQuestion(saved?.id)}>Remove</button>
                    </div>}

                    </div>)}

            </div>

        </div>
    );

};
export default MyTriviAPP;
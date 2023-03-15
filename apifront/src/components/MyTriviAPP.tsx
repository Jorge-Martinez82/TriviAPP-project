import React, {useEffect, useState} from 'react'


const MyTriviAPP = () => {

    const [savedQuestions, setSavedQuestions] = useState<any>([]);
    const [editIndex, setEditIndex] = useState(null);

    const getSavedQuestions = () => {
        fetch('http://localhost:8080/api/questions/saved')
            .then((response) => response.json())
            .then((data) =>
                setSavedQuestions(data)
            )
    }

    const deleteSavedQuestion = (id: string) => {
        fetch('http://localhost:8080/api/questions/saved?id=' + id, {method: 'DELETE'})
        getSavedQuestions()
    }

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
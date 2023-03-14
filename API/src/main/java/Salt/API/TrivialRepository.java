package Salt.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class TrivialRepository implements ITrivialRepository{

    @Autowired
    JpaTrivialRepository dao;
    @Override
    public Question getQuestionById(Long id) {
        Optional<Question> quiz = dao.findById(id);
        return quiz.orElse(null);
    }

    @Override
    public void saveQuestion(Question question) {
        dao.save(question);
    }

    @Override
    public List<Question> getAll() {
        return (List<Question>) dao.findAll();

    }

    @Override
    public void deleteById(Long id) {
        dao.deleteById(id);
    }
}

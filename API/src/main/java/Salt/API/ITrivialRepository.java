package Salt.API;

import java.util.List;

public interface ITrivialRepository {

    Question getQuestionById(Long id);
    void saveQuestion(Question question);
    List<Question> getAll();
    void deleteById(Long id);

    void deleteAll();
}

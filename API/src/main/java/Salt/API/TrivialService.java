package Salt.API;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Service
public class TrivialService {
    @Autowired
    ITrivialRepository repo;
    private final HttpClient client = HttpClient.newBuilder().build();
    private final ObjectMapper mapper = new ObjectMapper();

    private static final String TRIVIA_API_URL = "https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia?category=";
    private static final String API_KEY = "08fb6942ffmshd329c92eb2dec6bp12e042jsn18a22d03e942";
    private static final String API_HOST = "trivia-by-api-ninjas.p.rapidapi.com";


    public Question findById(Long id){

        return repo.getQuestionById(id);
    }

    public QuestionDTO getQuestion(String category) throws IOException, InterruptedException {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(TRIVIA_API_URL+category))
                .header("X-RapidAPI-Key", API_KEY)
                .header("accept", "application/json")
                .header("X-RapidAPI-Host", API_HOST)
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();

        try {
            HttpResponse<String> question = client.send(request, HttpResponse.BodyHandlers.ofString(StandardCharsets.UTF_8));
            String body = question.body();
            QuestionDTO[] list = mapper.readValue(body, QuestionDTO[].class);
            return list[0];

        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return null;
    }

    public void saveQuestion(Question question) {

        repo.saveQuestion(question);
    }
    public List<Question> findAll() {

        return repo.getAll();
    }
    public void deleteById(Long id) {

        repo.deleteById(id);
    }

    public void deleteAllSavedQuestions() {
        repo.deleteAll();
    }
}

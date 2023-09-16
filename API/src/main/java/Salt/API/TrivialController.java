package Salt.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.io.IOException;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/questions/")
public class TrivialController {

    private final TrivialService service;

    @Autowired
    public TrivialController(TrivialService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<QuestionDTO> getQuestion(@RequestParam(required = true) String category) {
        try {
            QuestionDTO question = service.getQuestion(category);
            return ResponseEntity.ok(question);
        } catch (IOException | InterruptedException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("saved")
    public ResponseEntity<Void> saveQuestion(@RequestBody Question question) {
        service.saveQuestion(question);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("saved")
    public ResponseEntity<List<Question>> getAllQuestions() {
        List<Question> questions = service.findAll();
        return ResponseEntity.ok(questions);
    }

    @DeleteMapping("saved/{id}")
    public ResponseEntity<Void> deleteQuestion(@PathVariable Long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}

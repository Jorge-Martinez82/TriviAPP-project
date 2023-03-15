package Salt.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/questions/")
public class TrivialController {

    @Autowired
    TrivialService service;

    @GetMapping
    public QuestionDTO getQuestion(@RequestParam String category) throws IOException, InterruptedException {
        return service.getQuestion(category);}
    @PostMapping(path = "saved")
    public  void saveQuestion(@RequestBody Question question){
        service.saveQuestion(question);
    }
    @GetMapping(path = "saved")
    public List<Question> getAllQuestions(){
        return service.findAll();
    }
    @DeleteMapping(path = "saved")
    public void deleteQuestion(@RequestParam Long id){
        service.deleteById(id);
    }
}

package Salt.API;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.io.IOException;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

public class TrivialApiApplicationTests {

	private TrivialController trivialController;
	private TrivialService trivialService;

	@BeforeEach
	public void setUp() {
		trivialService = mock(TrivialService.class);
		trivialController = new TrivialController(trivialService);
	}

	@Test
	public void testGetQuestion() throws IOException, InterruptedException {
		// Arrange
		String category = "Test Category";
		QuestionDTO questionDTO = new QuestionDTO("Question Text", "Option A", "Option B");
		when(trivialService.getQuestion(category)).thenReturn(questionDTO);

		// Act
		ResponseEntity<QuestionDTO> response = trivialController.getQuestion(category);

		// Assert
		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(response.getBody()).isEqualTo(questionDTO);
	}

	@Test
	public void testGetQuestionError() throws IOException, InterruptedException {
		// Arrange
		String category = "Test Category";
		when(trivialService.getQuestion(category)).thenThrow(new IOException());

		// Act
		ResponseEntity<QuestionDTO> response = trivialController.getQuestion(category);

		// Assert
		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@Test
	public void testSaveQuestion() {
		// Arrange
		Question question = new Question();

		// Act
		ResponseEntity<Void> response = trivialController.saveQuestion(question);

		// Assert
		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
		verify(trivialService, times(1)).saveQuestion(question);
	}

	@Test
	public void testGetAllQuestions() {
		// Arrange
		List<Question> questions = List.of(new Question());
		when(trivialService.findAll()).thenReturn(questions);

		// Act
		ResponseEntity<List<Question>> response = trivialController.getAllQuestions();

		// Assert
		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(response.getBody()).isEqualTo(questions);
	}

	@Test
	public void testDeleteQuestion() {
		// Arrange
		Long id = 1L;

		// Act
		ResponseEntity<Void> response = trivialController.deleteQuestion(id);

		// Assert
		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NO_CONTENT);
		verify(trivialService, times(1)).deleteById(id);
	}
}

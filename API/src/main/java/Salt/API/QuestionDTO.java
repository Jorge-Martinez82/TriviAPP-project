package Salt.API;

import com.fasterxml.jackson.annotation.JsonProperty;

public record QuestionDTO(
        @JsonProperty String category,
        @JsonProperty String question,
        @JsonProperty String answer
) {
    public QuestionDTO(@JsonProperty String category, @JsonProperty String question, @JsonProperty String answer) {
        this.category = category;
        this.question = question;
        this.answer = answer;
    }
}

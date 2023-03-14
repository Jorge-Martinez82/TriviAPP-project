package Salt.API;

import org.springframework.data.repository.CrudRepository;

public interface JpaTrivialRepository extends CrudRepository<Question, Long> {
}

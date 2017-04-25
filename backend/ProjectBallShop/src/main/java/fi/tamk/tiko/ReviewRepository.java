
package fi.tamk.tiko;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface ReviewRepository extends CrudRepository<Review, Long> {
    List<Review> findByItemIdAndCategory(long itemId, String category);
    List<Review> findByUserId(long userId);
}
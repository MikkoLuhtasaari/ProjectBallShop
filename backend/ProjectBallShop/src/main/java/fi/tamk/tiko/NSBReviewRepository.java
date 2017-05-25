package fi.tamk.tiko;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

/**
 * Contains net sports ball reviews
 *
 * @author      Mikko Luhtasaari
 * @version     4.0
 * @since       4.0
 */
public interface NSBReviewRepository extends CrudRepository<NSBReview , Long> {}
package fi.tamk.tiko;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

/**
 * Contains bat and racquet games reviews
 *
 * @author      Mikko Luhtasaari
 * @version     4.0
 * @since       4.0
 */
public interface BARReviewRepository extends CrudRepository<BARReview , Long> {}
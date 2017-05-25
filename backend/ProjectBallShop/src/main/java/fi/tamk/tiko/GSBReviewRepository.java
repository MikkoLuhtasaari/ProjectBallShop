package fi.tamk.tiko;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

/**
 * Contains goal sports ball reviews
 *
 * @author      Mikko Luhtasaari
 * @version     4.0
 * @since       4.0
 */
public interface GSBReviewRepository extends CrudRepository<GSBReview , Long> {}
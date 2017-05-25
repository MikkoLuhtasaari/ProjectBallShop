package fi.tamk.tiko;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

/**
 * Contains target sportsball reviews
 *
 * @author      Mikko Luhtasaari
 * @version     4.0
 * @since       4.0
 */
public interface TSBReviewRepository extends CrudRepository<TSBReview , Long> {}
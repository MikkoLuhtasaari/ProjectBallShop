package fi.tamk.tiko;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

/**
 * Contains goal sports balls
 *
 * @author      Mikko Luhtasaari
 * @version     4.0
 * @since       1.0
 */
public interface GoalSportsBallRepository extends CrudRepository<GoalSportsBall, Long> {
    List<GoalSportsBall> findByColor(String color);
    List<GoalSportsBall> findByMaterial(String material);
    GoalSportsBall findByName(String name);
    List<GoalSportsBall> findByType(String type);
}
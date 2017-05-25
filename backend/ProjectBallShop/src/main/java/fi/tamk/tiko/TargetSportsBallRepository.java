package fi.tamk.tiko;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

/**
 * Contains target sports balls
 *
 * @author      Mikko Luhtasaari
 * @version     4.0
 * @since       1.0
 */
public interface TargetSportsBallRepository extends CrudRepository<TargetSportsBall, Long> {
    List<TargetSportsBall> findByColor(String color);
    List<TargetSportsBall> findByMaterial(String material);
    TargetSportsBall findByName(String name);
    List<TargetSportsBall> findByType(String type);
}
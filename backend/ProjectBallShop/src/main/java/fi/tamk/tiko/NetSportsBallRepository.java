package fi.tamk.tiko;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

/**
 * Contains net sports balls
 *
 * @author      Mikko Luhtasaari
 * @version     4.0
 * @since       1.0
 */
public interface NetSportsBallRepository extends CrudRepository<NetSportsBall , Long> {
    List<NetSportsBall> findByColor(String color);
    List<NetSportsBall> findByMaterial(String material);
    NetSportsBall findByName(String name);
    List<NetSportsBall> findByType(String type);
}
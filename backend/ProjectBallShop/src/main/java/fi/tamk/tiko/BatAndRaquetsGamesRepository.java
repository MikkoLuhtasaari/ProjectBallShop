package fi.tamk.tiko;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

/**
 * Contains bat and racquet games balls
 *
 * @author      Mikko Luhtasaari
 * @version     4.0
 * @since       1.0
 */
public interface BatAndRaquetsGamesRepository extends CrudRepository<BatAndRaquetsGames , Long> {
    List<BatAndRaquetsGames> findByColor(String color);
    List<BatAndRaquetsGames> findByMaterial(String material);
    BatAndRaquetsGames  findByName(String name);
    List<BatAndRaquetsGames> findByType(String type);
}
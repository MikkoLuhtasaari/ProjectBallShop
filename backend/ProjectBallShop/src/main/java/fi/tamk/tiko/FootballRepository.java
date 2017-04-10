
package fi.tamk.tiko;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface FootballRepository extends CrudRepository<Football, Long> {
    List<Football> findByColor(String color);
    List<Football> findByMaterial(String material);
}
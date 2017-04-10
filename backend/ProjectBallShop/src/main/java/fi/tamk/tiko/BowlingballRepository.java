
package fi.tamk.tiko;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface BowlingballRepository extends CrudRepository<Bowlingball, Long> {
    List<Bowlingball> findByColor(String color);
    List<Bowlingball> findByMaterial(String material);
}
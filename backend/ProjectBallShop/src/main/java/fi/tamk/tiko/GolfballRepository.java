
package fi.tamk.tiko;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface GolfballRepository extends CrudRepository<Golfball, Long> {
    List<Golfball> findByMaterial(String material);
    Golfball findByName(String name);
}
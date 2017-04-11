package fi.tamk.tiko;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface TargetSportsBallRepository extends CrudRepository<TargetSportsBall, Long> {
    List<TargetSportsBall> findByColor(String color);
    List<TargetSportsBall> findByMaterial(String material);
    TargetSportsBall findByName(String name);
    List<TargetSportsBall> findByType(String type);
}
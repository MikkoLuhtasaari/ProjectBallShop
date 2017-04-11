package fi.tamk.tiko;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface GoalSportsBallRepository extends CrudRepository<GoalSportsBall, Long> {
    List<GoalSportsBall> findByColor(String color);
    List<GoalSportsBall> findByMaterial(String material);
    GoalSportsBall findByName(String name);
    List<GoalSportsBall> findByType(String type);
}
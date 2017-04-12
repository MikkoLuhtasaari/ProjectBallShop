package fi.tamk.tiko;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface NetSportsBallRepository extends CrudRepository<NetSportsBall , Long> {
    List<NetSportsBall> findByColor(String color);
    List<NetSportsBall> findByMaterial(String material);
    NetSportsBall findByName(String name);
    List<NetSportsBall> findByType(String type);
}
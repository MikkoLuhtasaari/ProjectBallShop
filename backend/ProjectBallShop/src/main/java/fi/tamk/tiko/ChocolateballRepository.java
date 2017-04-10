package fi.tamk.tiko;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface ChocolateballRepository extends CrudRepository<Chocolateball, Long> {
    Chocolateball findByName(String name);
}
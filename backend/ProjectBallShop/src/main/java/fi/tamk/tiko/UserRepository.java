package fi.tamk.tiko;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface UserRepository extends CrudRepository<User , Long> {
    User findByName(String name);
}
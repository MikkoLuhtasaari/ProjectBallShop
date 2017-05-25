package fi.tamk.tiko;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

/**
 * Contains users
 *
 * @author      Mikko Luhtasaari
 * @version     4.0
 * @since       2.0
 */
public interface UserRepository extends CrudRepository<User , Long> {
    User findByUserName(String userName);
}
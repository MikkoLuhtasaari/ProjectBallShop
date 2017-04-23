package fi.tamk.tiko;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.Table;

@Entity
//@Table(indexes = {@Index(columnList="name"), @Index(columnList="color"), @Index(columnList="amount"), @Index(columnList="material"), @Index(columnList="holeAmount")})
public class User 
{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    
    public User(){};
    
    public User(long id) {
        setId(id);
    }
    
    public void setId(long id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }
}

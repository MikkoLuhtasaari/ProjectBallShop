package fi.tamk.tiko;

import javax.persistence.*;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Contains goal sports ball reviews.
 *
 * @author      Mikko Luhtasaari
 * @version     4.0
 * @since       4.0
 */
@Entity
@Table(indexes = {@Index(columnList="userId")})
public class GSBReview implements Serializable {
    /**
     * Unique id to identify review.
     */
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    
    /**
     * Unique id to identify reviews user.
     */
    private long userId;
    
    /**
     * Unique id to identify reviews ball.
     */
    private long ownerBallId;
    
    /**
     * How many points the user gave to ball.
     */
    private int score;
    
    /**
     * Reviews header.
     */
    private String header;
    
    /**
     * Reviews content.
     */
    private String content;
    
    /**
     * Join column with ball.
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="GSB_ID")
    @JsonIgnore
    private GoalSportsBall owner;
    
    /**
     * Join column with user.
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="OWNER_USER_ID")
    @JsonIgnore
    private User userOwner;
    
    /**
     * Basic constructor.
     */
    public GSBReview(){};
    
    /**
     * Constructor
     */
    public GSBReview(long id, int score, String header, String content, GoalSportsBall owner, long ownerBallId, User userOwner, long userId) {
        setUserOwner(userOwner);
        setScore(score);
        setHeader(header);
        setContent(content);
        setOwner(owner);
        setId(id);
        setOwnerBallId(ownerBallId);
        setUserId(userId);
    }
    
    public void setId(long id) {
        this.id = id;
    }
    public void setScore(int score) {
        if(score < 6 && score > 0 ) {
            this.score = score;
        } else {
            System.out.println("Score must be between 1-5");
        }
    }
    public void setHeader(String header) {
        this.header = header;
    }
    public void setContent(String content) {
        this.content = content;
    }
    public void setOwner(GoalSportsBall owner) {
        this.owner = owner;
    }
    public void setUserOwner(User userOwner) {
        this.userOwner = userOwner;
    }
    public void setOwnerBallId(long ownerBallId) {
        this.ownerBallId = ownerBallId;
    }
    public void setUserId(long userId) {
        this.userId = userId;
    }
    
    public long getId() {
        System.out.println("Getting review id");
        return id;
    }
    public int getScore() {
        return score;
    }
    public String getHeader() {
        return header;
    }
    public String getContent() {
        return content;
    }
    
    public GoalSportsBall getOwner() {
        System.out.println("Get owner");
        return owner;
    }
    
    public User getUserOwner() {
        System.out.println("Get user");
        return userOwner;
    }
    
    public long getUserId() {
        return userId;
    }
    public long getOwnerBallId() {
        return ownerBallId;
    }
    
}

package fi.tamk.tiko;

import javax.persistence.*;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Contains bat and racquet games reviews.
 *
 * @author      Mikko Luhtasaari
 * @version     4.0
 * @since       4.0
 */
@Entity
@Table(indexes = {@Index(columnList="userId")})
public class BARReview implements Serializable{
    
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
    @JoinColumn(name="BAR_ID")
    @JsonIgnore
    private BatAndRaquetsGames owner;
    
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
    public BARReview(){};
    
    /**
     * Constructor
     */
    public BARReview(long id, int score, String header, String content, BatAndRaquetsGames owner, long ownerBallId, User userOwner, long userId) {
        setUserOwner(userOwner);
        setScore(score);
        setHeader(header);
        setContent(content);
        setOwner(owner);
        setId(id);
        setOwnerBallId(ownerBallId);
        setUserId(userId);
    }
    
    /**
     * Sets the id
     *
     * @param id reviews id
     */
    public void setId(long id) {
        this.id = id;
    }
    
    /**
     * Sets the score
     *
     * @param score reviews score
     */
    public void setScore(int score) {
        
        if(score < 6 && score > 0 ) {
            this.score = score;
        } else {
            System.out.println("Score must be between 1-5");
        }
    }
    
    /**
     * Sets the header
     *
     * @param header reviews header
     */
    public void setHeader(String header) {
        this.header = header;
    }
    
    /**
     * Sets the content
     *
     * @param content reviews content
     */
    public void setContent(String content) {
        this.content = content;
    }
    
    /**
     * Sets the owner ball
     *
     * @param owner ball which the review belongs to
     */
    public void setOwner(BatAndRaquetsGames owner) {
        this.owner = owner;
    }
    
    /**
     * Sets the owner user
     *
     * @param userOwner user which the review belongs to
     */
    public void setUserOwner(User userOwner) {
        this.userOwner = userOwner;
    }
    
    /**
     * Sets the ownerBallId
     *
     * @param ownerBallId id of the ball which the review belongs to
     */
    public void setOwnerBallId(long ownerBallId) {
        this.ownerBallId = ownerBallId;
    }
    
    /**
     * Sets the userId
     *
     * @param userId id of the user which the review belongs to
     */
    public void setUserId(long userId) {
        this.userId = userId;
    }
    
    /**
     * Returns reviews id
     */
    public long getId() {
        return id;
    }
    
    /**
     * Returns reviews score
     */
    public int getScore() {
        return score;
    }
    
    /**
     * Returns reviews header
     */
    public String getHeader() {
        return header;
    }
    
    /**
     * Returns reviews content
     */
    public String getContent() {
        return content;
    }
    
    /**
     * Returns reviews owner ball
     */
    public BatAndRaquetsGames getOwner() {
        return owner;
    }
    
    /**
     * Returns reviews owner user
     */
    public User getUserOwner() {
        return userOwner;
    }
    
    /**
     * Returns reviews user id
     */
    public long getUserId() {
        return userId;
    }
    
    /**
     * Returns reviews ball id
     */
    public long getOwnerBallId() {
        return ownerBallId;
    } 
}

package fi.tamk.tiko;

import javax.persistence.*;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(indexes = {@Index(columnList="userId")})
public class NSBReview implements Serializable
{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    private long userId;
    private long ownerBallId;
    private int score;
    private String header;
    private String content;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="NSB_ID")
    @JsonIgnore
    private NetSportsBall owner;

    private long ballID;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="OWNER_USER_ID")
    @JsonIgnore
    private User userOwner;
    
    public NSBReview(){};
    
    public NSBReview(long id, int score, String header, String content, NetSportsBall owner, long ownerBallId, User userOwner, long userId) {
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
    public void setOwner(NetSportsBall owner) {
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
    
    public NetSportsBall getOwner() {
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

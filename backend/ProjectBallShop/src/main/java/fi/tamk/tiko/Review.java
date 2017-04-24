package fi.tamk.tiko;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.Table;

@Entity
@Table(indexes = {@Index(columnList="userId"), @Index(columnList="itemId"), @Index(columnList="category")})
public class Review 
{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    private String category;
    private long userId;
    private long itemId;
    private int score;
    private String header;
    private String content;
    
    public Review(){};
    
    public Review(String category, long userId, long itemId, int score, String header, String content, long id) {
        setCategory(category);
        setUserId(userId);
        setItemId(itemId);
        setScore(score);
        setHeader(header);
        setContent(content);
        setId(id);
    }
    
    public void setId(long id) {
        this.id = id;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public void setUserId(long userId) {
        this.userId = userId;
    }
    public void setItemId(long itemId) {
        this.itemId = itemId;
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
    
    public long getId() {
        return id;
    }
    public String getCategory() {
        return category;
    }
    public long getUserId() {
        return userId;
    }
    public long getItemId() {
        return itemId;
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
    
}

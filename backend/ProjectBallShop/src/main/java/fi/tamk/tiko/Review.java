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
    
    public Review(String name, String color, int diameter, int weigth, String details, String material, String manufacturer, String shortDetails, String type, double price, int amount, long id) {
        
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
    
    public String getName() {
        return name;
    }
    public String getColor() {
        return color;
    }
    public int getDiameter() {
        return diameter;
    }
    public int getWeigth() {
        return weigth;
    }
    public String getDetails() {
        return details;
    }
    public String getMaterial() {
        return material;
    }
    public String getManufacturer() {
        return manufacturer;
    }
    public String getShortDetails() {
        return shortDetails;
    }
    public String getType() {
        return type;
    }
    public double getPrice() {
        return price;
    }
    public int getAmount() {
        return amount;
    }
    public long getId() {
        return id;
    }
    public String getCategory() {
        return category;
    }
    
}

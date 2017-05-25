package fi.tamk.tiko;

import javax.persistence.*;
import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import java.io.Serializable;

/**
 * Contains bat and racquet games balls
 *
 * @author      Mikko Luhtasaari
 * @version     4.0
 * @since       1.0
 */
@Entity
@Table(indexes = {@Index(columnList="name"), @Index(columnList="color"), @Index(columnList="amount"), @Index(columnList="material"), @Index(columnList="type")})
public class BatAndRaquetsGames {
    
    /**
     * Name of the ball
     */
    private String name;
    
    /**
     * Color of the ball
     */
    private String color;
    
    /**
     * Diameter of the ball
     */
    private int diameter;
    
    /**
     * Weigth of the ball
     */
    private int weigth;
    
    /**
     * Details of the ball
     */
    private String details;
    
    /**
     * Material of the ball
     */
    private String material;
    
    /**
     * Manufacturer of the ball
     */
    private String manufacturer;
    
    /**
     * Short details of the ball
     */
    private String shortDetails;
    
    /**
     * Type of the ball
     */
    private String type;
    
    /**
     * Price of the ball
     */
    private double price;
    
    /**
     * Amount of the ball
     */
    private int amount;
    
    /**
     * Hole amount of the ball
     */
    private int holeAmount;
    
    /**
     * Id of the ball
     */
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    
    /**
     * Category of the ball
     */
    private String category;
    
    @OneToMany(mappedBy = "owner", cascade = CascadeType.ALL)
    private Set<BARReview> reviews;
    
    public BatAndRaquetsGames(){};
    
    public BatAndRaquetsGames(String name, String color, int diameter, int weigth, String details, String material, String manufacturer, String shortDetails, String type, double price, int amount, long id) {
        setName(name);
        setColor(color);
        setDiameter(diameter);
        setWeight(weigth);
        setDetails(details);
        setMaterial(material);
        setManufacturer(manufacturer);
        setShortDetails(shortDetails);
        setType(type);
        setPrice(price);
        setAmount(amount);
        setId(id);
        category = "Bat and raquets game";
    }
    
    public void setName(String name) {
        this.name = name;
    }
    public void setColor(String color) {
        this.color = color;
    }
    public void setDiameter(int diameter) {
        this.diameter = diameter;
    }
    public void setWeight(int weigth) {
        this.weigth = weigth;
    }
    public void setDetails(String details) {
        this.details = details;
    }
    public void setMaterial(String material) {
        this.material = material;
    }
    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }
    public void setShortDetails(String shortDetails) {
        this.shortDetails = shortDetails;
    }
    public void setType(String type) {
        this.type = type;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public void setAmount(int amount) {
        this.amount = amount;
    }
    public void setId(long id) {
        this.id = id;
    }
    public void setReviews(Set<BARReview> reviews) {
        System.out.println("Setting reviews");
        System.out.println(reviews.size());
        
        for(BARReview n: reviews) {
            System.out.println(n.getScore());
        }
        this.reviews = reviews;
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
    public Set<BARReview> getReviews() {
       return reviews;
    }
    
}

package fi.tamk.tiko;

import javax.persistence.*;
import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import java.io.Serializable;

@Entity
@Table(indexes = {@Index(columnList="name"), @Index(columnList="color"), @Index(columnList="amount"), @Index(columnList="material"), @Index(columnList="type")})
public class NetSportsBall implements Serializable {
    
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
     * Category of the ball
     */
    private String category;
    
    /**
     * Id of the ball
     */
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    
    
    
    /**
     * Join column with reviews
     */
    @OneToMany(mappedBy = "owner", cascade = CascadeType.ALL)
    private Set<NSBReview> reviews;
    
    /**
     * Constructor
     */
    public NetSportsBall(){};
    
    /**
     * Constructor
     */
    public NetSportsBall(String name, String color, int diameter, int weigth, String details, String material, String manufacturer, String shortDetails, String type, double price, int amount, long id) {
        this.category = "Net sport";
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
    }
    
    /**
     * Sets the name
     *
     * @param name name of the ball
     */
    public void setName(String name) {
        this.name = name;
    }
    
    /**
     * Sets the color
     *
     * @param color color of the ball
     */
    public void setColor(String color) {
        this.color = color;
    }
    
    /**
     * Sets the diameter
     *
     * @param diameter diameter of the ball
     */
    public void setDiameter(int diameter) {
        this.diameter = diameter;
    }
    
    /**
     * Sets the weigth
     *
     * @param weigth weigth of the ball
     */
    public void setWeight(int weigth) {
        this.weigth = weigth;
    }
    
    /**
     * Sets the details
     *
     * @param details details of the ball
     */
    public void setDetails(String details) {
        this.details = details;
    }
    
    /**
     * Sets the material
     *
     * @param material material of the ball
     */
    public void setMaterial(String material) {
        this.material = material;
    }
    
    /**
     * Sets the manufacturer
     *
     * @param manufacturer manufacturer of the ball
     */
    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }
    
    /**
     * Sets the short details
     *
     * @param shortDetails short details of the ball
     */
    public void setShortDetails(String shortDetails) {
        this.shortDetails = shortDetails;
    }
    
    /**
     * Sets the type
     *
     * @param type type of the ball
     */
    public void setType(String type) {
        this.type = type;
    }
    
    /**
     * Sets the price
     *
     * @param price price of the ball
     */
    public void setPrice(double price) {
        this.price = price;
    }
    
    /**
     * Sets the amount
     *
     * @param amount amount of the ball
     */
    public void setAmount(int amount) {
        this.amount = amount;
    }
    
    /**
     * Sets the id
     *
     * @param id id of the ball
     */
    public void setId(long id) {
        this.id = id;
    }
    
    /**
     * Sets the reviews
     *
     * @param reviews reviews of the ball
     */
    public void setReviews(Set<NSBReview> reviews) {
        this.reviews = reviews;
    }
    
    /**
     * Return the name
     */
    public String getName() {
        return name;
    }
    
    /**
     * Return the color
     */
    public String getColor() {
        return color;
    }
    
    /**
     * Return the diameter
     */
    public int getDiameter() {
        return diameter;
    }
    
    /**
     * Return the weigth
     */
    public int getWeigth() {
        return weigth;
    }
    
    /**
     * Return the details
     */
    public String getDetails() {
        return details;
    }
    
    /**
     * Return the material
     */
    public String getMaterial() {
        return material;
    }
    
    /**
     * Return the manufacturer
     */
    public String getManufacturer() {
        return manufacturer;
    }
    
    /**
     * Return the short details
     */
    public String getShortDetails() {
        return shortDetails;
    }
    
    /**
     * Return the type
     */
    public String getType() {
        return type;
    }
    
    /**
     * Return the price
     */
    public double getPrice() {
        return price;
    }
    
    /**
     * Return the amount
     */
    public int getAmount() {
        return amount;
    }
    
    /**
     * Return the id
     */
    public long getId() {
        return id;
    }
    
    /**
     * Return the category
     */
    public String getCategory() {
        return category;
    }
    
    /**
     * Return the reviews
     */
    public Set<NSBReview> getReviews() {
       return reviews;
    }
}

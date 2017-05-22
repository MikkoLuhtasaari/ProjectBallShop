package fi.tamk.tiko;

import javax.persistence.*;
import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import java.io.Serializable;

@Entity
@Table(indexes = {@Index(columnList="name"), @Index(columnList="amount"), @Index(columnList="type")})
public class GoalSportsBall {
    
    @Column(name = "name", length = 128, nullable = false, unique = false)
    private String name;
    
    @Column(name = "color", length = 30, nullable = false, unique = false)
    private String color;
    
    @Column(name = "diameter")
    private int diameter;
    
    @Column(name = "weigth")
    private int weigth;
    
    @Column(name = "details")
    private String details;
    
    @Column(name = "material", length = 50, nullable = false, unique = false)
    private String material;
    
    @Column(name = "manufacturer", length = 128, nullable = false, unique = false)
    private String manufacturer;
    
    @Column(name = "short_details", length = 255, nullable = false, unique = false)
    private String shortDetails;
    
    @Column(name = "type", length = 50, nullable = false, unique = false)
    private String type;
    
    @Column(name = "price")
    private double price;
    
    @Column(name = "amount")
    private int amount;
    
    @Id
    @Column(name = "id", nullable = false, unique = true)
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    
    @Column(name = "category")
    private String category;
    
    @OneToMany(mappedBy = "owner", cascade = CascadeType.ALL)
    private Set<GSBReview> reviews;
    
    public GoalSportsBall(){
        category = "Goal sport";
    };
    
    public GoalSportsBall(String name, String color, int diameter, int weigth, String details, String material, String manufacturer, String shortDetails, String type, double price, int amount, long id) {
        setName(name);
        setColor(color);
        setDiameter(diameter);
        setWeigth(weigth);
        setDetails(details);
        setMaterial(material);
        setManufacturer(manufacturer);
        setShortDetails(shortDetails);
        setType(type);
        setPrice(price);
        setAmount(amount);
        setId(id);
        category = "Goal sport";
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
    
    public void setWeigth(int weigth) {
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
    
    public void setReviews(Set<GSBReview> reviews) {
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
    
    public Set<GSBReview> getReviews() {
       return reviews;
    }
}

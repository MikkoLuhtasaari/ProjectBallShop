package fi.tamk.tiko;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.Table;

@Entity
@Table(indexes = {@Index(columnList="name"), @Index(columnList="color"), @Index(columnList="amount"), @Index(columnList="material"), @Index(columnList="type")})
public class TargetSportsBall 
{
    private String name;
    private String color;
    private int diameter;
    private int weigth;
    private String details;
    private String material;
    private String manufacturer;
    private String shortDetails;
    private String type;
    private double price;
    private int amount;
    private int holeAmount;
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    private String category;
    
    public TargetSportsBall(){};
    
    public TargetSportsBall(String name, String color, int diameter, int weigth, String details, String material, String manufacturer, String shortDetails, String type, double price, int amount, long id) {
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
        category = "Target sports";
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

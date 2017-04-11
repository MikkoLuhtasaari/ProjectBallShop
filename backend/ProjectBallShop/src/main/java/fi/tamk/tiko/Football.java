package fi.tamk.tiko;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.Table;

@Entity
@Table(indexes = {@Index(columnList="name"), @Index(columnList="color"), @Index(columnList="amount"), @Index(columnList="material")})
public class Football 
{
    private String name;
    private String color;
    private int diameter;
    private int weight;
    private String details;
    private String material;
    private String manufacturer;
    private int amount;
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    
    public Football(){};
    
    public Football(String name, String color, int diameter, int weigth, String details, String material, String manufacturer, int amount, long id) {
        setName(name);
        setColor(color);
        setDiameter(diameter);
        setWeight(weight);
        setDetails(details);
        setMaterial(material);
        setManufacturer(manufacturer);
        setAmount(amount);
        setId(id);
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
    public void setWeight(int weight) {
        this.weight = weight;
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
        return weight;
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
    public int getAmount() {
        return amount;
    }
    public long getId() {
        return id;
    }
    
}

package fi.tamk.tiko;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Bowlingball 
{
    private String name;
    private String color;
    private int diameter;
    private int weight;
    private String details;
    private String material;
    private int amount;
    private int holeAmount;
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    
    public Bowlingball(){};
    
    public Bowlingball(String name, String color, int diameter, int weigth, String details, String material, int amount, long id) {
        setName(name);
        setColor(color);
        setDiameter(diameter);
        setWeight(weight);
        setDetails(details);
        setMaterial(material);
        setAmount(amount);
        setHoleAmount(holeAmount);
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
    public void setAmount(int amount) {
        this.amount = amount;
    }
    public void setHoleAmount(int holeAmount) {
        this.holeAmount = holeAmount;
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
    public int getAmount() {
        return amount;
    }
    public int getHoleAmount() {
        return holeAmount;
    }
    public long getId() {
        return id;
    }
    
}

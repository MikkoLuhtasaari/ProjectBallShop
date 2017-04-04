package fi.tamk.tiko;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Football 
{
    private String color;
    private int diameter;
    private int weight;
    private String details;
    private String material;
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    public int test;
    
    public Football(){};
    
    public Football(String color, int diameter, int weigth, String details, String material, long id) {
        setColor(color);
        setDiameter(diameter);
        setWeight(weight);
        setDetails(details);
        setMaterial(material);
        setId(id);
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
    public void setId(long id) {
        this.id = id;
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
    public long getId() {
        return id;
    }
    
}

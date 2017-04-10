package fi.tamk.tiko;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.Table;

@Entity
@Table(indexes = {@Index(columnList="name"), @Index(columnList="color"), @Index(columnList="amount")})
public class Chocolateball
{
    //Index
    private String name;
    //Index
    private String color;
    private int diameter;
    private int weigth;
    private String details;
    //Index
    private int amount;
    private int calories;
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    
    public Chocolateball(){};
    
    public Chocolateball(String name, String color, int diameter, int weigth, String details, int amount, int calories, long id) {
        setName(name);
        setColor(color);
        setDiameter(diameter);
        setWeight(weigth);
        setDetails(details);
        setAmount(amount);
        setCalories(calories);
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
    public void setWeight(int weigth) {
        this.weigth = weigth;
    }
    public void setDetails(String details) {
        this.details = details;
    }
    public void setAmount(int amount) {
        this.amount = amount;
    }
    public void setCalories(int calories) {
        this.calories = calories;
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
    public int getAmount() {
        return amount;
    }
    public int getCalories() {
        return calories;
    }
    public long getId() {
        return id;
    }
    
}

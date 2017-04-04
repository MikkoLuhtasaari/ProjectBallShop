package fi.tamk.tiko;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
    
    public Football(){};
    
}

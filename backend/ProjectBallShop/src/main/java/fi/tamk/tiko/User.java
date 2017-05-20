package fi.tamk.tiko;

import javax.persistence.*;
import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import java.io.Serializable;

@Entity
//@Table(indexes = {@Index(columnList="name"), @Index(columnList="color"), @Index(columnList="amount"), @Index(columnList="material"), @Index(columnList="holeAmount")})
public class User 
{
    private String userName;
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private String city;
    private String address;
    private int zipCode;
    private String accessLevel;
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    
    @OneToMany(mappedBy = "userOwner", cascade = CascadeType.ALL)
    private Set<NSBReview> reviews;
    
    public User(){};
    
    public User(String firstName, String lastName, String userName, String password, String email, String city, String address, int zipCode, String accessLevel, long id) {
        setFirstName(firstName);
        setLastName(lastName);
        setUserName(userName);
        setCity(city);
        setAddress(address);
        setZipCode(zipCode);
        setAccessLevel(accessLevel);
        setPassword(password);
        setEmail(email);
        setId(id);
    }
    
    public void setReviews(Set<NSBReview> reviews) {
        System.out.println("Setting reviews");
        System.out.println(reviews.size());
        
        for(NSBReview n: reviews) {
            System.out.println(n.getScore());
        }
        this.reviews = reviews;
    }
    
    public void setId(long id) {
        this.id = id;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public void setZipCode(int zipCode) {
        this.zipCode = zipCode;
    }
    public void setAccessLevel(String accessLevel) {
        this.accessLevel = accessLevel;
    }
    
    public Set<NSBReview> getReviews() {
       return reviews;
    }

    public long getId() {
        return id;
    }
    public String getUserName() {
        return userName;
    }
    public String getEmail() {
        return email;
    }
    public String getPassword() {
        return password;
    }
    public String getFirstName() {
        return firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public String getAddress() {
        return address;
    }
    public String getCity() {
        return city;
    }
    public int getZipCode() {
        return zipCode;
    }
    public String getAccessLevel() {
        return accessLevel;
    }
}

package fi.tamk.tiko;

import javax.persistence.*;
import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import java.io.Serializable;

/**
 * Contains users
 *
 * @author      Mikko Luhtasaari
 * @version     4.0
 * @since       1.0
 */
@Entity
//@Table(indexes = {@Index(columnList="name"), @Index(columnList="color"), @Index(columnList="amount"), @Index(columnList="material"), @Index(columnList="holeAmount")})
public class User {
    
    /**
     * Users username
     */
    private String userName;
    
    /**
     * Users email
     */
    private String email;
    
    /**
     * Users password
     */
    private String password;
    
    /**
     * Users firstname
     */
    private String firstName;
    
    /**
     * Users lastname
     */
    private String lastName;
    
    /**
     * Users city
     */
    private String city;
    
    /**
     * Users address
     */
    private String address;
    
    /**
     * Users zipcode
     */
    private int zipCode;
    
    /**
     * Users accessLevel
     */
    private String accessLevel;
    
    /**
     * Users id
     */
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    
    /**
     * Join column to reviews
     */
    @OneToMany(mappedBy = "userOwner", cascade = CascadeType.ALL)
    private Set<NSBReview> reviews;
    
    /**
     * Constructor
     */
    public User(){};
    
    /**
     * Constructor
     */
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
    
    /**
     * Sets reviews to user
     *
     * @param reviews users reviews
     */
    public void setReviews(Set<NSBReview> reviews) {
        this.reviews = reviews;
    }
    
    /**
     * Sets id to user
     *
     * @param id users id
     */
    public void setId(long id) {
        this.id = id;
    }
    
    /**
     * Sets username to user
     *
     * @param userName users username
     */
    public void setUserName(String userName) {
        this.userName = userName;
    }
    
    /**
     * Sets email to user
     *
     * @param email users email
     */
    public void setEmail(String email) {
        this.email = email;
    }
    
    /**
     * Sets password to user
     *
     * @param password users password
     */
    public void setPassword(String password) {
        this.password = password;
    }
    
    /**
     * Sets firstname to user
     *
     * @param firstName users firstname
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    
    /**
     * Sets lastname to user
     *
     * @param lastName users lastname
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    
    /**
     * Sets city to user
     *
     * @param city users city
     */
    public void setCity(String city) {
        this.city = city;
    }
    
    /**
     * Sets address to user
     *
     * @param address users address
     */
    public void setAddress(String address) {
        this.address = address;
    }
    
    /**
     * Sets zip code to user
     *
     * @param zipCode users zip code
     */
    public void setZipCode(int zipCode) {
        this.zipCode = zipCode;
    }
    
    /**
     * Sets accessLevel to user
     *
     * @param accessLevel users accessLevel
     */
    public void setAccessLevel(String accessLevel) {
        this.accessLevel = accessLevel;
    }
    
    /**
     * Returns reviews
     */
    public Set<NSBReview> getReviews() {
       return reviews;
    }

    /**
     * Returns id
     */
    public long getId() {
        return id;
    }
    
    /**
     * Returns username
     */
    public String getUserName() {
        return userName;
    }
    
    /**
     * Returns email
     */
    public String getEmail() {
        return email;
    }
    
    /**
     * Returns password
     */
    public String getPassword() {
        return password;
    }
    
    /**
     * Returns firstname
     */
    public String getFirstName() {
        return firstName;
    }
    
    /**
     * Returns lastName
     */
    public String getLastName() {
        return lastName;
    }
    
    /**
     * Returns address
     */
    public String getAddress() {
        return address;
    }
    
    /**
     * Returns city
     */
    public String getCity() {
        return city;
    }
    
    /**
     * Returns zip code
     */
    public int getZipCode() {
        return zipCode;
    }
    
    /**
     * Returns accessLevel
     */
    public String getAccessLevel() {
        return accessLevel;
    }
}

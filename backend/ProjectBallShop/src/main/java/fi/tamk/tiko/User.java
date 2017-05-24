package fi.tamk.tiko;

import javax.persistence.*;
import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import java.io.Serializable;

@Entity
//@Table(indexes = {@Index(columnList="username")})
public class User {
    
    @Column(name = "username", length = 50, nullable = false, unique = true)
    private String userName;
    
    @Column(name = "email", length = 80, nullable = false, unique = true)
    private String email;
    
    @Column(name = "password", length = 30, nullable = false, unique = false)
    private String password;
    
    @Column(name = "firstname", length = 30, nullable = false, unique = false)
    private String firstName;
    
    @Column(name = "lastname", length = 50, nullable = false, unique = false)
    private String lastName;
    
    @Column(name = "city", length = 50)
    private String city;
    
    @Column(name = "address", length = 80)
    private String address;
    
    @Column(name = "zip_code")
    private int zipCode;
    
    @Column(name = "access_level", length = 20)
    private String accessLevel;
    
    @Id
    @Column(name = "id", nullable = false, unique = true)
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;
    
    /*@ManyToOne
    @JoinColumn(name = "PARENT_ID")
    private NSBReview parentNode;
    
    @OneToMany(mappedBy = "userOwner", cascade = CascadeType.REMOVE)
    private Set<NSBReview> reviews;*/
    
    @OneToMany(mappedBy = "userOwnerOne", cascade = CascadeType.ALL, orphanRemoval=true)
    private Set<NSBReview> NSBReviews;
    
    @OneToMany(mappedBy = "userOwnerTwo", cascade = CascadeType.ALL, orphanRemoval=true)
    private Set<GSBReview> GSBReviews;
    
    @OneToMany(mappedBy = "userOwnerThree", cascade = CascadeType.ALL, orphanRemoval=true)
    private Set<BARReview> BARReviews;
    
    @OneToMany(mappedBy = "userOwnerFour", cascade = CascadeType.ALL, orphanRemoval=true)
    private Set<TSBReview> TSBReviews;
    
    public User(){};
    
    public User(String firstName, String lastName, String userName, String password, String email, String city, String address, int zipCode, String accessLevel) {
        setFirstName(firstName);
        setLastName(lastName);
        setUserName(userName);
        setCity(city);
        setAddress(address);
        setZipCode(zipCode);
        setAccessLevel(accessLevel);
        setPassword(password);
        setEmail(email);
    }
    
    public void setNSBReviews(Set<NSBReview> reviews) {
        this.NSBReviews = reviews;
    }
    
    public void setBARReviews(Set<BARReview> reviews) {
        this.BARReviews = reviews;
    }
    
    public void setGSBReviews(Set<GSBReview> reviews) {
        this.GSBReviews = reviews;
    }
    
    public void setTSBReviews(Set<TSBReview> reviews) {
        this.TSBReviews = reviews;
    }
    
    public Set<NSBReview> getNSBReviews() {
       return NSBReviews;
    }
    
    public Set<BARReview> getBARReviews() {
       return BARReviews;
    }
    
    public Set<TSBReview> getTSBReviews() {
       return TSBReviews;
    }
    
    public Set<GSBReview> getGSBReviews() {
       return GSBReviews;
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

package fi.tamk.tiko;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.Table;

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
    
    public User(){};
    
    public User(String firstName, String lastName, String userName, String password, String email, String city, String address, int zipCode, String accessLevel, long id) {
        setFirstName(firstName);
        setLastName(lastName);
        setUserName(userName);
        setPassword(password);
        setEmail(email);
        setId(id);
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

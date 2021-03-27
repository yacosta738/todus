package com.todus.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Property;
import org.springframework.data.neo4j.core.schema.Relationship;
import org.springframework.data.neo4j.core.support.UUIDStringGenerator;

/**
 * A Customer.
 */
@Node
public class Customer implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(UUIDStringGenerator.class)
    private String id;

    @Property("slug")
    private String slug;

    @Property("created_at")
    private Instant createdAt;

    @Property("updated_at")
    private Instant updatedAt;

    @Relationship("HAS_TWEETS")
    @JsonIgnoreProperties(value = { "customer" }, allowSetters = true)
    private Set<Tweets> tweets = new HashSet<>();

    @Relationship("HAS_USER")
    private User user;

    @Relationship("HAS_FOLLOWER")
    @JsonIgnoreProperties(value = { "tweets", "user", "followers", "followeds" }, allowSetters = true)
    private Set<Customer> followers = new HashSet<>();

    @Relationship(value = "HAS_FOLLOWER", direction = Relationship.Direction.INCOMING)
    @JsonIgnoreProperties(value = { "tweets", "user", "followers", "followeds" }, allowSetters = true)
    private Set<Customer> followeds = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Customer id(String id) {
        this.id = id;
        return this;
    }

    public String getSlug() {
        return this.slug;
    }

    public Customer slug(String slug) {
        this.slug = slug;
        return this;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public Instant getCreatedAt() {
        return this.createdAt;
    }

    public Customer createdAt(Instant createdAt) {
        this.createdAt = createdAt;
        return this;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public Instant getUpdatedAt() {
        return this.updatedAt;
    }

    public Customer updatedAt(Instant updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }

    public void setUpdatedAt(Instant updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Set<Tweets> getTweets() {
        return this.tweets;
    }

    public Customer tweets(Set<Tweets> tweets) {
        this.setTweets(tweets);
        return this;
    }

    public Customer addTweets(Tweets tweets) {
        this.tweets.add(tweets);
        return this;
    }

    public Customer removeTweets(Tweets tweets) {
        this.tweets.remove(tweets);
        return this;
    }

    public void setTweets(Set<Tweets> tweets) {
        if (this.tweets != null) {
            this.tweets.forEach(i -> i.setCustomer(null));
        }
        if (tweets != null) {
            tweets.forEach(i -> i.setCustomer(this));
        }
        this.tweets = tweets;
    }

    public User getUser() {
        return this.user;
    }

    public Customer user(User user) {
        this.setUser(user);
        return this;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<Customer> getFollowers() {
        return this.followers;
    }

    public Customer followers(Set<Customer> customers) {
        this.setFollowers(customers);
        return this;
    }

    public Customer addFollower(Customer customer) {
        this.followers.add(customer);
        customer.getFolloweds().add(this);
        return this;
    }

    public Customer removeFollower(Customer customer) {
        this.followers.remove(customer);
        customer.getFolloweds().remove(this);
        return this;
    }

    public void setFollowers(Set<Customer> customers) {
        this.followers = customers;
    }

    public Set<Customer> getFolloweds() {
        return this.followeds;
    }

    public Customer followeds(Set<Customer> customers) {
        this.setFolloweds(customers);
        return this;
    }

    public Customer addFollowed(Customer customer) {
        this.followeds.add(customer);
        customer.getFollowers().add(this);
        return this;
    }

    public Customer removeFollowed(Customer customer) {
        this.followeds.remove(customer);
        customer.getFollowers().remove(this);
        return this;
    }

    public void setFolloweds(Set<Customer> customers) {
        if (this.followeds != null) {
            this.followeds.forEach(i -> i.removeFollower(this));
        }
        if (customers != null) {
            customers.forEach(i -> i.addFollower(this));
        }
        this.followeds = customers;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Customer)) {
            return false;
        }
        return id != null && id.equals(((Customer) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Customer{" +
            "id=" + getId() +
            ", slug='" + getSlug() + "'" +
            ", createdAt='" + getCreatedAt() + "'" +
            ", updatedAt='" + getUpdatedAt() + "'" +
            "}";
    }
}

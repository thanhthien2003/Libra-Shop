package com.example.librabe.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "product_reviews")
public class ProductReviews {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "rating")
    private Double rating;

    @Column(name = "comment_review")
    private String commentReview;

    @Column(name = "date_review")
    private String dateReview;

    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Products productId;

    @ManyToOne
    @JoinColumn(name = "account_id", referencedColumnName = "id_account")
    private Accounts accountId;

    @Column(name = "is_flag")
    private Boolean isFlag;

}

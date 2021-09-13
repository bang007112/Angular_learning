import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish!: Dish;
  promotion!: Promotion;
  dishErrMess: any;
  leaderservice: any;
  promotionErrMess: any;
  leaderErrMess: any;
  leader: any;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService) { }

    ngOnInit() {
      this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish ,
        dishErrMess => this.dishErrMess = <any>dishErrMess);
      this.promotionservice.getFeaturedPromotion().subscribe((promotion: Promotion) => this.promotion = promotion ,
        (        promotionErrMess: any) => this.promotionErrMess = <any>promotionErrMess);
      this.leaderservice.getFeaturedleader().subscribe((leader: any) => this.leader = leader ,
        (        leaderErrMess: any) => this.leaderErrMess = <any>leaderErrMess);
    }

}

import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private cartService:CartService,
    private formBuilder:FormBuilder){}

  items = this.cartService.getItems()
  totalPrice = this.cartService.getTotalPrice()
  checkOutForm = this.formBuilder.group({
    name:'',
    address:''
  })

  onSubmit(){
    this.items = this.cartService.clearCart()
    window.alert(`Your order has been placed`)
    this.checkOutForm.reset()
    this.totalPrice = 0
  }
}

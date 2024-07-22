import { Component, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { Router } from "@angular/router";
import { ProductService } from "../product.service";
import { json } from "stream/consumers";
import { Product } from "../product.model";

@Component({
  selector: "app-product-create",
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: "./product-create.component.html",
  styleUrl: "./product-create.component.css",
})
export class ProductCreateComponent implements OnInit {
  constructor(private router: Router, private service: ProductService) {}
 
  product: Product = {
    name: "",
    price: 0
  };

  ngOnInit(): void {}

  createProduct(): void {
    this.service.createProduct(this.product).subscribe(() => {
      this.service.showMessage("Produto criado!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}

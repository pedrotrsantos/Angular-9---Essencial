import { Component, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../product.service";
import { Product } from "../product.model";


@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit {
  
  product!: Product;
  
  constructor(
    private router: Router, 
    private service: ProductService, 
    private route : ActivatedRoute){
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.service.getProductById(id).subscribe(product => {
        this.product = product;
    })
  }

  updateProduct() : void{
    this.service.updateProduct(this.product).subscribe(() => {
      this.service.showMessage("Produto atualizado com sucesso");
      this.router.navigate(["/products"]);
    })
  }
 
  cancel(): void {
    this.router.navigate(["/products"]);
  }

}

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
  selector: 'app-product-delete',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router : Router,
    private route : ActivatedRoute){
  }
  product!: Product;

  ngOnInit(): void {
    var id = Number(this.route.snapshot.paramMap.get("id"));
    
    this.productService.getProductById(id).subscribe(product => {
      this.product = product;
  })
    
  }

  deleteProduct(): void{
    this.productService.deleteProduct(Number(this.product.id)).subscribe(() => {
      this.productService.showMessage("Produto excluído com sucesso");
      this.router.navigate(["/products"]);
    });  
  }

  cancel(){
    this.router.navigate(["/products"])
  }


}

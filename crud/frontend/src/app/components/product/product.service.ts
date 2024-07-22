import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Product } from "./product.model";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  baseUrl = "http://localhost:3001/products";

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  showMessage(msg: string): void {
    this.snackbar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }
}

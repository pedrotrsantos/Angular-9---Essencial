import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Product } from "./product.model";
import { catchError, EMPTY, map, Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  baseUrl = "http://localhost:3001/products";

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj), catchError(e => this.errorHandler(e))
    );
  }

  
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj), catchError(e => this.errorHandler(e))
    );
  }

  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/${id}`).pipe(
      map((obj) => obj), catchError(e => this.errorHandler(e))
    );
  }
  
  getProductsPager(pageIndex: number, pageSize: number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}?_page=${pageIndex + 1}&_limit=${pageSize}`).pipe(
      map((obj) => obj), catchError(e => this.errorHandler(e))
    );
  }
  
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${product.id}`, product).pipe(
      map((obj) => obj), catchError(e => this.errorHandler(e))
    );
  }
  
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}/${id}`).pipe(
      map((obj) => obj), catchError(e => this.errorHandler(e))
    );;
  }
  
  countProducts(): Observable<number> {
    return this.http.get<{ count: number }>(`${this.baseUrl}/count`).pipe(
      map(response => response.count)
    );
  }
  
  showMessage(msg: string, isError : boolean = false): void {
    this.snackbar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? 'msg-error' : 'msg-sucess'
    });
  }
  
  errorHandler(e : any): Observable<any> {
    this.showMessage("Ocorreu um erro", true)
    return EMPTY;
  }
  
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { NgFor } from '@angular/common';
import {MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [NgFor,MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule, RouterLink ],
  templateUrl: "./product-read.component.html",
  styleUrl: './product-read.component.css'
})
export class ProductReadComponent implements OnInit{
  
  products: MatTableDataSource<Product> = new MatTableDataSource();
  displayedColumns = [ 'id','name','price', 'action' ];
  
  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  
  pageIndex = 0;
  pageSize = 10;
  totalElements: number = 0;
  
  constructor(private productService : ProductService){
  }
  ngOnInit(): void {
    this.refresh()
    this.count()
  }
  ngAfterViewInit() {
    this.products.sort = this.sort;
  }

  refresh(event: PageEvent = {length: 0, pageIndex: 0, pageSize: 10}): void {
    this.productService.getProductsPager(event.pageIndex,event.pageSize).subscribe(products => {
      this.pageIndex = event.pageIndex;
      this.pageSize = event.pageSize;
      this.products.data = products;
    });
  }

  count(): any{
    this.productService.countProducts().subscribe(count => {
      this.totalElements = count;
    });
  }
  
}
import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { SidenavComponent } from "./components/template/sidenav/sidenav.component";
import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    HomeComponent,
    ProductCrudComponent,
    MatSnackBarModule,
  ],
  templateUrl: "app.component.html",
})
export class AppComponent {}

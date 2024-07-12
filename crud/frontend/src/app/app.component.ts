import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { SidenavComponent } from "./components/template/sidenav/sidenav.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SidenavComponent],
  templateUrl: "app.component.html",
})
export class AppComponent {}

import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatToolbar } from "@angular/material/toolbar";
import { HomeComponent } from "../../../views/home/home.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-sidenav",
  standalone: true,
  imports: [
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbar,
    HomeComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: "./sidenav.component.html",
  styleUrl: "./sidenav.component.css",
})
export class SidenavComponent {}

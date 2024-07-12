import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatToolbar } from "@angular/material/toolbar";

@Component({
  selector: "app-sidenav",
  standalone: true,
  imports: [MatIconModule, MatSidenavModule, MatListModule, MatToolbar],
  templateUrl: "./sidenav.component.html",
  styleUrl: "./sidenav.component.css",
})
export class SidenavComponent {}

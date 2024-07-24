import { Component, OnInit } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from "@angular/router";
import { HeaderService } from "./header.service";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, RouterLink],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent implements OnInit{
  
  ngOnInit(): void {}

  constructor(private headerService  :HeaderService){}

  get title(): string{
    return this.headerService.headerData.title
  }
  
  get icon(): string{
    return this.headerService.headerData.icon
  }
  get routeUrl(): string{
    return this.headerService.headerData.routeUrl
  }

  
}

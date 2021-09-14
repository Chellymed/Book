import { Component, OnInit } from '@angular/core';
import { LivreServiceService } from '../shared/livre-service.service';
import { ThemeServiceService } from '../shared/theme-service.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {

  constructor(public livreService:LivreServiceService,public themeService:ThemeServiceService) {

  }

  ngOnInit(): void {
    this.livreService.refreshList();
  }

}

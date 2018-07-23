import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { TitleService } from './shared/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private titleService: TitleService,
    private title: Title
  ) { }

  ngOnInit() {
    this.matIconRegistry.addSvgIcon(
      `mts`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/mts.svg')
    );
    this.matIconRegistry.addSvgIcon(
      `beeline`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/beeline.svg')
    );
    this.matIconRegistry.addSvgIcon(
      `megafon`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/megafon.svg')
    );
    this.titleService.init();
  }
}

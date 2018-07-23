import { Component, OnInit, OnDestroy } from '@angular/core';
import { TitleService } from '../../shared/title.service';
import { untilComponentDestroyed } from '../../utils/componetDestroyed';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  public appTitle = 'app';

  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.appTitle = this.titleService.currentTitle || 'app';
    this.titleService.titleChanged$.pipe(
      untilComponentDestroyed(this)
    )
    .subscribe(
      (title) => {
        this.appTitle = title;
      }
    );
  }

  ngOnDestroy() {}

}

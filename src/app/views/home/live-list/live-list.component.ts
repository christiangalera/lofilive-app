import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Lofi } from 'src/app/shared/model/lofi.model';
import { LofiService } from 'src/app/shared/service/lofi.service';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  lofiLive!: Lofi[];
  lofiCompleted!: Lofi[];

  constructor(
    public lofiService: LofiService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getLives();
  }

  getLives(){
    this.lofiService.getLivesWithFlag('live').subscribe(data => {
      this.lofiLive = data.content;
      console.log(this.lofiLive);
      this.lofiLive.forEach(lofi => {
        lofi.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(lofi.lofiLink);
      });
    });

    this.lofiService.getLivesWithFlag('completed').subscribe(data => {
      this.lofiCompleted = data.content;
      console.log(this.lofiCompleted);
      this.lofiCompleted.forEach(lofi => {
        lofi.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(lofi.lofiLink);
      });
    });
  }

}

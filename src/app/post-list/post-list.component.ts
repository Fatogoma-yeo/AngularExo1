import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
      @Input()  postContent : String ;
      @Input()  postTitle : String ;
      @Input()  postLoveIts: number;
      @Input()  postReated_at: Date ;
      @Input()  index: number ;
  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
  }
  getColorGreen(){
    return this.postLoveIts >0 ;
  }
  getColorRed() {
    return this.postLoveIts <0 ;
  }
  onLove(){
    this.appComponent.onSwitchLove(this.index);
  }
  onDown(){
    this.appComponent.onSwitchDown(this.index);
  }
}

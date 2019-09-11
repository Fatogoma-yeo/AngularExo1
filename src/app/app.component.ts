import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts=[
    {
      title: "Mon premier post",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing eit,sed do elusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis",
      loveIts: 0,
      reated_at: new Date()
    },
    {
      title: "Mon deuxième post",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing eit,sed do elusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis",
      loveIts: 0,
      reated_at: new Date()
    },
    {
      title: "Encore un post",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing eit,sed do elusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo.",
      loveIts: 0,
      reated_at: new Date()
    }
  ]
  constructor(){
    
  }
  onSwitchLove(i:number){
      this.posts[i].loveIts=this.posts[i].loveIts+1;
  }
  onSwitchDown(i:number){
      this.posts[i].loveIts=this.posts[i].loveIts-1;
  }
}

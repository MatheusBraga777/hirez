import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Campeões',
  templateUrl: 'ying.page.html',
  styleUrls: ['ying.page.scss']
})
export class yingPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 5; i++) {
      this.items.push({
        title: 'ying ' + i,
        note: 'ying ' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}

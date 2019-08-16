import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Campeões',
  templateUrl: 'inara.page.html',
  styleUrls: ['inara.page.scss']
})
export class inaraPage implements OnInit {
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
        title: 'inara ' + i,
        note: 'inara ' + i,
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

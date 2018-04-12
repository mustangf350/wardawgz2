import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  items: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/items').subscribe(data => {
      console.log(data);
      this.items = data;
    });
  }

}

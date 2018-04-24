import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu-create',
  templateUrl: './menu-create.component.html',
  styleUrls: ['./menu-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuCreateComponent implements OnInit {

  item = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveItems() {
    this.http.post('/items', this.item)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/menu-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}

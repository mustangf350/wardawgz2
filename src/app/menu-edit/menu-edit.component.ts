import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuEditComponent implements OnInit {

  menu: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getmenu(this.route.snapshot.params['id']);
  }

  getmenu(id) {
    this.http.get('/items/'+id).subscribe(data => {
      this.menu = data;
    });
  }

  updateItems(id) {
    this.menu.updated_date = Date.now();
    this.http.put('/items/'+id, this.menu)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/menu-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}

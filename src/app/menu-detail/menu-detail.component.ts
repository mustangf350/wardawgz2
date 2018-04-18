import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuDetailComponent implements OnInit {

  menu = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getItemsDetail(this.route.snapshot.params['id']);
  }

  getItemsDetail(id) {
    this.http.get('/items/'+id).subscribe(data => {
      this.menu = data;
    });
  }

  deleteItems(id) {
    this.http.delete('/items/'+id)
      .subscribe(res => {
          this.router.navigate(['/items']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}

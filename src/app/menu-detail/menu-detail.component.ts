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
    this.getMenuDetail(this.route.snapshot.params['id']);
  }

  getMenuDetail(id) {
    this.http.get('/menu/'+id).subscribe(data => {
      this.menu = data;
    });
  }

  deleteMenu(id) {
    this.http.delete('/menu/'+id)
      .subscribe(res => {
          this.router.navigate(['/menu']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}

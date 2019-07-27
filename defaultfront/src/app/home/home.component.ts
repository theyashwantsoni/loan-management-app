import { Component ,OnInit} from '@angular/core';
import { GeneralService } from '../general.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
// import * as $ from 'jquery';
import * as CanvasJS from '../canvasjs.min';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
//   template :`<ul>
//   <li *ngFor="let item of collection | paginate: { itemsPerPage: 10, currentPage: p }"> {{item._id}} </li>
// </ul>

// <pagination-controls (pageChange)="p = $event"></pagination-controls>

// `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'defaultfront';
  p :number =1;
  token : any;
  topverified:any;
  topnotverified:any;
  datapoints = [];
  collection : any[];
  constructor(private _router:Router, private _user:GeneralService) {
    this._user.allloans()
    .subscribe(c =>{
     this.collection = c ;
    })
  };
  ngOnInit() {
    this.makethechart('2011');
    this._user.topverified().subscribe(data => this.topverified = data);
    this._user.topnotverified().subscribe(data => this.topnotverified = data);

  }

  makethechart(arg){
    this._user.plotgraph(arg).subscribe(data => {
      for(var i=0;i<data.length;i++){
        let item = {y : data[i].int_rate,label:data[i].member_id};
        this.datapoints.push(item);
      }

      console.log(this.datapoints);
      let chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Top 10 customers based on interest paid in "+arg
        },
        data: [{
          type: "column",
          dataPoints: this.datapoints
        }]
      });	
      chart.render();
    });


  }
  curve(argu){
    
    this.datapoints = [];
    this.makethechart(argu);
    
  }
  onSelect(item){
    this.token="/member/"+item;
    this._router.navigate([this.token]);
  }
}


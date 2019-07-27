import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {GeneralService} from "../general.service";
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  code : any;
  memberdetail : any;
  constructor(private route: ActivatedRoute,
    private router: Router,private _gen:GeneralService) { }

  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('code');
    this._gen.memberdetail(this.code).subscribe(data => this.memberdetail = data); 
  }
  
}

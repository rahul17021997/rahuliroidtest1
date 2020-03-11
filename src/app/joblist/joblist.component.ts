import { Component, OnInit } from '@angular/core';
import { GobserviceService } from '../gobservice.service';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {

  constructor(private service:GobserviceService) { }
  joblist:any
  ngOnInit() {
    this.service.getdata().subscribe((item)=>{
      this.joblist=item
     console.log(this.joblist)
    })
  }
  remove(i){
    var n=this.joblist.indexOf(i)
    this.joblist.splice(n,1)
    console.log(n)    
  }

}

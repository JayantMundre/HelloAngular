import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Child3Component } from '../child3/child3.component';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit,AfterViewInit {
@ViewChild('divtag') myDiv!:ElementRef;
@ViewChild(Child3Component)childAccess!:Child3Component;

  constructor() { }


  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    console.log(this.myDiv);
    this.myDiv.nativeElement.className="highlight"
  }
  onAccessProperty(){
   this.childAccess.username="Jayant Duggu friend";
   this.childAccess.increment();
  }
  onAccessMethod(){
   this.childAccess.onShow();
   this.childAccess.dicrement();
  }
}

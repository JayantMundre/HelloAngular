import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {
  strcustompipe:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellendus illum nemo sapiente porro magni totam temporibus, excepturi nulla vel consectetur? Quae nisi provident id, earum quis tempore eos ipsam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellendus illum nemo sapiente porro magni totam temporibus, excepturi nulla vel consectetur? Quae nisi provident id, earum quis tempore eos ipsam!';
  constructor() { }

  ngOnInit(): void {
  }

}

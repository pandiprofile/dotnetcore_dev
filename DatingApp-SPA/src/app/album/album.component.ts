import { Component, OnInit } from '@angular/core';
declare function sayHelloTo(name: any);
declare function logName(name: any);
declare function doSomething();

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  onClick() {
    sayHelloTo('Pandian');
    logName('Pandian');
    doSomething();
  }
}

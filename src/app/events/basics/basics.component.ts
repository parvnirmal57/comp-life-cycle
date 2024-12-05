import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit, DoCheck, AfterContentInit,AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  //it will render first
  constructor(){
    console.log("Constructor")
  }

  //second
  ngOnInit(): void {
    console.log("ngOnInit");
  }

  //third
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  //fourth
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  //fifth
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  //sixth
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  //seven
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  //eight
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  

}

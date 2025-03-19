import { AfterViewInit, Component } from '@angular/core';
declare function headerslider():any
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    headerslider()
  }

}

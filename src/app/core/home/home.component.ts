import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
declare function headerslider():any
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    headerslider()
  }
sliders:{img:string}[]=[
  {
img:'assets/image/img-1.jpg'
  },
  {
    img:'assets/image/img-2.jpg'
      },{
        img:'assets/image/img-3.jpg'
          }

]
}
 
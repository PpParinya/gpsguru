import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  // toggleMenu(): void {
  //   const x = this.elementRef.nativeElement.querySelector("#myTopnav");
  //   if (x.classList.contains("menu")) {
  //     x.classList.add("responsive");
  //   } else {
  //     x.classList.remove("responsive");
  //   }
  // }
  isMenuOpen: boolean = false;

  ngOnInit(): void {
    // กำหนดค่าให้ isMenuOpen เป็น false เมื่อหน้าเว็บโหลดเสร็จสิ้น
    this.isMenuOpen = false;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

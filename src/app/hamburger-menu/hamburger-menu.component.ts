import { Component, OnInit, EventEmitter, Input, Output, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent implements OnInit {
  @Input() fullLine: boolean;
  @Input() close: boolean;
  @Output() clicked: any = new EventEmitter();
  topClose: string;
  middleBottonClose: string;
  classButton = 'line';
  constructor(private el: ElementRef) { }

  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.close = false;
      return;
    }
  }

  ngOnInit() {
    this.classButton = this.fullLine ? 'line--full' : 'line';
  }

  clickMenu() {
    this.close = !this.close;
    this.topClose = this.close ? 'top-close' : '';
    this.middleBottonClose = this.close ? 'middle-bottom-close' : '';
    this.clicked.emit(true);
  }

}

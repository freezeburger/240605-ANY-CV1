import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  standalone: true,
  selector: '[allow-disabled]'
})
export class AllowDisabled{
  @Input() disabled: boolean = false;

  @HostBinding('style.opacity') opacity = 1;
  @HostBinding('style.cursor') cursor = 'pointer';

  @HostListener('click', ['$event'])
  handleClick(event: MouseEvent) {
    if(this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  ngDoCheck() {
    if(this.disabled) {
      this.opacity = 0.5;
      this.cursor = 'not-allowed';
    }
  }
}

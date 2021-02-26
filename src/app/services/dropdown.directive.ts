import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:`[appToggle]`
})

export class ToggleDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOppen() {
        this.isOpen =!this.isOpen;
    }
}
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Dish } from '@libs/models';
import { faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { EnvironmentConfigurationService } from '../../../../../../../libs/core/src/lib/environment-manager';

@Component({
  selector: 'dish-modal',
  templateUrl: './dish-modal.component.html',
  styleUrls: ['./dish-modal.component.scss']
})
export class DishModalComponent {
  readonly closeIcon = faTimesCircle;
  @Input() dish: Dish;
  @Output() close: EventEmitter<any> = new EventEmitter<any>()
  @ViewChild('content') contentElement: ElementRef;

  constructor(private environmentManager: EnvironmentConfigurationService) {
  }

  @HostListener('click', ['$event'])
  clickOut(event) {
    if(!this.contentElement.nativeElement.contains(event.target)) {
      this.close.emit();
    }
  }

  get imagePlaceholder(): string {
    return this.environmentManager.readConfig().baseHref + `./assets/placeholders/placeholder-image.png`
  };

  closeModal() {
    this.close.emit()
  }

  onError(target) {
    target.onerror = null;
    target.src = this.imagePlaceholder;
  }
}

import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { Hotel } from '@libs/models';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { EnvironmentConfigurationService } from '../../../../../../../libs/core/src/lib/environment-manager';

@Component({
  selector: 'hotel-modal',
  templateUrl: './hotel-modal.component.html',
  styleUrls: ['./hotel-modal.component.scss']
})
export class HotelModalComponent {
  readonly closeIcon = faTimesCircle;
  @Input() hotel: Hotel;
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

import { Component } from '@angular/core';
import { IconComponent } from '../../components/icon/icon.component';
import { ContainerComponent } from '../../components/container/container.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [ContainerComponent, IconComponent],
  templateUrl: './settings.component.html'
})
export class SettingsComponent {

}

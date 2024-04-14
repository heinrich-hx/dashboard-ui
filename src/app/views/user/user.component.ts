import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ContainerComponent, IconComponent],
  templateUrl: './user.component.html'
})
export class UserComponent {

}

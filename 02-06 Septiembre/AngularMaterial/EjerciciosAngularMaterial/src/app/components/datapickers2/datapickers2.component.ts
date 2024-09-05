import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { D } from '@angular/cdk/keycodes';
@Component({
  selector: 'app-datapickers2',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './datapickers2.component.html',
  styleUrl: './datapickers2.component.scss'
})
export class Datapickers2Component {
  readonly minDate = new Date(2023, 0, 1);
  readonly maxDate = new Date(Date.now());
}

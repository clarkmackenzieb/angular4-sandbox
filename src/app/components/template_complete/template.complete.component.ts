import { Component } from '@angular/core';

@Component({
  selector: 'app-template-complete',
  templateUrl: `./template.complete.component.html`, // it is best to use a template url for larger components.
  styleUrls: ['./template.complete.component.css']
  /*
  * styles: [`
  *   .special {
  *     color: green;
  *     font-size: 20px;
  *     text-transform: uppercase
  *   }
  *`]
  *Pay attention to this inline example above, notice where the back ticks are used vs the quotes.
  *it is better to use URLs, as they are more organized and doesn't clutter the com.
  */
})

export class TemplateCompleteComponent  {
}

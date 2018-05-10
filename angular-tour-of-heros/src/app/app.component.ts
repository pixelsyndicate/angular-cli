/* like USING statement */
import { Component } from '@angular/core';

/* sets up some constructor properties for the Component class */
@Component({
  selector: 'app-root', // this is CSS selector for the the HTML tag it will write the template to.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* always EXPORT a class so you can import it elsewhere. the actual implementation of Component */
export class AppComponent {
  title = 'Tour of Heroes';
}

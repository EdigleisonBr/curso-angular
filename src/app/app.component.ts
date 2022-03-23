import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    username = 'Edigleison';

    userData = {
        email: 'edigleisonbr@gmail.com',
        role: 'Admin',
    };

    title = 'curso-angular';
}

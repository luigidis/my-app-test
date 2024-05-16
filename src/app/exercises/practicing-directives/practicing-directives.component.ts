import { Component } from "@angular/core";

@Component({
    selector: 'practicing-directives',
    templateUrl: './practicing-directives.component.html',
    styleUrl: './practicing-directives.component.css'
})

export class PraticingDirective {
    secretPasswords = [];

    onDisplayDetails() {
        this.secretPasswords.push(new Date().toISOString());        
    }
}

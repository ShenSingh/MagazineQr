import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  scanResult: any=''; // Add this line
  title = 'MagazineQr';

  onCodeResult(resultString: string) {
    this.scanResult = resultString;
  }
}

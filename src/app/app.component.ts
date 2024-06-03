import { Component } from '@angular/core';
import { VisitorService } from './visitor.service';
import { ResultComponent } from './result/result.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
[x: string]: any;
    title = 'MagazineQr';

  id: string | null = null;
  scanResult: string | null = null;
  imageUrl: string | null = null;
  visitorFound: boolean = false;

  constructor(private visitorService: VisitorService) { 
    

  }

  onCodeResult(resultString: string) {
    alert('Visitor scan-resultString: ' + resultString);
    this.getVisitorById(resultString);
  
  }


  getVisitorById(visitorId: string) {
    



    this.visitorService.getVisitorById(visitorId).subscribe(
      data => {
        this.scanResult = visitorId;
        // Assume visitorImage is the URL of the image
        this.visitorFound = true;  // Update state to show the result component
        alert('Visitor found: ' + data.visitor_id); 
      },
      error => {
        this.visitorFound = false;  // Ensure the result component is hidden on error
        alert('Visitor not found');
      }
      
    );

  }
}

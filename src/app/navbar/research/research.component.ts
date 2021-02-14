import { Component, OnInit } from '@angular/core';
import { Link } from './research-link.model';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  researchLinks: Link[];

  constructor() { 
  this.researchLinks = [
      new Link('Bottle Identification', 'Bottle & Glass Makers Markings', 'Artifact Identification', 'https://sha.org/bottle/makersmarks.htm', 'https://sha.org/bottle/owensbase.jpg'),
      new Link('Missouri Archeological Society', '', 'Native American Artifacts', 'https://www.missouriarchaeologicalsociety.org/collecting-and-identifying-artifacts/identification-resources/', 'https://www.missouriarchaeologicalsociety.org/wp-content/uploads/2018/12/collecting-ad-v1.jpg'),
      new Link('Pottery Marks', 'Asiatic Pheasants wares, Transferware', 'Artifact Identification', 'http://www.asiaticpheasants.co.uk/makersmarks.html', 'http://www.asiaticpheasants.co.uk/markspics-images/Barker%20&%20Kent%20Ltd%20(2).jpg')
    ]
  }
  ngOnInit(): void {
  }

}

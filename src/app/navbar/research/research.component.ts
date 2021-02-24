import { Component, OnInit } from '@angular/core';
import { Link } from '../../models/research-link.model';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  researchLinks: Link[];
  nativeAmericanArtifacts: Link[];
  cleaningLinks: Link[];
  archiving: Link[];

  constructor() { 
  this.researchLinks = [
      new Link('Bottle Identification', 'Bottle & Glass Makers Markings', 'Artifact Identification', 'https://sha.org/bottle/makersmarks.htm', 'https://sha.org/bottle/owensbase.jpg'),
      new Link('Pottery Marks', 'Asiatic Pheasants wares, Transferware', 'Artifact Identification', 'http://www.asiaticpheasants.co.uk/makersmarks.html', 'http://www.asiaticpheasants.co.uk/markspics-images/Barker%20&%20Kent%20Ltd%20(2).jpg'),
      new Link('Glass Bottle Marks', '', 'Artifact Identification','http://glassbottlemarks.com/bottlemarks/', 'https://i0.wp.com/glassbottlemarks.com/wp-content/uploads/2020/01/cropped-Logo-misc-bottle-bases.jpg?w=240&ssl=1'),
      new Link('Historic Glass Bottle Identification', '', 'Artifact Identification','http://virtual.parkland.edu/lstelle1/len/center_for_social_research/english_registry_marks/ARCH%20GUIDE_ENGLISH%20REGISTRY%20MARKS.html', 'http://virtual.parkland.edu/lstelle1/len/center_for_social_research/english_registry_marks/F_Impressed%20Early%20English%20registry%20diamond.jpg'),

    ]
    this.nativeAmericanArtifacts = [
      new Link('Bone Tools', 'Description', 'Category','https://archaeology.uiowa.edu/bone-tools-0','https://archaeology.uiowa.edu/sites/archaeology.uiowa.edu/files/bone14.jpg'),
      new Link('Identifying Flint Artifacts', 'Identifying found projectile points', 'Artifact Identification','https://oplin.org/point/glossary.html', 'https://oplin.org/point/images/composit.gif'),
      new Link('Clay Tobacco Pipes', '', 'Artifact Identification', 'https://anthromuseum.missouri.edu/exhibit/pamplin-clay-tobacco-pipes', 'https://anthromuseum.missouri.edu/sites/default/files/styles/large/public/exhibit-img/pamplin_group_a.jpg?itok=R3DWQQZ2'),
      new Link('Missouri Archeological Society', '', 'Native American Artifacts', 'https://www.missouriarchaeologicalsociety.org/collecting-and-identifying-artifacts/identification-resources/', 'https://www.missouriarchaeologicalsociety.org/wp-content/uploads/2018/12/collecting-ad-v1.jpg'),
      new Link('Ground Stone Artifacts', '', 'Artifact Identification', 'https://archaeology.uiowa.edu/ground-stone-artifacts-0', 'https://archaeology.uiowa.edu/sites/archaeology.uiowa.edu/files/gs1.jpg'),
      new Link('Prehistoric Pottery', '', 'Artifact Identification', 'https://archaeology.uiowa.edu/prehistoric-pottery-0', 'https://archaeology.uiowa.edu/sites/archaeology.uiowa.edu/files/pot7.JPG')
    ]

    this.cleaningLinks = [
      new Link('Electrolysis', 'Cleaning metal oxidation', 'Cleaning', 'https://www.robotroom.com/Rust-Removal-3.html', 'https://www.robotroom.com/Rust-Removal/Multiple-graphite-anodes-for-rust-removal-using-electrolysis.jpg') 

    ]
    
    this.archiving = [
      new Link('Managing Collections','','Archiving','https://www.nps.gov/archeology/collections/mgt_pr.htm','https://www.nps.gov/archeology/collections/GRAPHICS/Arch4_sm.jpg')
    ]
  }
  ngOnInit(): void {
  }

}

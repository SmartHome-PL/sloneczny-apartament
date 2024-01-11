import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OswPageComponent } from './osw-page.component';

describe('OswPageComponent', () => {
  let component: OswPageComponent;
  let fixture: ComponentFixture<OswPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OswPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OswPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

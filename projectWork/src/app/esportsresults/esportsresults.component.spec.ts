import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsportsresultsComponent } from './esportsresults.component';

describe('EsportsresultsComponent', () => {
  let component: EsportsresultsComponent;
  let fixture: ComponentFixture<EsportsresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsportsresultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsportsresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

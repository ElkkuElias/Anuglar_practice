import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPipesComponentComponent } from './first-pipes-component.component';

describe('FirstPipesComponentComponent', () => {
  let component: FirstPipesComponentComponent;
  let fixture: ComponentFixture<FirstPipesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstPipesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstPipesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

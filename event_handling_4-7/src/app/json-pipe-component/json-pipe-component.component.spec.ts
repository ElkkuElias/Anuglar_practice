import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPipeComponentComponent } from './json-pipe-component.component';

describe('JsonPipeComponentComponent', () => {
  let component: JsonPipeComponentComponent;
  let fixture: ComponentFixture<JsonPipeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonPipeComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonPipeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

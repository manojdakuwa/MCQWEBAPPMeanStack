import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqQuestComponent } from './mcq-quest.component';

describe('McqQuestComponent', () => {
  let component: McqQuestComponent;
  let fixture: ComponentFixture<McqQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McqQuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McqQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

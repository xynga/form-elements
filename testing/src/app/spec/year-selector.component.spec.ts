import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { YearSelectorComponent } from 'xynga-form-elements';
import { FormsModule } from '@angular/forms';

describe('YearSelectorComponent', () => {
  let fixture: ComponentFixture<YearSelectorComponent>;
  let ys, ysComp, ysEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        YearSelectorComponent
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearSelectorComponent);
    ys = fixture.debugElement;
    ysComp = ys.componentInstance;
    ysEl = ys.nativeElement;
  });

  it('should create a year selector element', () => {
    expect(ys).toBeTruthy();
  });
});

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { YearSelectorComponent } from './year-selector';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

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

  it('should populate the selector with input years', () => {
    ysComp.years = ['1994', '1995', '1996', '1997', '1998', '1999', '2000'];
    ysComp.year = '1994';
    fixture.detectChanges();
    const selectEl = ys.query(By.css('select')).nativeElement;
    const optionDEs = ys.queryAll(By.css('option'));
    fixture.whenStable().then(() => {
      expect(selectEl.value).toBe('1994');
      expect(optionDEs[1].nativeElement.value).toBe('1995');
    });
  });

  it('should emit year when selector changed', () => {
    ysComp.years = ['1994', '1995', '1996', '1997', '1998', '1999', '2000'];
    ysComp.year = '1994';
    fixture.detectChanges();
    const onChangeSpy = spyOn(ysComp, 'onChange').and.callThrough();
    fixture.detectChanges();
    const selectEl = ys.query(By.css('select')).nativeElement;
    selectEl.value = '1995';
    selectEl.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(onChangeSpy).toHaveBeenCalled();
    });
  });
});

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from 'xynga-form-elements';
import { By } from '@angular/platform-browser';

describe('DropdownComponent', () => {
  let fixture: ComponentFixture<DropdownComponent>;
  let dd, ddComp, ddEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DropdownComponent
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(()=> {
    fixture = TestBed.createComponent(DropdownComponent);
    dd = fixture.debugElement;
    ddComp = dd.componentInstance;
    ddEl = dd.nativeElement;
  });

  it('should create a dropdown element', () => {
    expect(dd).toBeTruthy();
  });

  it('should initialize value to selected input', () => {
    ddComp.selected = '';
    ddComp.options = (sel) => !sel ? sel : undefined;
    fixture.detectChanges();
    expect(ddComp.getOptions()).toBe('');
  });

  it('should display selected input option', () => {
    ddComp.name = 'Test Name';
    ddComp.options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    ddComp.selected = 'Option 3';
    const getOptionsSpy = spyOn(ddComp, 'getOptions').and.callThrough();
    fixture.detectChanges();
    expect(getOptionsSpy).toHaveBeenCalled();
  });

  it('should call onChange when selection changes', () => {
    ddComp.name = 'Test Name';
    ddComp.options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    ddComp.selected = 'Option 3';
    const onChangeSpy = spyOn(ddComp, 'onChange').and.callThrough();
    fixture.detectChanges();
    const selectEl = dd.query(By.css('select')).nativeElement;
    selectEl.value = 'Option 3';
    selectEl.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(onChangeSpy).toHaveBeenCalled();
    });
  });
});

import { TestBed, async, ComponentFixture, fakeAsync, flush, tick } from '@angular/core/testing';
import { AuComponent, RadioButtonComponent } from 'xynga-form-elements';
import { By } from '@angular/platform-browser';

describe('RadioButtonComponent', () => {
  let fixture: ComponentFixture<RadioButtonComponent>;
  let rb, rbComp, rbEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RadioButtonComponent,
        AuComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonComponent);
    rb = fixture.debugElement;
    rbComp = rb.componentInstance;
    rbEl = rb.nativeElement;
  });

  it('should create a radio button element', () => {
    expect(rb).toBeTruthy();
  });

  it('should populate with the button inputs', () => {
    rbComp.buttons = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    fixture.detectChanges();
    const auEl = rb.query(By.css('au .option')).nativeElement;
    expect(auEl.textContent).toContain('Option 1');
  });

  it('should emit selection on click', () => {
    let selected;
    const subscription = rbComp.selectedChanged.subscribe((sel) => { selected = sel; });
    rbComp.buttons = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    fixture.detectChanges();
    const onClickSpy = spyOn(rbComp, 'onClick').and.callThrough();
    const auMultDE = rb.queryAll(By.css('au .option'));
    auMultDE[1].triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(onClickSpy).toHaveBeenCalled();
    fixture.whenStable().then(() => {
      expect(selected).toEqual(1);
    });
    subscription.unsubscribe();
  });

  it('should work with keypress on button', fakeAsync(() => {
    let selected;
    const subscription = rbComp.selectedChanged.subscribe((sel) => { selected = sel; });
    rbComp.buttons = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    fixture.detectChanges();
    const onKeydownSpy = spyOn(rbComp, 'onKeydown').and.callThrough();
    const auMultDE = rb.queryAll(By.css('au .option'));
    auMultDE[0].triggerEventHandler('click', {});
    fixture.detectChanges();
    flush();
    auMultDE[1].triggerEventHandler('keydown', {keyCode: 13, stopPropagation: () => true});
    fixture.detectChanges();
    flush();
    expect(onKeydownSpy).toHaveBeenCalled();
    expect(selected).toEqual(1);
    subscription.unsubscribe();
  }));

  it('should work with keypress on component', fakeAsync(() => {
    let selected;
    const subscription = rbComp.selectedChanged.subscribe((sel) => { selected = sel; });
    rbComp.buttons = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    fixture.detectChanges();
    const onKeydownSpy = spyOn(rbComp, 'onKeydown').and.callThrough();
    const auMultDE = rb.queryAll(By.css('au .option'));
    const auParentDE = rb.query(By.css('au'));
    auMultDE[0].triggerEventHandler('click', {});
    fixture.detectChanges();
    flush();
    auParentDE.triggerEventHandler('keydown', {keyCode: 13, stopPropagation: () => true});
    fixture.detectChanges();
    flush();
    expect(onKeydownSpy).toHaveBeenCalled();
    expect(selected).toEqual(1);
    subscription.unsubscribe();
  }));
});

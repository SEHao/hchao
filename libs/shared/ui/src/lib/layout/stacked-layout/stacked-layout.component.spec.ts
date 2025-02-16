import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StackedLayoutComponent } from './stacked-layout.component';

describe('StackedLayoutComponent', () => {
  let component: StackedLayoutComponent;
  let fixture: ComponentFixture<StackedLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackedLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StackedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

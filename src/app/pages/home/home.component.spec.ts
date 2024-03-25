import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { BannerComponent } from 'src/app/shared/banner/banner.component';
import { ContainerComponent } from 'src/app/shared/container/container.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, BannerComponent, ContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render banner component', () => {
    const bannerComponent = fixture.debugElement.query(
      By.directive(BannerComponent)
    );
    expect(bannerComponent).toBeTruthy();
  });

  it('should render container component', () => {
    const containerComponent = fixture.debugElement.query(
      By.directive(ContainerComponent)
    );
    expect(containerComponent).toBeTruthy();
  });

  it('should pass correct src and alt to banner component', () => {
    const bannerComponent = fixture.debugElement.query(
      By.directive(BannerComponent)
    );
    const bannerElement = bannerComponent.componentInstance as BannerComponent;
    expect(bannerElement.src).toEqual('assets/img/banner.png');
    expect(bannerElement.alt).toEqual(
      'banner com uma moça sentada diante do pc com a escrita ao lado de to do list'
    );
  });
});

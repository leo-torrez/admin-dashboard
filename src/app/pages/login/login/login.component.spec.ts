import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { TITULO_CHAMADA_LOGIN } from '../../../constants/constants-titulo';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return title page "Seja Bem vindo"', () => {
    const element = fixture.debugElement.nativeElement;
    const tituloDaPagina = element.querySelector('#sejaBemVindo');
    expect(tituloDaPagina.textContent).toContain(TITULO_CHAMADA_LOGIN);
  });

  it(`should have as title login 'Seja Bem Vindo'`, () => {
    const loginComponent = fixture.debugElement.componentInstance;
    expect(loginComponent.tituloChamadaLogin).toEqual(TITULO_CHAMADA_LOGIN);
  });
});

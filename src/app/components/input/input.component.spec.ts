import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { ListaDeTarefasService } from 'src/app/service/lista.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let listaService: ListaDeTarefasService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [FormsModule, MatButtonModule],
      providers: [ListaDeTarefasService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    listaService = TestBed.inject(ListaDeTarefasService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add item', () => {
    spyOn(listaService, 'adicionarItemNaLista');
    component.valorItem = 'Test item';
    component.adicionarItem();
    expect(listaService.adicionarItemNaLista).toHaveBeenCalledWith('Test item');
    expect(component.valorItem).toEqual('');
  });

  it('should edit item', () => {
    spyOn(listaService, 'editarItemDaLista');
    const editedItem = {
      id: 1,
      nome: 'Edited Item',
      data: '',
      concluida: false,
    };
    component.itemQueVaiSerEditado = editedItem;
    component.valorItem = 'Edited Item';
    component.editarItem();
    expect(listaService.editarItemDaLista).toHaveBeenCalledWith(
      editedItem,
      'Edited Item'
    );
    expect(component.valorItem).toEqual('');
    expect(component.editando).toBeFalsy();
    expect(component.textoBtn).toEqual('Salvar Item');
  });

  it('should change to edit mode', () => {
    const editedItem = {
      id: 1,
      nome: 'Edited Item',
      data: '',
      concluida: false,
    };
    component.itemQueVaiSerEditado = editedItem;
    component.ngOnChanges({
      itemQueVaiSerEditado: { firstChange: false },
    } as any);
    expect(component.editando).toBeTruthy();
    expect(component.textoBtn).toEqual('Editar item');
    expect(component.valorItem).toEqual('Edited Item');
  });

  it('should clear input field', () => {
    component.valorItem = 'Test Item';
    component.limparCampo();
    expect(component.valorItem).toEqual('');
  });
});

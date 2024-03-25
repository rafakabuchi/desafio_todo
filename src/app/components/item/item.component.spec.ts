import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { Item } from 'src/app/interfaces/item';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let item: Item;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemComponent],
      imports: [MatIconModule],
    }).compileComponents();
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    item = {
      id: 1,
      nome: 'Test Item',
      data: '2024-03-24',
      concluida: false,
    };
    component.item = item;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit item to edit', () => {
    spyOn(component.emitindoItemParaEditar, 'emit');
    const editIcon = fixture.debugElement.query(By.css('.edit-icon'));
    editIcon.triggerEventHandler('click', null);
    expect(component.emitindoItemParaEditar.emit).toHaveBeenCalledWith(item);
  });

  it('should emit item id to delete', () => {
    spyOn(component.emitiandoIdParaDeletar, 'emit');
    const deleteIcon = fixture.debugElement.query(By.css('.delete-icon'));
    deleteIcon.triggerEventHandler('click', null);
    expect(component.emitiandoIdParaDeletar.emit).toHaveBeenCalledWith(item.id);
  });

  it('should show delete and edit icons if item is not concluded', () => {
    expect(fixture.debugElement.query(By.css('.delete-icon'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.edit-icon'))).toBeTruthy();
  });

  it('should not show delete and edit icons if item is concluded', () => {
    component.item.concluida = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.delete-icon'))).toBeFalsy();
    expect(fixture.debugElement.query(By.css('.edit-icon'))).toBeFalsy();
  });
});

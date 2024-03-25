import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;

  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitiandoIdParaDeletar = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    console.log('onChanges, para cada item');
  }

  ngOnDestroy(): void {
    console.log('onDestroy, para cada limpeza/remoção');
  }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  deletarItem() {
    this.emitiandoIdParaDeletar.emit(this.item.id);
  }
}

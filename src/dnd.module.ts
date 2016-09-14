import { NgModule } from '@angular/core';

import { DraggableComponent } from './draggable.component';
import { DroppableComponent } from './droppable.component';
import { SortableComponent, SortableContainer } from './sortable.component';

import { DragDropConfig } from './dnd.config';
import { DragDropService, DragDropSortableService } from './dnd.service';

export { DragDropConfig } from './dnd.config';
export { DragDropService, DragDropSortableService } from './dnd.service';

@NgModule({
  declarations: [
    DraggableComponent,
    DroppableComponent,
    SortableComponent,
    SortableContainer
  ],
  providers: [
    DragDropConfig,
    DragDropService,
    DragDropSortableService
  ],
  exports: [
    DraggableComponent,
    DroppableComponent,
    SortableComponent,
    SortableContainer
  ]
})
export class DndModule{}
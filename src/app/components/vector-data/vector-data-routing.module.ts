import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadingFeaturesComponent } from './downloading-features/downloading-features.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DrawingNewFeaturesComponent } from './drawing-new-features/drawing-new-features.component';
import { ModifyingFeaturesComponent } from './modifying-features/modifying-features.component';
import { RenderJsonComponent } from './render-json/render-json.component';
import { SnappingComponent } from './snapping/snapping.component';


const routes: Routes = [
    {
        path: 'renderJSON',
        component: RenderJsonComponent,
    },
    {
        path: 'dragDrop',
        component: DragDropComponent,
    },
    {
        path: 'modifyingFeatures',
        component: ModifyingFeaturesComponent
    },
    {
        path: 'drawingNewFeatures',
        component: DrawingNewFeaturesComponent
    },
    {
        path: 'snapping',
        component: SnappingComponent
    },
    {
        path: 'downloading',
        component: DownloadingFeaturesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VectorDataRoutingModule {
}

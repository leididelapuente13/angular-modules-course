import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/components/hero.component";
import { ListComponent } from "./list/components/list.component";

@NgModule({
    declarations: [
        HeroComponent,
        ListComponent
    ],
    exports: [
        HeroComponent,
        ListComponent
    ]
})
export class HeroesModule{

}
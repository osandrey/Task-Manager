import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header-component/header.component';
import {UserComponent} from './user/user.component';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from './shared/shared.module';
import {TasksModule} from './tasks/task/tasks.module';


@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  imports: [BrowserModule, SharedModule, TasksModule],
  bootstrap: [AppComponent],

})
export class AppModule {

}

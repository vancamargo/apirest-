import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateAccountPage} from './create-accont';


@NgModule({
  declarations: [
    CreateAccountPage
  ],
  imports: [
    IonicPageModule.forChild(CreateAccountPage),
  ],
})
export class CreateAccontPageModule {}

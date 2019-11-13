import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewChilivoteComponent } from './new-chilivote/new-chilivote.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { TabsbarComponent } from './shared/tabsbar/tabsbar.component';
//import { CloudinaryModule } from '@cloudinary/angular-5.x';
//import * as  Cloudinary from 'cloudinary-core';
import { HttpClientModule }    from '@angular/common/http';
import { UploadBottomSheetComponent } from './modals/upload-bottom-sheet/upload-bottom-sheet.component';
import { FormsModule } from '@angular/forms';

import { Cloudinary } from '@cloudinary/angular-5.x/src/cloudinary.service';
import { Cloudinary as CloudinaryCore } from 'cloudinary-core';
import { CloudinaryConfiguration, CloudinaryModule } from '@cloudinary/angular-5.x';
import cloudinaryConfiguration from '../app/config';

//Angular Material
import { MatTabsModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatBottomSheetModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

import { ForYouTabComponent } from './tabs/for-you-tab/for-you-tab.component';
import { LoginComponent } from './auth/login/login.component';
import { MyChilivotesComponent } from './components/my-chilivotes/my-chilivotes.component';
import { ChilivoteContainerComponent } from './components/chilivote-container/chilivote-container.component';
import { DeleteChilivoteSheetComponent } from './modals/delete-chilivote-sheet/delete-chilivote-sheet.component';
import { FollowingTabComponent } from './tabs/following-tab/following-tab.component';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { FbLoginComponent } from './fb-login/fb-login.component';

export const cloudinary = {
  Cloudinary: CloudinaryCore
};
export const config: CloudinaryConfiguration = cloudinaryConfiguration;

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewChilivoteComponent,
    ToolbarComponent,
    TabsbarComponent,
    UploadBottomSheetComponent,
    ForYouTabComponent,
    LoginComponent,
    MyChilivotesComponent,
    ChilivoteContainerComponent,
    DeleteChilivoteSheetComponent,
    FollowingTabComponent,
    UserContainerComponent,
    FbLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    CloudinaryModule.forRoot(cloudinary, config),
    HttpClientModule,
    MatBottomSheetModule,
    MatListModule,
    MatCardModule,
    FormsModule
  ],
  entryComponents:[UploadBottomSheetComponent, DeleteChilivoteSheetComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

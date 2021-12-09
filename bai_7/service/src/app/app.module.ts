import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DictionaryComponent } from './dictionary/dictionary.component';
import { WordDetailComponent } from './word-detail/word-detail.component';
import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    DictionaryComponent,
    WordDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  blogElements = [{ title: 'String', content: 'String' }];

  onBlogAdded(blogData: { title: string; content: string }) {
    this.blogElements.push({
      title: blogData.title,
      content: blogData.content,
    });
  }
}

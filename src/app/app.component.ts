import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  blogData: { title: string; content: string; dikhanaHH: boolean }[] = [];
  ix: number;

  onSaveClick(blogTitle: HTMLInputElement, blogContent: HTMLInputElement) {
    if (blogContent.value !== '') {
      if (this.ix >= 0) {
        this.blogData[this.ix].title = blogTitle.value;
        this.blogData[this.ix].content = blogContent.value;
        this.blogData[this.ix].dikhanaHH = true;
      } else {
        this.blogData.push({
          title: blogTitle.value,
          content: blogContent.value,
          dikhanaHH: true,
        });
      }
    }

    blogTitle.value = '';
    blogContent.value = '';
    this.ix = -1;
  }

  onDeleteClick(i: number) {
    this.blogData.splice(i, 1);
  }
  onEditClick(
    i: number,
    blogTitle: HTMLInputElement,
    blogContent: HTMLInputElement
  ) {
    blogTitle.value = this.blogData[i].title;
    blogContent.value = this.blogData[i].content;
    this.ix = i;
  }

  onInputChange(searched: HTMLInputElement) {
    console.log('oninputWorking');
    if (searched.value !== '') {
      console.log('if serached.value working');
      for (let index in this.blogData) {
        console.log('for let working');
        if (this.blogData[index].title.search(searched.value) >= 0) {
          console.log('if working');
          this.blogData[index].dikhanaHH = true;
        } else this.blogData[index].dikhanaHH = false;
        console.log('else working');
      }
    } else {
      for (let index in this.blogData) {
        this.blogData[index].dikhanaHH = true;
      }
    }
  }
}

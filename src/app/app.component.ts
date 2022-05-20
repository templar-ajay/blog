import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  blogData: {
    title: string;
    content: string;
    showToAdmin: boolean;
    comments: { userName: string; userComment: string; approved: boolean }[];
  }[] = [];
  ix: number;
  exampleUser: string;
  exapleComment: string;

  onSaveClick(blogTitle: HTMLInputElement, blogContent: HTMLInputElement) {
    if (blogContent.value !== '') {
      if (this.ix >= 0) {
        this.blogData[this.ix].title = blogTitle.value;
        this.blogData[this.ix].content = blogContent.value;
        this.blogData[this.ix].showToAdmin = true;
      } else {
        this.blogData.push({
          title: blogTitle.value,
          content: blogContent.value,
          showToAdmin: true,
          comments: [
            {
              userName: 'exampleUser',
              userComment: 'exampleComment',
              approved: false,
            },
            {
              userName: 'secondUser',
              userComment: 'secondComment',
              approved: false,
            },
          ],
        });
      }
    }

    blogTitle.value = '';
    blogContent.value = '';
    this.ix = -1;
    console.log(this.blogData);
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
          this.blogData[index].showToAdmin = true;
        } else this.blogData[index].showToAdmin = false;
        console.log('else working');
      }
    } else {
      for (let index in this.blogData) {
        this.blogData[index].showToAdmin = true;
      }
    }
  }
  onCommentApproved(i, k) {
    this.blogData[i].comments[k].approved = true;
  }
  onCommentDeleteBtnClicked(
    i: number,
    k: number,
    theButtonItself: HTMLInputElement
  ) {
    if (theButtonItself.innerText == 'Delete') {
      this.blogData[i].comments.splice(k, 1);
    } else {
      this.blogData[i].comments[k].approved = false;
    }
  }
}

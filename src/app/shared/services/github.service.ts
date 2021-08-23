import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Github } from '../models/github.model';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  constructor(private http:HttpClient) { }


  sum(num1,num2){
    return num1+num2;
  }


  githubRepos(name:string):Observable<Github[]>{
    console.log('>>>>>>>>>');
    return this.http.get<Github[]>('https://api.github.com/users/'+name+'/repos');
  }

  postIssueComment(name:string,repoName:string,issueNum:string,body:string):Observable<any[]>{
    console.log('cREATE COMMENT FOR ISSUE');
    return this.http.post<any[]>('https://api.github.com/repos/'+name+'/'+repoName+'/issues/'+issueNum+'/comments',body);
  }


  postUser():Observable<any[]>{
    console.log('cREATE COMMENT FOR ISSUE');
    return this.http.post<any[]>('https://jsonplaceholder.typicode.com/posts',JSON.stringify({
      title: 'Angular demo',
      body: 'Sample',
      userId: 10212,
    }));
  }


  



  

}

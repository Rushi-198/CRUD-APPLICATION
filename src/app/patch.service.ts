import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Ipatch } from './model/patch';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PatchService implements OnInit {


  loginstatus: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false)


  constructor(private _httpclient: HttpClient,
  ) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  // getAllpost() : Observable<Ipatch[]>{
  //   return this._httpclient.get<Ipatch[]>(environment.baseUrl)
  // }


  // firebase
  getAllpost(): Observable<Ipatch[]> {
    return this._httpclient.get<Ipatch[]>(environment.FirbaseDB + "post.json")
      .pipe(
        map(res => {
          let arr = []

          for (let key in res) {
            // console.log(key);
            let obj: Ipatch = {
              // title: res[ key ].title,
              // author: res[ key ].author,
              ...res[ key ],
              id: key
            }

            arr.unshift(obj)
          }
          return arr
        })
      )
  }



  getsinglepost(id: string): Observable<Ipatch> {
    let postUrl = `${environment.FirbaseDB}post/${id}/.json`
    return this._httpclient.get<Ipatch>(postUrl)
  }



  patchpost(id: string, obj: Ipatch): Observable<Ipatch> {
    let postUrl = `${environment.FirbaseDB}post/${id}/.json`
    return this._httpclient.patch<Ipatch>(postUrl, obj)
  }


  // createPost(obj : Ipatch): Observable<Ipatch>{
  //   return this._httpclient.post<Ipatch>(environment.baseUrl, obj)
  // }

  // firebase 
  createPost(obj: Ipatch): Observable<any> {
    return this._httpclient.post<any>(environment.FirbaseDB + "post.json", obj)
  }


  deletePost(id: string): Observable<any> {
    let postUrl = `${environment.FirbaseDB}post/${id}/.json`

    return this._httpclient.delete<any>(postUrl)
  }



}

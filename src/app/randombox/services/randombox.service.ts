import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RandomboxService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<{
      lists: {
        id: number;
        createTime: string;
        type: 'NORMAL' | 'DECORATION';
        items: {
          id: number;
          name: string;
          percentage: string;
        }[];
      }[];
    }>(`http://api.icepeng.com:3003`);
  }
}



import { HttpClient } from '@angular/common/http';
import { EventEmitter, forwardRef, Inject, Injectable } from '@angular/core';

import { BehaviorSubject, Subscription } from 'rxjs';

import { of } from 'rxjs';
import { fakeClusterStoreData, fakeStoreOverLapData } from './data/fakeData';

@Injectable({
  providedIn: "root",
})
export class GridService {



  /**
   * Hari Sankar
   */
  private readonly showLoaderInClusterStoreRankingTab$ =
    new BehaviorSubject<any>(null);
  private readonly setClusterStoreRankingTabData$ = new BehaviorSubject<any>(
    null
  );



  constructor(
    private readonly http: HttpClient
  ) {}


  /**
   * Hari Sankar
   * @param data
   */
  showLoaderInClusterStoreRankingTab(data) {
    this.showLoaderInClusterStoreRankingTab$?.next(data);
  }
  /**
   * Hari Sankar
   * @returns data
   */
  getShowLoaderInClusterStoreRankingTab() {
    return this.showLoaderInClusterStoreRankingTab$.asObservable();
  }


  invokeFirstComponentFunction = new EventEmitter();
  subsVar: Subscription;

  onFirstComponentButtonClick(params) {
    this.invokeFirstComponentFunction.emit(params);
  }

  invokeHeaderComponentFunction = new EventEmitter();
  subVar: Subscription;

  onClusterHeaderClick(params) {
    this.invokeHeaderComponentFunction.emit(params);
  }

  invokeDeepDiveHeaderComponentFunction = new EventEmitter();
  subVars: Subscription;

  onDeepDiveHeaderClick(params) {
    this.invokeDeepDiveHeaderComponentFunction.emit(params);
  }


  /**
   * Hari Sankar
   * @param payload
   * @returns data
   */
  getClusterStoreRanking(payload) {
    // return this.http.post(API.CLUSTER_DEEP_DIVE, payload);
    return of(fakeClusterStoreData);
  }


  /**
   * Hari Sankar
   * @param payload
   * @returns data
   */
   getStoreOverlap(payload) {
    // return this.http.post(API.CLUSTER_DEEP_DIVE, payload);
    return of(fakeStoreOverLapData);
  }

  /**
   * Hari Sankar
   * @param data
   */
  setClusterStoreRankingData(data) {
    this.setClusterStoreRankingTabData$?.next(data);
  }
  /**
   * Hari Sankar
   * @returns
   */
  getClusterStoreRankingData() {
    return this.setClusterStoreRankingTabData$.asObservable();
  }
}

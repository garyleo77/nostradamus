import { Component, OnInit } from '@angular/core';
import { StockService } from '../shared/services/stock.service';
import * as THREE from 'three';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  stockData: any = {};

  constructor(private stockService: StockService) {

  }

  ngOnInit() {
    this.stockService.getStockInfo('function=TIME_SERIES_WEEKLY&symbol=IBM').subscribe((result: any) => {
      console.log('test: ', result);
      this.stockData = result;
    });
    this.stockService.getUserInfo('Gary').subscribe((result: any) => {
      console.log('test2:', result);
    });
    this.displayData();
  }

  displayData() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }
}

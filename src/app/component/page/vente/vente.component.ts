import { Component, OnInit } from '@angular/core';
import {  MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-vente',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './vente.component.html',
  styleUrl: './vente.component.css',
})
export class VenteComponent implements OnInit {
  ngOnInit(): void {}
}

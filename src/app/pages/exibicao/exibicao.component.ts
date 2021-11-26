import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-exibicao',
  templateUrl: './exibicao.component.html',
  styleUrls: ['./exibicao.component.css']
})

export class ExibicaoComponent implements OnInit {

  items: MenuItem[] = [];
  home!: MenuItem;
  primeiro = true;

  imagem = '';
  marca = '';
  modelo = '';
  imgMarca = '';

  constructor(private route: ActivatedRoute ) { 
    this.route.queryParams.subscribe(params => {

      let url = params['url'];
      let marca = params['marca'];
      let modelo = params['modelo'];
      let imgMarca = params['imgMarca'];

      this.imagem = url;
      this.marca = marca;
      this.modelo = modelo;
      this.imgMarca = imgMarca;

      // console.log(this.marca); // Print the parameter to the console. 
      // console.log(this.modelo); // Print the parameter to the console.
      // console.log(this.imgMarca); // Print the parameter to the console.
      // console.log(this.imagem); // Print the parameter to the console.

      this.InsereRota(this.marca, this.modelo);
  });
  }

  ngOnInit(): void { 
    this.home = {icon: 'pi pi-home', routerLink: '/home'};     
  }

    public InsereRota(marca: string, modelo: string){
      this.items = [];
      let item: MenuItem = {};
      item.label = marca;
      item.routerLink = '/marca';
      item.queryParams = {                
        url: this.imgMarca,                        
                modelo:'',
                marca: this.marca            
    };
      if (marca != ''){
        this.items.push(item);
      }

      let item2: MenuItem = {};
      item2.label = modelo; 
      if (modelo != ''){
        this.items.push(item2);        
      }
       // console.log(item2);        
    }


}

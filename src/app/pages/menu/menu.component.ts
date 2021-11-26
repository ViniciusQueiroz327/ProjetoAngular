import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    items: MenuItem[] = [];

    constructor() { }

    ngOnInit(): void {

        this.items = [

            {
                label: 'Xbox',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png',
                    modelo: '',
                    marca: 'Xbox'
                },

                items: [
                    {
                        "label": "Xbox 360",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images-americanas.b2w.io/produtos/01/00/img/2415036/5/2415036523_1GG.jpg",
                            "marca": "Xbox",
                            "modelo": "Xbox 360",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Xbox 360 Super Slim",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.exoticus.com.br/wp-content/uploads/2020/10/D_NQ_NP_2X_708483-MLA32731207946_112019-F.png",
                            "marca": "Xbox",
                            "modelo": "Xbox 360 Super Slim",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Xbox One Fat",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn.awsli.com.br/600x450/138/138431/produto/67973982/3b906e7e02.jpg",
                            "marca": "Xbox",
                            "modelo": "Xbox One Fat",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Xbox One Slim",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=965324038",
                            "marca": "Xbox",
                            "modelo": "Xbox One Slim",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Xbox One X",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.zst.com.br/thumbs/12/a/15/186841451.jpg",
                            "marca": "Xbox",
                            "modelo": "Xbox One X",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Xbox Series S",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://http2.mlstatic.com/D_NQ_NP_957214-MLA44492746402_012021-O.jpg",
                            "marca": "Xbox",
                            "modelo": "Xbox Series S",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Xbox Series X",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images.kabum.com.br/produtos/fotos/128560/console-microsoft-xbox-series-x-1tb-preto-rrt-00006_1601067024_g.jpg",
                            "marca": "Xbox",
                            "modelo": "Xbox Series X",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Controle Xbox One (Preto)",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1528361960",
                            "marca": "Xbox",
                            "modelo": "Controle Xbox One (Preto)",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Controle Xbox One (Branco)",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images-americanas.b2w.io/produtos/01/00/img/134347/6/134347667_1GG.jpg",
                            "marca": "Xbox",
                            "modelo": "Controle Xbox One (Branco)",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Controle Xbox Series (Branco)",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images-americanas.b2w.io/produtos/01/00/img/3044271/6/3044271603_1GG.jpg",
                            "marca": "Xbox",
                            "modelo": "Controle Xbox Series (Branco)",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    }
                ]
            },

            {
                label: 'PlayStation',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://logowik.com/content/uploads/images/playstation1990.jpg',
                    modelo: '',
                    marca: 'PlayStation'
                },
                items: [
                    {
                        label: 'PlayStation 2',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/PS2-Fat-Console-Set.jpg/1200px-PS2-Fat-Console-Set.jpg',
                            modelo: 'PlayStation 2',
                            marca: 'PlayStation',
                            imgMarca: 'https://logowik.com/content/uploads/images/playstation1990.jpg'
                        }
                    },
                    {
                        label: 'PlayStation 3',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://sm.ign.com/t/ign_br/screenshot/default/ps3-fat-console_f6db.1200.png',
                            marca: 'PlayStation',
                            modelo: 'PlayStation 3',
                            imgMarca: 'https://logowik.com/content/uploads/images/playstation1990.jpg'

                        }
                    },
                    {
                        label: 'PlayStation 3 Slim',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://http2.mlstatic.com/D_NQ_NP_2X_946709-MLA40694915961_022020-V.webp',
                            marca: 'PlayStation',
                            modelo: 'PlayStation 3 Slim',
                            imgMarca: 'https://logowik.com/content/uploads/images/playstation1990.jpg'
                        }
                    },
                    {
                        label: 'PlayStation 3 Super Slim',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://http2.mlstatic.com/D_NQ_NP_771043-MLA44207532705_112020-O.jpg',
                            marca: 'PlayStation',
                            modelo: 'PlayStation 3 Super Slim',
                            imgMarca: 'https://logowik.com/content/uploads/images/playstation1990.jpg'
                        }
                    },
                    {
                        label: 'PlayStation 4',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://gmedia.playstation.com/is/image/SIEPDC/ps4-pro-console-02-en-26oct18?$native--t$',
                            marca: 'PlayStation',
                            modelo: 'PlayStation 4',
                            imgMarca: 'https://logowik.com/content/uploads/images/playstation1990.jpg'
                        }
                    },
                    {
                        label: 'PlayStation 4 Slim',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg',
                            marca: 'PlayStation',
                            modelo: 'PlayStation 4 Slim',
                            imgMarca: 'https://logowik.com/content/uploads/images/playstation1990.jpg'
                        }
                    },
                    {
                        label: 'PlayStation 5',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://portalpopline.com.br/wp-content/uploads/2021/11/Ps5.png',
                            marca: 'PlayStation',
                            modelo: 'PlayStation 5',
                            imgMarca: 'https://logowik.com/content/uploads/images/playstation1990.jpg'
                        }
                    },
                    {
                        label: 'DualShock 3',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://cdn.awsli.com.br/600x450/138/138431/produto/9124331/91ac884af8.jpg',
                            marca: 'PlayStation',
                            modelo: 'DualShock 3',
                            imgMarca: 'https://logowik.com/content/uploads/images/playstation1990.jpg'
                        }
                    },
                    {
                        label: 'DualShock 4',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://gmedia.playstation.com/is/image/SIEPDC/ps4-accessories-ds4-jet-black-screen-01-en-28oct20?$native$',
                            marca: 'PlayStation',
                            modelo: 'DualShock 4',
                            imgMarca: 'https://logowik.com/content/uploads/images/playstation1990.jpg'
                        }
                    },
                    {
                        label: 'DualSense',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://images.kabum.com.br/produtos/fotos/115801/controle-sem-fio-ps5-dualsense_1598897393_g.jpg',
                            marca: 'PlayStation',
                            modelo: 'DualSense',
                            imgMarca: 'https://logowik.com/content/uploads/images/playstation1990.jpg'
                        }
                    },

                ]
            },

            {
                label: 'Jogos Xbox',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png',
                    modelo: '',
                    marca: 'Jogos Xbox'
                },
                items: [
                    {
                        label: 'Forza Horizon 4',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://http2.mlstatic.com/D_NQ_NP_974710-MLA44391148923_122020-O.jpg',
                            modelo: 'Forza Horizon 4',
                            marca: 'Jogos Xbox',
                            imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png'
                        }
                    },
                    {
                        label: 'Killer Instinct',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://images-americanas.b2w.io/produtos/01/00/item/120417/2/120417265SZ.jpg',
                            modelo: 'Killer Instinct',
                            marca: 'Jogos Xbox',
                            imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png'
                        }
                    },
                    {
                        label: 'State of Decay 2',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://static.netshoes.com.br/produtos/jogo-state-of-decay-2-xbox-one/60/632-6160-460/632-6160-460_zoom1.jpg?ts=1597073417',
                            modelo: 'State of Decay 2',
                            marca: 'Jogos Xbox',
                            imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png'
                        }
                    },
                    {
                        label: 'Ryse: Son of Rome',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://m.media-amazon.com/images/I/911ftw7rUIL._AC_SY550_.jpg',
                            modelo: 'Ryse: Son of Rome',
                            marca: 'Jogos Xbox',
                            imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png'
                        }
                    },
                    {
                        label: 'Quantum Break',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://m.media-amazon.com/images/I/71XfPe3Xd1L._AC_SX425_.jpg',
                            modelo: 'Quantum Break',
                            marca: 'Jogos Xbox',
                            imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png'
                        }
                    },
                    {
                        label: 'Sea of Thieves',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsuNXinclsS65Tmd8QuFRyjZ5FKGZ3oQzGA&usqp=CAU',
                            modelo: 'Sea of Thieves',
                            marca: 'Jogos Xbox',
                            imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png'
                        }
                    },
                    {
                        label: 'Gears 5',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://m.media-amazon.com/images/I/919dl5j3-LL._AC_SY550_.jpg',
                            modelo: 'Gears 5',
                            marca: 'Jogos Xbox',
                            imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png'
                        }
                    },
                    {
                        label: 'Halo 5: Guardians',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://cdn.awsli.com.br/800x800/241/241991/produto/7315822/jogo-halo-5-guardians-xbox-one-764bc0f0.jpg',
                            modelo: 'Halo 5: Guardians',
                            marca: 'Jogos Xbox',
                            imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png'
                        }
                    },
                    {
                        label: 'Back4Blood',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://images.kabum.com.br/produtos/fotos/232817/jogo-back-2-blood-br-xbox-one_1632159559_g.jpg',
                            modelo: 'Back4Blood',
                            marca: 'Jogos Xbox',
                            imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png'
                        }
                    },
                    {
                        label: 'Hades',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://cdn.awsli.com.br/600x450/241/241991/produto/112396695/6cbd11049e.jpg',
                            modelo: 'Hades',
                            marca: 'Jogos Xbox',
                            imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png'
                        }
                    },


                ]
            },

            {
                label: 'Jogos PlayStation',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://logowik.com/content/uploads/images/playstation1990.jpg',
                    modelo: '',
                    marca: 'Jogos PlayStation'
                },

                items: [
                    {
                        "label": "God Of War",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://m.media-amazon.com/images/I/913r59lGp-L._AC_SX342_.jpg",
                            "marca": "Jogos PlayStation",
                            "modelo": "God Of War",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Uncharted 4",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images-americanas.b2w.io/produtos/01/00/item/124776/7/124776759_1GG.jpg",
                            "marca": "Jogos PlayStation",
                            "modelo": "Uncharted 4",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "The Last of Us",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images-americanas.b2w.io/produtos/01/00/item/119572/9/119572911_1GG.png",
                            "marca": "Jogos PlayStation",
                            "modelo": "The Last of Us",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "The Last of Us Part II",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://a-static.mlcdn.com.br/1500x1500/the-last-of-us-part-ii-para-ps4-naughty-dog/magazineluiza/043185800/449578e1195a9b7fc2f8f0f8f4e47d6c.jpg",
                            "marca": "Jogos PlayStation",
                            "modelo": "The Last of Us Part II",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Marvel's Spider-Man",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn.awsli.com.br/800x800/1237/1237528/produto/47344208/d093bddd0c.jpg",
                            "marca": "Jogos PlayStation",
                            "modelo": "Marvel's Spider-Man",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Ghost of Tsushima",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://m.media-amazon.com/images/I/71PqM1pqVeL._AC_SX466_.jpg",
                            "marca": "Jogos PlayStation",
                            "modelo": "Ghost of Tsushima",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Gran Turismo Sport",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://m.media-amazon.com/images/I/81Y6GdtwnCL._AC_SL1500_.jpg",
                            "marca": "Jogos PlayStation",
                            "modelo": "Gran Turismo Sport",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Bloodborne",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/122052/2/122052263_1GG.png",
                            "marca": "Jogos PlayStation",
                            "modelo": "Bloodborne",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Shadow of the Colossus",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images-americanas.b2w.io/produtos/01/00/item/132986/7/132986705_1GG.jpg",
                            "marca": "Jogos PlayStation",
                            "modelo": "Shadow of the Colossus",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Until Dawn",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.zst.com.br/thumbs/12/2b/8/47190946.jpg",
                            "marca": "Jogos PlayStation",
                            "modelo": "Until Dawn",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    }
                ]
            },

            {
                label: 'Adesivos Xbox',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png',
                    modelo: '',
                    marca: 'Adesivos Xbox'
                },

                items: [
                    {
                        "label": "Adesivo Anthem",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1447816596",
                            "marca": "Adesivos Xbox",
                            "modelo": "Adesivo Anthem",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Adesivo Gears 5",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn.awsli.com.br/600x700/1610/1610163/produto/61911164/xbox-one-x-skin-gears-5-f10f987d.jpg",
                            "marca": "Adesivos Xbox",
                            "modelo": "Adesivo Gears 5",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Adesivo Lula Molusco",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1447824673",
                            "marca": "Adesivos Xbox",
                            "modelo": "Adesivo Lula Molusco",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Adesivo Goku",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://http2.mlstatic.com/D_NQ_NP_853623-MLB31076699188_062019-O.jpg",
                            "marca": "Adesivos Xbox",
                            "modelo": "Adesivo Goku",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Adesivo Harry Potter (Hogwarts)",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images-americanas.b2w.io/produtos/01/00/img/2051660/7/2051660771_1GG.jpg",
                            "marca": "Adesivos Xbox",
                            "modelo": "Adesivo Harry Potter (Hogwarts)",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Adesivo Simpsons",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://http2.mlstatic.com/D_NQ_NP_776069-MLB40437489736_012020-O.jpg",
                            "marca": "Adesivos Xbox",
                            "modelo": "Adesivo Simpsons",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Adesivo Farcry 5",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images-americanas.b2w.io/produtos/78060625/imagens/adesivo-xbox-one-s-far-cry-5/78060624_1_large.jpg",
                            "marca": "Adesivos Xbox",
                            "modelo": "Adesivo Farcry 5",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Adesivo DevilMayCry",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn.awsli.com.br/600x450/1051/1051301/produto/75547539/skin-xbox-one-fat-devil-may-cry-5-055-76804929.jpg",
                            "marca": "Adesivos Xbox",
                            "modelo": "Adesivo DevilMayCry",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Adesivo Rick and Morty",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://http2.mlstatic.com/D_NQ_NP_848754-MLB40520861211_012020-O.jpg",
                            "marca": "Adesivos Xbox",
                            "modelo": "Adesivo Rick and Morty",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Adesivo Itachi Uchiha",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn.awsli.com.br/600x450/1051/1051301/produto/95045385/3f9700d67b.jpg",
                            "marca": "Adesivos Xbox",
                            "modelo": "Adesivo Itachi Uchiha",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    }
                ]
            },  

            {
                label: 'Adesivos PlayStation',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://logowik.com/content/uploads/images/playstation1990.jpg',
                    modelo: '',
                    marca: 'Adesivos PlayStation'
                },

                items: [
                    {
                        "label": "Adesivo Akatsuki (FAT)",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://http2.mlstatic.com/D_NQ_NP_931807-MLB32344827956_092019-W.jpg",
                            "marca": "Adesivos PlayStation",
                            "modelo": "Adesivo Akatsuki (FAT)",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Adesivo Spider-Man (SLIM)",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://http2.mlstatic.com/D_NQ_NP_708002-MLB31090119138_062019-W.jpg",
                            "marca": "Adesivos PlayStation",
                            "modelo": "Adesivo Spider-Man (SLIM)",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Adesivo God of War (FAT)",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://a-static.mlcdn.com.br/618x463/skin-adesivo-para-ps4-fat-god-of-war-ragnarok-pop-arte-skins/poparteskins2/9601289538/12c85233afbfaa7866a1218057f1592b.jpg",
                            "marca": "Adesivos PlayStation",
                            "modelo": "Adesivo God of War (FAT)",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Adesivo FarCryPrimal (FAT)",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn.awsli.com.br/1610/1610163/produto/61816851/ps4-pro-skin-far-cry-primal-655bc7b5.jpg",
                            "marca": "Adesivos PlayStation",
                            "modelo": "Adesivo FarCryPrimal (FAT)",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Adesivo DarkSouls 3 (SLIM)",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://http2.mlstatic.com/D_NQ_NP_770330-MLB31167785359_062019-O.jpg",
                            "marca": "Adesivos PlayStation",
                            "modelo": "Adesivo DarkSouls 3 (SLIM)",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Adesivo Dead By Daylight (SLIM)",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://http2.mlstatic.com/D_NQ_NP_812266-MLB31793557346_082019-O.jpg",
                            "marca": "Adesivos PlayStation",
                            "modelo": "Adesivo Dead By Daylight (SLIM)",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Adesivo Silent Hill (FAT)",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images-eu.ssl-images-amazon.com/images/I/51%2BO%2BnrSKhL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_PIStarRatingFIVE%2CBottomLeft%2C360%2C-6_SR600%2C315_ZA5%2C445%2C290%2C400%2C400%2CAmazonEmberBold%2C12%2C4%2C0%2C0%2C5_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
                            "marca": "Adesivos PlayStation",
                            "modelo": "Adesivo Silent Hill (FAT)",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Adesivo Skyrim (SLIM)",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images-americanas.b2w.io/produtos/01/00/img/2051436/3/2051436331_1GG.jpg",
                            "marca": "Adesivos PlayStation",
                            "modelo": "Adesivo Skyrim (SLIM)",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Adesivo Warzone (SLIM)",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://a-static.mlcdn.com.br/618x463/skin-adesivo-ps4-slim-call-of-duty-warzone-pop-arte-skins/poparteskins2/13488462236/da5f06d04f5fa40388f71b5d909d1231.jpg",
                            "marca": "Adesivos PlayStation",
                            "modelo": "Adesivo Warzone (SLIM)",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Adesivo The Punisher (SLIM)",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn.awsli.com.br/600x700/1610/1610163/produto/61777156/ps4-slim-skin-the-punisher-justiceiro-b-68b299b5.jpg",
                            "marca": "Adesivos PlayStation",
                            "modelo": "Adesivo The Punisher (SLIM)",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    }
                ]
            },  
            {
                label: 'Cartão Pré-pago Xbox',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png',
                    modelo: '',
                    marca: 'Cartão Pré-pago Xbox'
                },
            
                items: [
                    {
                        "label": "Cartão de Presente R$5,00",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://webfones.vteximg.com.br/arquivos/ids/220563-600-600/gift-card-digital-xbox-cartao-presente-r-5-1-1.jpg?v=637574678585470000",
                            "marca": "Cartão Pré-pago Xbox",
                            "modelo": "Cartão de Presente R$5,00",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Cartão de Presente R$10,00",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1924996128",
                            "marca": "Cartão Pré-pago Xbox",
                            "modelo": "Cartão de Presente R$10,00",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Cartão de Presente R$15,00",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1924996145",
                            "marca": "Cartão Pré-pago Xbox",
                            "modelo": "Cartão de Presente R$15,00",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Cartão de Presente R$20,00",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images-submarino.b2w.io/produtos/01/00/img/2953469/5/2953469588_1GG.jpg",
                            "marca": "Cartão Pré-pago Xbox",
                            "modelo": "Cartão de Presente R$20,00",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Cartão de Presente R$25,00",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://webfones.vteximg.com.br/arquivos/ids/220544-1000-1000/gift-card-digital-xbox-cartao-presente-r-25-1-1.jpg",
                            "marca": "Cartão Pré-pago Xbox",
                            "modelo": "Cartão de Presente R$25,00",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Cartão de Presente R$30,00",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn.ecvol.com/s/www.pontualgames.com.br/produtos/cartao-xbox-presente-r-30-reais-microsoft/g/0.jpg?v=6",
                            "marca": "Cartão Pré-pago Xbox",
                            "modelo": "Cartão de Presente R$30,00",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Cartão de Presente R$40,00",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://http2.mlstatic.com/D_NQ_NP_615210-MLB31123939407_062019-O.jpg",
                            "marca": "Cartão Pré-pago Xbox",
                            "modelo": "Cartão de Presente R$40,00",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Cartão de Presente R$50,00",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://m.media-amazon.com/images/I/51TeDODAIyL._AC_SX569_.jpg",
                            "marca": "Cartão Pré-pago Xbox",
                            "modelo": "Cartão de Presente R$50,00",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Cartão de Presente R$100,00",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn.awsli.com.br/600x450/241/241991/produto/7315788/11e4a7459f.jpg",
                            "marca": "Cartão Pré-pago Xbox",
                            "modelo": "Cartão de Presente R$100,00",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                    {
                        "label": "Cartão de Presente R$200,00",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://webfones.vteximg.com.br/arquivos/ids/219360-1000-1000/gift-card-digital-xbox-cartao-presente-r-200-1-1.jpg",
                            "marca": "Cartão Pré-pago Xbox",
                            "modelo": "Cartão de Presente R$200,00",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                        }
                    },
                ]
            },
            
            {
                label: 'Cartão Pré-pago PlayStation',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://logowik.com/content/uploads/images/playstation1990.jpg',
                    modelo: '',
                    marca: 'Cartão Pré-pago PlayStation',
                },
            
                items: [
                    {
                        "label": "Cartão de Presente R$10,00",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn.sistemawbuy.com.br/arquivos/91a41ab2609d6d45f22a680112b17671/produtos/HOU3VEI3/carta-o-psn-playstation-r-10-00-reais-brasil-ocean-game-618c68b7ba138.png",
                            "marca": "Cartão Pré-pago PlayStation",
                            "modelo": "Cartão de Presente R$10,00",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Cartão de Presente R$30,00",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn.awsli.com.br/600x450/21/21712/produto/62334357/e7b09b1957.jpg",
                            "marca": "Cartão Pré-pago PlayStation",
                            "modelo": "Cartão de Presente R$30,00",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Cartão de Presente R$50,00",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn.sistemawbuy.com.br/arquivos/2a3d63d2584e9ab8e8c02f1858ab5305/produtos/GUA1QIO1/playstation-store-r-50-reais-carta-o-recarga-617d6bd01b943_mini.png",
                            "marca": "Cartão Pré-pago PlayStation",
                            "modelo": "Cartão de Presente R$50,00",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Cartão de Presente R$60,00",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://w1.ezcdn.com.br/gcmgames/fotos/grande/1077fg1/cartao-playstation-psn-network-r-60-reais-brasil.jpg",
                            "marca": "Cartão Pré-pago PlayStation",
                            "modelo": "Cartão de Presente R$60,00",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Cartão de Presente R$70,00",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images.kabum.com.br/produtos/fotos/266688/r-70-playstation-store-carta-o-presente-digital-exclusivo-brasil-_1636139884726_m.jpg",
                            "marca": "Cartão Pré-pago PlayStation",
                            "modelo": "Cartão de Presente R$70,00",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Cartão de Presente R$100,00",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn.awsli.com.br/600x450/21/21712/produto/2024323/80ae27ddf9.jpg",
                            "marca": "Cartão Pré-pago PlayStation",
                            "modelo": "Cartão de Presente R$100,00",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Cartão de Presente R$150,00",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.gcmgames.com.br/fotos/extragrande/100967fe1/r-150-playstation-store-cartao-presente-digital-exclusivo-brasil.jpg",
                            "marca": "Cartão Pré-pago PlayStation",
                            "modelo": "Cartão de Presente R$150,00",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Cartão de Presente R$200,00",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://w1.ezcdn.com.br/gcmgames/fotos/grande/411fg1/r-200-playstation-store-cartao-presente-digital-exclusivo-brasil.jpg",
                            "marca": "Cartão Pré-pago PlayStation",
                            "modelo": "Cartão de Presente R$200,00",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Cartão de Presente R$250,00",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images.kabum.com.br/produtos/fotos/115033/gift-card-playstationstore-250-00-reais-ca-digo-digital_1620917296853_g.jpg",
                            "marca": "Cartão Pré-pago PlayStation",
                            "modelo": "Cartão de Presente R$250,00",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    },
                    {
                        "label": "Cartão de Presente R$300,00",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://mmocyberforce.com.br/mmocyber/image/cache/catalog/produtos/cartao-psn/cartao-psn-300-reais-270x351.jpg",
                            "marca": "Cartão Pré-pago PlayStation",
                            "modelo": "Cartão de Presente R$300,00",
                            "imgMarca": "https://logowik.com/content/uploads/images/playstation1990.jpg"
                        }
                    }
                ]
            },

            {
                label: 'Teclados',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://img.freepik.com/vetores-gratis/modelo-de-layout-de-botao-de-teclado-de-computador-com-letras_150973-12.jpg?size=626&ext=jpg',
                    modelo: '',
                    marca: 'Teclados'
                },
            
                items: [
                    {
                        "label": "SteelSeries Apex Pro",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://m.media-amazon.com/images/I/811-0kItnvL._AC_SL1500_.jpg",
                            "marca": "Teclados",
                            "modelo": "SteelSeries Apex Pro",
                            "imgMarca": "https://img.freepik.com/vetores-gratis/modelo-de-layout-de-botao-de-teclado-de-computador-com-letras_150973-12.jpg?size=626&ext=jpg"
                        }
                    },
                    {
                        "label": "Razer Huntsman Tournament",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images.kabum.com.br/produtos/fotos/108517/teclado-gamer-razer-huntsman-tournament-chroma-razer-switch-red-us-rz03-03080200-r3u1_1576778253_g.jpg",
                            "marca": "Teclados",
                            "modelo": "Razer Huntsman Tournament",
                            "imgMarca": "https://img.freepik.com/vetores-gratis/modelo-de-layout-de-botao-de-teclado-de-computador-com-letras_150973-12.jpg?size=626&ext=jpg"
                        }
                    },
                    {
                        "label": "Logitech G915",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://resource.logitechg.com/content/dam/gaming/en/products/g915-tkl/g915-tkl-gallery-1-carbon.png",
                            "marca": "Teclados",
                            "modelo": "Logitech G915",
                            "imgMarca": "https://img.freepik.com/vetores-gratis/modelo-de-layout-de-botao-de-teclado-de-computador-com-letras_150973-12.jpg?size=626&ext=jpg"
                        }
                    },
                    {
                        "label": "Razer Cynosa Chroma V2",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://http2.mlstatic.com/D_NQ_NP_715823-MLA44921557480_022021-O.jpg",
                            "marca": "Teclados",
                            "modelo": "Razer Cynosa Chroma V2",
                            "imgMarca": "https://img.freepik.com/vetores-gratis/modelo-de-layout-de-botao-de-teclado-de-computador-com-letras_150973-12.jpg?size=626&ext=jpg"
                        }
                    },
                    {
                        "label": "Razer Blackwidow V3",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images.kabum.com.br/produtos/fotos/117228/teclado-mecanico-gamer-razer-blackwidow-v3-tenkeyless-chroma-razer-switch-razer-green-us-rz03-03490200-r3u1_1597347096_gg.jpg",
                            "marca": "Teclados",
                            "modelo": "Razer Blackwidow V3",
                            "imgMarca": "https://img.freepik.com/vetores-gratis/modelo-de-layout-de-botao-de-teclado-de-computador-com-letras_150973-12.jpg?size=626&ext=jpg"
                        }
                    },
                    {
                        "label": "Razer Huntsman Mini",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://http2.mlstatic.com/D_NQ_NP_777046-MLA43714065233_102020-O.jpg",
                            "marca": "Teclados",
                            "modelo": "Razer Huntsman Mini",
                            "imgMarca": "https://img.freepik.com/vetores-gratis/modelo-de-layout-de-botao-de-teclado-de-computador-com-letras_150973-12.jpg?size=626&ext=jpg"
                        }
                    },
                    {
                        "label": "Redragon Kumara K552-RGB",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://m.media-amazon.com/images/I/71sFaDtowqL._AC_SY450_.jpg",
                            "marca": "Teclados",
                            "modelo": "Redragon Kumara K552-RGB",
                            "imgMarca": "https://img.freepik.com/vetores-gratis/modelo-de-layout-de-botao-de-teclado-de-computador-com-letras_150973-12.jpg?size=626&ext=jpg"
                        }
                    },
                    {
                        "label": "Corsair K70 Rapidfire ",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://m.media-amazon.com/images/I/71tLQo-vA1L._AC_SL1200_.jpg",
                            "marca": "Teclados",
                            "modelo": "Corsair K70 Rapidfire ",
                            "imgMarca": "https://img.freepik.com/vetores-gratis/modelo-de-layout-de-botao-de-teclado-de-computador-com-letras_150973-12.jpg?size=626&ext=jpg"
                        }
                    },
                    {
                        "label": "HyperX Alloy FPS",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://http2.mlstatic.com/D_NQ_NP_708041-MLA45374756740_032021-O.jpg",
                            "marca": "Teclados",
                            "modelo": "HyperX Alloy FPS",
                            "imgMarca": "https://img.freepik.com/vetores-gratis/modelo-de-layout-de-botao-de-teclado-de-computador-com-letras_150973-12.jpg?size=626&ext=jpg"
                        }
                    },
                    {
                        "label": "Corsair Strafe RGB MK.2 ",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.corsair.com/medias/sys_master/images/images/h66/hf6/9030829539358/-CH-9104113-IT-Gallery-Strafe-Mk2-RGB-01.png",
                            "marca": "Teclados",
                            "modelo": "Corsair Strafe RGB MK.2 ",
                            "imgMarca": "https://img.freepik.com/vetores-gratis/modelo-de-layout-de-botao-de-teclado-de-computador-com-letras_150973-12.jpg?size=626&ext=jpg"
                        }
                    },
                ]
            },
          
            {
                label: 'Mouses',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://png.pngtree.com/png-vector/20190716/ourlarge/pngtree-mouse-icon-png-image_1546882.jpg',
                    modelo: '',
                    marca: 'Mouses'
                },

                items: [
                    {
                        "label": "Razer Deathadder V2",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images.kabum.com.br/produtos/fotos/109815/mouse-razer-deathadder-v2-20-000-dpi-rz01-03210100-r3u1_1580480290_g.jpg",
                            "marca": "Mouses",
                            "modelo": "Razer Deathadder V2",
                            "imgMarca": "https://png.pngtree.com/png-vector/20190716/ourlarge/pngtree-mouse-icon-png-image_1546882.jpg"
                        }
                    },
                    {
                        "label": "Logitech G403",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images.kabum.com.br/produtos/fotos/102649/mouse-gamer-logitech-g403-hero-16k-rgb-lightsync-16000-dpi_mouse-gamer-logitech-g403-hero-16k-rgb-lightsync-16000-dpi_1563479684_g.jpg",
                            "marca": "Mouses",
                            "modelo": "Logitech G403",
                            "imgMarca": "https://png.pngtree.com/png-vector/20190716/ourlarge/pngtree-mouse-icon-png-image_1546882.jpg"
                        }
                    },
                    {
                        "label": "Logitech G903",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images.kabum.com.br/produtos/fotos/102652/mouse-sem-fio-gamer-logitech-g903-hero-16k-recarregavel-rgb-lightsync-design-ambidestro-11-botoes-16000dpi_mouse-sem-fio-gamer-logitech-g903-hero-16k-recarregavel-rgb-lightsync-design-ambidestro-11-botoes-16000dpi_1563483083_g.jpg",
                            "marca": "Mouses",
                            "modelo": "Logitech G903",
                            "imgMarca": "https://png.pngtree.com/png-vector/20190716/ourlarge/pngtree-mouse-icon-png-image_1546882.jpg"
                        }
                    },
                    {
                        "label": "Logitech G502 HERO ",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.logitechstore.com.br/media/catalog/product/cache/1/image/634x545/9df78eab33525d08d6e5fb8d27136e95/m/o/mouse_rgb_ajust_vel_para_jogos_logitech_g502_hero_1__1.png",
                            "marca": "Mouses",
                            "modelo": "Logitech G502 HERO ",
                            "imgMarca": "https://png.pngtree.com/png-vector/20190716/ourlarge/pngtree-mouse-icon-png-image_1546882.jpg"
                        }
                    },
                    {
                        "label": "Logitech G305 ",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images.kabum.com.br/produtos/fotos/97092/97092_1_1528977678_g.jpg",
                            "marca": "Mouses",
                            "modelo": "Logitech G305 ",
                            "imgMarca": "https://png.pngtree.com/png-vector/20190716/ourlarge/pngtree-mouse-icon-png-image_1546882.jpg"
                        }
                    },
                    {
                        "label": "Redragon King Cobra M711",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images.kabum.com.br/produtos/fotos/100115/100115_1554895399_index_g.jpg",
                            "marca": "Mouses",
                            "modelo": "Redragon King Cobra M711",
                            "imgMarca": "https://png.pngtree.com/png-vector/20190716/ourlarge/pngtree-mouse-icon-png-image_1546882.jpg"
                        }
                    },
                    {
                        "label": "Redragon Centrophorus V3",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images6.kabum.com.br/produtos/fotos/71996/71996_index_g.jpg",
                            "marca": "Mouses",
                            "modelo": "Redragon Centrophorus V3",
                            "imgMarca": "https://png.pngtree.com/png-vector/20190716/ourlarge/pngtree-mouse-icon-png-image_1546882.jpg"
                        }
                    },
                    {
                        "label": "Multilaser QuickFire ",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://a-static.mlcdn.com.br/1500x1500/mouse-gamer-multilaser-2400dpi-quickfire-vermelho-mo236/lojamultilaser/1325/e0f3df01d6fc131e98497b4cfc829eca.jpg",
                            "marca": "Mouses",
                            "modelo": "Multilaser QuickFire ",
                            "imgMarca": "https://png.pngtree.com/png-vector/20190716/ourlarge/pngtree-mouse-icon-png-image_1546882.jpg"
                        }
                    },
                    {
                        "label": "Spider Tarantula Om-702",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1398983107",
                            "marca": "Mouses",
                            "modelo": "Spider Tarantula Om-702",
                            "imgMarca": "https://png.pngtree.com/png-vector/20190716/ourlarge/pngtree-mouse-icon-png-image_1546882.jpg"
                        }
                    },
                    {
                        "label": "Mouse Gamer Fallen F65 Mercury",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images3.kabum.com.br/produtos/fotos/115053/mouse-gamer-fallen-f65-mercury-rgb-6-botoes-12000dpi_1598272774_g.jpg",
                            "marca": "Mouse",
                            "modelo": "Mouse Gamer Fallen F65 Mercury",
                            "imgMarca": "https://png.pngtree.com/png-vector/20190716/ourlarge/pngtree-mouse-icon-png-image_1546882.jpg"
                        }
                    }
                ]
            },
        
        ]
    }
}


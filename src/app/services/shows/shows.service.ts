import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Show } from 'src/app/models/show.model';
import { Remark } from 'src/app/models/remark.model';
@Injectable({
  providedIn: 'root',
})
export class ShowsService {
  show: BehaviorSubject<Array<Show>>;
  dataToPushRemark: Array<Remark>;

  // Declaring all the show in a const

  constructor() {
    const showToPush = [
      new Show(
        'Peaky Blinders',
        new Date('9/12/2013'),
        5,
        "En 1919, à Birmingham, soldats, révolutionnaires politiques et criminels combattent pour se faire une place dans le paysage industriel de l'après-Guerre. Le Parlement s'attend à une violente révolte, et Winston Churchill mobilise des forces spéciales pour contenir les menaces.",
        '17/20',
        'https://imgsrc.cineserie.com/2021/05/peaky-blinders-online.jpg?ver=1',
        new Array<Remark>(
          new Remark(new Date('04/03/2013'), 'Jérome', 'Très cool'),
          new Remark(new Date('08/22/2015'), 'Romaigne', 'Wow')
        )
      ),
      new Show(
        'Game of Thrones',
        new Date('01/17/2013'),
        8,
        "Il y a très longtemps, à une époque oubliée, une force a détruit l'équilibre des saisons. Dans un pays où l'été peut durer plusieurs années et l'hiver toute une vie, des forces sinistres et surnaturelles se pressent aux portes du Royaume des Sept Couronnes. La confrérie de la Garde de Nuit, protégeant le Royaume de toute créature pouvant provenir d'au-delà du Mur protecteur, n'a plus les ressources nécessaires pour assurer la sécurité de tous. Après un été de dix années, un hiver rigoureux s'abat sur le Royaume avec la promesse d'un avenir des plus sombres. Pendant ce temps, complots et rivalités se jouent sur le continent pour s'emparer du Trône de Fer, le symbole du pouvoir absolu.",
        '12/20',
        'https://i.f1g.fr/media/madame/1900x1900/sites/default/files/img/2019/04/game-of-thrones_1.jpg',
        new Array<Remark>(
          new Remark(
            new Date('12/05/2016'),
            'Magalie',
            'Une saison 8 rédigée par un singe sous Xanax sans aucuns doutes!'
          ),
          new Remark(
            new Date('5/22/2014'),
            'Alex',
            "Le feu jusqu'à la saison 5, après c'est naaaaaaaze"
          )
        )
      ),
      new Show(
        'Buffy contre les Vampires',
        new Date('3/10/1997'),
        8,
        "Buffy Summers aspire à une vie simple et épanouie auprès de sa famille et de ses amis. Mais les démons qui rôdent à Sunnydale lui rappellent sans cesse qu'elle doit faire face à ses responsabilités de Tueuse.",
        '20/20',
        'https://fr.web.img4.acsta.net/c_310_420/pictures/19/08/21/09/12/5177711.jpg',
        new Array<Remark>(
          new Remark(new Date('11/07/2013'), 'Nico', 'Incroyable'),
          new Remark(
            new Date('12/05/2017'),
            'Lola',
            'Pathétique! Se battre en talon, et puis quoi encore?'
          )
        )
      ),
      new Show(
        'Stargate SG-1',
        new Date('7/27/1997'),
        10,
        "SG-1 est une équipe d'opérations spéciales d'élite de l'armée de l'air américaine, l'une des quelque 20 équipes de la Terre qui explorent la galaxie et se défendent contre les menaces extraterrestres telles que les Goa'ulds, les Réplicateurs et les Ori.",
        '12/20',
        'https://fr.web.img5.acsta.net/pictures/19/06/14/15/57/3353242.jpg',
        new Array<Remark>(
          new Remark(
            new Date('12/05/2009'),
            'ニコラ',
            '申し訳ありませんが、すべてを行うことができませんでした...しかし、私は順調に進歩しました！'
          ),
          new Remark(
            new Date('6/13/2017'),
            'Flavien',
            'Mdr sa passé sur NRJ12!!!!!!!!!'
          ),
          new Remark(
            new Date('8/30/2011'),
            'Michel',
            'Vraiment pitoyable... on regrette les vieilles séries... franchement... je ne conseil pas... bises michel'
          )
        )
      ),
      new Show(
        'Riverdale',
        new Date('1/26/2017'),
        5,
        "Sous ses airs de petite ville tranquille, Riverdale cache en réalité de sombres secrets. Alors qu'une nouvelle année scolaire débute, le jeune Archie Andrews et ses amis Betty, Jughead, et Kevin voient leur quotidien bouleversé par la mort mystérieuse de Jason Blossom, un de leurs camarades de lycée.",
        '12/20',
        'https://fr.web.img5.acsta.net/pictures/20/12/28/10/50/2616988.jpg',
        new Array<Remark>(
          new Remark(
            new Date('5/05/2019'),
            'Mélissa',
            'Tellement bieeeeeeeeeennnn je suis tellement amoureuse!'
          )
        )
      ),
    ];
    // pushing all the show using behavior subject for real time change and modifications.
    this.show = new BehaviorSubject<Array<Show>>(showToPush);
  }

  // Get a show depending of it's id. Used throughout the code to call a precise show.

  getShowById(showId: number): Promise<Show> {
    return new Promise<Show>((res, rej) => {
      const shows = this.show.getValue();
      for (let show of shows) {
        if (show.id === showId) {
          res(show);
          break;
        }
      }
    });
  }

  // Allow to push modification from the edit show page.
  editShow(editedBook: Show): Promise<void> {
    return new Promise<void>((res, rej) => {
      setTimeout(() => {
        const shows = this.show.getValue();
        for (let [index, show] of shows.entries()) {
          if (show.id === editedBook.id) {
            shows[index] = editedBook;
            this.show.next(shows);
            res();
            break;
          }
        }
      }, 500);
    });
  }

  // Function being called to delete the show inside the service.
  deleteShow(showIdToDelete: number) {
    const shows = this.show.getValue();
    for (let [index, book] of shows.entries()) {
      if (book.id === showIdToDelete) {
        shows.splice(index, 1);
        this.show.next(shows);
        break;
      }
    }
  }

  // Function being called to add a show inside the service
  addShow(showToAdd: Show): Promise<void> {
    return new Promise<void>((res, rej) => {
      setTimeout(() => {
        const shows = this.show.getValue();
        shows.push(showToAdd);
        this.show.next(shows);
        res();
      }, 500);
    });
  }
}

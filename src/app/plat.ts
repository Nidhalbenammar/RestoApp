export class Plat {
    id: number;
    description: string;
    dessert: string;
    qteDisponible: number;
    nom :string;
    date :Date;
    constructor(id: number, description: string, dessert: string, qteDisponible: number,nom :string,date :Date) {
      this.id = id;
      this.description = description;
      this.dessert = dessert;
      this.qteDisponible = qteDisponible;
      this.nom=nom;
      this.date=date;
    }
  }
  
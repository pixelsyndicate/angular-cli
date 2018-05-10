/* You always import the Component symbol from the Angular core library and annotate the component class with @Component. */
import { Component, OnInit } from '@angular/core';

// this is my service that will take over for my mock data transport
import { HeroService } from '../hero.service';

// this is a custom class (apparently don't need the .ts mime-type)
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

/* @Component is a decorator function that specifies the Angular metadata for the component. */
@Component({
  selector: 'app-heroes', // the component's CSS element selector (writes html template to that tag)
  templateUrl: './heroes.component.html', // the location of the component's template file.
  styleUrls: ['./heroes.component.css'] // the location of the component's private CSS styles.
})

/* always EXPORT a class so you can import it elsewhere. like in the AppModule */
export class HeroesComponent implements OnInit {

    hero: Hero = { id: 1, name: 'Windstorm', timestamp:Date.now() };

    heroes: Hero[]; // this is used to feed the *ngFor loop
    // heroes = HEROES; // deprecated. now getting data injected from a service

    selectedHero: Hero; // originally set as the one I labled Windstorm, but is changed in tmy onSelect() expression

    // to do dependency injection, import (above) and then pass the service type into the constructor
    // the heroService is now a singleton instance of HeroService
    constructor(private heroService: HeroService) { }
    // constructor() { }

    ngOnInit() {
        this.getHeroes();
    }

    // this passes the parameter to the selectedHero
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }

    // create a function that uses the service to get heros
    //    getHeroes(): void {
    //        this.heroes = this.heroService.getHeroes();
    //    }

    getHeroes(): void {
        this.heroService.getHeroes().subscribe(x => this.heroes = x);
    }

    add(name: string): void {
      name = name.trim();
      if (!name) { return; }

        this.heroService.addHero({ name } as Hero)
        .subscribe(hero => {
          this.heroes.push(hero);
    });
}

delete(hero: Hero): void {
  this.heroes = this.heroes.filter(h => h !== hero);
  this.heroService.deleteHero(hero).subscribe();
}
}

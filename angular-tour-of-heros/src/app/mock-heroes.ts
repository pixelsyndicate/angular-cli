import { Hero } from './hero';

// NOT USED WHILE USING HTTP API SERVICE

// the exported const is an array of my Hero object
// import that into the heroes.componenet.ts and set it to a property
export const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice', timestamp: Date.now() },
  { id: 12, name: 'Narco', timestamp: Date.now() },
  { id: 13, name: 'Bombasto', timestamp: Date.now() },
  { id: 14, name: 'Celeritas', timestamp: Date.now() },
  { id: 15, name: 'Magneta', timestamp: Date.now() },
  { id: 16, name: 'RubberMan', timestamp: Date.now() },
  { id: 17, name: 'Dynama', timestamp: Date.now() },
  { id: 18, name: 'Dr IQ', timestamp: Date.now() },
  { id: 19, name: 'Magma', timestamp: Date.now() },
  { id: 20, name: 'Tornado', timestamp: Date.now() }
];

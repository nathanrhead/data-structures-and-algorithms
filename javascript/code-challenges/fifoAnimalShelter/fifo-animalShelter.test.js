'use strict';

const Fifo = require('./fifo-animal-shelter.js');

describe('enqueue', () => {
  it ('adds a dog to the dogQueue', () => {
    let newAnimal = new Fifo();
    newAnimal.enqueue('dog');
    expect(newAnimal.dogQueue.front.value).toEqual('dog');
  });

  it ('adds a cat to the catQueue', () => {
    let newAnimal = new Fifo();
    newAnimal.enqueue('cat');
    expect(newAnimal.catQueue.front.value).toEqual('cat');
  });

  it ('throws an exception when given an invalid input', () => {
    let newAnimal = new Fifo();
    expect(() => newAnimal.enqueue('fish')).toThrow('Invalid entry.');
  });
});

describe('dequeue', () => {
  it('removes a dog from the dogQueue', () => {
    let newAnimal = new Fifo();
    newAnimal.enqueue('dog');
    newAnimal.dequeue('dog');
    expect(newAnimal.dogQueue.front).toEqual(null);
  });
  it('removes a cat from the catQueue', () => {
    let newAnimal = new Fifo();
    newAnimal.enqueue('cat');
    newAnimal.dequeue('cat');
    expect(newAnimal.catQueue.front).toEqual(null);
  });

  it('returns null when given an invalid input', () => {
    let newAnimal = new Fifo();
    newAnimal.enqueue('cat');
    expect(newAnimal.dequeue('fish')).toBe(null);
  });
});

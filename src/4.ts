class Key {
  private signature: number;
  // this.signature = Math.random();
  //   constructor(private signature: number) {
  //     this.signature = Math.random();
  //   }
  public getSignature(): number {
    this.signature = Math.random();
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  public getKey(): number {
    return this.key.getSignature();
  }
}

abstract class House {
  door: boolean;
  key: Key;
  tenants: Person[] = [];

  comeIn(tenant: Person) {
    if (this.door) {
      this.tenants.push(tenant);
    }
  }

  abstract OpenDoor(key: Key): boolean;
}

class MyHouse extends House {
  constructor(key: Key) {
    super();
  }
  public OpenDoor(key: Key): boolean {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
    }
    return this.door;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.OpenDoor(person.getKey());

house.comeIn(person);

export {};

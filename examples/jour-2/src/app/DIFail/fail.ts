
export class Foo {

	constructor(private elem: Bar = new Bar()){
	}
}


class Bar {
	constructor(private elem: Foo = new Foo()){
	}
}
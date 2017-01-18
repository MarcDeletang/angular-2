namespace interface {
	interface IBar {
		tag: number
		isActive: boolean
	}

	interface Test1 {}
	interface Test2 {}

	class Bar1 implements IBar, Test1, Test2 {
		constructor(public tag: number, public isActive: boolean) {}
	}

	class Bar2 implements IBar {
		public tag: number
		public isActive: boolean

		constructor(tag: number, isActive: boolean) {
			this.tag = tag
			this.isActive = isActive
		}
	}

	var bar: IBar[] = [new Bar1(12, false), new Bar1(42, true), new Bar2(78, true)]
}
namespace decorator {
	class Baz {

		@decorated
		baz() {}
	}

	function decorated(test: any, test1: any, test2: any) {
		console.log('decorated', test, test1, test2)
	}

	var baz = new Baz()
}
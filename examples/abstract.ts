namespace abstract {
	abstract class AbstractFoo {

		constructor(private firstMessage: string) {

		}

		printMessage(message: string) {
			console.log(this.firstMessage, message)
		}
		abstract test()
	}

	class Foo extends AbstractFoo{

		constructor(message) {
			super(message)
		}

		printMessage(message) {
			super.printMessage('modified ' + message)
		}

		test() {
			console.log('implemented')
		}
	}


	var foo = new Foo('hello')
	foo.printMessage('world')
	foo.test()
}
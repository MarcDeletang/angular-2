namespace static {

	class Baz {
		static MESSAGE: string = 'Hello world'
	}

	console.log(Baz.MESSAGE)
	var baz = new Baz()
		//baz.MESSAGE
}
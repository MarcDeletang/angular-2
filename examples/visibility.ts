class BaseVisibility{
	public publicName: string
	private privateName: string
	protected protectedName: string
}

class Visibility extends BaseVisibility {
	constructor(){
		super()
		this.publicName = '42'
		this.protectedName = 'protected'
		//Invalid
		//this.privateName
	}
}

let visibility = new Visibility()
visibility.publicName = 'Changed'
//Invalid
//visibility.protectedName = '45'
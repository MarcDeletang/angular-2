export interface IOrder {
	name: string
	products: IProduct[]
	getPrice(): number
	onServed(isReady: boolean)
}

//Le restaurant vérifie si les produits de la commande sont disponibles. S'ils ne le sont pas, une commande doit être passée au store.
//Si la commande peut etre servie le prix de la commande est rajoutée au solde et la méthode onServed est appelée avec true en paramètre.
//Si la commande ne peut pas être servie onServed est appelée avec false en paramètre.
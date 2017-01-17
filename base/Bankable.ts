export abstract class Bankable {
	//constructeur de la classe
	constructor(_id: number, total: number)
	//vérifie le solde actuel, si la valeur est inférieure retourne true sinon false
	public canPay(value: number): boolean
	//ajoute la valeur de amount au solde actuel
	addMoney(amount: number)
	//enleve la quantité amount du sold actuel
	spendMoney(amount: number)
	//retourne l'id
	public get bankId(): number
	//Ne permet pas le changement d'id
	public set bankId(newNumber: number)
}
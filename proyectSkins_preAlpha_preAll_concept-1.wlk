//Proyecto Skins
//Base en wollok, tendria que pasarla a javascript x ejemplo

class Set{
	const property char = #{}
	const property name
	const property users = #{}

	method hasUser(user){
		self.users().any {u => u == user}
	}
	method hasUsers(users){
		users.all {u=>self.hasUser(u)}
	}
}

class User{
	const property name
	const property skins = #{}

	method addSkin(skin){
		self.skins().add(skin)
		skin.addUserToSet(self)
	}
}

class Skin{
	const property name
	const property set

	method addUserToSet(user){
		self.set().addUser(user)
	}
}

object main?(){
	const property sets = #{}
	const users = database?.users() //alguna redireccion o quizas esto deberia estar ahi idk

	//mmmm habiendo uno para una lista, uno individual quedaria medio de mas
	//method filterByUser(user){
	//	self.sets().filter { s => s.hasUser(user)
	//}

	method filterByUsers(users){
		// necesitaria que el users sea una lista/array escrita en el buscador, y cada elemento sea separado por una coma
		self.sets().filter {s=>s.hasUsers(users)}
	}
}
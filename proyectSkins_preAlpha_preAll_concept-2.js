class Set{
    constructor(skins,name,users){
        this.skins = skins;
        this.name = name;
        this.users = users;
    }

    addUser(user){
        this.users.push(user)
    }
    hasUser(user){
        this.users.includes(user)
    }
    hasUsers(users){
        this.users.every(u=>self.hasUser(u))
    }
}

class Skin{
    constructor(name, set){
        this.name = name
        this.set = set
    }
    addUserToSet(user){
        this.set.addUser(user)
    }
}

class User{
    constructor(name, skins){
        this.name = name
        this.skins = skins
    }
    addSkin(skin){
        this.skins.push(skin)
        skin.set.users.push(this)
    }
}
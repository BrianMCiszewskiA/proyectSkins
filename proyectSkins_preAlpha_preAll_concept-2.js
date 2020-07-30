class Set{
    constructor(skins,name,users){
        this.skins = skins;
        this.name = name;
        this.users = users;
    }

    addUser(user){
        if (!this.hasUser(user)){
            this.users.push(user)
        }
    }
    hasUser(user){
        return this.users.includes(user)
    }
    hasUsers(users){
        return this.users.every(u=>self.hasUser(u))
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
        if (!this.hasSkin(skin)){
            this.skins.push(skin)
            skin.set.users.push(this)
        }
    }
    hasSkin(skin){
        return this.skins.includes(skin)
    }
}
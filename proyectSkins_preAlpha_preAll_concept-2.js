class Set{
    constructor(skins,name,users){
        this.skins = skins;
        this.name = name;
    }
    hasUser(user){
        return user.sets.includes(this)
    }
    hasUsers(users){
        return users.every(u=>self.hasUser(u))
    }
}

class Skin{
    constructor(name, set, image, icon){
        this.name = name
        this.set = set
        this.image = image
        this.icon = icon
    }
}

class User{
    constructor(name, skins, sets){
        this.name = name
        this.skins = skins
        this.sets = sets
    }
    addSkin(skin){
        if (!this.hasSkin(skin)){
            this.skins.push(skin)
            this.addSet(skin.set)
        }
    }
    hasSkin(skin){
        return this.skins.includes(skin)
    }
    addSet(set){
        if (!this.hasSet(set)){
            this.sets.push(set)
        }
    }
}
class AddClientCommand {
    constructor(id, name, description, category, bucketID, image, imageName, number, bought) {
        this.id = id;
        this.bucketID = bucketID;
        this.name = name;
        this.description = description;
        this.number = number;
        this.bought = bought;
        this.image = image;
        this.imageName = imageName;
    }
}

module.exports = AddClientCommand;
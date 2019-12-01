class AddProductCommand {
    constructor(id, name, created_at, closed_at) {
        this.id = id;
        this.name = name;
        this.created_at = created_at;
        this.closed_at = closed_at;
    }
}

module.exports = AddProductCommand;
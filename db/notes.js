class Notes {
    constructor() {
        this.list = [
            {
                id: "sadlfsdkf9ae3iofkw",
                content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat dolorem hic voluptatum itaque omnis dolore sit modi impedit, illum voluptatibus a eum eveniet. Odit sunt illum, et temporibus totam culpa!"
            },
            {
                id: "2l4kl32j4f0dsck43",
                content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat dolorem hic voluptatum itaque omnis dolore sit modi impedit, illum voluptatibus a eum eveniet. Odit sunt illum, et temporibus totam culpa!"
            },
        ];
    }

    getList() {
        return this.list;
    }

    addNote(item) {
        this.list.push(item);
    }

    delNote(id) {
        this.list = this.list.filter((n) => n.id !== id);
    }
}    

const notes = new Notes();

module.exports = notes;

import uniqid from 'uniqid';

export default class List {
    constructor() {
        this.items = [];
    }

    addItem(count, unit, ingredient) {

        const item = {
            id: uniqid(),
            count: count,
            unit: unit,
            ingredient: ingredient
        }
        this.items.push(item);
        return item;
    }

    deleteItem(id) {
        // [2 4 8 ] splice(1, 1) return 4 => [2 8]
        // [2 4 8] slice(1, 2) return 4 => [2 4 8]
        const index = this.items.findIndex(el => el.id === id);
        return this.items.splice(index, 1);
    }

    updateCount(id, newCount) {
        const item = this.items.find(el => el.id === id);
        item.count = newCount;
    }
}
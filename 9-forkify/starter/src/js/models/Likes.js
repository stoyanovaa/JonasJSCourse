export default class Likes {
    constructor() {
        this.likes = [];
    }

    addLike(id, title, author, img) {
        const like = {
            id: id,
            title: title,
            author: author,
            img: img
        }
        this.likes.push(like);
    }

    deleteLike(id) {
        // [2 4 8 ] splice(1, 1) return 4 => [2 8]
        // [2 4 8] slice(1, 2) return 4 => [2 4 8]
        const index = this.likes.findIndex(el => el.id === id);
        return this.likes.splice(index, 1);
    }

    isLiked(id) {
        const index = this.likes.findIndex(el => el.id === id);
        return index === -1;
    }

    getNumLikes() {
        return this.likes.length;
    }
}
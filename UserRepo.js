export default class UserRepo {

    constructor() {
        if (new.target === UserRepo) {
            throw new TypeError("")
        }
        this.error = ("You should override this method")
    }

    create() {
        throw new UnsupportedOperationException(this.error);
    }

    read() {
        throw new UnsupportedOperationException(this.error);
    }

    update() {
        throw new UnsupportedOperationException(this.error);
    }

    delete() {
        throw new UnsupportedOperationException(this.error);
    }

    testing() {
        throw new UnsupportedOperationException(this.error);
    }
}


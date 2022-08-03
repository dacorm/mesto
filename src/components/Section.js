

export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._selector = containerSelector;
    }

    addItem(item) {
        this._selector.prepend(item)
    }

    renderItems(items) {
        items.forEach(el => {
            this._renderer(el)
        })
    }
}
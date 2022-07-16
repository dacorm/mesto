

export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._selector = containerSelector;
    }

    addItem(item) {
        this._selector.prepend(item)
    }

    renderItem() {
        this._renderedItems.forEach(el => {
            this._renderer(el)
        })
    }
}
class Api {
    constructor(data) {
        this._baseUrl = data.baseUrl;
        this._headers = data.headers;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, { headers: this._headers }).then(this._handleResponse);
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, { headers: this._headers }).then(this._handleResponse);
    }

    setUserInfo(userInfo) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: userInfo.fullName,
                about: userInfo.workplace
            }),
        }).then(this._handleResponse)
    }

    addNewCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify(data),
        }).then(this._handleResponse);
    }

    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers,
        }).then(this._handleResponse);
    }

    changeAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar,
            }),
        }).then(this._handleResponse);
    }

    like(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: "PUT",
            headers: this._headers,
        }).then(this._handleResponse);
    }

    dislike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: "DELETE",
            headers: this._headers,
        }).then(this._handleResponse);
    }
}

export default Api
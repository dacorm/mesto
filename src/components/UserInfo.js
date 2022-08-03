

export default class UserInfo {
    constructor({ profileNameSelector, profileJobSelector, profileAvatarSelector }) {
        this._name = document.querySelector(profileNameSelector);
        this._job = document.querySelector(profileJobSelector);
        this._avatar = document.querySelector(profileAvatarSelector)
    }

    getUserInfo() {
        const userInfo = {
            fullName: this._name.textContent,
            workplace: this._job.textContent,
            avatar: this._avatar.src,
        }
        return userInfo
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._job.textContent = data.about;
        this.setAvatar(data)
    }

    setAvatar(data) {
        this._avatar.src = data.avatar;
        this._avatar.alt = data.name
    }
}
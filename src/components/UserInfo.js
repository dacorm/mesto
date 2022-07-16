

export default class UserInfo {
    constructor({ profileName, profileJob }) {
        this._name = profileName;
        this._job = profileJob;
    }

    getUserInfo() {
        const userInfo = {
            fullName: this._name.textContent,
            workplace: this._job.textContent
        }
        return userInfo
    }

    setUserInfo(userInfo) {
        this._name.textContent = userInfo.fullName;
        this._job.textContent = userInfo.workplace;
    }
}
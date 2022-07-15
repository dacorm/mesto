

export default class UserInfo {
    constructor({ profileName, profileJob }) {
        this._name = profileName;
        this._job = profileJob;
    }

    getUserInfo() {
        const userInfo = {
            name: this._name.textContent,
            job: this._job.textContent
        }
        return userInfo
    }

    setUserInfo(userInfo) {
        this._name.textContent = userInfo.name;
        this._job.textContent = userInfo.job;
    }
}
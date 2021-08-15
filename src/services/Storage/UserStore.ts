import { Store } from "./Store";

export interface UserInfo extends Object {
    name: string,
    token: string,
    code: string,
}

class UserInfoStore extends Store<UserInfo> {
    protected data(): UserInfo {
        let serializedObj = localStorage.getItem("user-info");
        if (serializedObj) {
            var obj = JSON.parse(serializedObj) as UserInfo;
            if (obj) {
                return obj;
            }
        }
        return {
            name: "",
            token: "",
            code: "",
        };
    }

    public setData(user: UserInfo) {
        if (!user) {
            this.state.name = null;
            this.state.token = null;
            this.state.code = null;
        }
        else {
            this.state.name = user.name;
            this.state.token = user.token;
            this.state.code = user.code;
        }
        localStorage.setItem("user-info", JSON.stringify(user));
    }
}

export const userInfoStore: UserInfoStore = new UserInfoStore()



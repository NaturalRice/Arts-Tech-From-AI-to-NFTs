// 用户管理系统
export class UserManager {
    static init() {
        if (!localStorage.getItem('user')) {
            localStorage.setItem('user', JSON.stringify({
                id: Date.now(),
                name: '修真新人',
                level: 1,
                qi: 100
            }));
        }
        console.log("用户系统就绪");
    }
}
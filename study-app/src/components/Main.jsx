const Main = ()=> {
    const user = {
        name : "김미남",
        isLogin : false
    };

    if (user.isLogin) {
        return <div>로그아웃</div>
    }else {
        return <div>로그인</div>
    }

    // return (
    //     <main>
    //         <p>{user.isLogin ? "로그아웃" : "로그인" }</p>
    //     </main>
    // );
}

export default Main;
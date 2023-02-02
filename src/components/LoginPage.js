function LoginPage(loginUser){
    function mySubmit(e) {
        e.preventDefult()
        loginUser("ran", "1234")
    }
    return (
        <div>
            <form onSubmit={mySubmit}>
                <input type="text" name="username" placeholder="Enter Username" />
                <input type="password" name="password" placeholder="Enter Password" />
                <input type="submit"/>
            </form>
        </div>
    )
 }
 
 
 export default LoginPage
 
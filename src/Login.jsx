const Login=()=>{
    return(
        <div>
 
        <center> <u>   <p>welcom</p></u></center>
          
                <center>
                     
            <form>
                  <feildset>
                <label htmlFor="user Name">user Name:</label>
                <input type="text" name="user tName" id="user Name" />
                <br />
                <label htmlFor="passworld">Password:</label>
                <input type="password" name="passworld" id="passworld" />
                <br />
                <input type="button" name="submit" id="submit" value="Login" />
                    </feildset>
                  </form>
                </center>
        
        </div>
    )
}
export default Login;
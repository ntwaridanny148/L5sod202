const Regform=()=>{
    return(
        <div>
          <center><u> <p>Registration Form</p></u></center>
            <feildset>
                 <center>
            <form>
               
                
                <label htmlFor="first Name">First Name:</label>
                <input type="text" name="firstName" id="firstName" />
                <br />
                <label htmlFor="last name">last name:</label>
                <input type="text" name="last name" id="last name" />
                <br />
                <label htmlFor="passworld">passworld:</label>
                <input type="password" name="passworld" id="passworld" />
                <br />
                <input type="button" name="submit"  value="send"/>
                </form>
                </center>
                
                </feildset>
        
    
                </div>   
    )
}
export default Regform;
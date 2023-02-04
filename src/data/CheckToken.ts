const checkToken = async () => {
    var token = sessionStorage.getItem('user_token');
    if (token == null) {
        console.log("no token");
        return false;
    }
    const headers = new Headers();
    headers.set('user_token', token);
    // Use the fetch method to call the web service
    let response = await fetch('https://encheregit-production.up.railway.app/users/token/check', {
        method: 'GET',
        headers: headers
    });
  
    // Wait for the Promise to resolve and get the returned data
    let data = await response.json();
    console.log(data);
  
    if (data == false) {
      console.log("expired");
      return false;
    } else {
      console.log("not expired");
      return true;
    }
    
  };
  
  export default checkToken;
  
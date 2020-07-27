var baseurl = "http://localhost:8080";
axios.defaults.withCredentials=true;
function logout(){
 		axios.post(baseurl+"/logout").then(resp=>{
 			console.log(resp.data);
 			if(resp.data.status == '100'){
 					alert(resp.data.message);
 					window.location.href = "login.html";
 				}
 			});
 		}

import {useAuth} from "../Store/Auth";

export const About =()=>{
    const {userInfo} =useAuth();
    return (
        <>
            <div className="hero-section container">
                <div className="heading">
                    <p> Welcome {userInfo.username}</p>
                    <h2>Web services are software applications
                     that allow different systems to 
                     communicate and exchange data over the internet: </h2>
                </div>
                <p> <h2>How they work:</h2>
Web services are made available by an application service provider's web server.
 They use standardized protocols, like HTTP or HTTPS, to send and receive data. Web services can perform a variety of tasks, from simple requests to complex business processes. 
<h2>How they communicate:</h2>
Web services use a formal description, called a Web Services Description 
Language (WSDL) document, to specify how to interact with them. 
This description includes details like message formats and protocols. 
<h2>How they're used:</h2>
Web services can be used for commercial or public purposes. For example,
 a company might use web services to sell products or services, or 
 an app might use them to allow people to pay the IRS. 
<h2>Different types of web services:</h2>
There are different types of web services, including SOAP and REST. 
SOAP is better for complex business operations, while REST is better for simpler operations. 
<h2>Mixing web services:</h2>
It's possible to mix different types of web services to take advantage of their best features.
 For example, you could use REST for web servers and GraphQL for backend services.
 </p>
            </div>
        </>
    )
}
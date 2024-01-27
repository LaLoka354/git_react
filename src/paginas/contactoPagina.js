import React from 'react';



export default class ContactoPagina extends React.Component {

    render(){
        return(
            <>
            <div className="row pruebaFuente2">
                contacto
            </div>
            {/* acá iría el formulario */}
            <div class="boxForm row align-items-center justfy-content-left">
                <div className='formgroup'>
                    <label for="exampleFormControlInput1" class="col-6 formLabel">first name</label>
                    <input type="email" class="col-6 formInput" id="exampleFormControlInput1" placeholder="First Name"></input>
                    <label for="exampleFormControlInput2" class="col-6 formLabel">last name</label>
                    <input type="email" class="col-6 formInput" id="exampleFormControlInput2" placeholder="Last Name"></input>
                    <label for="exampleFormControlInput3" class="col-6 formLabel"><i class="bi bi-telephone"></i>phone number</label>
                    <input type="email" class="col-6 formInput" id="exampleFormControlInput3" placeholder="+123 45 678 910"></input>
                    <label for="exampleFormControlInput4" class="col-6 formLabel"><i class="bi bi-envelope-at-fill"></i> Email address</label>
                    <input type="email" class="col-6 formInput" id="exampleFormControlInput4" placeholder="name@example.com"></input>
                    <br></br>
                    
                    <label for="exampleFormControlInput5" class="col-6 formLabel"><i class="bi bi-envelope-at-fill"></i> Message </label>
                    <textarea type="email" class="col-6 formInput" id="exampleFormControlInput5" placeholder="message"></textarea>
                    <button type='submit' class="classButtonLink3" > SUBMIT </button>
                </div>
            </div>

              
            </>
            
        )
    }
}
import {React, useState, useEffect} from "react";

const resetFormValues = {fullname:'', phone_number:''}


const Form = ({addContact,  contacts}) => {

//console.log(addContact);

    const[form, setForm] = useState({fullname:'', phone_number:''})

    useEffect(()=>{  // contacts componenti degistiginde input temizlemenin 3. yolu.
        setForm(resetFormValues)
    },[contacts])

    const onChangeInput = (e) => {
        setForm({ 
            ...form, 
            [e.target.name]: e.target.value 
        })
    };

    const onSubmit = (e) => {
        e.preventDefault()

        if(form.fullname === '' || form.phone_number === '' || form.phone_number.length < 5){
            
            if(form.phone_number.length <= 5){
                alert('Please fill in the blanks !')
            } else{
                alert('Please enter a valid phone number!')
            }
        } else{
            addContact([...contacts,form])

        }

        //setForm({fullname:'', phone_number:''}) //butona tikladiktan sonra inputlari bosaltmak icin 1. yol
        //setForm(resetFormValues) //zeile 10. Bu sekilde brden fazla inputu daha kolay yazariz. 2.yol

    }



    return (
        <form >

            <div>
                
                <input 
                    name="fullname" 
                    type="text"
                    placeholder="Fullname..." 
                    value={form.fullname}
                    onChange={onChangeInput}
                />
            </div>
            <div>
                <input
                    name="phone_number" 
                    type="number"
                    placeholder="Phone Number..." 
                    onChange={onChangeInput}
                    value={form.phone_number}
                />
            </div>
            <div>
                <button onClick={onSubmit} className="btnAdd" >Add</button>
            </div>

        </form>
    )
};

export default Form
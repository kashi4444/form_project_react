import React from 'react'
import { useState } from 'react'
const DetailsForm = () => {
    const[formData, setFormData]= useState({firstName:"", lastName:"", email:"", country:"India",streetAddress:"",city:"",state:"",postalCode:"",comments:false, candidates:false, offer:false, pushNotifications:""})

    function changeHandler(event){
        const{name,value, type,checked} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name] : type === "checkbox" ? checked: value,
        }))
    }
    function submitHandler(event){
        event.preventDefault();
        console.log(formData);
    }
  return (
    <div className='form_div'>
        <form onSubmit={submitHandler} className='form_container'> 
           
           <label htmlFor='firstName' className='sub_headings'>First Name</label>
            <br></br>
            <input className='text_input' type='text' placeholder='Pranay' name="firstName" id='firstName' value={formData.firstName} onChange={changeHandler}></input>
            <br></br>

            <label htmlFor='lastName' className='sub_headings'>Last Name</label>
            <br></br>
            <input className='text_input'
            type='text' 
            placeholder='Gupta' 
            name="lastName" 
            id='lastName'
            value={formData.lastName} 
            onChange={changeHandler}></input>
            <br></br>

            <label htmlFor='email' className='sub_headings'>Email Address</label>
            <br></br>
            <input className='text_input'
            type='email' 
            placeholder='pgupta@duck.com' 
            name="email" 
            id='email'
            value={formData.email} 
            onChange={changeHandler}></input>
            <br></br>

            <label htmlFor='country' className='sub_headings'>Country</label>
            <br></br>
            <select className='country_input'
            name='country'
            id='country'
            value={formData.country}
            onChange={changeHandler}>
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Mexico">Mexico</option>
            </select>
            <br></br>

            <label htmlFor='streetAddress' className='sub_headings'>Street Address</label>
            <br></br>
            <input className='text_input'
            type='text' 
            placeholder='1234 Main St' 
            name="streetAddress" 
            id='streetAddress'
            value={formData.streetAddress} 
            onChange={changeHandler}></input>
            <br></br>

            <label htmlFor='city' className='sub_headings'>City</label>
            <br></br>
            <input className='text_input'
            type='text' 
            placeholder='Asansol' 
            name='city'
            id='city'
            value={formData.city}
            onChange={changeHandler}></input>
            <br></br>

            <label htmlFor='state' className='sub_headings'>State/Province</label>
            <br></br>
            <input className='text_input'
            type='text' 
            placeholder='West Bengal'
            id='state'
            name='state'
            value={formData.state}
            onChange={changeHandler}></input>

            <br></br>

            <label htmlFor='postalCode' className='sub_headings'>Zip / Postal Code</label>
            <br></br>
            <input className='text_input'
            type='numeric' 
            placeholder='713301'
            id='postalCode'
            name='postalCode'
            value={formData.postalCode}
            onChange={changeHandler}></input>
            <br></br>

            <fieldset className='email_mssgs'>
                <legend className='sub_headings'>By Email</legend>

                <div className='checkbox_container'>
                   <input 
                    type='checkbox' 
                    id='comments'
                    name='comments'
                    checked={formData.comments} 
                    onChange={changeHandler}></input>
                    <div className='checkbox_content'>
                       <label htmlFor='comments' className='sub_headings'>Comments</label>
                       <p className='checkbox_para'>Get notified when someone posts a comment on a posting</p>
                   </div>
                </div>

                <div className='checkbox_container'>
                   <input 
                    type='checkbox' 
                    id='candidates'
                    name='candidates'
                    checked={formData.candidates} 
                    onChange={changeHandler}></input>
                    <div className='checkbox_content'>
                       <label htmlFor='candidates' className='sub_headings'>Candidates</label>
                       <p className='checkbox_para'>Get notified when a candidate apply for a job</p>
                   </div>
                </div>

                <div className='checkbox_container'>
                   <input 
                    type='checkbox' 
                    id='offer'
                    name='offer'
                    checked={formData.offer} 
                    onChange={changeHandler}></input>
                    <div className='checkbox_content'>
                       <label htmlFor='offer' className='sub_headings'>Offer</label>
                       <p className='checkbox_para'>Get notified when a candidate accepts or rejects an offer</p>
                   </div>
                </div>
            </fieldset>

            <br></br>
            <br></br>

            <fieldset className='push_container'>
                <legend className='sub_headings'>Push Notifications</legend>
                <p id='push_content' className='checkbox_para'>These are delivered via SMS to your mobile phones</p>
                 <div className='push_options'>
                 <input  
                type='radio'
                id='pushEverything'
                name='pushNotifications'
                value="Everything"
                onChange={changeHandler}></input>
                <label htmlFor='pushEverything'>Everything</label>
                 </div>

                <div className='push_options'>
                <input 
                type='radio'
                id='pushEmail'
                name='pushNotifications'
                value="Same as email"
                onChange={changeHandler}></input>
                <label htmlFor='pushEmail'>Same as email</label>
                </div>

                <div className='push_options'>
                <input
                type='radio'
                id='pushNothing'
                name='pushNotifications'
                value="No push notification"
                onChange={changeHandler}></input>
                <label htmlFor='pushNothing'>No push notification</label>
                </div>
            </fieldset>

            <button className='save_btn'>Save</button>
        </form>
    </div>
  )
}

export default DetailsForm
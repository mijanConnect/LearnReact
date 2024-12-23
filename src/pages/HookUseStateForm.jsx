import React, { useState } from 'react';

const HookUseStateForm = () => {

    let [formObj, setFormObj]=useState({
        fName:'',
        lName:'',
        city:'',
        gender:''
    })

    const inputOnChange = (property, value)=>{
        setFormObj(prevObj=>({
            ...prevObj,
            [property]:value
        }))
    }

    const formSubmit = (e)=>{
        e.preventDefault();

        alert(JSON.stringify(formObj))
        // console.log(formObj)
    }

    return (
        <div>
            <div className='container'>
                <form onSubmit={formSubmit}>
                    <input type="text" onChange={(e)=>{inputOnChange('fName',e.target.value)}} value={formObj.fName} placeholder='First Name' />
                    <input type="text" onChange={(e)=>{inputOnChange('lName',e.target.value)}} value={formObj.lName} placeholder='Last Name' />
                    <select onChange={(e)=>{inputOnChange('city',e.target.value)}} value={formObj.city}>
                        <option value="">Choose City</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chapainawabganj">Chapainawabganj</option>
                    </select>
                    <br />
                    <input type="radio" onChange={()=>{inputOnChange('gender','Male')}} checked={formObj.gender==='Male'} name='gender' />Male
                    <input type="radio" onChange={()=>{inputOnChange('gender','Female')}} checked={formObj.gender==='Female'} name='gender' />Female
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default HookUseStateForm;
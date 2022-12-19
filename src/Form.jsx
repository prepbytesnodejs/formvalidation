import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const Form =()=>{

const onSubmit =(data) => {
console.log(data);
  
}

const schema = yup.object({
    name: yup.string().required(),
    email:yup.string().required().matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "It should be a proper email"
      ),
    phone:yup.string().required().min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits')
  
  }).required();

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });





  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>

            <input type={"text"}   {...register("name")}/> <br></br>
            <p style={{color:"red"}}>{errors.name?.message}</p>
            
            <input type={"text"}  {...register("email")}/> <br></br>
            <p style={{color:"red"}}>{errors.email?.message}</p>

            <input type={"text"}  {...register("phone")}/> <br></br>
            <p style={{color:"red"}}>{errors.phone?.message}</p>




            <button type='submit'>
                Submit 
            </button>





        </form>

    </div>
  )
}

export default Form
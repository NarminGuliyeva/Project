import React from 'react'
import { useForm } from "react-hook-form";
import styles from './Contact.module.css'
import Input from '../../components/input/Input'


const ContactForm = () => {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <form>
            <h2>Bizimle elaqe</h2>
            <Input
                placeholder="Ad" className="formInp" type="text"
            />
            <Input
                placeholder="Soyad" className="formInp" type="text"
            />
            <Input
                placeholder="Nomre" className="formInp" type="number"
            />
            <Input
                placeholder="Email" className="formInp" type="text"
            />
             <Input
                placeholder="Message" className="formInp" type="text"
            />
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}

            {/* // {...register("name")} 
            // placeholder="Ad" cassName="inp" */}

            {/* <Input
                // {...register("name")} 
                placeholder="Soyad" cls="inp"></Input> */}
            {/* <Input
                // {...register("name")} 
                placeholder="Phone" type="number" cls="inp"></Input> */}
            {/* <input {...register("exampleRequired", { required: true })} /> */}
            {/* {errors.exampleRequired && <span>This field is required</span>} */}
            <button className={styles.btnForm} type="submit" >Gonder</button>
        </form>
    )
}

export default ContactForm
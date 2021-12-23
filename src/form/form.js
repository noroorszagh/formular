import Previews from "../dropzone";
import Previews_1 from "../dropzone1";
import "./form.css";
import { TiMail } from "react-icons/ti";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Create  = () => {
    const [selected, setSelected] = useState("Vyberte stav položky")
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const [data, setCategory] = useState('');

    const handleCategoryChange = (data) => {
       setCategory(data);
       console.log(data);
   }

    return (
        <div className="Create">
            <div className="container">
                <div className="intro">
                    <h1 className="h1">
                        Napište nám!
                    </h1>
                    <p className="Lorem">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget mi a risus rhoncus faucibus id quis augue. Donec et pulvinar augue, id suscipit tortor. Nulla rutrum neque vitae risus tempus condimentum. Nullam sed lacus massa. In volutpat, velit eget tempor cursus, purus lacus sollicitudin ipsum, sed eleifend libero nisl eu velit.
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flexbox-con">
                        
                        <div className="test1">
                        <label>Nadpis</label>
                        <input placeholder="Praesent"
                         type="text"
                        required
                        className="nadpis" {...register("Nadpis")}
                         />
                        </div>
                        
                       <div className="test1">
                        <label>Cena</label>
                       <input  type="number"
                        placeholder="Praesent"
                        required
                        min="1"
                        className="cena" {...register("Cena")} />
                       </div>
                        
                        
                        <div className="test1">
                        <label>Email</label>
                        <input
                        type="email"
                        placeholder="Praesent"
                        required
                        className="email" {...register("Email")}/>
                        </div>
                       
                    </div>
                    
                        <div className="flexbox-con1">
                            <div>
                            <label>Popis</label>
                            <textarea className="text-area-popis" placeholder="Praesent" required {...register("Popis", { required: "Je potrebný popis" })}/>
                            </div>
                            
                            <div className="fl">
                                <div className="dragarea">
                                    <Previews className="hlfotka"/>
                                </div>
                            </div>
        
                     </div>
                    


                    
                        <div className="flexbox-con2">

                            <div className="dragarea">
                                <Previews_1 />
                            </div>

                            <div className="moznosti"  onSubmit={handleSubmit(onSubmit)}>
                                <label>Vyberte dostupnosť</label>
                                <select className="moznosti" value={data} {...register("Dostupnost") }>
                                <option id="0" >Voľná</option>
                                <option id="1" >Predaná</option>
                                </select>

                            </div>

                            
                                <div className="fl">
                                    <button className="button-2"><span className="sipka"><TiMail /></span></button>
                                </div>
                            
        
                        </div>
                </form>

            </div>
        </div>
            
    
    )
}

export default Create;
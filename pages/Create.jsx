import Head from 'next/head'
import Link from 'next/link'
import React, { useReducer } from 'react'
import CreateStyle from "../styles/Create.module.css"
import axios from 'axios'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { db } from '@/config/firebase'


const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

const Create = () => {
    const [formData, setformData] = useReducer(formReducer, {})


    // const databaseURL = "https://nextjscrud-16aed-default-rtdb.firebaseio.com/"

    // const createUser = async () => {
    //     try {
    //         await axios.post("https://nextjscrud-16aed-default-rtdb.firebaseio.com/.json",formData)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }




    const createUser = async ()  => {
        await addDoc(collection(db, "users"),formData)
    }





    return (

        <div>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
            </Head>
            <div className={CreateStyle.fullwidLI}>
                <div className={CreateStyle.mrloginForm}>
                    <div className={CreateStyle.logoimg}>
                        <h1>CRUD</h1>
                    </div>
                    <div className="mrform">
                        <div className={`${CreateStyle.mrpass} ${CreateStyle.mrinputs}`}>
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" id='firstname' placeholder='First Name' name='firstname'
                                onChange={setformData} />
                        </div>
                        <div className={`${CreateStyle.mrinputs}`}>
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" id='lastname' placeholder='Last Name'
                                name='lastname'
                                onChange={setformData}
                            />
                        </div>
                        <div className={`${CreateStyle.mrinputs}`}>
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" id='phone' placeholder='Phone Number'
                                name='phone'
                                onChange={setformData}
                            />
                        </div>
                        <div className={`${CreateStyle.mrinputs}`}>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" placeholder='Email Address'
                                name='email'
                                onChange={setformData}
                            />
                        </div>
                    </div>
                    <div className={CreateStyle.mrbtn}>
                        <Link onClick={createUser} href="/Read" className="btn btn-success btn-lg">Create</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Create




//65, 34, 206
//128, 37, 255
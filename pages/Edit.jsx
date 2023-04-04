import React, { useState, useEffect } from 'react'
import Editstyle from "../styles/Edit.module.css"
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';


const Edit = (props) => {

    const [Udata, setUdata] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
    })
    const setUForm = (event) => {
        const { name, value } = event.target;
        setUdata({ ...Udata, [name]: value });
    };

    const router = useRouter();
    const { id } = router.query;
    
    const handleUpdate = async () => {
        const documentRef = doc(collection(db, 'users'), id);
        const documentSnapshot = await getDoc(documentRef);
        const docData = documentSnapshot.data();
        setUdata(docData);
        try {
            await updateDoc(documentRef, Udata);
            console.log("Document successfully updated!");
          } catch (e) {
            console.error("Error updating document: ", e);
          }
      };
  useEffect(() => {    
    if (id) {
        handleUpdate();
    }
  }, [id]);


    return (
        <div>
            <div className={Editstyle.editForm}>
                <h1>EDIT</h1>
                <div className="edit2form">
                    <div className={`${Editstyle.mrpass} ${Editstyle.mrinputs}`}>
                        <input type="text" id='firstname' placeholder='First Name' name='firstname'
                            onChange={setUForm}
                            value={Udata.firstname}
                        />
                    </div>
                    <div className={`${Editstyle.mrpass} ${Editstyle.mrinputs}`}>
                        <input type="text" id='lastname' placeholder='Last Name'
                            name='lastname'
                            onChange={setUForm}
                            value={Udata.lastname}
                        />
                    </div>
                    <div className={`${Editstyle.mrpass} ${Editstyle.mrinputs}`}>
                        <input type="text" id='phone' placeholder='Phone Number'
                            name='phone'
                            onChange={setUForm}
                            value={Udata.phone}
                        />
                    </div>
                    <div className={`${Editstyle.mrpass} ${Editstyle.mrinputs}`}>
                        <input type="email" id="email" placeholder='Email Address'
                            name='email'
                            onChange={setUForm}
                            value={Udata.email}
                        />
                    </div>
                </div>
                <div className={Editstyle.editbtn}>
                    <Link href={"/Read"} onClick={handleUpdate}>Edit</Link>
                </div>


            </div>
        </div>
    )
}

export default Edit
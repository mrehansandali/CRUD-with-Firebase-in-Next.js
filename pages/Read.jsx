import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Readstyle from "../styles/Read.module.css"
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';


const Read = () => {

    const [getData, setgetData] = useState([])
    const handleGetRequest = async () => {
        const docSnap = await getDocs(collection(db, "users"), getData)
        let getDataArr = []
        docSnap.forEach((doc) => {
            getDataArr.push({ id: doc.id, ...doc.data() })
        });
        setgetData(getDataArr)
    }
    useEffect(() => {
        handleGetRequest()
    }, [])

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "users", id));
            console.log("Document deleted from Firestore with ID:", id);
            setgetData((prevData) => prevData.filter((item) => item.id !== id));
            console.log("Document removed from UI with ID:", id);
        } catch (error) {
            console.error("Error deleting document:", error);
        }
    };
    const Router = useRouter()
    const handleEdit = (id) => {
        Router.push({
            pathname: '/Edit',
            query: { id: id }
        });
        console.log(id)
    }


    return (
        <div>
            <Head>
                <title>CRUD App Read</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
            </Head>


            <div className={Readstyle.mrsearchbar}>
                <form className={`d-flex ${Readstyle.mrform} mx-auto`} role="search">
                    <div className={Readstyle.searchInput}>
                        <button type="submit" className={Readstyle.mrsearchbtn}>
                            <FaSearch />
                        </button>
                        <input className={Readstyle.mrsearchField} type="text" placeholder="Search" />
                    </div>
                </form>
            </div>
            <div className={`${Readstyle.mrtable} container`}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Phone No.</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getData.map((list) => {
                            const { id, firstname, lastname, phone, email, data } = list;
                            return (
                                <tr key={id}>
                                    <td>{firstname}</td>
                                    <td>{lastname}</td>
                                    <td>{phone}</td>
                                    <td>{email}</td>
                                    <td>
                                        <div className={Readstyle.updatebtn}>
                                            <div className={`${Readstyle.editbtn} me-2`}>
                                                <button onClick={() => handleEdit(id)}>
                                                    <Link href={"/Edit"}>
                                                        <FiEdit />Edit
                                                    </Link>
                                                </button></div>
                                            <div className={Readstyle.delbtn}>
                                                <button onClick={() => handleDelete(id)}><AiFillDelete /> Delete</button></div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className={Readstyle.createbtn}>
                <Link href={"/Create"}>Create More</Link>
            </div>

        </div>
    )
}

export default Read
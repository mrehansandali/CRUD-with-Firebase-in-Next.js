import React from 'react'
import start from "../styles/Start.module.css"
import Script from 'next/script'
import Head from 'next/head'
import crud from "../img/CRUD.png"
import Image from 'next/image'
import Link from 'next/link'

const Start = () => {
    return (
        <div>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
            </Head>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous" />


            <div className={start.mrcontainer}>
                <div className={start.img}>
                    <Image
                    src={crud}
                    alt='crud'
                    />
                </div>
                <div className="mrbtn">
                    <Link href={"/Create"} className="btn btn-success btn-lg">Getting Started</Link>
                </div>
            </div>


        </div >
    )
}

export default Start
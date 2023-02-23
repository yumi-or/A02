import Link from "next/link";
import React, {useState} from "react";
import Fade from "react-reveal/Fade";
import  { firebaseApp } from "../firebaseHelper"
import fetch from "cross-fetch";

const mm_table = {
    'NotFound' : "NotFound",
    'ansonlo2_001' : "Anson Lo",
    'ansonlo2_002' : "Anson Lo",
    'ansonlo2_003' : "Anson Lo",
    'ansonlo2_004' : "Anson Lo",
    'keungto2_001' : "Keung To",
    'keungto2_002' : "Keung To",
    'keungto2_003' : "Keung To",
    'keungto2_004' : "Keung To",
}

const IndexHeroArea3 = () => {

    const [url, setUrl] = useState("");
    const [product, setProduct] = useState({'name':'None','score':0})

    const onSubmit = e => {
        e.preventDefault()
    }

    const clearTempImage = () => {
        const storageRef = firebaseApp.storage().ref('yumi-pst-storage')
        const listRef = storageRef.child('temp_images')
        listRef.listAll()
            .then((res) => {
                res.items.forEach((itemRef) => {
                    const desertRef = storageRef.child('temp_images/' + itemRef.name);
                    // Delete the file
                    desertRef.delete().then(() => {
                        console.log('File deleted successfully : ' + itemRef.name)
                    }).catch((error) => {
                        console.log('File deletion failed: ' + error)
                    });
                });
            }).catch((error) => {
            console.error(error)
        });
    }

    const onFileChange = async (e) => {
        if (e.target.files[0]) {
            const file = e.target.files[0]
            const storageRef = firebaseApp.storage().ref('yumi-pst-storage/temp_images')
            const fileRef = storageRef.child(file.name)
            await fileRef.put(file)
            setUrl(await fileRef.getDownloadURL())

            const url_test = "https://us-central1-test-product-search-interns.cloudfunctions.net/getMirrorMember?message=" + file.name + "&score=" + "0.3"
            console.log(url_test)
            await fetch(url_test)
                .then(data => data.json())
                .then(res => {
                    const result = {
                        'name':mm_table[res[0]['name']],
                        'score':res[0]['score']
                    }
                    setProduct(result)
                    console.log(result)
                }).catch(() => {
                    const result = {
                        'name':"NotFound",
                        'score':1
                    }
                    setProduct(result)
                    console.log(result)
                })
            clearTempImage();
        }
    };

    return (
        <section className="hero-area">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5">
                        <div className="hero-text">
                            <Fade top>
                                <span
                                    className="title-tag wow fadeInDown"
                                    data-wow-delay="0.3s"
                                >
                                    <br/>
                                    Let &apos;s try out our Product Search API.
                                </span>
                            </Fade>
                            <Fade left>
                                <h4
                                    className="fadeInLeft"
                                    data-wow-delay="0.5s"
                                >
                                    The Recognized Mirror Member is : {product['name']}
                                    <br/>
                                    The Similarity score is : {(100*product['score']).toFixed(4)}
                                </h4>
                            </Fade>
                            <ul className="hero-btns">
                                <form onSubmit={onSubmit}>
                                    <Fade bottom>
                                        <li
                                            className="wow fadeInUp"
                                            data-wow-delay="0.7s"
                                        >
                                            <input type="file"  onChange={onFileChange}/>
                                            <button className="main-btn">Upload Now</button>
                                            {/*<Link href="/service-2">*/}
                                            {/*    <a className="main-btn">*/}
                                            {/*        Upload Now*/}
                                            {/*    </a>*/}
                                            {/*</Link>*/}
                                        </li>
                                    </Fade>
                                </form>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-10">
                        <Fade right>
                            <div
                                className="hero-img text-lg-end text-center wow fadeInRight"
                                data-wow-delay="0.3s"
                            >
                                <img
                                    src={ url || "img/hero-img/dummyback.png" }
                                    alt="HeroImage"
                                    style={{maxHeight:"300px"}}
                                />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndexHeroArea3;

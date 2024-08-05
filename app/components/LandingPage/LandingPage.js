"use client";
import React, {useEffect, useState, useContext} from "react";
import { useRouter } from 'next/navigation'; 
import "./landing.css";
import {FaApple, FaCircle} from "react-icons/fa";
import {IoIosBatteryFull, IoIosSearch} from "react-icons/io";
import bg from "@/public/background.jpg";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { FaHome } from 'react-icons/fa';
import ItemCards from "@/app/components/itemCards/ItemCards";
import { CartContext } from '@/app/context/CartContext';            
import wholefoodlogo from '@/public/logo_wholefoods.png';
import Cart from "@/app/components/cart/Cart";
import { useCart } from '@/app/context/CartContext';




const LandingPage = ()=>{
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [showCart, setShowCart] = useState(false);
    const router = useRouter();
    const { handleAdd, handleRemove, totalItems } = useContext(CartContext);

    const toggleCart = () => {
        setShowCart(!showCart);
      };
    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
            const timeOptions = { hour: '2-digit', minute: '2-digit' };
            setDate(now.toLocaleDateString(undefined, dateOptions));
            setTime(now.toLocaleTimeString(undefined, timeOptions));
        };
        updateDateTime(); // Update date and time immediately
        const intervalId = setInterval(updateDateTime, 60000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className={"section-4"}>
            <div className={"first-box-4 items-start justify-start d-flex flex-row flex-shrink-0"}>
                <div className={"second-box-4 justify-start d-flex flex-col flex-shrink-0"} style={{backgroundImage: `url('background.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className={"nav-box-4 items-start justify-between d-flex flex-row flex-shrink-0"}>
                        <div className={"inner-div-4 flex-row justify-center"}>
                            <div className={"description-page-4 justify-center"}>
                                <nav className={"flex items-center justify-between sticky"} id={"nav"}>
                                    <div className={"intro-4 mt-2 ml-10"}>
                                        <FaApple className={"apple-2"} />
                                    </div>
                                    <div className={"safari ml-4 mt-3"}>
                                        <p className={"safari-text-2"}>Safari</p>
                                    </div>
                                    <div className={"safari ml-5 mt-3"}>
                                        <p className={"file-text"}>File</p>
                                    </div>
                                    <div className={"safari ml-5 mt-3"}>
                                        <p className={"edit-text"}>Edit</p>
                                    </div>
                                    <div className={"safari ml-5 mt-3"}>
                                        <p className={"view-text"}>View</p>
                                    </div>
                                    <div className={"safari ml-5 mt-3"}>
                                        <p className={"history-text"}>History</p>
                                    </div>
                                    <div className={"safari ml-5 mt-3"}>
                                        <p className={"window-text"}>Window</p>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className={"camera-bump-3 position-absolute justify-center translate-middle"}></div>
                        <div className={"arrow-right-3 items-center flex flex-row mt-1 mr-10"}>
                            <div className={"battery-experiance mr-4"}><IoIosBatteryFull /></div>
                            <div className={"search-experiance mr-3"}><IoIosSearch /></div>
                            <div className={"m-3"} id="date-experiance">{date}</div>
                            <div className={"m-3"} id="time-experiance">{time}</div>
                        </div>
                    </div>
                    <div className={"first-box items-start justify-start d-flex flex-row flex-shrink-0"}>
                        <div className={"second-box items-start justify-start d-flex flex-row flex-shrink-0"}>
                            <div className={"lights"}>
                                <div id={"red"}>
                                    <FaCircle style={{ color: '#de4d41', fontSize: '12px' }} id={"FaCircle"}/>
                                </div>
                                <div id={"yellow"}>
                                    <FaCircle style={{ color: '#ecde55', fontSize: '12px' }} id={"FaCircle"}/>
                                </div>
                                <div id={"green"}>
                                    <FaCircle style={{ color: '#48bd48', fontSize: '12px' }} id={"FaCircle"}/>
                                </div>
                            </div>
                            <div className={"inner-div flex flex-row "}>
                                <div className={"side-nav flex flex-col items-center justify-start bg-neutral-50 mt-20"}>
                                    <div className={"side-nav-lists flex flex-col items-center justify-between"}>
                                        <div className={"side-logo mb-5 mt-3"}>
                                            <div className={"logo-icon"}>
                                                <Image src={wholefoodlogo} className={"side-icon bg-transparent"} alt={"icon-pantry"}/>
                                            </div>
                                        </div>
                                        <div className={"sidenav-links items-center justify-center flex-grow"}>
                                            <div className={"side-home mb-4 ml-2"} onClick={toggleCart}>
                                                <FaHome className={"text-black fa-home"}/>
                                            </div>
                                            <div className={"side-cart mb-3 ml-2"}>
                                                <div onClick={toggleCart}>
                                                    <IoCartOutline className={"mr-1"} style={{fontSize : '20px'}} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"main-content"}>
                                        {showCart ? <Cart /> : <ItemCards handleAdd={handleAdd} handleRemove={handleRemove} totalItems={totalItems} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default LandingPage;
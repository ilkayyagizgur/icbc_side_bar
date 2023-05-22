import React, {useState} from 'react';
import {
    FaBars,
    FaCommentAlt,
    FaFolder,
    FaRegChartBar,
    FaShoppingBag,
    FaTh,
    FaThList, FaTimes,
    FaUserAlt
} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import '../App.css';

const SideBar = ({children}) => {

    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => setIsOpen(!isOpen)

    const menuItem=[
        /*{
            path: "/",
            name: "Dashboard",
            icon: <FaTh/>
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUserAlt/>
        },
        {
            path: "/analytics",
            name: "Analytics",
            icon: <FaRegChartBar/>
        },
        {
            path: "/comment",
            name: "Comment",
            icon: <FaCommentAlt/>
        },
        {
            path: "/product",
            name: "Product",
            icon: <FaShoppingBag/>
        },
        {
            path: "/productList",
            name: "Product List",
            icon: <FaThList/>
        },*/
        {
            path: "/eodislemleri",
            name: "EOD İşlemleri",
            icon: <FaFolder/>
        },
        {
            path: "/cariislemler",
            name: "Cari İşlemleri",
            icon: <FaFolder/>
        },
        {
            path: "/btislemler",
            name: "BT İşlemleri",
            icon: <FaFolder/>
        },
        {
            path: "/cekislemler",
            name: "Çek İşlemleri",
            icon: <FaFolder/>
        },
        {
            path: "/nakityonetimiislemler",
            name: "Nakit Yönetimi İşlemleri",
            icon: <FaFolder/>
        },
        {
            path: "/internetbankaciligi",
            name: "İnternet Bankacılığı",
            icon: <FaFolder/>
        },
        {
            path: "/kurumsaltahsilatlar",
            name: "Kurumsal Tahsilatlar",
            icon: <FaFolder/>
        },
        {
            path: "/istihbarat",
            name: "İstihbarat",
            icon: <FaFolder/>
        },
        {
            path: "/senetler",
            name: "Senetler",
            icon: <FaFolder/>
        }
    ]

    return (
        <div className="container">
            <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
                <div className="top_section">
                    <div className="bars">
                        {isOpen ? <FaBars onClick={toggle}/> : <FaTimes onClick={toggle}/>}
                    </div>
                </div>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default SideBar;

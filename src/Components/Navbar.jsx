// import React from 'react'
import { Link } from 'react-router-dom'


const navContent = [
    { name: "Home", path: "/"},
    { name: "About", path: "/about"},
    { name: "Our Service", path: "/services"},
    { name: "Career", path: "/career"},
]

const Navbar = () => {
  return (
    <div style = {{ display:"flex", justifyContent: "space-between", background: "brown"}}>
        <h1>Logo</h1>
    <div>
        <ul style = {{listStyle: "none", display:"flex", gap: "20px", paddingRight: "10px", paddingTop: "15px" }}>
        {navContent.map((content, index) => (
            <li key = {index}>
                <Link 
                style= {{ textDecoration: "none",}}
                to={content.path}>
                    {content.name}
                </Link>
            </li>
        ))} 
        </ul>
    </div>


    </div>

  )
}

export default Navbar
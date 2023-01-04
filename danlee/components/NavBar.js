import React, {useState} from "react";

const navigation = [
    {name: 'Home', href: '#'},
]
export default function NavBar(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
       <div className="isolate">
            <div className="px-6 py-6">
                <p>Nav Bar Location</p>
            </div>
       </div>
    );
}
import { useEffect, useState } from "react"

const useUser = email => {
    const [isUser, setIsUser] = useState(false);
    const [isUserLoading, setuserLoading] = useState(true);
    useEffect(() => {

        if (email) {
            fetch(`http://localhost:5000/users/Seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsUser(data.isoption);
                    setuserLoading(false);
                })
        }
    }, [email])
    return [isUser, isUserLoading]
}

export default useUser;
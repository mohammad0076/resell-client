import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`https://oobbss-server.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.acccessToken) {

                        localStorage.setItem('acccessToken', data.acccessToken);
                        setToken(data.acccessToken)

                    }
                })
        }
    }, [email]);
    return [token]


}

export default useToken;
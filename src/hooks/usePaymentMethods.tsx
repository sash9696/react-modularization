
import React, { useEffect, useState } from "react";
import { convertPaymentMethods } from "../global";

type LocalPaymentMethod = [];
type RemotePaymentMethod = [];



function usePaymentMethods(){

    const [paymentMethods, setPaymentMethods] = useState<LocalPaymentMethod[]>(
		[]
	);
    const fetchPaymentMethods = async () => {
        const response = await fetch("https://5a2f495fa871f00012678d70.mockapi.io/api/payment-methods?countryCode=AU");
        const methods: RemotePaymentMethod[] = await response.json();
      
        return convertPaymentMethods(methods)
      }
	useEffect(() => {
		// const fetchPaymentMethods = async () => {
		// 	const url = "https://online-ordering.com/api/payment-methods";
		// 	const response = await fetch(url);
		// 	// const methods : RemotePaymentMethod[] = await response.json();
		// 	// console.log(methods)
		// 	const methods: RemotePaymentMethod[] = [
		// 		{ name: "cash" },
		// 		{ name: "google" },
		// 		{ name: "apple" },
		// 	];
        //     setPaymentMethods(convertPaymentMethods(methods));
		// };
        fetchPaymentMethods().then(methods => setPaymentMethods(methods))
	}, []);

    return {paymentMethods}
}

export default usePaymentMethods
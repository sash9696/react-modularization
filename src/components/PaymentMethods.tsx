import React from "react";

type LocalPaymentMethod = [];

function PaymentMethods({
	paymentMethods,
}: {
	paymentMethods: LocalPaymentMethod[];
}) {
	return (
		<div>
			{paymentMethods.map((method) => (
				<label key={method.provider}>
					<input
						type="radio"
						name="payment"
						value={method.provider}
						defaultChecked={method.isDefaultMethod}
					/>
					<span>{method.label}</span>
				</label>
			))}
		</div>
	);
}

export default PaymentMethods;

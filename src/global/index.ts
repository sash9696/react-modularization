import PaymentMethod from "../models/PaymentMethod";



export const convertPaymentMethods = (methods: RemotePaymentMethod[]) => {
    const payInCash = new PaymentMethod({ name: "cash" });

    if (methods.length === 0) {
      return [];
    }
  
    const extended: PaymentMethod[] = methods.map(
      (method) => new PaymentMethod(method)
    );
    extended.push(payInCash);
  
    return extended;
  };
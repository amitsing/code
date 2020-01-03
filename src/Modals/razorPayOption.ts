///// @author : Ankit Saini
///// @purpose : worked as razorPayOption Modal

export interface razorPayOption {
    description: string,
    image: string,
    currency: string,
    key: string,
    amount: number,
    name: string,
    prefill: {
      email: string,
      contact: string,
      name: string,
    },
    theme?: {
      color?: string,
    }
  }
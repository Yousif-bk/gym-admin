
import * as Yup from "yup";
const ValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone is required"),
    address: Yup.string().required("Address is required"),
    subscriptionType: Yup.string().required("Subscription Type is required"),
}); 
export default ValidationSchema;
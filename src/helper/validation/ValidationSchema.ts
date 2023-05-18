
import * as Yup from "yup";
const ValidationSchema = Yup.object().shape({
    full_name: Yup.string().required("Name is required"),
    mobile_number: Yup.string().required("Phone is required"),
    address: Yup.string().required("Address is required"),
    subscription_plan: Yup.string().required("Subscription Type is required"),
}); 
export default ValidationSchema;
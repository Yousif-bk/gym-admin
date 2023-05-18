
import * as Yup from "yup";
const ClassValidationSchema = Yup.object().shape({
    class_title: Yup.string().required(" Class Name is required"),
    coach_name: Yup.string().required("Coach name is required"),
    timing: Yup.string().required("timing is required"),
    price: Yup.string().required("Price Type is required"),
});
export default ClassValidationSchema;
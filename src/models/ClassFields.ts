import Class from "./Class";

 const ClassFields: { key: keyof Class; label: string; ignoreObject?: boolean }[] = [
    { key: 'id', label: 'ID' },
     { key: 'image', label: 'Image', ignoreObject: true },
    { key: 'coach_name', label: 'Coach Name' },
    { key: 'timing', label: 'Timing' },
    { key: 'price', label: 'Price' },
    { key: 'description', label: 'Description' },
    { key: 'coach_brief', label: 'Coach Brief' },
    { key: 'action', label: 'Action' },
];

export default ClassFields
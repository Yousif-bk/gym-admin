import Client from "./Client"
export const ClientFields: { key: keyof Client; label: string; ignoreObject?: boolean }[] = [
    { key: "id", label: "ID" },
    { key: "avatar", label: "Avatar", ignoreObject: true },
    { key: "full_name", label: "Full Name" },
    { key: "address", label: "Address" },
    { key: "subscription_plan", label: "Subscription Plan" },
    { key: "mobile_number", label: "Mobile Number" },
    { key: "createdAt", label: "Created At" },
];

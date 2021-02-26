export const token = localStorage.getItem('token');
export const info = {
    email: {
        type: "email",
        placeholder: "Email",
        isRequired: true
    },

    password: {
        type: "password",
        placeholder: "Password",
        isRequired: true
    },

    cardiologist: {
        type: "text",
        placeholder: "cardiologist",
        isRequired: true
    },

    dentist: {
        type: "text",
        placeholder: "Dentist",
        isRequired: true
    },

    therapist: {
        type: "text",
        placeholder: "Therapist",
        isRequired: true
    },

    fullName: {
        type: "text",
        placeholder: "Full name",
        isRequired: true
    },
    age: {
        type: "text",
        placeholder: "Age",
        isRequired: true
    },
    purpose: {
        type: "text",
        placeholder: "Visit purpose",
        isRequired: true
    },
    desc: {
        placeholder: "Visit description",
        isRequired: true
    },
    pressure: {
        type: "text",
        placeholder: "Pressure",
        isRequired: true
    },
    weightIndex: {
        type: "text",
        placeholder: "Body mass index",
        isRequired: true
    },
    illness: {
        placeholder: "Heart diseases in past",
        isRequired: true
    },
    lastDateVisit: {
        type: "text",
        placeholder: "Last of visit date",
        isRequired: true
    },
    submit: {
        type: "submit"
    },

    priority: [
        "Choose urgency",
        "Low",
        "Common",
        "High"
    ],

    docSelect: [
        "Cardiologist",
        "Dentist",
        "Therapeutist",
    ],

    cardEdit: [
        "Edit options",
        "Edit",
        "Delete",
    ],
    status: [
        "Choose status",
        "Open",
        "Closed"
    ]
}

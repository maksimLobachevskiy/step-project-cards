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

    fullName: {
        type: "text",
        placeholder: "ФИО",
        isRequired: true
    },
    age: {
        type: "text",
        placeholder: "Возраст",
        isRequired: true
    },
    purpose: {
        type: "text",
        placeholder: "Цель визита",
        isRequired: true
    },
    desc: {
        placeholder: "Описание визита",
        isRequired: true
    },
    pressure: {
        type: "text",
        placeholder: "Давление",
        isRequired: true
    },
    weightIndex: {
        type: "text",
        placeholder: "Индекс массы тела",
        isRequired: true
    },
    illness: {
        placeholder: "Ранее перенесённые заболевания сердца",
        isRequired: true
    },
    lastDateVisit: {
        type: "text",
        placeholder: "Дата последнего визита",
        isRequired: true
    },
    submit: {
        type: "submit"
    },

    priority: [
        "Выберите срочность",
        "Низкая",
        "Обычная",
        "Высокая"
    ],

    docSelect: [
        "Cardiologist",
        "Dentist",
        "Therapeutist",
    ],

    cardEdit: [
        "Опции редактирования",
        "Редактировать",
        "Удалить",
    ],
    status: [
        "Выберите статус",
        "Открыт",
        "Закрыт"
    ]
}

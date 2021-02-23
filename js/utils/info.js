export const info = {
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

//alert(localStorage.getItem("reservations"))
localStorage.clear()
/**************************** USER ***************************************/
const userCreated = [{
        id: 1,
        nome: "Sara",
        sobrenome: "Rodrigues",
        data_nascimento: "1996-08-13",
        email: "sara@esmad.ipp.pt",
        password: "123",
        saldo: 20.95,
        telefone: 1,
        id_tipoUser: 1
    },
    {
        id: 2,
        nome: "Tiago",
        sobrenome: "Fernandes",
        data_nascimento: "07-07-1996",
        email: "tiago@esmad.ipp.pt",
        password: 123,
        saldo: 13,
        telefone: 3,
        id_tipoUser: 2
    },
    {
        id: 3,
        nome: "Diogo",
        sobrenome: "Fernandes",
        data_nascimento: "",
        email: "diogo@esmad.ipp.pt",
        password: 123,
        saldo: 12.00,
        telefone: 2,
        id_tipoUser: 2
    }
]
var a = []
for (let value in userCreated) {
    a.push(userCreated[value])
}
if (!localStorage.getItem('user')) {
    localStorage.setItem('user', JSON.stringify(a))
}

/**************************** MENU ***************************************/
const menuCreated = [{
        idMenu: 1,
        date: "2020-01-23",
        mealTime: "Jantar",
        avaiableSeats: 150

    },
    {
        idMenu: 2,
        date: "2020-01-27",
        mealTime: "Almoço",
        avaiableSeats: 150

    },
    {
        idMenu: 3,
        date: "2020-01-28",
        mealTime: "Jantar",
        avaiableSeats: 150
    },
    {
        idMenu: 4,
        date: "2020-02-07",
        mealTime: "Almoço",
        avaiableSeats: 150
    },
    {
        idMenu: 5,
        date: "2020-02-08",
        mealTime: "Almoço",
        avaiableSeats: 150
    },
    {
        idMenu: 6,
        date: "2020-02-09",
        mealTime: "Jantar",
        avaiableSeats: 150
    }

]
var b = []
for (let value in menuCreated) {
    b.push(menuCreated[value])
}
if (!localStorage.getItem('menu')) {
    localStorage.setItem('menu', JSON.stringify(b))
}
/**************************** MEAL ***************************************/
const mealCreated = [{
        idMeal: 1,
        description: "Migas Ripadas",
        idMealType: 2,
        idMenu: 4
    },
    {
        idMeal: 2,
        description: "Sopa de Pedra",
        idMealType: 1,
        idMenu: 4
    },
    {
        idMeal: 3,
        description: "Feijoada à Transmontana",
        idMealType: 3,
        idMenu: 4
    },
    {
        idMeal: 4,
        description: "Caldeirada de Lulas",
        idMealType: 4,
        idMenu: 4
    },
    {
        idMeal: 5,
        description: "Salada de tomate com mozzarella",
        idMealType: 5,
        idMenu: 4
    },
    {
        idMeal: 6,
        description: "Pudim Abade de Priscos",
        idMealType: 6,
        idMenu: 4
    },
    {
        idMeal: 7,
        description: "Prova de Azeite ",
        idMealType: 2,
        idMenu: 5
    },
    {
        idMeal: 8,
        description: "Creme de Legumes com Frango",
        idMealType: 1,
        idMenu: 5
    },
    {
        idMeal: 9,
        description: "Bochechas de Porco no Tacho",
        idMealType: 3,
        idMenu: 5
    },
    {
        idMeal: 10,
        description: "Lombos de Robalo Cozidos com Legumes e Puré de Batata",
        idMealType: 4,
        idMenu: 5
    },
    {
        idMeal: 11,
        description: "Quinoa salteada com ovo e abacate",
        idMealType: 5,
        idMenu: 5
    },
    {
        idMeal: 12,
        description: "Pudim de Azeite e Mel",
        idMealType: 6,
        idMenu: 5
    }
]
var c = []
for (let value in menuCreated) {
    c.push(mealCreated[value])
}
if (!localStorage.getItem('meal')) {
    localStorage.setItem('meal', JSON.stringify(c))
}
/**************************** FEEDBACK ***************************************/
const feedbackCreated = [{
        idFeedback: 0,
        comentario: "Comment",
        temperature: 5,
        taste: 3,
        service: 4,
        presentation: 5,
        idReservation: 2,
        idUser: 1
    },
    {
        idFeedback: 1,
        comentario: "Comment1",
        temperature: 2,
        taste: 4,
        service: 3,
        presentation: 4,
        idReservation: 2,
        idUser: 2
    },

]
var d = []
for (let value in feedbackCreated) {
    d.push(feedbackCreated[value])
}
if (!localStorage.getItem('feedback')) {
    localStorage.setItem('feedback', JSON.stringify(d))
}
/**************************** RESERVATIONS ***************************************/
const reservationsCreated = [{
        idReservation: 1,
        numPersonsCommunity: 3,
        numPersonsRegular: 1,
        numPersonsKids: 0,
        price: 20,
        date: "08-01-2020",
        carne: 2,
        peixe: 1,
        vegetariano: 1,
        idMenu: 2,
        idUser: 2
    },
    {
        idReservation: 2,
        numPersonsCommunity: 2,
        numPersonsRegular: 2,
        numPersonsKids: 2,
        price: 20,
        date: "09-01-2020",
        carne: 2,
        peixe: 2,
        vegetariano: 1,
        idMenu: 3,
        idUser: 1
    },
    {
        idReservation: 3,
        numPersonsCommunity: 2,
        numPersonsRegular: 0,
        numPersonsKids: 0,
        price: 0,
        date: "10-01-2020",
        carne: 2,
        peixe: 2,
        vegetariano: 1,
        idMenu: 4,
        idUser: 2
    },
    {
        idReservation: 4,
        numPersonsCommunity: 1,
        numPersonsRegular: 0,
        numPersonsKids: 0,
        price: 0,
        date: "11-01-2020",
        carne: 2,
        peixe: 2,
        vegetariano: 1,
        idMenu: 5,
        idUser: 3
    }
]
var e = []
for (let value in reservationsCreated) {
    e.push(reservationsCreated[value])
}
if (!localStorage.getItem('reservations')) {
    localStorage.setItem('reservations', JSON.stringify(e))
}
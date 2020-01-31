//alert(localStorage.getItem("reservations"))
//localStorage.clear()
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
        date: "2020-01-30",
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
        date: "2020-01-29",
        mealTime: "Almoço",
        avaiableSeats: 150
    },
    {
        idMenu: 6,
        date: "2020-01-31",
        mealTime: "Jantar",
        avaiableSeats: 2
    },
    {
        idMenu: 7,
        date: "2020-02-01",
        mealTime: "Almoço",
        avaiableSeats: 150
    },
    {
        idMenu: 8,
        date: "2020-02-01",
        mealTime: "Jantar",
        avaiableSeats: 150
    },
    {
        idMenu: 9,
        date: "2020-02-02",
        mealTime: "Almoço",
        avaiableSeats: 150
    },
    {
        idMenu: 10,
        date: "2020-02-02",
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
        idMenu: 1
    },
    {
        idMeal: 2,
        description: "Sopa de Pedra",
        idMealType: 1,
        idMenu: 1
    },
    {
        idMeal: 3,
        description: "Feijoada à Transmontana",
        idMealType: 3,
        idMenu: 1
    },
    {
        idMeal: 4,
        description: "Caldeirada de Lulas",
        idMealType: 4,
        idMenu: 1
    },
    {
        idMeal: 5,
        description: "Salada de tomate com mozzarella",
        idMealType: 5,
        idMenu: 1
    },
    {
        idMeal: 6,
        description: "Pudim Abade de Priscos",
        idMealType: 6,
        idMenu: 1
    },
    {
        idMeal: 7,
        description: "Prova de Azeite ",
        idMealType: 2,
        idMenu: 2
    },
    {
        idMeal: 8,
        description: "Creme de legumes",
        idMealType: 1,
        idMenu: 2
    },
    {
        idMeal: 9,
        description: "Bochechas de Porco no Tacho",
        idMealType: 3,
        idMenu: 2
    },
    {
        idMeal: 10,
        description: "Lombos de robalo",
        idMealType: 4,
        idMenu: 2
    },
    {
        idMeal: 11,
        description: "Quinoa salteada com abacate",
        idMealType: 5,
        idMenu: 2
    },
    {
        idMeal: 12,
        description: "Pudim de Azeite e Mel",
        idMealType: 6,
        idMenu: 2
    },
    {
        idMeal: 13,
        description: "Migas Ripadas",
        idMealType: 2,
        idMenu: 3
    },
    {
        idMeal: 14,
        description: "Sopa de Pedra",
        idMealType: 1,
        idMenu: 3
    },
    {
        idMeal: 15,
        description: "Feijoada à Transmontana",
        idMealType: 3,
        idMenu: 3
    },
    {
        idMeal: 16,
        description: "Caldeirada de Lulas",
        idMealType: 4,
        idMenu: 3
    },
    {
        idMeal: 17,
        description: "Salada de tomate com mozzarella",
        idMealType: 5,
        idMenu: 3
    },
    {
        idMeal: 18,
        description: "Pudim Abade de Priscos",
        idMealType: 6,
        idMenu: 3
    },
    {
        idMeal: 19,
        description: "Prova de Azeite ",
        idMealType: 2,
        idMenu: 4
    },
    {
        idMeal: 20,
        description: "Creme de legumes",
        idMealType: 1,
        idMenu: 4
    },
    {
        idMeal: 21,
        description: "Bochechas de Porco no Tacho",
        idMealType: 3,
        idMenu: 4
    },
    {
        idMeal: 22,
        description: "Lombos de robalo",
        idMealType: 4,
        idMenu: 4
    },
    {
        idMeal: 23,
        description: "Quinoa salteada com abacate",
        idMealType: 5,
        idMenu: 4
    },
    {
        idMeal: 24,
        description: "Pudim de Azeite e Mel",
        idMealType: 6,
        idMenu: 4
    },
    {
        idMeal: 25,
        description: "Migas Ripadas",
        idMealType: 2,
        idMenu: 5
    },
    {
        idMeal: 26,
        description: "Sopa de Pedra",
        idMealType: 1,
        idMenu: 5
    },
    {
        idMeal: 27,
        description: "Feijoada à Transmontana",
        idMealType: 3,
        idMenu: 5
    },
    {
        idMeal: 28,
        description: "Caldeirada de Lulas",
        idMealType: 4,
        idMenu: 5
    },
    {
        idMeal: 29,
        description: "Salada de tomate com mozzarella",
        idMealType: 5,
        idMenu: 5
    },
    {
        idMeal: 30,
        description: "Pudim Abade de Priscos",
        idMealType: 6,
        idMenu: 5
    },
    {
        idMeal: 31,
        description: "Prova de Azeite ",
        idMealType: 2,
        idMenu: 6
    },
    {
        idMeal: 32,
        description: "Creme de legumes",
        idMealType: 1,
        idMenu: 6
    },
    {
        idMeal: 33,
        description: "Bochechas de Porco no Tacho",
        idMealType: 3,
        idMenu: 6
    },
    {
        idMeal: 34,
        description: "Lombos de robalo",
        idMealType: 4,
        idMenu: 6
    },
    {
        idMeal: 35,
        description: "Quinoa salteada com abacate",
        idMealType: 5,
        idMenu: 6
    },
    {
        idMeal: 36,
        description: "Pudim de Azeite e Mel",
        idMealType: 6,
        idMenu: 6
    },
    {
        idMeal: 37,
        description: "Migas Ripadas",
        idMealType: 2,
        idMenu: 7
    },
    {
        idMeal: 38,
        description: "Sopa de Pedra",
        idMealType: 1,
        idMenu: 7
    },
    {
        idMeal: 39,
        description: "Feijoada à Transmontana",
        idMealType: 3,
        idMenu: 7
    },
    {
        idMeal: 40,
        description: "Caldeirada de Lulas",
        idMealType: 4,
        idMenu: 7
    },
    {
        idMeal: 41,
        description: "Salada de tomate com mozzarella",
        idMealType: 5,
        idMenu: 7
    },
    {
        idMeal: 42,
        description: "Pudim Abade de Priscos",
        idMealType: 6,
        idMenu: 7
    },
    {
        idMeal: 43,
        description: "Prova de Azeite ",
        idMealType: 2,
        idMenu: 8
    },
    {
        idMeal: 44,
        description: "Creme de legumes",
        idMealType: 1,
        idMenu: 8
    },
    {
        idMeal: 45,
        description: "Bochechas de Porco no Tacho",
        idMealType: 3,
        idMenu: 8
    },
    {
        idMeal: 46,
        description: "Lombos de robalo",
        idMealType: 4,
        idMenu: 8
    },
    {
        idMeal: 47,
        description: "Quinoa salteada com abacate",
        idMealType: 5,
        idMenu: 8
    },
    {
        idMeal: 48,
        description: "Pudim de Azeite e Mel",
        idMealType: 6,
        idMenu: 8
    },
    {
        idMeal: 49,
        description: "Migas Ripadas",
        idMealType: 2,
        idMenu: 9
    },
    {
        idMeal: 50,
        description: "Sopa de Pedra",
        idMealType: 1,
        idMenu: 9
    },
    {
        idMeal: 51,
        description: "Feijoada à Transmontana",
        idMealType: 3,
        idMenu: 9
    },
    {
        idMeal: 52,
        description: "Caldeirada de Lulas",
        idMealType: 4,
        idMenu: 9
    },
    {
        idMeal: 53,
        description: "Salada de tomate com mozzarella",
        idMealType: 5,
        idMenu: 9
    },
    {
        idMeal: 54,
        description: "Pudim Abade de Priscos",
        idMealType: 6,
        idMenu: 9
    },
    {
        idMeal: 55,
        description: "Prova de Azeite ",
        idMealType: 2,
        idMenu: 10
    },
    {
        idMeal: 56,
        description: "Creme de legumes",
        idMealType: 1,
        idMenu: 10
    },
    {
        idMeal: 57,
        description: "Bochechas de Porco no Tacho",
        idMealType: 3,
        idMenu: 10
    },
    {
        idMeal: 58,
        description: "Lombos de robalo",
        idMealType: 4,
        idMenu: 10
    },
    {
        idMeal: 59,
        description: "Quinoa salteada com abacate",
        idMealType: 5,
        idMenu: 10
    },
    {
        idMeal: 60,
        description: "Pudim de Azeite e Mel",
        idMealType: 6,
        idMenu: 10
    }
]
var c = []
for (let value in mealCreated) {
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
        date: "19-01-2020",
        carne: 2,
        peixe: 2,
        vegetariano: 1,
        idMenu: 5,
        idUser: 2
    }
]
var e = []
for (let value in reservationsCreated) {
    e.push(reservationsCreated[value])
}
if (!localStorage.getItem('reservations')) {
    localStorage.setItem('reservations', JSON.stringify(e))
}
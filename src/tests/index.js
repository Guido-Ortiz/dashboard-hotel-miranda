const Room = {
    name: 'Room #1',
    bookings: [
        {
            name: 'Guido Ortiz',
            email: 'guido@gmail.com',
            in: '27/02/2023',
            out: '02/03/2023',
            discount: 0.05,
        }],
    rate: 120,
    discount: 0.05
}

const Booking = {
    name: 'Guido Ortiz',
    email: 'guido@gmail.com',
    in: '27/02/2023',
    out: '02/03/2023',
    discount: 0.05,
    room: {
        name: 'Room #1'
    }
}

const isOccupied = (date) => {
    if (date) return true
    else return false
}

const occupancyPercentage = (start, end) => {

}

module.exports = {
    isOccupied,
    occupancyPercentage
}
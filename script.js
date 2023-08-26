
const radius = [4, 3, 8]

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

const calculate = function (radius, logic) {
    const output = []
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output
}

function areaOfCircle(radius) {
    return Math.PI * radius * radius
}
function circumOfCircle(radius) {
    return 2 * Math.PI * radius
}
function diamterOfCircle(radius) {
    return 2 * radius
}

console.log(calculate(radius, areaOfCircle))
console.log(calculate(radius, circumOfCircle))
console.log(calculate(radius, diamterOfCircle))




// function diameterOfCircle(radius) {
//     const output = []
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * radius[i])
//     }
//     return output
// }
// function circumferenceOfCircle(radius) {
//     const output = []
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i])
//     }
//     return output
// }


// const areaOfCircle = function (radius) {
//     return Math.PI * radius * radius

// }

// const areaOfCircle = () => {
//     return Math.PI * radius * radius

// }
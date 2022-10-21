const complimentBtn = document.getElementById("complimentButton")
const getFortuneBtn = document.getElementById('getFortune')
const fortuneBox = document.getElementById('fInput')
const addFortuneBtn = document.getElementById('addFortune')
const idBox = document.getElementById('idBox')
const updFortune = document.getElementById('updFortune')
const delFortuneBtn = document.getElementById('delFortune')
const fortuneSection = document.getElementById('fortunes')

let baseURL = 'http://localhost:4000/api'

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data.fortune;
            let currF = document.createElement('p')
            currF.innerText = data
            fortuneSection.appendChild(currF)

            // alert(data);
    });
};

const addFortune = () => {
    let newFortune = {fortune: fortuneBox.value}
    axios.post(baseURL + '/fortune', newFortune)
        .then(res => {
            console.log(`new fortune added ID ${res.data.id}`)
            let newIdSelection = document.createElement('option')
            newIdSelection.text = res.data.id
            idBox.add(newIdSelection)
        })
        .catch(err => {
            console.log(err)
        })
}
const putFortune = () => {
    let fortuneId = idBox.value
    let updatedFortune = {update: fortuneBox.value}
    axios.put(baseURL + '/fortune/' + fortuneId, updatedFortune)
        .then(res => {
            console.log(`fortune updated to read: ${res.data.fortune}`)
        })
        .catch(err => {
            console.log(err)
        })
}

const delFortune = () => {
    let fortuneId = idBox.value
    axios.delete(baseURL + '/fortune/' + fortuneId)
        .then(res => {
            idBox.remove(idBox.fortuneId)
            console.log(`fortunes now:`)
            console.log(`${res.data}`)
        })
        .catch(err => {
            console.log(err)
        })
}

complimentBtn.addEventListener('click', getCompliment)
getFortuneBtn.addEventListener('click', getFortune)
addFortuneBtn.addEventListener('click', addFortune)
updFortune.addEventListener('click', putFortune)
delFortuneBtn.addEventListener('click', delFortune)
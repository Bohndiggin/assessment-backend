const fortunes = [
    {
        id: 1,
        fortune: "You will eat mystery meat"
    },
    {
        id: 2,
        fortune: "Today is not your day"
    },
    {
        id: 3,
        fortune: "Your family will miss you"
    },
    {
        id: 4,
        fortune: "The end is around the corner"
    },
    {
        id: 5,
        fortune: "Don't trust them"
    },
    {
        id: 6,
        fortune: "Your suspicions are accurate"
    },
];
let nextId = 7

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
      
        // choose random Fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    addFortune: (req, res) => {
        console.log(req.body)
        let newFortune = req.body.fortune
        if(newFortune !== '') {
            let fortuneData = {
                id: nextId,
                fortune: newFortune
            }
            nextId++
            fortunes.push(fortuneData)
            res.status(200).send(fortuneData)
        } else {
            res.sendStatus(400)
        }
    },
    putFortune: (req, res) => {
        let selectedId = req.params.id
        let newFortune = req.body.update
        if(newFortune !== '') {
            for (let i = 0; i < fortunes.length; i++) {
                if (+selectedId === fortunes[i].id) {
                    fortunes[i].fortune = newFortune
                    res.status(200).send(fortunes[i])
                }
            }
        } else {
            res.sendStatus(400)
        }
    },
    delFortune: (req, res) => {
        let selectedId = req.params.id
        for (let i = 0; i < fortunes.length; i++) {
            if (+selectedId === fortunes[i].id) {
                fortunes.splice(i, 1)
                res.status(200).send(fortunes)
            }
        }
    },
}
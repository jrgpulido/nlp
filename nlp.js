class NLP {
    constructor(x) {
	this.x = x
    }  
}

//useClass
(function useNlp() {
    let t = new NLP(0.5)
    console.log('congrats...')
    console.log(t.x)
    t.x = -1
    console.log(t.x)
})()

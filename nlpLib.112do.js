class NLP {
    constructor(x) {
	this.x = x
    }  
}

//useClass
(function useMath() {
    let t = new NLP(0.3)
    console.log('congrats...')
    console.log(t.x)
    t.x = -1
    console.log(t.x)
})()

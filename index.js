class Hack {
    get correctAnswers() {
        return FB_PUBLIC_LOAD_DATA_[1][1].map(function (question) {
            try { return question[4][0][1][question[3]][0] }
            catch (e) { return null }
        })
    }
    get correctElements(){
        return this.correctAnswers.map(function(answer){
            return [...document.querySelectorAll("span")].filter(r=>r.innerHTML==answer).pop()
        }).filter(r=>r)
    }
    mark(){
        this.correctElements.forEach(function(element){
            element.style = "padding: 10px;border-radius: 6px;box-shadow: 0 0 11px #3fff00;border: 2px solid #1bff00d9;"
        })
    }
}

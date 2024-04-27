let container = document.querySelector("#main-container")

function showData(arr){
    arr.forEach((ele,i)=> {
        let div01 = document.createElement('div')
        div01.setAttribute('class', 'content-div')
        let title = document.createElement('h3')
        title.innerHTML = ele.title

        let div02 = document.createElement('div')
        div02.setAttribute('class', 'check-box')

        if(ele.completed === true){
            div02.style.backgroundColor = "grey"
        }

        div01.append(title, div02)
        container.append(div01)
    })
}

function getData(url){
    fetch(url)
    .then (function(res){
        return res.json()
    })
    .then (function(res){
        showData(res)
        console.log(res)
    })
}

getData("https://jsonplaceholder.typicode.com/todos")
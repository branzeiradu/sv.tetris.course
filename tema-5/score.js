export class Score{
    constructor(container){
      
        this.total=0;

        this.scoreDiv=document.createElement("div");
        this.scoreDiv.classList.add("score");
        container.appendChild(this.scoreDiv);
        this.render();
    }

    add(count){
        this.total+=count;
        this.render();
    }

    render(){
        this.scoreDiv.textContent= this.total;
       
    }


}
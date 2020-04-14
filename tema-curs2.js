
        //Ex 1.
        const tranzactieLei = function( suma, moneda ){
           
            /*let Curs = function(simbol, curs){
                this.curs=curs;
                this.simbol=simbol;
            };
            let schimb = [new Curs("HUF", 0.24), new Curs("USD", 3.82), new Curs("EUR", 4.52) ];
            */


            //valuta= [ 'HUF', 'USD',  'EUR' ]; 
            //let schimb = { valuta[0] : 0.24 , valuta[1]: 3.82, valuta[2]: 4.52 }; ??
            let schimb = { 'HUF' : 0.24, 'USD' :  3.82, 'EUR' : 4.52   };
            
            let total=suma;
            switch(moneda){
                case 'HUF': total=suma / schimb.HUF; break;
                case 'USD': total=suma / schimb.USD; break;
                case 'EUR': total=suma / schimb.EUR; break;
                default:{
                    return null;
                };

            }
            return total.toFixed(2);
        }/*.bind(tranzactieLei);*/
        
        console.log(`749 RON in HUF: ${tranzactieLei(749, 'HUF')}`);
        console.log(`749 RON in USD: ${tranzactieLei(749, 'USD')}`);
        console.log(`749 RON in EUR: ${tranzactieLei(749, 'EUR')}`);




        //Ex 2.
        const tipParm=function(val){
            return typeof val;
        };   


        console.log("---------------------------------------------------------")
        //Ex 3.
        const utcn="Universitatea Tehnica Cluj Napoca";
        const acronym=(str) => {
            let acronym=[];
            let arr=str.trim().split(/\s+/);
            arr.forEach( item => acronym.push(item.charAt(0)) );
            return acronym.join("");
        };
        console.log( acronym(utcn) );
        console.log("---------------------------------------------------------")
        const fraze = [
            "Quisque faucibus ipsum id nibh egestas bibendum.",
            "Phasellus tincidunt sapien nec est tempus lacinia.",
            "Curabitur ac elit at turpis ultrices hendrerit at et tellus.",
            "Praesent a magna a ligula gravida sodales eu ut erat.",
            "Ut eleifend velit vitae ipsum mattis viverra."
        ];
        fraze.forEach(function(item,index){
            fraze[index] = acronym(item)
        });
        console.log(fraze);
        console.log("---------------------------------------------------------")

        //Ex 4.
        class Shape{

            constructor(color,laturi){
                
                if( !Array.isArray(laturi) ){
                    throw new Error("Shape::laturi must be an array");
                }
               
                this._color=color;
                this.laturi=laturi;
                
            }

            tip(){
                let tip="";
                switch(this.laturi.length){
                    case 3: tip = 'triunghi'; break;
                    case 4: tip = 'patrulater'; break;
                    case 5: tip = 'pentagon'; break;
                    case 6: tip = 'hexagon '; break;
                    default: tip = 'WIP'; 
                }

                return tip;
            }

            perimetru(){
                let perimetru=0;
                this.laturi.forEach((item)=>{
                    perimetru+=item;
                });
               return perimetru;
            }
            semiPerimetru(){
                return this.perimetru() / 2  ;
            }
            get culoare(){
                return this._color;
            }
            toString(){
                let str=`{Shape,${this.tip()},`;
                str+=`perimetru=${this.perimetru()},`;
                str+=`semiPerimetru=${this.semiPerimetru()},`;
                str+=`culoare=${this.culoare}}`;
               return str;
            }
        }

        class Triangle extends Shape{
            constructor(color,laturi){
                super(color, laturi);
                this.laturi=laturi.slice(0,3);
                this.valid();
                
            }
            arie(){//formula lui heron
                let arie=this.semiPerimetru();
                this.laturi.forEach( (item) => { 
                    arie *= ( this.semiPerimetru() - item); 
                });
                return Math.sqrt(arie);
            }
            valid(){
                let laturi = this.laturi.sort();
                let msg=null;
                
                if( laturi.length !=3 ){
                        msg="Un triunghi trebuie sa contina 3 laturi"; 
                       
                }else
                if( laturi[0] * laturi[1] * laturi[2] <=0 ){
                        //fiecare latura trebuie sa fie mai mica
                        // decat suma celorlate doua
                        msg="Laturile unui triunghi trebuie sa respecte";
                        msg+=" 'Inegalitatea unui triunghi' ";
                }else 
                if( laturi[0] + laturi[1] <= laturi[2] ){
                    msg="Laturile unui triunghi trebuie sa respecte";
                    msg+='Inegalitatea unui triunghi';
                }

                if(msg != null){
                    throw new Error(msg);
                }   
            }
            toString(){
                const toString=super.toString();
                const str=toString.split(",");
                str[0]=`{Triangle,arie=${this.arie()}`;
                return str.join(",");


            }
           
        }

        class Square extends Shape{
            constructor(color,laturi){
                super(color, laturi);
                this.laturi=laturi.slice(0,4);
                this.valid();
            }
            arie(){
                return  this.laturi[0]**2;
            }
            valid(){
                if( this.laturi.length != 4){
                    const msg="Un patrat trebuie sa contina 4 laturi!";
                    throw new Error(msg);
                }
                const laturi=this.laturi.sort();
                if( laturi[0] <= 0  || laturi[0] !== laturi[3] ){
                    const msg="Laturile unui patrat trebuie sa fie egale si pozitive!";
                    throw new Error(msg);
                }
              
            }
            toString(){
                const toString=super.toString();
                const str=toString.split(",");
                str[0]=`{Square,arie=${this.arie()}`;
                return str.join(",");


            }
        }



        let redShape=new Shape("rosu", [3,4,5] );
       
        
        console.log( redShape.tip() );
        console.log( redShape.perimetru() );
        console.log( redShape.semiPerimetru() );
        console.log( redShape.culoare );
        console.log( redShape.toString() );
        console.log("---------------------------------------------------------")



        redShape=new Triangle("red", [3,4,5] );// arie 0 pentru [3,6,9] - nu poate fi un triunghi
        console.log( redShape.toString() );
        console.log( redShape.tip() );
        console.log( redShape.perimetru() );
        console.log( redShape.semiPerimetru() );
        console.log( redShape.culoare );
        console.log( redShape.arie() );
        
        let blueShape=new Square("blue", [5,5,5,5] );// [5,-1,5,5], [5,5,7,5], [5,0,5,5] nu poate fi patrat
        console.log( blueShape.toString() );
        console.log( blueShape.tip() );
        console.log( blueShape.perimetru() );
        console.log( blueShape.semiPerimetru() );
        console.log( blueShape.culoare );
        console.log( blueShape.arie() );

class purchase {
    constructor(pName, pNum, isBought){
        this.pName = pName;
        this.pNum = pNum;
        this.isBought = isBought;
    }

    print(){
        console.log(`${this.pName} ${this.pNum} ${this.isBought}`);
    }
}

const myPurchase = [];
myPurchase[0] =  new purchase('Milk'  , 1, true );
myPurchase[1] =  new purchase('Butte' , 1, false);
myPurchase[2] =  new purchase('Bred'  , 1, true )

function pSort(a,b){
    if(a.isBought!=b.isBought){
        if(!a.isBought){
            return -1;
        }
        else{
            return 1;
        }
    }
    else{
        return 0;
    }
}

myPurchase.sort(pSort);
for (const element of myPurchase ) {
    element.print();
}
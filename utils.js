//'use strict';

function showMessage(message){
    document.getElementById('jumbo-title').textContent = message;
}

function showBishBosh(message){
    document.getElementById('bish12').textContent = message;
}

function showBishBoshType(message){
    document.getElementById('bish12type').textContent = message;
}

function doBishBosh(range=100, bish=3 , bosh=4, toConsole=true){
    if(toConsole===true)    
    {
        for (let i=1; i < range+1; i ++){ // 0 indexing
            if ((i % bish == 0) && (i % bosh == 0))
            {
                console.log('Bish-Bosh');
            }
            else if (i%bish == 0)
            {
                console.log('Bish');
            }
            else if (i%bosh == 0)
            {
                console.log('Bosh');
            }
            else{
                console.log(i);
            }   
        }
    }
    else{
        //VALIDATION JS
        if (range > 250) {range = 250};
        if (bish > 10) {bish=10};
        if (bosh > 10) {bosh=10};

        const myArray = [];
            for (let i=1; i < range+1; i ++){ // 0 indexing
                if (i % bish == 0 && (i % bosh == 0)) 
                {
                    myArray.push('Bish-Bosh');
                }
                else if (i%bish == 0)
                {
                    myArray.push('Bish');
                }
                else if (i%bosh == 0)
                {
                    myArray.push('Bosh');
                }
                else{
                    myArray.push(i);
                }
            }
        return myArray;
    
}
    // MAKE AN ARRAY of the values to return. And add a Key to Either Console or Array. toConsole= True

}


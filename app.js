const data = [
    {Principal: 2500, time: 1.8},
    {Principal: 1000, time: 5},
    {Principal: 3000, time: 1},
    {Principal: 2000, time: 3}
]

function interestCalculator(arr) {
    // Declaration of the InterestData
    const interestData = [];

    //Looping over each of the values in the array
    for (let i = 0; i < arr.length; i++) {

        //Using If to check through the array values
        if(arr[i].Principal >= 2500 && arr[i].time > 1 && arr[i].time < 3) {
            arr[i].rate = 3;
        } else if(arr[i].Principal >= 2500 && arr[i].time >= 3) {
            arr[i].rate = 4;
        } else if (arr[i].Principal < 2500 || arr[i].time <= 1) {
            arr[i].rate = 2;
        } else {
            arr[i].rate = 1;
        };

        //Calculate the Interest and assign it to a variable
        let calInterest = (arr[i].Principal * arr[i].rate * arr[i].time) / 100 ;
        
        //Assign calculated interest to the object.
        arr[i].interest = calInterest;
        // console.log(arr[i]);
        interestData.push(arr[i]);
    }
    console.log(interestData)
    return interestData;
}


interestCalculator(data);
const tipAmount = () => {
const billAmount = 100;
const tipPercent = 15;
const people = 1;

if(billAmount > 0 && people > 0 && tipPercent >= 15) {
    const totalTip = tipPercent % billAmount * people;
    console.log(`Total Tip Amount is ${totalTip.toFixed(2)}`)
}else {
    console.log("Not tip yet")
}

}

tipAmount()
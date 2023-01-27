let bank, currentBalance = 10000, newbalance, correct_pin = (1234567);
const checkingPassword = () => {
    if (correct_pin === (1234567)) {
        console.log("Correct Pin")
        return true
    } else {
        console.log("incorrect pin")
        return false
    }
}

const check_balance_is_greater_than = (amount) => {
        if (currentBalance >= 100){       
            console.log(`You have £${amount} now go away`)
        } else {
            console.log("No good")
        }
    }
 if (checkingPassword()=== true) {
    check_balance_is_greater_than(10000000000000000000000000000)
 }
    
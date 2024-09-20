const person = {
firstName:"maina",
lastName:"ireddy",
id:12345,
fullName:function() {
    return this.firstName + " " + this.lastName;
}
document.getElementById("12345").innerHTML = fullName;
};
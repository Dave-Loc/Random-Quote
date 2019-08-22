var button = document.getElementById("button").addEventListener('click', myFunc);

function myFunc() {
    

    let quo = ["“Life is really simple, but we insist on making it complicated.” – Confuscius", "What we think, we become.” – Buddha", "“The secret of getting ahead is getting started.” –   Mark Twain", "“The unexamined life is not worth living.” – Socrates", "“God is not willing to do everything, and thus take away our free will and that share of glory which belongs to us.” – Niccolo Machiavelli", "“When I let go of what I am, I become what I might be. ”–  Lao Tzu", "“I have realized that the past and future are real illusions, that they exist in the present, which is what there is and all there is.” – Alan W. Watts", " “It is easy to perform a good action, but not easy to acquire a settled habit of performing such actions.” – Aristotle", "“To live is to suffer, to survive is to find some meaning in the suffering.” – Freidrich Nietzche", "“Love is a serious mental disease.” – Plato"];

    
    //This will allow the quotes to appear randomly
    let random = Math.floor(Math.random() * (quo.length));

    //Display the quotes
    let shohwQuote = document.getElementById('quote').innerHTML = quo[random];
    
}

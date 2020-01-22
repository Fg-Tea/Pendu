$(document).ready(function() {

var words = ["baguenauder", "vortex", " thébaïde", "sororal", "zinzolin", "pétrichor", "subodorer", "brasiller", "tenancier", "cavillation", "amarante", "oraison", "nitescence", "impétrant", "substrat", "controuver", "obombrer", "smaragdin","dystopie","languide","comminatoire","cordiforme","andain","turquin","séide","fontinal","incoercible","musarder","hiémal","immarcescible","friselis","contumélie","nivéal","baptismal","eurythmie","manéger","captieux","ubéreux","hyalin","frette","abscons","vulnéraire","fuligineux","hapax","turbide","nitide","scarlatin","déréliction","objurgation","glacis","entrelacs","hypégiaphobie","ocelle","cépée","cascatelle","acception","impavide","vespéral","alliciant","perclus","empyrée","flavescent","impéritie","sylphide","marner","squalide","lénifier","coruscant","thaumaturge","musser","béjaune","contadin","liminaire","escogriffe","caligineux","horion","exutoire","fallacieux","aréopage","remugle","Chimène","limbes","lambrequin","agacinant","homoncule","hypotypose","amphigouri","dictame","bénéolent","accointances","obsidional","céruléen","haptique","zététique","palingénésie","tavelé","hypocoristique","mordoré","hubris","hypnagogique"];

    var n= Math.floor(Math.random() * words.length);
    var wordToFind = words[n];
    console.log(wordToFind)
    var wtf = words[n].toUpperCase().split('');
    console.log(wtf)
    // var rep = String.fromCharCode(72, 69, 76, 76, 79);

	// Draw squares for secret word & hide letter_words
	for(var i = 0; i < wordToFind.length; i++) {
        $('#secret_word').append('<div class="letter_word ' + i + '"></div>');
        $('#secret_word').find(":nth-child(" + (i + 1) + ")").text(wtf[i]);
        $(".letter_word").css("color", "#000000");
    }

	// Button click function
    var wrongGuesses = 0;
    $("button").on("click", function(){
        $(this).addClass("used");
        $(this).prop("disabled", "true");
        var matchFound = false;

        // Check if clicked letter_word is in secret word
        var userGuess = $(this).text();
        wordToFind = wordToFind.toUpperCase();
        console.log(wordToFind)
        for (var i = 0; i < wordToFind.length; i++) {
            if (userGuess == wordToFind[i]) {
                $('#secret_word').find(":nth-child(" + (i + 1) + ")").css("color", "#EFEFEF").addClass("winner");
                matchFound = true;
                console.log("goodGuesses");
                

            }
        }

        //Check for winner
        var goodGuesses = []; 
        console.log("goodGuesses");

        $(".letter_word").each(function( index ) {
            if ( $(this).hasClass("winner") ) {
                goodGuesses.push(index);
                if (goodGuesses.length === wtf.length) {
                    $("#secret_word").hide();
                    $("button").prop("disabled", "true");
                    $(".message").text("Bien joué, tu es toujours vivant");
                    $(".message").append("<br><button enabled class='play_again'>Play again?</button>");
                }
            }
        });

        // If no match, increase count and add appropriate image
        if (matchFound == false) {
            wrongGuesses += 1;
            $("#image").attr("src", "assets/img/" + wrongGuesses + ".png");
        }

        // If wrong guesses gets to 7 exit the game
        if (wrongGuesses === 7) {
            $("#secret_word").hide();
            $("button").prop("disabled", "true");
            $(".message").text("Sorry you lost! The secret word was " + wordToFind);
            $(".message").append("<br><button enabled class='play_again'>Play again?</button>");
        }

        // Play again button
        $(".playagain").on("click", function(){
            location.reload();
        });

    }); // End button click

}); // End document.ready


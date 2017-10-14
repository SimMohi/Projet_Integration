// code JavaScript pricipal 

$(function() {
                
    var selectedSct = 'sctAccueil';
    var selectedArt = 'artTetris';
    
	// quand on clique sur les boutons du menu de navigation
    $('.navSpanHead').click(function() {
        // modifie les bordures du menu
        $('.navSpanHead').css('background-color', '#f4f4f4');
        $(this).css('background-color', '#9ec1a6');

        // assigne une valeur qui servira d'identifiant
        var up = capitalize($(this).attr('id'));
        var id = 'sct' + String(up);

        // si on clique sur un autre bouton, efface le texte courant et affiche le texte voulu
        if(id != selectedSct) {
        	$('#' + selectedSct).fadeOut('fast', function() {
                selectedSct = id;
			    $('#' + id).fadeIn('fast');
            });
        }
    });

    $('#menu').click(function() {
        var isMenuOn = $('nav span').css('display');
        if(isMenuOn == 'none') {
            $('.navSpanHead').slideDown('fast');
        } else {
            $('.navSpanHead').slideUp('fast');
        }
    })

    $('.navSpanGame').click(function() {
        $('.navSpanGame').css('color', 'lightGrey');
        $(this).css('color', 'yellow');
        
        var up = capitalize($(this).attr('id'));
        var id = 'art' + String(up);

        if(id != selectedArt) {
            $('#' + selectedArt).fadeOut('fast', function() {
                selectedArt = id;
                $('#' + id).fadeIn('fast');
            });
        } 
    })

    // Quizz
    $('#btnQuizz').click(function() {
        console.log('ok');
        var question = "Dans quelle poubelle se jette un paquet de Pringles?";
        var prop1 = "Dans la poubelle normale";
        var prop2 = "Dans la poubelle carton";
        var prop3 = "Dans la poubelle PMC";
        var validation = "<button id='validation' class='btnsQuizz'>Je pense que c'est ça</button>";
        var nextQuestion = "<button id='next' class='btnsQuizz'>Question suivante</button>";
        var hasAlreadyAnswered = false;
        var cpt = 0;

        var questionnaire = "<p>" + question + "</p>";
        questionnaire += "<p><input type='radio' name='pringles' value='normale'>" + prop1 + "</p>";
        questionnaire += "<p><input type='radio' name='pringles' value='carton'>" + prop2 + "</p>";
        questionnaire += "<p><input type='radio' name='pringles' value='pmc'>" + prop3 + "</p>";
        questionnaire += "<br />" + validation + "<br />";
        
        $('#preQuizz').fadeOut('fast', function() {
            $('#preQuizz').html(questionnaire).fadeIn('fast');

            $('#validation').click(function() {
                if(!(hasAlreadyAnswered)) {
                    hasAlreadyAnswered = true;
                    if($('#preQuizz input:checked').val() == "normale") {
                        $('#preQuizz').append('<p>Félicitation</p>');
                        $('#preQuizz').append('<p>Effectivement, c\'est la que ça se jette!</p>');
                    } else {
                        $('#preQuizz').append('<p>Nope</p>');
                        $('#preQuizz').append('<p>Les emballages de Pringles contiennent du carton, du plastique mais aussi du métal, ce qui lui interdit d\'aller dans une autre poubelle que la normale!</p>');                        
                    }
                    $('#preQuizz').append('<br />' + nextQuestion + '<br /><div id="cptQuizz">'  + cpt + '/10</div><br />');
                    $('#cptQuizz').css('text-align', 'right');                               
                }
                
            })
        });

    });

})
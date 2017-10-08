// code JavaScript pricipal 

$(function() {
                
    var selectedSct = 'sctAccueil';
    
	// quand on clique sur les boutons du menu de navigation
    $('nav span').click(function() {
        // modifie les bordures du menu
        $('nav span').css('background-color', '#f4f4f4');
        $(this).css('background-color', '#9ec1a6');

        // assigne une valeur qui servira d'identifiant
        var up = capitalize($(this).attr('id'));
        var id = 'sct' + String(up);

        // si on clique sur un autre bouton, efface le texte courant et affiche le texte voulu
        if(id != selectedSct) {
        	$('#' + selectedSct).fadeOut('fast');
        	selectedSct = id;
			$('#' + id).delay(300).fadeIn(500);
        }
    });

    $('#menu').click(function() {
        
        var isMenuOn = $('nav span').css('display');
        if(isMenuOn == 'none') {
            $('nav span').slideDown('fast');
        } else {
            $('nav span').slideUp('fast');
        }
        
    })

})
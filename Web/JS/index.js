// code JavaScript pricipal 

$(function() {
                
	var selectedSct = 'sctAccueil';

	// quand on clique sur les boutons du menu de navigation
    $('nav span').click(function() {
        // modifie les bordures du menu
        $('nav span').css('border-radius', '0px').css('background-color', '#f4f4f4');
        $(this).css('border-radius', '10px 1px').css('background-color', '#9ec1a6');

        // assigne une valeur qui servira d'identifiant
        var up = capitalize($(this).attr('id'));
        var id = 'sct' + String(up);

        // si on clique sur un autre bouton, efface le texte courant et affiche le texte voulu
        if(id != selectedSct) {
        	$('#' + selectedSct).slideUp('fast');
        	selectedSct = id;
			$('#' + id).delay(300).slideDown('fast');
        }
    });

})
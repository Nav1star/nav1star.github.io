app.controller('CWFLibraryCtrl', function($scope, $route, $location){


    $scope.$on('$routeChangeSuccess', function() {

   	 // Exportable table
    var table = $('.js-exportable').DataTable({
        dom: 'lBfrtip',
        responsive: true,
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });

    table.buttons().container().appendTo( '.export-list'); 	

    $('.page-loader-wrapper').show();

 
    setTimeout(function () { $('.page-loader-wrapper').fadeOut(); }, 2000);

     });


    $.notify({
		// options
		message: 'Weclome to the CWF Requirements library' 
	},{
		// settings
		type: 'success',
		offset: 30,
	// 	placement: {
	// 	from: "top",
	// 	align: "center"
	// },

		animate: {
		enter: 'animated fadeInDown',
		exit: 'animated fadeOutUp'
	},
	template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
		'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
		'<span data-notify="icon"></span> ' +
		'<span data-notify="title">{1}</span> ' +
		'<span data-notify="message">{2}</span>' +
		'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
		'</div>' +
		'<a href="{3}" target="{4}" data-notify="url"></a>' +
	'</div>' 


	});

	   


    $('#largeModal').modal('show');   


    $(function () {
	    $('.js-modal-buttons .btn').on('click', function () {
	        var color = $(this).data('color');
	        $('#mdModal .modal-content').removeAttr('class').addClass('modal-content modal-col-' + color);
	        $('#mdModal').modal('show');
	    });
	});
	

});




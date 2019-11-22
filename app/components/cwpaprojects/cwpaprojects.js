app.controller('CWPAProjectsCtrl', function($scope, $route, $location){


    $scope.$on('$routeChangeSuccess', function() {

   
    $.AdminBSB.select.activate();

//================================== Data Tables JS ==================================    
    
   	 // Exportable table
    var table = $('.js-exportable').DataTable({
        dom: 'lBfrtip',
        responsive: true,
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });

    table.buttons().container().appendTo( '.export-list'); 	

    
//================================== End Data Tables JS ==============================

    $('.page-loader-wrapper').show();

 	
    setTimeout(function () { $('.page-loader-wrapper').fadeOut(); }, 2000);

     });


    var notify = $.notify({
		// options
		message: 'Weclome to the CWF Requirements library',
	},{
		// settings
		type: 'success',
		offset: 30,
	//	showProgressbar: true,
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

// 	setTimeout(function() {
// 	notify.update({'type': 'success', 'message': '<strong>Success</strong> Your page has been saved!', 'progress': 25});
// }, 5500);

	   


    $('#CWPAProjectGuidelines').modal('show');   


 //    $(function () {
	//     $('.js-modal-buttons .btn').on('click', function () {
	//         var color = $(this).data('color');
	//         $('#mdModal .modal-content').removeAttr('class').addClass('modal-content modal-col-' + color);
	//         $('#mdModal').modal('show');
	//     });
	// });
	

});


//================================== Help Tutorial ==================================

    var CWPAProjTutorial = new Anno([{
	  target  : '#one', // second block of code
	  position: 'top',
	  content : 'Current list of all CWPA Rules Projects.'
	}, {
	  target  : '#one .header',
	  position: {
	  	top: '-2.8em',
	    right: '4.8em'
	  },
	  arrowPosition: 'center-right',
	  content : 'Use the <code>icons</code> to navigate or take additional action on the list.'  
	},  {
	  target  : '.improject-status .btn-group',
	  position: 'center-top',
	  content : 'Filter projects by selecting current project status.'
	},  {
	  target  : '.dataTables_length',
	  position: 'center-top',
	  content : 'Use the entries filter to display content by group size.'
	}, {
	  target  : '.dataTables_filter label',
	  position: 'center-top',
	  content : 'Use the search field to find items on the list.'
	}, {
	  target  : 'thead',
	  position: 'center-top',
	  content : 'Click on the headers to sort list.'
	}, {
	  target  : '.pagination',
	  position: 'center-top',
	  content : 'Navigate across multiple pages.'
	}])
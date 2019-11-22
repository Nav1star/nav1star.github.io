app.controller('MyProjectsCtrl', function($scope, $route, $location){


    $scope.$on('$routeChangeSuccess', function() {

    //Widgets count
    $('.count-to').countTo();

    //Tooltip Initialize
    $('[data-toggle="tooltip"]').tooltip({
        container: 'body'
    });

    //Popover Initialize
    $('[data-toggle="popover"]').popover({
        container: 'body'
    });
   
    $.AdminBSB.select.activate();
    
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

 	
    setTimeout(function () { $('.page-loader-wrapper').fadeOut(); }, 5000);

     });

	   


 //    $('#NewProjectGuidelines').modal('show');   


 //    $(function () {
	//     $('.js-modal-buttons .btn').on('click', function () {
	//         var color = $(this).data('color');
	//         $('#mdModal .modal-content').removeAttr('class').addClass('modal-content modal-col-' + color);
	//         $('#mdModal').modal('show');
	//     });
	// });
	

});



    var MyImpProjTutorial = new Anno([{
      target  : '#mypjwidgets',
	  position: 'center-top',
	  content : 'Your personal project dashboard information.'
	},
    {	
	  target  : '#one', // second block of code
	  position: 'top',
	  content : 'Current list of your personal Implementation Projects.'
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
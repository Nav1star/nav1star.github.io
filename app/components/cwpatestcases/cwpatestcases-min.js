app.controller("CWPATestCasesCtrl",function(t,e,o){t.$on("$routeChangeSuccess",function(){$(".js-exportable").DataTable({dom:"lBfrtip",responsive:!0,buttons:["copy","csv","excel","pdf","print"]}).buttons().container().appendTo(".export-list"),$(".page-loader-wrapper").show(),setTimeout(function(){$(".page-loader-wrapper").fadeOut()},3e3)}),$("#defaultModal").modal("show"),$(function(){$(".js-modal-buttons .btn").on("click",function(){var t=$(this).data("color");$("#mdModal .modal-content").removeAttr("class").addClass("modal-content modal-col-"+t),$("#mdModal").modal("show")})})});var moiTutorial=new Anno([{target:"#one",position:"top",content:"Library of completed test cases for CWF and PA-MOI projects."},{target:"#one .header",position:{top:"-2.8em",right:"4.8em"},arrowPosition:"center-right",content:"Use the <code>icons</code> to navigate or take additional action on the list."},{target:".dataTables_length",position:"center-top",content:"Use the entries filter to display content by group size."},{target:".dataTables_filter label",position:"center-top",content:"Use the search field to find items on the list."},{target:"thead",position:"center-top",content:"Click on the headers to sort list."},{target:".pagination",position:"center-top",content:"Navigate across multiple pages."}]);
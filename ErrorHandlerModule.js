/**
 * Module that handles  how to  show the errors
 * @param idHtmlModal {String} Div's id  where  the modal will be loaded
 * @constructor
 *
 * DEPENDENCIES
 * JQUERY
 */
var ErrorHandlerModule= function(idHtmlModal){

    /**
     * Id of the Div where the modal will be loaded
     * the values is gotten directly from the constructor
     * @property  __idContainerModal
     * @type {String}
     * @private
     */
    var __idContainerModal=idHtmlModal;

    /**
     * @method __loadModal
     * @param idContainerModal {String} Id where the modal  will be loaded
     * @private
     */
    var __loadModal= function(idContainerModal){

        // if the modal  is already loaded, it won't be loaded again
        if(!document.getElementById("modalError_id")){
            var htmlModal='' +
                '<div class="modal fade" id="modalError_id" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-keyboard="false" data-backdrop="static">'+
                '<div class="modal-dialog modal-lg" role="document">'+
                '<div class="modal-content">'+
                '<div class="modal-header">'+
                '<h4 class="modal-title" id="myModalLabel">An error was Detected...</h4>'+
                '</div>'+
                '<div class="modal-body">'+
                '<p>An error was detected  while you were  doing  an action. The error was:</p>'+
                '<p><div class="well"><b id="bMsjJsError_id">...</b></div></p>'+
                '</div>'+
                '<div class="modal-footer">'+
                '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
                '<button type="button" class="btn btn-warning" onclick="location.reload();">Reload page</button>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>';
            $("#"+idContainerModal).append(htmlModal);

        }
        $('#modalError_id').modal('show');

    }

    /**
     * Sets a message
     * @method __setMsj
     * @param msj{String} Message to set up
     * @private
     */
    var __setMsj=function(msj){

        $("#bMsjJsError_id").html(msj);

    };

    /**
     * This method loads the modal and sets the error message
     * @method showError
     * @param errorMsj {String} Error message to show
     * @public
     */
    this.showError= function(errorMsj){

        __loadModal(__idContainerModal);
        __setMsj(errorMsj);

    };
}
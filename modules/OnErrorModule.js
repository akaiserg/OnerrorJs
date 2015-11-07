/**
 * Self-Invoking function  which initializes  window.onerror
 * Receives an  instance of the module  ErrorHandlerModule as  a parameter
 */
(function OnErrorModule(errorHandlerModule){

    /**
     *  Indicates if onerror will be used
     * @property  __dataHistoryRequest
     * @type {boolean}
     * @private
     */
    var __appIsHandlingError = true;

    if(__appIsHandlingError){

        /**
         *  Global function  that can catch  all Js errors
         * @param message {String} Short message
         * @param file    {String} Path of the file where the error happened
         * @param line    {Number} Line where the error happened
         * @param col     {Number} Column where the error happened
         * @param error   {Object} Object  that has  details of the error
         */
        window.onerror = function (message, file, line, col, error) {

            console.group("Onerror Details");
            console.log(message);
            console.log(file);
            console.log(line);
            console.log(col);
            console.log(error.stack);
            console.groupEnd();
            errorHandlerModule.showError(error.stack);

        };

    }
// Getting  an instance of the module which shows  the errors
})(new ErrorHandlerModule("divDynamicHtml_id"));
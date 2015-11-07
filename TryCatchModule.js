 /**
 * TryCatchModule  calls three types of JS errors
 * These errors are handled  by using try catch
 *
 * DEPENDENCIES
 * JQUERY
 *
 * @param idBtnVarNotDef      {String} Id of the button  which throws the error  it's not defined
 * @param idBtnIsNotAFunc     {String} Id of the button  which throws the error  it's not a function
 * @param idBtnUndefProperty  {String} Id of the button  which throws the error  undefined property
 * @param idShowMsj           {String} Id of the div  that shows a message
 * @param oErrorHandlerModule {Object} Module  that  shows the errors to the user
 * @constructor
 */
var TryCatchModule= function(idBtnVarNotDef, idBtnIsNotAFunc,idBtnUndefProperty,idShowMsj,oErrorHandlerModule){


     /**
      * Initializes  the actions  of the module
      * @method  __setUp
      * @param idBtnVarNtoDef      {String} Id of the button  which throws the error  it's not defined
      * @param idBtnIsNotAFunc     {String} Id of the button  which throws the error  it's not a function
      * @param idBtnUndefProperty  {String} Id of the button  which throws the error  undefined property
      * @param idShowMsj           {String} Id of the div  that shows a message
      * @param oErrorHandlerModule {Object} Module  that  shows the errors to the user
      * @private
      */
   var __setUp= function(idBtnVarNtoDef, idBtnIsNotAFunc,idBtnUndefProperty,idShowMsj,oErrorHandlerModule){

       __defineActions(idBtnVarNotDef, idBtnIsNotAFunc,idBtnUndefProperty,idShowMsj,oErrorHandlerModule);
   };

     /**
      * This method sets up the actions of each button
      * @method __defineActions
      * @param idBtnVarNotDef       {String} Id of the button  which throws the error  it's not defined
      * @param idBtnIsNotAFunc     {String} Id of the button  which throws the error  it's not a function
      * @param idBtnUndefProperty  {String} Id of the button  which throws the error  undefined property
      * @param idShowMsj           {String} Id of the div  that shows a message
      * @param oErrorHandlerModule {Object} Module  that  shows the errors to the user
      * @private
      */
   var __defineActions= function(idBtnVarNotDef, idBtnIsNotAFunc,idBtnUndefProperty,idShowMsj,oErrorHandlerModule){

       $("#"+idBtnVarNotDef).click(function(){
           __showMsj(idShowMsj,"Error: Variable is not defined ");
           __variableNotDefined(oErrorHandlerModule);
       });
       $("#"+idBtnIsNotAFunc).click(function(){
           __showMsj(idShowMsj,"Error: It's not a function ");
           __isNotaFunction(oErrorHandlerModule);
       });

       $("#"+idBtnUndefProperty).click(function(){
           __showMsj(idShowMsj,"Error: Undefined property  ");
           __undefinedProperty(oErrorHandlerModule);
       });

   };

     /**
      * Shows a message
      * @method __showMsj
      * @param idShowMsj {String} ID of a div where the message will be shown
      * @param msj       {String} Message to show
      * @private
      */
    var __showMsj=function(idShowMsj,msj){

        $("#"+idShowMsj).html(msj);

    };

     /**
      * This method contains  an error  which is  a variable not defined
      * @method __variableNotDefined
      * @private
      */
    var __variableNotDefined= function(oErrorHandlerModule){

        try{
            var var1= varNotDefined;
        }catch(e){
            oErrorHandlerModule.showError(e.stack);
            console.info(e);
        }

    };

     /**
      * This method contains  an error  which is  a function is not defined
      * @method __isNotaFunction
      * @private
      */
    var __isNotaFunction= function(oErrorHandlerModule){

        try{
            var var1= this.isNotaFunciton();
        }catch(e){
            oErrorHandlerModule.showError(e.stack);
            console.info(e)
        }

    };

     /**
      * This method contains  an error  which is  a undefined property
      * @method __undefinedProperty
      * @private
      */
    var __undefinedProperty= function(oErrorHandlerModule){

        var objError={val1:1,val2:"Just text"};
        try{
            var getValue=objError.val1.newValue.nonExistentValue;
        }catch(e){
            oErrorHandlerModule.showError(e.stack);
            console.info(e);
        }

    };

     // call  to  the setUp method after having been called the constructor
    __setUp(idBtnVarNotDef, idBtnIsNotAFunc,idBtnUndefProperty,idShowMsj,oErrorHandlerModule);
};

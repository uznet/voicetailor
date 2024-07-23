
if(typeof (CXVConst) != 'object')
{
	CXVConst = {};	

    CXVConst.CXV_BODY = "cxv$";
    CXVConst.CXV_TYPE_CCXML  =   "ccxml";
    CXVConst.CXV_TYPE_VXML   =   "vxml";
    CXVConst.CXV_TYPE_REPORT  =   "report";
    CXVConst.CXV_TYPE_TRUNK ="trunk";

    //==================================== VoiceXML ======================
    CXVConst.CXVVXML_COLLECT_REQUEST   =  "vxml_collect_request";
    CXVConst.CXVVXML_PLAY_REQUEST      =  "vxml_play_request";
    CXVConst.CXVVXML_RECORD_REQUEST    =  "vxml_record_request";
    CXVConst.CXVVXML_OBJECT_REQUEST    =  "vxml_object_request";
    CXVConst.CXVVXML_DATA_REQUEST      =  "vxml_data_request";  // client _> vxml

    CXVConst.CXVVXML_COLLECT_RESULT    = "vxml_collect_result";
    CXVConst.CXVVXML_PLAY_RESULT       = "vxml_play_result";
    CXVConst.CXVVXML_RECORD_RESULT     = "vxml_record_result";
    CXVConst.CXVVXML_OBJECT_RESULT     = "vxml_object_result";
    CXVConst.CXVVXML_DATA_RESULT      =  "vxml_data_result";  // client _> vxml

    CXVConst.CXVVXML_EVENT               = "vxml_event";
    CXVConst.CXVVXML_STOP                = "vxml_stop";             // client <_> vxml
    CXVConst.CXVVXML_SET_AUDIOCONVERSION = "vxml_set_audioconversion";  //deprecated

    CXVConst.CXVVXML_SHORTURL            = "vxml_shorturl";


   //============================== RECORD RESULT=============
   CXVConst.CXVVXML_RECORD_RESULT_MAXTIME   =  "maxtime";
   CXVConst.CXVVXML_RECORD_RESULT_PRESILENCE = "presilence";
   CXVConst.CXVVXML_RECORD_RESULT_POSTSILENCE= "postsilence";
   //CXVConst.CXVVXML_RECORD_RESULT_DIGIT       "digit"
   CXVConst.CXVVXML_RECORD_RESULT_INTERRUPT  = "interrupt";
   //=============================== PLAY RESULT ==============

   CXVConst.CXVVXML_PLAY_RESULT_COMPLETE  = "complete";
   //CXVConst.CXVVXML_PLAY_RESULT_DIGIT      "digit"
   CXVConst.CXVVXML_PLAY_RESULT_INTERRUPT = "interrupt";
   //CXVConst.CXVVXML_PLAY_RESULT_BARGEIN    "bargein"
   CXVConst.CXVVXML_PLAY_RESULT_MAXTIME   = "maxtime";
   //CXVConst.CXVVXML_PLAY_RESULT_DISCONNECT "disconnect"
   CXVConst.CXVVXML_PLAY_RESULT_ERROR    =  "error";
   CXVConst.CXVVXML_PLAY_RESULT_EVENT    =  "event";
   //============================== OBJECT RESULT =============
   CXVConst.CXVVXML_ERROR_UNSUPPORTED_OBJECTNAME = "error.unsupported.objectname";
   //============================== COLLECT RESULT ============
   CXVConst.CXVVXML_COLLECT_RESULT_FILLED   =  "filled" ;
   CXVConst.CXVVXML_COLLECT_RESULT_UTTERANCE   =  "utterance" ;
   CXVConst.CXVVXML_COLLECT_RESULT_NOINPUT  =  "noinput";
   CXVConst.CXVVXML_COLLECT_RESULT_NOMATCH  =  "nomatch";
   CXVConst.CXVVXML_COLLECT_RESULT_MAXSPEECHTIMEOUT  =  "maxspeechtimeout";
   CXVConst.CXVVXML_COLLECT_RESULT_EVENT  =  "event";
   CXVConst.CXVVXML_COLLECT_RESULT_ERROR =  "error";

  //=================================== CCXML ===============================
  CXVConst.CXVCCXML_START                =       "ccxml_start" ;       // create_ccxml                
  CXVConst.CXVCCXML_TERMINATE            =       "ccxml_terminate" ;   // kill_ccxml 
  CXVConst.CXVCCXML_FIND                 =        "ccxml_find";       //client _> ccxml   find session by caller and callee
  CXVConst.CXVCCXML_FOUND                 =        "ccxml_found";       //client _> ccxml   find session by caller and callee
  CXVConst.CXVCCXML_NOTFOUND                 =        "ccxml_notfound";       //client _> ccxml   find session by caller and callee

  CXVConst.CXVCCXML_STARTED              =       "ccxml_started";         //ccxml _> client
  CXVConst.CXVCCXML_NOTSTARTED           =       "ccxml_notstarted";      // ccxml _> client
  CXVConst.CXVCCXML_TERMINATED           =       "ccxml_terminated";       //ccxml _> client 

  CXVConst.CXVCCXML_ALERTING        = "ccxml_alerting";       // ccxml <_ client
  CXVConst.CXVCCXML_CONNECTED       = "ccxml_connected";      // ccxml <_ client
  CXVConst.CXVCCXML_DISCONNECTED    = "ccxml_disconnected";   // ccxml <_ client
  CXVConst.CXVCCXML_REDIRECTED      ="ccxml_redirected";    // ccxml <_ client
  CXVConst.CXVCCXML_PROGRESSING     = "ccxml_progressing";    // ccxml <_ client

  CXVConst.CXVCCXML_CREATECALL         =    "ccxml_createcall";     // ccxml _> client
  CXVConst.CXVCCXML_REDIRECT           =    "ccxml_redirect";     // ccxml _> client
  CXVConst.CXVCCXML_DISCONNECT         =    "ccxml_disconnect";   // ccxml _> client
  CXVConst.CXVCCXML_ACCEPT             =    "ccxml_accept";     // ccxml _> client
  CXVConst.CXVCCXML_REJECT             =    "ccxml_reject" ;    // ccxml _> client
  CXVConst.CXVCCXML_CREATECALL_FAILED  =    "ccxml_createcall_failed";         // ccxml <_ client
  CXVConst.CXVCCXML_ACCEPT_FAILED      =     "ccxml_accept_failed";  // ccxml <_ client 
  CXVConst.CXVCCXML_REJECT_FAILED      =    "ccxml_reject_failed";  // ccxml <_ client 
  CXVConst.CXVCCXML_REDIRECT_FAILED    =    "ccxml_redirect_failed";  // ccxml <_ client 
  CXVConst.CXVCCXML_EVENT              =    "ccxml_event";              //  ccxml <_> client


  //=============================================
  CXVConst.CXVCCXML_CREATECONFERENCE   = "ccxml_createconference";
  CXVConst.CXVCCXML_DESTROYCONFERENCE  = "ccxml_destroyconference";
  CXVConst.CXVCCXML_JOIN               = "ccxml_join";
  CXVConst.CXVCCXML_UNJOIN             = "ccxml_unjoin";

  CXVConst.CXVCCXML_CREATECONFERENCE_RESULT  = "ccxml_createconference_result";
  CXVConst.CXVCCXML_DESTROYCONFERENCE_RESULT = "ccxml_destroyconference_result";

  CXVConst.CXVCCXML_JOIN_RESULT    = "ccxml_join_result";
  CXVConst.CXVCCXML_UNJOIN_RESULT  = "ccxml_unjoin_result";
  CXVConst.CXVCCXML_UNJOINED       = "ccxml_unjoined";



  //================================= REGISTRATION===========================
  CXVConst.CXVTRUNK_LOGIN_REQUEST      =     "trunk_login_request" ;     // C <__> S 
  CXVConst.CXVTRUNK_LOGIN_RESULT       =     "trunk_login_result";    // C <__ S

  CXVConst.CXVTRUNK_EVENT_SEND    =  "trunk_event_send";
  CXVConst.CXVTRUNK_EVENT_ACK     =  "trunk_event_ack";

  CXVConst.CXVTRUNK_PING    =  "trunk_ping";
  CXVConst.CXVTRUNK_PONG     =  "trunk_pong";


  CXVConst.CXVREPORT_ERROR  = "report_error" ;

}



//======================= CXVCcxml Find ==================
/*
typedef struct
{

	char *tid;
	char  *caller;
	char  *callee;

}CXVCcxmlFind;
*/
function CXVCcxmlFind(jparent )
{	
    if(jparent && typeof(jparent) == "object")
	{
     this.tid = cxvJson.getValue(jparent,"tid","");      //char *sessionid
     this.caller = cxvJson.getValue(jparent,"caller","");      //char  *ccxmlurl	 
     this.callee = cxvJson.getValue(jparent,"callee","");      //char  *ccxmlurl	 
	}
	else
	{
     this.tid = "";      //char *sessionid
     this.caller = "";      //char  *ccxmlurl	 
     this.callee = "";      //char  *ccxmlurl	 
		
	}
}


CXVCcxmlFind.prototype.objectify = function(jparent)
{
	
   cxvJson.putValue(jparent,"tid",this.tid);
   cxvJson.putValue(jparent,"caller",this.caller);
   cxvJson.putValue(jparent,"callee",this.callee);
	
}


//===================== CXVCcxml Found =================
/*
typedef struct
{
	char *tid;
	char  *caller;
	char  *callee;
	char  *sessionid;
}CXVCcxmlFound;
*/

function CXVCcxmlFound(jparent )
{	
    if(jparent && typeof(jparent) == "object")
	{
     this.tid = cxvJson.getValue(jparent,"tid","");      //char *sessionid
     this.caller = cxvJson.getValue(jparent,"caller","");      //char  *ccxmlurl	 
     this.callee = cxvJson.getValue(jparent,"callee","");      //char  *ccxmlurl	 
     this.sessionid = cxvJson.getValue(jparent,"sessionid","");      //char  *ccxmlurl	 
     this.connectionid = cxvJson.getValue(jparent,"connectionid","");      //char  *ccxmlurl	 
	}
	else
	{
     this.tid = "";      //char *sessionid
     this.caller = "";      //char  *ccxmlurl	 
     this.callee = "";      //char  *ccxmlurl	 
     this.sessionid = "";      //char  *ccxmlurl	 
     this.connectionid = "";      //char  *ccxmlurl	 
		
	}
}


CXVCcxmlFound.prototype.objectify = function(jparent)
{
	
   cxvJson.putValue(jparent,"tid",this.tid);
   cxvJson.putValue(jparent,"caller",this.caller);
   cxvJson.putValue(jparent,"callee",this.callee);
   cxvJson.putValue(jparent,"sessionid",this.sessionid);
   cxvJson.putValue(jparent,"connectionid",this.connectionid);
	
}
//===================== CXVCcxml NotFound =================
/*
typedef struct
{
	char *tid;
	char  *caller;
	char  *callee;
}CXVCcxmlNotFound;
*/

function CXVCcxmlNotFound(jparent )
{	
    if(jparent && typeof(jparent) == "object")
	{
     this.tid = cxvJson.getValue(jparent,"tid","");      //char *sessionid
     this.caller = cxvJson.getValue(jparent,"caller","");      //char  *ccxmlurl	 
     this.callee = cxvJson.getValue(jparent,"callee","");      //char  *ccxmlurl	 
	 this.reason=cxvJson.getValue(jparent,"reason","")
	}
	else
	{
     this.tid = "";      //char *sessionid
     this.caller = "";      //char  *ccxmlurl	 
     this.callee = "";      //char  *ccxmlurl	 
     this.reason = "";      //char  *ccxmlurl	 
		
	}
}


CXVCcxmlNotFound.prototype.objectify = function(jparent)
{
	
   cxvJson.putValue(jparent,"tid",this.tid);
   cxvJson.putValue(jparent,"caller",this.caller);
   cxvJson.putValue(jparent,"callee",this.callee);
	
}

//=======================CXVCcxml Accept =================
/*
typedef struct
{
	char   *connectionid;
	XArgs  *hints;

}VROCcxmlAccept;
*/

function CXVCcxmlAccept(jparent )
{	
    if(jparent && typeof(jparent) == "object")
	{
     this.connectionid = cxvJson.getValue(jparent,"connectionid","");      //char *sessionid
     this.hints = cxvJson.getValue(jparent,"hints",{});      //char  *ccxmlurl	 
	}
	else
	{
     this.connectionid ="";      //char *sessionid
	 this.hints= {};
		
	}
}


CXVCcxmlAccept.prototype.objectify = function(jparent)
{
	
   cxvJson.putValue(jparent,"connectionid",this.connectionid);
   cxvJson.putValue(jparent,"hints",this.hints);
	
}



//=========================== CXVCcxml Alerting ===================
/*
typedef struct
{
	char *connectionid;
	char *caller;
	char *callee;

	struct
	{
		char *name;
		char *version;
	}protocol;
	XArgs  *info;
}VROCcxmlAlerting;
*/
function CXVCcxmlAlerting( jparent)
{	

     this.sessionid =cxvJson.getValue(jparent,"sessionid","");      //char *sessionid
     this.connectionid =cxvJson.getValue(jparent,"connectionid","");      //char *sessionid
     this.caller =cxvJson.getValue(jparent,"caller","");      //char  *ccxmlurl
     this.callee=cxvJson.getValue(jparent,"callee","");    //XArgs *ccxmlvalues;   // ccxml session values 

     this.protocolName=cxvJson.getValue(jparent,"protocolname","");    //XArgs *ccxmlvalues;   // ccxml session values 
     this.protocolVersion=cxvJson.getValue(jparent,"protocolversion","");    //XArgs *ccxmlvalues;   // ccxml session values 

     this.mode=cxvJson.getValue(jparent,"mode","normal");    //"collaboration" or "normal"
	 
     this.info=cxvJson.getValue(jparent,"info",{}); 
}


CXVCcxmlAlerting.prototype.objectify = function(jparent)
{
	
   cxvJson.putValue(jparent,"sessionid",this.sessionid);
   cxvJson.putValue(jparent,"connectionid",this.connectionid);
   cxvJson.putValue(jparent,"caller",this.caller);
   cxvJson.putValue(jparent,"callee",this.callee); 
   cxvJson.putValue(jparent,"protocolname",this.protocolName);
   cxvJson.putValue(jparent,"protocolversion",this.protocolVersion);
   cxvJson.putValue(jparent,"mode",this.mode);
   cxvJson.putValue(jparent,"info",this.info);
   

	
}


//============================ CXVCcxml Connected ==============================
/*

typedef struct
{
	char *connectionid;

}VROCcxmlConnected, VROCcxmlProgressing;
*/
function CXVCcxmlConnected(jparent )
{	
     this.connectionid =cxvJson.getValue(jparent,"connectionid","");      //char *sessionid
}


CXVCcxmlConnected.prototype.objectify = function(jparent)
{
	
   cxvJson.putValue(jparent,"connectionid",this.connectionid);
 	
}


//======================= CXVCcxml CreateCall =====================================
/*
typedef struct
{
	char   *connectionid;

	char   *caller;
	char   *dest;
	int    timeout;
	XArgs  *hints;

}VROCcxmlCreatecall;


*/

function CXVCcxmlCreatecall(jparent )
{	
    if(jparent && typeof(jparent) == "object")
	{
     this.sessionid = cxvJson.getValue(jparent,"sessionid","");      //char *sessionid
     this.connectionid = cxvJson.getValue(jparent,"connectionid","");      //char *sessionid
     this.caller = cxvJson.getValue(jparent,"caller","");      //char *sessionid
     this.dest = cxvJson.getValue(jparent,"dest","");      //char *sessionid
     this.timeout = cxvJson.getValue(jparent,"timeout",30);      //char *sessionid
     this.hints = cxvJson.getValue(jparent,"hints",{});      //char  *ccxmlurl	 
	}
	else
	{
     this.connectionid ="";      //char *sessionid
     this.dest = "";      //char *sessionid
     this.caller = "";      //char *sessionid
	 this.timeout=30;
	 this.hints= {};
		
	}
}


CXVCcxmlCreatecall.prototype.objectify = function(jparent)
{
	
   cxvJson.putValue(jparent,"sessionid",this.sessionid);
   cxvJson.putValue(jparent,"connectionid",this.connectionid);
   cxvJson.putValue(jparent,"dest",this.dest);
   cxvJson.putValue(jparent,"caller",this.caller);
   cxvJson.putValue(jparent,"timeout",this.timeout);
   cxvJson.putValue(jparent,"hints",this.hints);
	
}


//======================== CXVCcxml CreateConference =====================
function CXVCcxmlCreateConference(jfrom)
{
    this.tid = cxvJson.getValue(jfrom,"tid","");
    this.conferenceid = cxvJson.getValue(jfrom,"confid","");
    this.conferencename =  cxvJson.getValue(jfrom,"confname","");
	this.hints=cxvJson.getValue(jfrom,"hints",{});
}

CXVCcxmlCreateConference.prototype.objectify=function(jparent)
{
    cxvJson.putValue(jparent,"tid",this.tid);
    cxvJson.putValue(jparent,"confid",this.conferenceid);
    cxvJson.putValue(jparent,"confname",this.conferencename);
    cxvJson.putValue(jparent,"hints",this.hints);
}

//========================== CXVCcxmlCreateConferenceResult ========================

function CXVCcxmlCreateConferenceResult(jfrom)
{
    this.tid = cxvJson.getValue(jfrom,"tid","");
    this.conferenceid = cxvJson.getValue(jfrom,"confid","");
	this.result=cxvJson.getValue(jfrom,"result",false);
	this.reason=cxvJson.getValue(jfrom,"reason","");
}

CXVCcxmlCreateConferenceResult.prototype.objectify=function(jparent)
{
    cxvJson.putValue(jparent,"tid",this.tid);
    cxvJson.putValue(jparent,"confid",this.conferenceid);
    cxvJson.putValue(jparent,"result",this.result);
    cxvJson.putValue(jparent,"reason",this.reason);
}


//======================== CXVCcxmlDestroyConference ===========================
function CXVCcxmlDestroyConference(jfrom)
{
    this.tid = cxvJson.getValue(jfrom,"tid","");
    this.conferenceid = cxvJson.getValue(jfrom,"confid","");
	this.hints=cxvJson.getValue(jfrom,"hints",{});
}

CXVCcxmlDestroyConference.prototype.objectify=function(jparent)
{
    cxvJson.putValue(jparent,"tid",this.tid);
    cxvJson.putValue(jparent,"confid",this.conferenceid);
    cxvJson.putValue(jparent,"hints",this.hints);
}

//======================= CXVCcxmlDestroyConferenceResult ========================
function CXVCcxmlDestroyConferenceResult(jfrom)
{
    this.tid = cxvJson.getValue(jfrom,"tid","");
    this.conferenceid = cxvJson.getValue(jfrom,"confid","");
	this.result=cxvJson.getValue(jfrom,"result",false);
	this.reason=cxvJson.getValue(jfrom,"reason","");
}

CXVCcxmlDestroyConferenceResult.prototype.objectify=function(jparent)
{
    cxvJson.putValue(jparent,"tid",this.tid);
    cxvJson.putValue(jparent,"confid",this.conferenceid);
    cxvJson.putValue(jparent,"result",this.result);
    cxvJson.putValue(jparent,"reason",this.reason);
}
//=============================== CXVCcxmlDisconnect =========================
/*
typedef struct
{
	char   *connectionid;
	char   *reason;
	XArgs  *hints;

}VROCcxmlReject, VROCcxmlDisconnect;
*/

function CXVCcxmlDisconnect(jparent )
{	
    if(jparent && typeof(jparent) == "object")
	{
     this.connectionid = cxvJson.getValue(jparent,"connectionid","");      //char *sessionid
     this.reason = cxvJson.getValue(jparent,"reason","");      //char  *ccxmlurl
     this.hints = cxvJson.getValue(jparent,"hints",{});      //char  *ccxmlurl	 
	}
	else
	{
     this.connectionid ="";      //char *sessionid
     this.reason = "";      //char  *ccxmlurl
	 this.hints= {};
		
	}
}


CXVCcxmlDisconnect.prototype.objectify = function(jparent)
{
	
   cxvJson.putValue(jparent,"connectionid",this.connectionid);
   cxvJson.putValue(jparent,"reason",this.reason);
   cxvJson.putValue(jparent,"hints",this.hints);
	
}

//==================================== CXVCcxmlDisconnected =========================
/*

typedef struct
{
	char *connectionid;
	char *reason;
	char *trigger;

}VROCcxmlDisconnected;
*/


function CXVCcxmlDisconnected( jparent)
{	

     this.connectionid =cxvJson.getValue(jparent,"connectionid","");
     this.reason =cxvJson.getValue(jparent,"reason","");
     this.trigger =cxvJson.getValue(jparent,"trigger","");
}


CXVCcxmlDisconnected.prototype.objectify = function(jparent)
{
	
   cxvJson.putValue(jparent,"connectionid",this.connectionid);
   cxvJson.putValue(jparent,"reason",this.reason);
   cxvJson.putValue(jparent,"trigger",this.trigger);
 	
}
//================================== CXVCcxml Event ==========================
/*
typedef struct
{
	char *sessionid;
	char *evtname; // event name
	char *ctype;   // content type(text/plain,text/xml,application/json...)
	char *cdata;   // content data ,must be text type

}VROCcxmlEvent;
typedef struct
{
	char *source;    // sender 
	char *target;    // target 
	char *eventid;   // event id(send id)
	char *eventname; // event name
	char *ctype;   // content type(text/plain,text/xml,application/json...)
	char *cdata;   // content data ,must be text type
}CXVCcxmlEvent
*/

function CXVCcxmlEvent(jparent )
{	
     this.source= cxvJson.getValue(jparent,"source","");      //char *sessionid
     this.target= cxvJson.getValue(jparent,"target","");      //char *sessionid
     this.eventid = cxvJson.getValue(jparent,"eventid","");      //char  *ccxmlurl
     this.eventname = cxvJson.getValue(jparent,"eventname","");      //char  *ccxmlurl
     this.ctype = cxvJson.getValue(jparent,"ctype","");      //char  *ccxmlurl
     this.cdata = cxvJson.getValue(jparent,"cdata","");      //char  *ccxmlurl	 
}

CXVCcxmlEvent.prototype.objectify = function(jparent)
{
	
   cxvJson.putValue(jparent,"source",this.source);
   cxvJson.putValue(jparent,"target",this.target);
   cxvJson.putValue(jparent,"eventid",this.eventid);
   cxvJson.putValue(jparent,"eventname",this.eventname);
   cxvJson.putValue(jparent,"ctype",this.ctype);
   cxvJson.putValue(jparent,"cdata",this.cdata);
	
}

//========================== CXVCcxmlFailed ===========================================

/*
typedef struct
{
	char *connectionid;
	char *reason;

}VROCcxmlCreatecallFailed, VROCcxmlAcceptFailed, VROCcxmlRejectFailed, VROCcxmlRedirectFailed;

*/

function CXVCcxmlFailed(jparent )
{	

     this.connectionid =cxvJson.getValue(jparent,"connectionid","");
     this.reason =cxvJson.getValue(jparent,"reason","");
}


CXVCcxmlFailed.prototype.objectify = function(jparent)
{
	
   cxvJson.putValue(jparent,"connectionid",this.connectionid);
   cxvJson.putValue(jparent,"reason",this.reason);
 	
}

//================================= CXVCcxmlJoin =======================
function CXVCcxmlJoin(jfrom)
{
	//console.log("CXVCcxmlJoin:1");
	
    this.tid = cxvJson.getValue(jfrom,"tid","");
    this.roomid = cxvJson.getValue(jfrom,"roomid","");
    this.roomtype = cxvJson.getValue(jfrom,"roomtype","");

    this.partid = cxvJson.getValue(jfrom,"partid","");
    this.parttype = cxvJson.getValue(jfrom,"parttype","");

    this.direction = cxvJson.getValue(jfrom,"direction","");
	
	this.hints=cxvJson.getValue(jfrom,"hints",{});
}

CXVCcxmlJoin.prototype.objectify=function(jparent)
{
    cxvJson.putValue(jparent,"tid",this.tid);
    cxvJson.putValue(jparent,"roomid",this.roomid);
    cxvJson.putValue(jparent,"roomtype",this.roomtype);
    cxvJson.putValue(jparent,"partid",this.partid);
    cxvJson.putValue(jparent,"parttype",this.parttype);

    cxvJson.putValue(jparent,"direction",this.direction);

    cxvJson.putValue(jparent,"hints",this.hints);
}


//================================= CXVCcxmlJoinResult =========================================
function CXVCcxmlJoinResult(jfrom)
{
    this.tid = cxvJson.getValue(jfrom,"tid","");
    this.roomid = cxvJson.getValue(jfrom,"roomid","");
    this.roomtype = cxvJson.getValue(jfrom,"roomtype","");

    this.partid = cxvJson.getValue(jfrom,"partid","");
    this.parttype = cxvJson.getValue(jfrom,"parttype","");

    this.direction = cxvJson.getValue(jfrom,"direction","");
	
	this.result=cxvJson.getValue(jfrom,"result",false);
	this.reason=cxvJson.getValue(jfrom,"reason","");
}

CXVCcxmlJoinResult.prototype.objectify=function(jparent)
{
    cxvJson.putValue(jparent,"tid",this.tid);
    cxvJson.putValue(jparent,"roomid",this.roomid);
    cxvJson.putValue(jparent,"roomtype",this.roomtype);
    cxvJson.putValue(jparent,"partid",this.partid);
    cxvJson.putValue(jparent,"parttype",this.parttype);

    cxvJson.putValue(jparent,"direction",this.direction);

    cxvJson.putValue(jparent,"result",this.result);
    cxvJson.putValue(jparent,"reason",this.reason);
}

//===============================CXVCcxmlNotStarted ================================
function CXVCcxmlNotStarted(jparent )
{	
     this.sessionid = cxvJson.getValue(jparent,"sessionid","");      //char *sessionid
     this.tid = cxvJson.getValue(jparent,"tid","");      //char  *ccxmlurl
     this.reason = cxvJson.getValue(jparent,"reason","");      //char  *ccxmlurl
}


CXVCcxmlNotStarted.prototype.objectify = function(jparent)
{
	
   cxvJson.putValue(jparent,"sessionid",this.sessionid);
   cxvJson.putValue(jparent,"tid",this.tid);
   cxvJson.putValue(jparent,"reason",this.reason);
	
}
//============================= CXVCcxmlProgressing ==============================
/*

typedef struct
{
	char *connectionid;

}VROCcxmlConnected, VROCcxmlProgressing;
*/

function CXVCcxmlProgressing(jparent )
{	

     this.connectionid =cxvJson.getValue(jparent,"connectionid","");
}


CXVCcxmlProgressing.prototype.objectify = function(jparent)
{
	
   cxvJson.putValue(jparent,"connectionid",this.connectionid);
 	
}
//============================= CXVCcxmlRedirect ==================================
function CXVCcxmlRedirect(jparent )
{	
    if(jparent && typeof(jparent) == "object")
	{
     this.connectionid = cxvJson.getValue(jparent,"connectionid","");      //char *sessionid
     this.dest = cxvJson.getValue(jparent,"dest","");      //char *sessionid
     this.reason = cxvJson.getValue(jparent,"reason","");      //char *sessionid
     this.hints = cxvJson.getValue(jparent,"hints",{});      //char  *ccxmlurl	 
	}
	else
	{
     this.connectionid ="";      //char *sessionid
     this.dest = "";      //char *sessionid
     this.reason = "";      //char *sessionid
	 this.hints= {};
		
	}
}


CXVCcxmlRedirect.prototype.objectify = function(jparent)
{
	
   cxvJson.putValue(jparent,"connectionid",this.connectionid);
   cxvJson.putValue(jparent,"dest",this.dest);
   cxvJson.putValue(jparent,"reason",this.reason);
   cxvJson.putValue(jparent,"hints",this.hints);
	
}

//========================= CXVCcxmlRedirected ===================================
function CXVCcxmlRedirected(jparent )
{	

     this.connectionid ="";      //char *sessionid
     this.reason ="";      //char *sessionid
}


CXVCcxmlRedirected.prototype.objectify = function(jparent)
{
	
   cxvJson.putValue(jparent,"connectionid",this.connectionid);
   cxvJson.putValue(jparent,"reason",this.reason);
 	
}

//================================ CXVCcxmlReject ==============================
function CXVCcxmlReject(jparent )
{	
    if(jparent && typeof(jparent) == "object")
	{
     this.connectionid = cxvJson.getValue(jparent,"connectionid","");      //char *sessionid
     this.reason = cxvJson.getValue(jparent,"reason","");      //char  *ccxmlurl
     this.hints = cxvJson.getValue(jparent,"hints",{});      //char  *ccxmlurl	 
	}
	else
	{
     this.connectionid ="";      //char *sessionid
     this.reason = "";      //char  *ccxmlurl
	 this.hints= {};
		
	}
}


CXVCcxmlReject.prototype.objectify = function(jparent)
{
	
   cxvJson.putValue(jparent,"connectionid",this.connectionid);
   cxvJson.putValue(jparent,"reason",this.reason);
   cxvJson.putValue(jparent,"hints",this.hints);
	
}

//=========================== CXVCcxmlStart =================================
function CXVCcxmlStart( jparent)
{	
     this.sessionid =cxvJson.getValue(jparent,"sessionid","");      //char *sessionid
     this.tid=cxvJson.getValue(jparent,"tid","");           //  char  *echo;
     this.ccxmlurl =cxvJson.getValue(jparent,"ccxmlurl","");      //char  *ccxmlurl
     this.ccxmlvalues=cxvJson.getValue(jparent,"ccxmlvalues",{});    //XArgs *ccxmlvalues;   // ccxml session values 
}


CXVCcxmlStart.prototype.objectify = function(jparent)
{
	
   cxvJson.putValue(jparent,"sessionid",this.sessionid);
   cxvJson.putValue(jparent,"tid",this.tid);
   cxvJson.putValue(jparent,"ccxmlurl",this.ccxmlurl);
   cxvJson.putValue(jparent,"ccxmlvalues",this.ccxmlvalues); 
   

	
}

//=============================== CXVCcxmlStarted ===========================


function CXVCcxmlStarted(jparent )
{	
     this.sessionid = cxvJson.getValue(jparent,"sessionid","");      //char *sessionid
     this.tid = cxvJson.getValue(jparent,"tid","");      //char  *ccxmlurl
}


CXVCcxmlStarted.prototype.objectify = function(jparent)
{
	
   cxvJson.putValue(jparent,"sessionid",this.sessionid);
   cxvJson.putValue(jparent,"tid",this.tid);
	
}
//=============================== CXVCcxmlTerminate ========================

function CXVCcxmlTerminate(jparent )
{	
     this.sessionid = cxvJson.getValue(jparent,"sessionid",""); 
     this.unconditional =cxvJson.getValue(jparent,"unconditional",false); 
}


CXVCcxmlTerminate.prototype.objectify = function(jparent)
{
	
   cxvJson.putValue(jparent,"sessionid",this.sessionid);
   cxvJson.putValue(jparent,"unconditional",this.unconditional);
   
   

	
}

//==============================  CXVCcxmlTerminated ===================================
function CXVCcxmlTerminated(jparent )
{	
    if(jparent && typeof(jparent) == "object")
	{
     this.sessionid = cxvJson.getValue(jparent,"sessionid","");      //char *sessionid
     this.expr = cxvJson.getValue(jparent,"expr","");      //char  *ccxmlurl
     this.values = cxvJson.getValue(jparent,"values",{});      //char  *ccxmlurl	 
	}
	else
	{
     this.sessionid ="";      //char *sessionid
     this.expr = "";      //char  *ccxmlurl
	 this.values= {};
		
	}
}


CXVCcxmlTerminated.prototype.objectify = function(jparent)
{
	
   cxvJson.putValue(jparent,"sessionid",this.sessionid);
   cxvJson.putValue(jparent,"expr",this.expr);
   cxvJson.putValue(jparent,"values",this.values);
	
}

//=============================== CXVCcxmlUnjoin ===================================


function CXVCcxmlUnjoin(jfrom)
{
    this.tid = cxvJson.getValue(jfrom,"tid","");
    this.roomid = cxvJson.getValue(jfrom,"roomid","");
    this.roomtype = cxvJson.getValue(jfrom,"roomtype","");

    this.partid = cxvJson.getValue(jfrom,"partid","");
    this.parttype = cxvJson.getValue(jfrom,"parttype","");

	
	this.hints=cxvJson.getValue(jfrom,"hints",{});
}

CXVCcxmlUnjoin.prototype.objectify=function(jparent)
{
    cxvJson.putValue(jparent,"tid",this.tid);
    cxvJson.putValue(jparent,"roomid",this.roomid);
    cxvJson.putValue(jparent,"roomtype",this.roomtype);
    cxvJson.putValue(jparent,"partid",this.partid);
    cxvJson.putValue(jparent,"parttype",this.parttype);


    cxvJson.putValue(jparent,"hints",this.hints);
}
//============================ CXVCcxmlUnjoinResult =========================
function CXVCcxmlUnjoinResult(jfrom)
{
    this.tid = cxvJson.getValue(jfrom,"tid","");
    this.roomid = cxvJson.getValue(jfrom,"roomid","");
    this.roomtype = cxvJson.getValue(jfrom,"roomtype","");

    this.partid = cxvJson.getValue(jfrom,"partid","");
    this.parttype = cxvJson.getValue(jfrom,"parttype","");

    //this.direction = cxvJson.getValue(jfrom,"direction","");
	
	this.result=cxvJson.getValue(jfrom,"result",false);
	this.reason=cxvJson.getValue(jfrom,"reason","");
}

CXVCcxmlUnjoinResult.prototype.objectify=function(jparent)
{
    cxvJson.putValue(jparent,"tid",this.tid);
    cxvJson.putValue(jparent,"roomid",this.roomid);
    cxvJson.putValue(jparent,"roomtype",this.roomtype);
    cxvJson.putValue(jparent,"partid",this.partid);
    cxvJson.putValue(jparent,"parttype",this.parttype);

    //cxvJson.putValue(jparent,"direction",this.direction);

    cxvJson.putValue(jparent,"result",this.result);
    cxvJson.putValue(jparent,"reason",this.reason);
}

//==================== CXVCcxmlUnjoined ============================
function CXVCcxmlUnjoined(jfrom)
{
    this.roomid = cxvJson.getValue(jfrom,"roomid","");
    this.roomtype = cxvJson.getValue(jfrom,"roomtype","");

    this.partid = cxvJson.getValue(jfrom,"partid","");
    this.parttype = cxvJson.getValue(jfrom,"parttype","");

}

CXVCcxmlUnjoined.prototype.objectify=function(jparent)
{
    cxvJson.putValue(jparent,"roomid",this.roomid);
    cxvJson.putValue(jparent,"roomtype",this.roomtype);
    cxvJson.putValue(jparent,"partid",this.partid);
    cxvJson.putValue(jparent,"parttype",this.parttype);

}


//================================ CXVCcxmlMessage  ==========================
function CXVCcxmlMessage()
{
	//============= session =========    	
	this.start = undefined;      // C ->S,CXVCcxmlStart
    this.terminate = undefined;  // C ->S,CXVCcxmlTerminate
	this.started = undefined;    // C <-S,CXVCcxmlStarted
	this.notstarted= undefined;  // C <-S,CXVCcxmlNotStarted
	this.terminated = undefined; // C <-S,CXVCcxmlTerminated
    this.find = undefined;  // C ->S,CXVCcxmlFind
    this.found = undefined;  // C ->S,CXVCcxmlFind
    this.notfound = undefined;  // C ->S,CXVCcxmlFind
  
	this.event = undefined;      // C <-> S,CXVCcxmlEvent

	//=========== connection ===============
	this.alerting = undefined;   // C ->S,CXVCcxmlAlerting
	this.connected = undefined;   // C ->S,CXVCcxmlConnected
	this.disconnected = undefined; // C ->S,CXVCcxmlDisconnected
	this.redirected = undefined;   // C ->S,CXVCcxmlRedirected 
	this.progressing = undefined;  // C ->S,CXVCcxmlProgressing

	// ============ call  =================
	this.accept = undefined;       // C <-S ,CXVCcxmlAccept
	this.reject = undefined;       // C <-S ,CXVCcxmlReject
	this.redirect = undefined;     // C <-S ,CXVCcxmlRedirect
	this.disconnect = undefined;   // C <-S ,CXVCcxmlDisconnect
	this.createcall = undefined;   // C <-S ,CXVCcxmlCreatecall

	this.createcallFailed = undefined; // C ->S,CXVCcxmlCreatecallFailed
	this.acceptFailed = undefined;     // C ->S,CXVCcxmlAcceptFailed
	this.rejectFailed = undefined;     // C ->S,CXVCcxmlRejectFailed 
	this.redirectFailed = undefined;   // C ->S,CXVCcxmlRedirectFailed
	// ======== conference ===================

	this.createConf  = undefined ;   //	C <- S ,CXVCcxmlCreateConference;
	this.destroyConf = undefined;    //	C <- S ,SCXVCcxmlDestroyConference  destroyConf;
	this.join=undefined;             //	C <- S, CXVCcxmlJoin               join;
	this.unjoin=undefined;           //	C <- S, CXVCcxmlUnjoin             unjoin;


	this.createConfResult= undefined;//	C -> S, CXVCcxmlCreateConferenceResult   createConfResult;
	this.destroyConfResult=undefined;// C -> S,	CXVCcxmlDestroyConferenceResult  destroyConfResult;

	this.joinResult = undefined;     //	C -> S ,CXVCcxmlJoinResult    joinResult;
	this.unjoinResult=undefined;     //	C -> S, CXVCcxmlUnjoinResult  unjoinResult;
	this.unjoined = undefined;       // C -> S,	CXVCcxmlUnjoined      unjoined;
	
}

CXVCcxmlMessage.prototype.objectify=function(cxv)
{
	
    //var jcxv = cxvJson.create();
	var jccxml = cxvJson.create();
				
	cxvJson.putValue(jccxml,"type$", cxv.type);
	cxvJson.putValue(jccxml,"name$", cxv.name);
	//cxvJson.putValue(jccxml, "sessionid$", cxv.sessionid, "");
	//cxvJson.putValue(jccxml, "connectionid$", cxv.connectionid, "");
	
	

	if(cxv.name == CXVConst.CXVCCXML_START)       // create_ccxml       
	{	
	    this.start.objectify(jccxml);
	}	
	else if(cxv.name == CXVConst.CXVCCXML_TERMINATE)
	{
	    this.terminate.objectify(jccxml);
		
	}
	else if(cxv.name == CXVConst.CXVCCXML_FIND)
	{
	    this.find.objectify(jccxml);
		
	}
	else if(cxv.name == CXVConst.CXVCCXML_FOUND)
	{
	    this.found.objectify(jccxml);
		
	}
	else if(cxv.name == CXVConst.CXVCCXML_NOTFOUND)
	{
	    this.notfound.objectify(jccxml);
		
	}
    else if(cxv.name == CXVConst.CXVCCXML_STARTED )
    {	
	    this.started.objectify(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_NOTSTARTED)
    {	
	    this.notstarted.objectify(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_TERMINATED)
    {	
	    this.terminated.objectify(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_ALERTING )
    {	
	    this.alerting.objectify(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_CONNECTED)
    {	
	    this.connected.objectify(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_DISCONNECTED )
    {	
	    this.disconnected.objectify(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_REDIRECTED)
    {	
	    this.redirected.objectify(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_PROGRESSING )
    {	
	    this.progressing.objectify(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_CREATECALL)
    {	
	    this.createcall.objectify(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_REDIRECT )
    {	
	    this.redirect.objectify(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_DISCONNECT)
    {	
	    this.disconnect.objectify(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_ACCEPT )
    {	
	    this.accept.objectify(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_REJECT)
    {	
	    this.reject.objectify(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_CREATECALL_FAILED)
    {	
	    this.createcallFailed.objectify(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_ACCEPT_FAILED)
    {	
	    this.acceptFailed.objectify(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_REJECT_FAILED )
    {
		this.rejectFailed.objectify(jccxml);
    }
    else if(cxv.name == CXVConst.CXVCCXML_REDIRECT_FAILED )
    {	
		this.redirectFailed.objectify(jccxml);
    }
    else if(cxv.name == CXVConst.CXVCCXML_EVENT )
    {
		this.event.objectify(jccxml);
    }
    else if(cxv.name == CXVConst.CXVCCXML_CREATECONFERENCE )		
    {
		this.createConf.objectify(jccxml);
    }
    else if(cxv.name == CXVConst.CXVCCXML_DESTROYCONFERENCE )		
    {
		this.destroyConf.objectify(jccxml);
    }
    else if(cxv.name == CXVConst.CXVCCXML_JOIN )		
    {
		this.join.objectify(jccxml);
    }
    else if(cxv.name == CXVConst.CXVCCXML_UNJOIN )		
    {
		this.unjoin.objectify(jccxml);
    }
    else if(cxv.name == CXVConst.CXVCCXML_CREATECONFERENCE_RESULT )		
    {
		this.createConfResult.objectify(jccxml);
    }
    else if(cxv.name == CXVConst.CXVCCXML_DESTROYCONFERENCE_RESULT )		
    {
		this.destroyConfResult.objectify(jccxml);
    }
    else if(cxv.name == CXVConst.CXVCCXML_JOIN_RESULT )		
    {
		this.joinResult.objectify(jccxml);
    }
    else if(cxv.name == CXVConst.CXVCCXML_UNJOIN_RESULT )		
    {
		this.unjoinResult.objectify(jccxml);
    }
    else if(cxv.name == CXVConst.CXVCCXML_UNJOINED )		
    {
		this.unjoined.objectify(jccxml);
    }
	
	//cxvJson.putValue(jcxv,CXVConst.CXV_BODY,jccxml); 
    return jccxml;	
}
CXVCcxmlMessage.prototype.stringify=function(cxv)
{
	var jobj = this.objectify(cxv);
	return cxvJson.stringify(jobj);
	
}

CXVCcxmlMessage.prototype.parse=function(cxv,jsdata)
{
	//console.log(jsonString);
	//var jcxv= cxvJson.parse(jsonString);	
	var jccxml= typeof(jsdata) === 'object' ? jsdata : cxvJson.parse(jsdata);		
	//var jccxml =  cxvJson.getValue(jcxv,CXVConst.CXV_BODY,{});

	if(!cxv.ccxml) 	
      cxv.ccxml = new CXVCcxmlMessage();
		
	cxv.name = cxvJson.getValue(jccxml, "name$", "");
	//cxv.sessionid = cxvJson.getValue(jccxml, "sessionid$", "");
	//cxv.connectionid = cxvJson.getValue(jccxml, "connectionid$", "");
	
	
	if(cxv.name == CXVConst.CXVCCXML_START)       // create_ccxml       
	{	
	    cxv.ccxml.start = new CXVCcxmlStart(jccxml);//.objectify(jccxm
	}	
	else if(cxv.name == CXVConst.CXVCCXML_TERMINATE)
	{
	    cxv.ccxml.terminate = new CXVCcxmlTerminate(jccxml);		
	}
	else if(cxv.name == CXVConst.CXVCCXML_FIND)
	{
	    cxv.ccxml.find = new CXVCcxmlFind(jccxml);		
	}
	else if(cxv.name == CXVConst.CXVCCXML_FOUND)
	{
	    cxv.ccxml.found = new CXVCcxmlFound(jccxml);		
	}
	else if(cxv.name == CXVConst.CXVCCXML_NOTFOUND)
	{
	    cxv.ccxml.notfound = new CXVCcxmlNotFound(jccxml);		
	}
    else if(cxv.name == CXVConst.CXVCCXML_STARTED )
    {	
	    cxv.ccxml.started = new CXVCcxmlStarted(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_NOTSTARTED)
    {	
	    cxv.ccxml.notstarted = new CXVCcxmlNotStarted(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_TERMINATED)
    {	
	    cxv.ccxml.terminated = new CXVCcxmlTerminated(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_ALERTING )
    {	
	    cxv.ccxml.alerting = new CXVCcxmlAlerting(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_CONNECTED)
    {	
	    cxv.ccxml.connected = new CXVCcxmlConnected(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_DISCONNECTED )
    {	
	    cxv.ccxml.disconnected = new CXVCcxmlDisconnected(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_REDIRECTED)
    {	
	    cxv.ccxml.redirected = new CXVCcxmlRedirected(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_PROGRESSING )
    {	
	    cxv.ccxml.progressing = new CXVCcxmlProgressing(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_CREATECALL)
    {	
	    cxv.ccxml.createcall = new CXVCcxmlCreatecall(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_REDIRECT )
    {	
	    cxv.ccxml.redirect = new CXVCcxmlRedirect(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_DISCONNECT)
    {	
	    cxv.ccxml.disconnect = new CXVCcxmlDisconnect(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_ACCEPT )
    {	
	    cxv.ccxml.accept = new CXVCcxmlAccept(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_REJECT)
    {	
	    cxv.ccxml.reject = new CXVCcxmlReject(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_CREATECALL_FAILED)
    {	
	    cxv.ccxml.createcallFailed = new CXVCcxmlFailed(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_ACCEPT_FAILED)
    {	
	    cxv.ccxml.acceptFailed= new CXVCcxmlFailed(jccxml);

    }
    else if(cxv.name == CXVConst.CXVCCXML_REJECT_FAILED )
    {
		cxv.ccxml.rejectFailed= new CXVCcxmlFailed(jccxml);
    }
    else if(cxv.name == CXVConst.CXVCCXML_REDIRECT_FAILED )
    {	
		cxv.ccxml.redirectFailed= new CXVCcxmlFailed(jccxml);
    }
    else if(cxv.name == CXVConst.CXVCCXML_EVENT )
    {
		//console.log(CXVConst.CXVCCXML_EVENT);
		cxv.ccxml.event= new CXVCcxmlEvent(jccxml);


    }
    else if(cxv.name == CXVConst.CXVCCXML_CREATECONFERENCE )		
    {
		cxv.ccxml.createConf = new CXVCcxmlCreateConference(jccxml);
    }
    else if(cxv.name == CXVConst.CXVCCXML_DESTROYCONFERENCE )		
    {
		cxv.ccxml.destroyConf = new CXVCcxmlDestroyConference(jccxml);
    }
    else if(cxv.name == CXVConst.CXVCCXML_JOIN )		
    {
		cxv.ccxml.join = new CXVCcxmlJoin(jccxml);
    }
    else if(cxv.name == CXVConst.CXVCCXML_UNJOIN )		
    {
		cxv.ccxml.unjoin = new CXVCcxmlUnjoin(jccxml);
    }
    else if(cxv.name == CXVConst.CXVCCXML_CREATECONFERENCE_RESULT )		
    {
		cxv.ccxml.createConfResult = new CXVCcxmlCreateConferenceResult(jccxml);
    }
    else if(cxv.name == CXVConst.CXVCCXML_DESTROYCONFERENCE_RESULT )		
    {
		cxv.ccxml.destroyConfResult = new CXVCcxmlDestroyConferenceResult(jccxml);
    }
    else if(cxv.name == CXVConst.CXVCCXML_JOIN_RESULT )		
    {
		cxv.ccxml.joinResult = new CXVCcxmlJoinResult(jccxml);
    }
    else if(cxv.name == CXVConst.CXVCCXML_UNJOIN_RESULT )		
    {
		cxv.ccxml.unjoinResult = new CXVCcxmlUnjoinResult(jccxml);
    }
    else if(cxv.name == CXVConst.CXVCCXML_UNJOINED )		
    {
		cxv.ccxml.unjoined = new CXVCcxmlUnjoined(jccxml);
    }
	
	else{
		return false;
	}
	
	return true;
	
 	
}

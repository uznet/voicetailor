

//====================================== LoginRequest ====================

function CXVTrunkLoginRequest(jfrom)
{
    this.name= cxvJson.getValue(jfrom,"name","");   // trunk name
    this.extra= cxvJson.getValue(jfrom,"extra","");
}
CXVTrunkLoginRequest.prototype.objectify=function(jparent)
{
	cxvJson.putValue(jparent,"name",this.name);  // trunk name
	cxvJson.putValue(jparent,"extra",this.extra);

}

//====================================== Login Result ======================

function CXVTrunkLoginResult(jfrom)
{
    this.success= cxvJson.getValue(jfrom,"success",false);
    this.name= cxvJson.getValue(jfrom,"name","");        // trunk name
    this.channel= cxvJson.getValue(jfrom,"channel",0);   // number of trunk channel
    this.reason= cxvJson.getValue(jfrom,"reason","");
    this.mode= cxvJson.getValue(jfrom,"mode","normal");


}
CXVTrunkLoginResult.prototype.objectify=function(jparent)
{
    cxvJson.putValue(jparent,"success",this.success);
	cxvJson.putValue(jparent,"name",this.name);         // trunk name
	cxvJson.putValue(jparent,"channel",this.channel);   // number of trunk channel
	cxvJson.putValue(jparent,"reason",this.reason);
	cxvJson.putValue(jparent,"mode",this.mode);

}




//====================================== Event Send ====================

function CXVTrunkEventSend(jfrom)
{
    this.source= cxvJson.getValue(jfrom,"source","");   // trunk name
    this.target= cxvJson.getValue(jfrom,"target","");
    this.id= cxvJson.getValue(jfrom,"eventid","");
    this.name= cxvJson.getValue(jfrom,"eventname","");

    this.extratype= cxvJson.getValue(jfrom,"extratype","");
    this.extravalue= cxvJson.getValue(jfrom,"extravalue","");
}
CXVTrunkEventSend.prototype.objectify=function(jparent)
{
	cxvJson.putValue(jparent,"source",this.source);  // trunk name
	cxvJson.putValue(jparent,"target",this.target);

	cxvJson.putValue(jparent,"eventid",this.id);  // trunk name
    cxvJson.putValue(jparent,"eventname",this.name);
    
	cxvJson.putValue(jparent,"extratype",this.extratype);  // trunk name
	cxvJson.putValue(jparent,"extravalue",this.extravalue);

}
//====================================== Event  Ack ====================

function CXVTrunkEventAck(jfrom)
{

    this.target= cxvJson.getValue(jfrom,"target","");   // trunk name
    this.id= cxvJson.getValue(jfrom,"id","");
    this.name= cxvJson.getValue(jfrom,"name","");

    this.success= cxvJson.getValue(jfrom,"success",false);
    this.reason= cxvJson.getValue(jfrom,"reason","");

}
CXVTrunkEventAck.prototype.objectify=function(jparent)
{
	cxvJson.putValue(jparent,"target",this.target);  // trunk name
	cxvJson.putValue(jparent,"id",this.id);
	cxvJson.putValue(jparent,"name",this.name);


	cxvJson.putValue(jparent,"success",this.success);
	cxvJson.putValue(jparent,"reason",this.reason);

}

//======================== CXVTrunkMessage =======================
function CXVTrunkMessage()
{
	this.loginRequest= undefined;
	this.loginResult = undefined;

	this.evtSend= undefined;
	this.evtAck = undefined;
}

CXVTrunkMessage.prototype.objectify=function(cxv)
{
    //var jcxv = cxvJson.create();
	var jtrunk = cxvJson.create();
				
	cxvJson.putValue(jtrunk,"type$", cxv.type, "");
	cxvJson.putValue(jtrunk,"name$", cxv.name, "");
	//cxvJson.putValue(jgram,"id$", cxv.grammar.id, "");
	
	if(cxv.name == CXVConst.CXVTRUNK_LOGIN_REQUEST)       // create_ccxml       
	{	
	    this.loginRequest.objectify(jtrunk);
	}	
	else if(cxv.name == CXVConst.CXVTRUNK_LOGIN_RESULT)
	{
	    this.loginResult.objectify(jtrunk);
		
	}

	else if(cxv.name == CXVConst.CXVTRUNK_EVENT_SEND)       // create_ccxml       
	{	
	    this.evtSend.objectify(jtrunk);
	}	
	else if(cxv.name == CXVConst.CXVTRUNK_EVENT_ACK)
	{
	    this.evtAck.objectify(jtrunk);
		
	}
    
	//cxvJson.putValue(jcxv,CXVConst.CXV_BODY,jtrunk); 
    return jtrunk;	
	
	
}
CXVTrunkMessage.prototype.stringify=function(cxv)
{
	var jobj = this.objectify(cxv);
	return cxvJson.stringify(jobj);
	
}
CXVTrunkMessage.prototype.parse=function(cxv,jsdata)
{
	
	//var jcxv  = cxvJson.parse(jsonString);	
	
	var jtrunk= typeof(jsdata) === 'object' ? jsdata : cxvJson.parse(jsdata);		
	
	//var jtrunk = cxvJson.getValue(jcxv,CXVConst.CXV_BODY,{});

	if(!cxv.trunk) 
	  cxv.trunk = new CXVTrunkMessage();
		
	cxv.name = cxvJson.getValue(jtrunk, "name$", "");
	//cxv.grammar.id = cxvJson.getValue(jvxml, "id$", "");
		
    if(cxv.name== CXVConst.CXVTRUNK_LOGIN_REQUEST)
    {
        cxv.trunk.loginRequest = new CXVTrunkLoginRequest(jtrunk);
    }
    else  if(cxv.name== CXVConst.CXVTRUNK_LOGIN_RESULT)
    {
        cxv.trunk.loginResult = new CXVTrunkLoginResult(jtrunk);

    }
    else if(cxv.name== CXVConst.CXVTRUNK_EVENT_SEND)
    {
        cxv.trunk.evtSend = new CXVTrunkEventSend(jtrunk);
    }
    else  if(cxv.name== CXVConst.CXVTRUNK_EVENT_ACK)
    {
        cxv.trunk.evtAck = new CXVTrunkEventAck(jtrunk);

    }
	else
	{
		return false;
	}
	
	return true;
	
	
}

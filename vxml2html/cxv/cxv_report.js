

//====================================== LoginRequest ====================

function CXVReportError(jfrom)
{
    this.reason= cxvJson.getValue(jfrom,"reason","");   // report name
    this.extratype= cxvJson.getValue(jfrom,"extratype","");
    this.extravalue= cxvJson.getValue(jfrom,"extravalue","");
}
CXVReportError.prototype.objectify=function(jparent)
{
	cxvJson.putValue(jparent,"reason",this.reason);  // report name
	cxvJson.putValue(jparent,"extratype",this.extratype);
	cxvJson.putValue(jparent,"extravalue",this.extravalue);

}


//======================== CXVReportMessage =======================
function CXVReportMessage()
{
	this.error= undefined;
}

CXVReportMessage.prototype.objectify=function(cxv)
{
    //var jcxv = cxvJson.create();
	var jreport = cxvJson.create();
				
	cxvJson.putValue(jreport,"type$", cxv.type, "");
	cxvJson.putValue(jreport,"name$", cxv.name, "");
	//cxvJson.putValue(jgram,"id$", cxv.grammar.id, "");
	
	if(cxv.name == CXVConst.CXVREPORT_ERROR)       // create_ccxml       
	{	
	    this.error.objectify(jreport);
	}	
    
	//cxvJson.putValue(jcxv,CXVConst.CXV_BODY,jreport); 
    return jreport;	
	
	
}
CXVReportMessage.prototype.stringify=function(cxv)
{
	var jobj = this.objectify(cxv);
	return cxvJson.stringify(jobj);
	
}
CXVReportMessage.prototype.parse=function(cxv,jsdata)
{
	
	//var jcxv  = cxvJson.parse(jsonString);	
	var jreport= typeof(jsdata) === 'object' ? jsdata : cxvJson.parse(jsdata);			
	//var jreport = cxvJson.getValue(jcxv,CXVConst.CXV_BODY,{});

	if(!cxv.report) 
	  cxv.report = this;//new CXVReportMessage();
		
	cxv.name = cxvJson.getValue(jreport, "name$", "");
	//cxv.grammar.id = cxvJson.getValue(jvxml, "id$", "");
		
    if(cxv.name== CXVConst.CXVREPORT_ERROR)
    {
        cxv.report.error = new CXVReportError(jreport);
    }
	else
	{
		return false;
	}
	
	return true;
	
	
}

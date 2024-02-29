

function CXVMessage(msgType)
{
	this.type = msgType;
	this.name = "";
	
	if(msgType == CXVConst.CXV_TYPE_CCXML)	
      this.ccxml=new CXVCcxmlMessage();
	else if(msgType == CXVConst.CXV_TYPE_VXML)	    
	  this.vxml=new CXVVxmlMessage();
	else if(msgType == CXVConst.CXV_TYPE_REPORT)	    
	  this.report=new CXVReportMessage();
	else if(msgType == CXVConst.CXV_TYPE_TRUNK)	    
	  this.trunk=new CXVTrunkMessage();
	
}

CXVMessage.prototype.parse= function(jsdata)
{
	var r = false;


	if(this.type == CXVConst.CXV_TYPE_VXML)
	{		
	    r=this.vxml.parse(this,jsdata);		
	}
	else if(this.type == CXVConst.CXV_TYPE_CCXML)
	{
	    r=this.ccxml.parse(this,jsdata);
		
	}
	else if(this.type == CXVConst.CXV_TYPE_REPORT)
	{
	    r=this.report.parse(this,jsdata);
		
	}
	else if(this.type == CXVConst.CXV_TYPE_TRUNK)
	{
	    r=this.trunk.parse(this,jsdata);
		
	}
	return r;
}

CXVMessage.prototype.stringify= function()
{
	var jstr =null;
	
	
	if(this.type == CXVConst.CXV_TYPE_VXML)
	{
	    jstr=this.vxml.stringify(this);		
	}
	else if(this.type == CXVConst.CXV_TYPE_CCXML)
	{
	    jstr=this.ccxml.stringify(this);
		
	}
	else if(this.type == CXVConst.CXV_TYPE_REPORT)
	{
	    jstr=this.report.stringify(this);
		
	}
	else if(this.type == CXVConst.CXV_TYPE_TRUNK)
	{
	    jstr=this.trunk.stringify(this);
		
	}
	return jstr;
}
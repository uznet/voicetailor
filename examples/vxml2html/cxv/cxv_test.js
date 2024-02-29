

const fileEval = require('file-eval');
function _eval_file(jsfile)
{
 //console.log("_eval_file:"+jsfile);
 fileEval.sync(jsfile);

}

_eval_file("./cxv_xjson.js");
_eval_file("./cxv_const.js");
_eval_file("./cxv_vxml.js");
_eval_file("./cxv_ccxml.js");
_eval_file("./cxv_trunk.js");
_eval_file("./cxv_report.js");
_eval_file("./cxv_message.js");



	function  _make_CCXML_START(sessionid,tid,ccxmlurl,ccxmlvalues)
    {
        var cxvm = new CXVMessage(CXVConst.CXV_TYPE_CCXML);
        cxvm.name = CXVConst.CXVCCXML_START;
        cxvm.ccxml.start = new CXVCcxmlStart();		
		cxvm.ccxml.start.sessionid=sessionid;
        cxvm.ccxml.start.tid = tid;
		cxvm.ccxml.start.ccxmlurl=ccxmlurl;
		cxvm.ccxml.start.ccxmlvalues=ccxmlvalues;
		return cxvm;
		
    }


    var cxvm = _make_CCXML_START("","","",{});
	
	var  jstr = cxvm.stringify();	
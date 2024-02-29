if (typeof(VTHttpClient) != 'object')
{
	VTHttpClient = {};
	//======================== HTTP =================
	function XHTTPResponse()
	{
		this.error = undefined;
		this.data = undefined;
		this.hdr = undefined;
		this.status = undefined;
	}
	XHTTPResponse.prototype.getType = function()
	{
		return "XHTTPResponse";
	}

	XHTTPResponse.prototype.getData = function()
	{
		return this.data;
	}

	XHTTPResponse.prototype.getHeader = function(name)
	{
		if (this.hdr != undefined && this.hdr != null)
			return this.hdr.getResponseHeader(name);
		return undefined;
	}

	XHTTPResponse.prototype.getStatus = function()
	{
		return this.status;
	}
	XHTTPResponse.prototype.getError = function()
	{
		return this.error;
	}


	//=============== XHTTPRequest ========================
	function XHTTPRequest(ctx, method, url, headers, params, paramstype, timeout, responsetype, onresult)
	{
		this.ajax = null;
		this.ctx = ctx;
		this.method = method;
		this.url = url;
		this.headers = headers;
		this.params = params;              // request contentdata 
		this.paramstype = paramstype != "multipart/form-data" ? paramstype : false;      // request contenttype   
		this.responsetype = responsetype;   // response contenttype
		this.timeout = timeout;
		this.onresult = onresult;

		this.processdata = Boolean(paramstype != "multipart/form-data");
	}




	XHTTPRequest.prototype.getType = function()
	{
		return "XHTTPRequest";

	}



	function xhttp_request(xRequest)
	{

		if (xRequest.getType() == 'XHTTPRequest')
		{
			var xResponse = new XHTTPResponse();
			//alert("xhttp_request:2"+xRequest.url);
			xRequest.ajax = jQuery.ajax({
								type: xRequest.method,
								url : xRequest.url,
								headers : xRequest.headers,
								cache : false,
										//contentType:"application/x-www-form-urlencoded;charset=utf-8",
										timeOut : xRequest.timeout,
										data : xRequest.params,
										processData : xRequest.processdata,
										contentType : xRequest.paramstype ,//"application/json;charset=utf-8",
										dataType : xRequest.responsetype,
										success : function(data, status, xhr) {
				// TODO
				//window.document.write(response);	
				//alert("aja:"+status);

				//xResponse.status = status;
				//xResponse.hdr = xhr;

				xResponse.data = data;
			},

			beforeSend: function(xhr) {
			  ;// alert("ajax:"+xRequest.url);

			},

			complete : function(xhr,status) {
				// TODO
				//alert('complete');
				xResponse.status = status;
				xResponse.hdr = xhr;

				if (xRequest.onresult != null)
					xRequest.onresult(xRequest.ctx,xResponse.status,xResponse);
				/*
				if (typeof(xQueue) == 'object' && xQueue.getType() == 'XHTTPRequestQueue')
				{
					// alert('next');
					 xQueue.next(true);
				 }
				 */

			 },
			 error : function(xhr, status, error) {
				 //alert('errr='+JSON.stringify(xhr));						   
				 //xResponse.status = status;
				 //xResponse.hdr = xhr;
				 xResponse.error = error;

		 }
				});

			return xRequest.ajax;
		}
		return null;
	}

	//======================= global function =================================
	VTHttpClient.get = function(ctx, url, headers, params, timeout, responsetype, onresult)
	{
		var xRequest = new XHTTPRequest(ctx, 'GET', url, headers, params, "", timeout, responsetype, onresult);
		return xhttp_request(xRequest);
	}
	VTHttpClient.post = function(ctx, url, headers, body, bodytype, timeout, responsetype, onresult)
	{
		var xRequest = new XHTTPRequest(ctx, 'POST', url, headers, body, bodytype, timeout, responsetype, onresult);
		return xhttp_request(xRequest);

	}

	VTHttpClient.post_formdata = function(ctx, url, headers, formdata, timeout, responsetype, onresult)
	{
		var xRequest = new XHTTPRequest(ctx, 'POST', url, headers, formdata, "multipart/form-data", timeout, responsetype, onresult);
		return xhttp_request(xRequest);

	}



}
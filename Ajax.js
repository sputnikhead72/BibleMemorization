
var Ajax = Ajax || {};



Ajax.Get = function (url, queryvalues, requestheaders)
{
	var request = new XMLHttpRequest ();
	var querystring = "";

	//	Convert the specified query values into a query string
	if (queryvalues)
	{
		for (var key in queryvalues)
		{
			if (querystring.length > 0)
			{
				querystring += "&";
			}

			querystring += encodeURI (key) + "=" + encodeURI (queryvalues [key]);
		}

		if (querystring.length > 0)
		{
			url += "?" + querystring;
		}
	}

	//	Initialize the request
	request.open ("get", url, false);

	//	Add any specified request headers
	if (requestheaders)
	{
		for (var key in requestheaders)
		{
			request.setRequestHeader (key, requestheaders [key]);
		}
	}

	//	Send the request
	request.send ();

	//	Wait for response
	while (request.readyState != 4)
	{
	}

	//	Once response is received, check the status, and throw an error if not a 200.
	if (request.status >= 400)
	{
		throw (request.statusText + ": " + request.responseText);
	}

	return (request.responseText);
}
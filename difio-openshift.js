#!/usr/bin/env node
/*************************************************************************************
*
* Copyright (c) 2012, Svetlozar Argirov <zarrro [AT] gmail.com>
* Copyright (c) 2012, Alexander Todorov <atodorov [AT] otb.bg>
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*
*************************************************************************************/

module.exports = require("common-nodejs-difio").configure({
	  'user_id' : process.env['DIFIO_USER_ID'],
	  'app_name' : process.env['OPENSHIFT_GEAR_NAME'],
	  'app_uuid' : process.env['OPENSHIFT_GEAR_UUID'],
	  'app_type' : process.env['OPENSHIFT_GEAR_TYPE'],
	  'app_url'  : 'http://' + process.env['OPENSHIFT_GEAR_DNS'],
	  'app_vendor' : 0,
	  'pkg_type' : 2,
	  'url' : process.env['DIFIO_REGISTER_URL'] ,
});


if(!module.parent){
	module.exports.cli();
}

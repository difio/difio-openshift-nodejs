Registration agent for monupco.com, preconfigured for OpenShift / Node.js
applications. 

It compiles a list of installed packages and sends it to monupco.com.


Installing on your OpenShift Node.js application
----------------------------------------------

- Create an account at http://monupco.com

- Create your Node.js application in OpenShift

- Add a dependency in your application's package.json file

        ...
        "dependencies": {
            ...
            "monupco-openshift-nodejs": ""
        },
        ...

- Execute the registration script in your postinstall hook.

If a file named `postinstall` doesn't already exist, create it and add the following:

        #!/bin/sh
        `npm bin`/monupco-dotcloud

* Make `postinstall` executable

        chmod a+x postinstall

* Commit your changes (if using git):

        git add .
        git commit -m "enable monupco registration"


- If everything goes well you should see something like:

        19:55:10 [www.0] Running postinstall script...
        19:55:13 [www.0] response:200
        19:55:13 [www.0] Monupco: Success, registered/updated application with id 10

- That's it, you can now check your application statistics at <http://monupco.com>

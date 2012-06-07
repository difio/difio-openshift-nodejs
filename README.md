Registration agent for monupco.com, preconfigured for OpenShift / Node.js
applications. 

It compiles a list of installed packages and sends it to monupco.com.


Installing on your OpenShift Node.js application
----------------------------------------------

- Create an account at http://monupco.com

- Create your Node.js application in OpenShift

- Add a dependency to your application:

        echo monupco-openshift-nodejs >> deplist.txt

- If your application has a `package.json` file list the dependency there as well:

        ...
        "dependencies": {
            ...
            "monupco-openshift-nodejs": ""
        },
        ...

- Set your userID in the `./data/MONUPCO_SETTINGS` file

        echo "export MONUPCO_USER_ID=YourUserID"  > ./data/MONUPCO_SETTINGS

- Enable the registration script in `.openshift/action_hooks/post_deploy`

        #!/bin/sh
        source $OPENSHIFT_REPO_DIR/data/MONUPCO_SETTINGS
        $OPENSHIFT_REPO_DIR/node_modules/.bin/monupco-openshift

- Commit and push your application to OpenShift

        git add . && git commit -m "enable monupco registration" && git push

- If everything goes well you should see something like:

        19:55:10 [www.0] Running postinstall script...
        19:55:13 [www.0] response:200
        19:55:13 [www.0] Monupco: Success, registered/updated application with id 35

- That's it, you can now check your application statistics at <http://monupco.com>

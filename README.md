[![build status](https://secure.travis-ci.org/difio/difio-openshift-nodejs.png)](http://travis-ci.org/difio/difio-openshift-nodejs)
Registration agent for Difio, preconfigured for OpenShift / Node.js
applications.

It compiles a list of installed packages and sends it to http://www.dif.io


Installing on your OpenShift Node.js application
----------------------------------------------

- Create an account at http://www.dif.io

- Create your Node.js application in OpenShift

- Add a dependency to your application:

        echo difio-openshift-nodejs >> deplist.txt

- If your application has a `package.json` file list the dependency there as well:

        ...
        "dependencies": {
            ...
            "difio-openshift-nodejs": ""
        },
        ...

- Set your userID in the `./data/DIFIO_SETTINGS` file

        echo "export DIFIO_USER_ID=YourUserID"  > ./data/DIFIO_SETTINGS

- Enable the registration script in `.openshift/action_hooks/post_deploy`

        #!/bin/sh
        cd $OPENSHIFT_REPO_DIR
        source data/DIFIO_SETTINGS
        node_modules/.bin/difio-openshift

- Commit and push your application to OpenShift

        git add . && git commit -m "enable Difio registration" && git push

- If everything goes well you should see something like:

        remote: Running .openshift/action_hooks/post_deploy
        remote: Difio: Success, registered/updated application with uuid 25d23384-46a8-48ce-83b0-01f4fa4c5987

- That's it, you can now check your application statistics at http://www.dif.io

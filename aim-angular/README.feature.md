# AimAngular

# Features

## aim-1: add app versioning.
- use a script to transfer the version from the git tag to the **version.json** file.
- implement an angular service to display data from the file in the component.

## aim-2: error handling.

    aim-2-1: implement a global error handler.
        - add custom error interceptor to implement class ErrorHandler
        - implement service to manage errors

    aim-2-2: implement logging of detected errors.
        - implement logger that allow write logs to different places (console, local storage). In future we can extend logic to write logs it db.
        - update code to log unhandled errors that occur.

## aim-3: setup enviroments.
- setup enviroments for stage and prod. 
- using env in deploy. if site will be use subdomain, then script should has option for base-href, for example -> ng build --configuration=production --base-href=/your-subdomain/

## aim-4: add controls - MaterialUI and PrimeNG.
- add to project controls and styles for MaterialUI.
- add to project controls and styles for PrimeNG.

## aim-5: setup routing and main layouts.

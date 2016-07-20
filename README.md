# Microsoft Graph service app sample using Node.js
[![Build Status](https://travis-ci.org/microsoftgraph/nodejs-apponlytoken-rest-sample.svg?branch=master)](https://travis-ci.org/microsoftgraph/nodejs-apponlytoken-rest-sample)

The Microsoft Graph API allows applications to call the API without user impersonation, that is, without a user signing in, using an app-only access token. This sample demonstrates how to request an app-only access token and create an event on each user calendar in a tenant using Node.js. 

## Prerequisites
To use this sample, you need the following: 
* [Node.js](https://nodejs.org/en/) is required to run the app and to install dependencies (via [npm](https://www.npmjs.com/)). 
* An Office 365 account. You can sign up for [an Office 365 Developer subscription](https://aka.ms/devprogramsignup) that includes the resources that you need to start building Office 365 apps.

     > Note: If you already have a subscription, the previous link sends you to a page with the message *Sorry, you can’t add that to your current account*. In that case, use an account from your current Office 365 subscription.
* A Microsoft Azure tenant to register your application. Azure Active Directory (AD) provides identity services that applications use for authentication and authorization. A trial subscription can be acquired here: [Microsoft Azure](https://account.windowsazure.com/SignUp).

     > Important: You also need to make sure your Azure subscription is bound to your Office 365 tenant. To do this, see the Active Directory team's blog post, [Creating and Managing Multiple Windows Azure Active Directories](http://blogs.technet.com/b/ad/archive/2013/11/08/creating-and-managing-multiple-windows-azure-active-directories.aspx). The section **Adding a new directory** will explain how to do this. You can also see [Set up your Office 365 development environment](https://msdn.microsoft.com/office/office365/howto/setup-development-environment#bk_CreateAzureSubscription) and the section **Associate your Office 365 account with Azure AD to create and manage apps** for more information.
* An application registered in Azure AD. The application must be granted the **Read and write calendars in all mailboxes** and **Read directory data** application permissions for the **Microsoft Graph** application. [Add a web server application in Azure](https://msdn.microsoft.com/office/office365/HowTo/add-common-consent-manually#bk_RegisterServerApp) and [grant the proper permissions](https://github.com/OfficeDev/O365-Nodejs-Microsoft-Graph-App-only/wiki/Grant-permissions-to-the-application-in-Azure) to it.

## Configure and run the app
1. Using your favorite IDE, open **config.js** in the root directory.
2. Replace *ENTER_YOUR_CLIENT_ID* with the client ID of your registered Azure application.
3. Replace *ENTER_YOUR_SECRET* with a key generated on the **Configure** page of your app in the Microsoft Azure Management Portal.
4. Replace *ENTER_YOUR_TOKEN_ISSUING_ENDPOINT* with the *OAuth 2.0 token endpoint* value found by clicking the **View Endpoints** button in the Azure Management Portal.
5. Run `npm install` to install the app's dependencies. 
6. Run `npm start` to run the app.

  > Note: This app will iterate through all users in your tenant and create a calendar event on each of their calendars. The event will have the title "Microsoft Graph API discussion", will be 30 minutes long, and will be exactly 24 hours from when you run the app.

<a name="contributing"></a>
## Contributing ##

If you'd like to contribute to this sample, see [CONTRIBUTING.MD](/CONTRIBUTING.md).

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Questions and comments
* Please [log an issue in this repository](https://github.com/OfficeDev/O365-Nodejs-Microsoft-Graph-App-only/issues) with any feedback or questions about this sample.
* Please ask questions about Microsoft Graph on [Stack Overflow](http://stackoverflow.com/questions/tagged/office365+or+microsoftgraph). Don't forget to tag your questions with [MicrosoftGraph] and [office365].

## Additional resources
* [Office Dev Center](http://dev.office.com/)
* [Microsoft Graph API](http://graph.microsoft.io)
* [Call Microsoft Graph in a service or daemon app](http://graph.microsoft.io/docs/authorization/app_only)

## Copyright
Copyright (c) 2015 Microsoft. All rights reserved.

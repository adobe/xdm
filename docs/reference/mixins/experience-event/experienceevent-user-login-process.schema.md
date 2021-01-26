
# User Login Process Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-user-login-process
```

User login details such as login state, location, and type, as well as forgot username and password counts.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-user-login-process.schema.json](mixins/experience-event/experienceevent-user-login-process.schema.json) |

## User Login Process Example
```json
{
  "xdm:userAccount": {
    "xdm:userCookieConsentAccepted": true,
    "xdm:userCookieConsentViewed": 1,
    "xdm:userForgotPassword": 1,
    "xdm:userForgotUsername": 1,
    "xdm:userLogin": 1,
    "xdm:userLoginBiometric": false,
    "xdm:userLoginFailure": 1,
    "xdm:userLoginLocation": "homepage login modal",
    "xdm:userLoginKeychain": true,
    "xdm:userLoginMultiFactor": true,
    "xdm:userLoginStatus": "authenticated",
    "xdm:userLoginType": "keychain",
    "xdm:userLogout": 1,
    "xdm:userResetPassword": 1,
    "xdm:userSessionTimeout": 1,
    "xdm:userUpdate": 1
  }
}
```

# User Login Process Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:userAccount](#xdmuseraccount) | `object` | Optional | User Login Process (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:userAccount


`xdm:userAccount`
* is optional
* type: `object`
* defined in this schema

### xdm:userAccount Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:userCookieConsentAccepted`| boolean | Optional |
| `xdm:userCookieConsentViewed`| integer | Optional |
| `xdm:userForgotPassword`| integer | Optional |
| `xdm:userForgotUsername`| integer | Optional |
| `xdm:userLogin`| integer | Optional |
| `xdm:userLoginBiometric`| boolean | Optional |
| `xdm:userLoginFailure`| integer | Optional |
| `xdm:userLoginKeychain`| boolean | Optional |
| `xdm:userLoginLocation`| string | Optional |
| `xdm:userLoginMultiFactor`| boolean | Optional |
| `xdm:userLoginStatus`| string | Optional |
| `xdm:userLoginThirdParty`| integer | Optional |
| `xdm:userLoginThirdPartySite`| string | Optional |
| `xdm:userLoginType`| string | Optional |
| `xdm:userLogout`| integer | Optional |
| `xdm:userResetPassword`| integer | Optional |
| `xdm:userSessionTimeout`| integer | Optional |
| `xdm:userUpdate`| integer | Optional |



#### xdm:userCookieConsentAccepted
##### Cookie Consent Accepted

Tracked when a visitor opts-in to allowing cookies to be set within their browser.

`xdm:userCookieConsentAccepted`
* is optional
* type: `boolean`

##### xdm:userCookieConsentAccepted Type


`boolean`







#### xdm:userCookieConsentViewed
##### Cookie Consent Viewed

Tracked when a visitor views the cookie consent information.

`xdm:userCookieConsentViewed`
* is optional
* type: `integer`

##### xdm:userCookieConsentViewed Type


`integer`








#### xdm:userForgotPassword
##### Forgot Password

Counter event when a visitor begins the forgot password process.

`xdm:userForgotPassword`
* is optional
* type: `integer`

##### xdm:userForgotPassword Type


`integer`








#### xdm:userForgotUsername
##### Forgot Username

Counter event when a visitor begins the forgot username process.

`xdm:userForgotUsername`
* is optional
* type: `integer`

##### xdm:userForgotUsername Type


`integer`








#### xdm:userLogin
##### Visitor Login

Counter event indicating a successful visitor login.

`xdm:userLogin`
* is optional
* type: `integer`

##### xdm:userLogin Type


`integer`








#### xdm:userLoginBiometric
##### Biometric Authentication

Flag determining if the user has used a biometric authentication process to login.

`xdm:userLoginBiometric`
* is optional
* type: `boolean`

##### xdm:userLoginBiometric Type


`boolean`







#### xdm:userLoginFailure
##### Visitor Login Failure

Counter event indicating a failed visitor login attempt.

`xdm:userLoginFailure`
* is optional
* type: `integer`

##### xdm:userLoginFailure Type


`integer`








#### xdm:userLoginKeychain
##### Keychain 

Flag determining if the user has used a keychain authentication process to login.

`xdm:userLoginKeychain`
* is optional
* type: `boolean`

##### xdm:userLoginKeychain Type


`boolean`







#### xdm:userLoginLocation
##### Login Page Location

When multiple login locations exist on the page, this value should be used to identify the specific location the user used for login

`xdm:userLoginLocation`
* is optional
* type: `string`

##### xdm:userLoginLocation Type


`string`








#### xdm:userLoginMultiFactor
##### Multi-Factor Authentication

Flag determining if the user has used a multi-factor authentication process to login.

`xdm:userLoginMultiFactor`
* is optional
* type: `boolean`

##### xdm:userLoginMultiFactor Type


`boolean`







#### xdm:userLoginStatus
##### Login Status

Used to track the current login status for site visitors, regardless of whether login occurred as a result of a login during the current session or a previous session as identified by a cookie value. 

`xdm:userLoginStatus`
* is optional
* type: `string`

##### xdm:userLoginStatus Type


`string`








#### xdm:userLoginThirdParty
##### Login with Third Party

Counter event that is incremented when a visitor has used another login network to authenticate, such as Apple, Facebook, or Google.

`xdm:userLoginThirdParty`
* is optional
* type: `integer`

##### xdm:userLoginThirdParty Type


`integer`








#### xdm:userLoginThirdPartySite
##### Third Party Login Site

Tracks the site used to authetnicate when a third-party sign-in event is tracked.

`xdm:userLoginThirdPartySite`
* is optional
* type: `string`

##### xdm:userLoginThirdPartySite Type


`string`








#### xdm:userLoginType
##### User Login Type

Email address vs social login

`xdm:userLoginType`
* is optional
* type: `string`

##### xdm:userLoginType Type


`string`








#### xdm:userLogout
##### Visitor Logout

Counter event indicating a successful visitor logout.

`xdm:userLogout`
* is optional
* type: `integer`

##### xdm:userLogout Type


`integer`








#### xdm:userResetPassword
##### Reset Password

Counter event when a visitor begins the reset password process.

`xdm:userResetPassword`
* is optional
* type: `integer`

##### xdm:userResetPassword Type


`integer`








#### xdm:userSessionTimeout
##### Session Timeout

Tracked when a visitor has an authenticated session that is automatically logged out after a predetermined amount of time.

`xdm:userSessionTimeout`
* is optional
* type: `integer`

##### xdm:userSessionTimeout Type


`integer`








#### xdm:userUpdate
##### Account Profile Update

Counter event indicating a user has updated their account profile.

`xdm:userUpdate`
* is optional
* type: `integer`

##### xdm:userUpdate Type


`integer`











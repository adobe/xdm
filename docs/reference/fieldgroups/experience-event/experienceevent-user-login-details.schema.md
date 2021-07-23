
# User Login Process Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-user-login-details
```

User login details such as login state, location, and type, as well as forgot username and password counts.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/experienceevent-user-login-details.schema.json](fieldgroups/experience-event/experienceevent-user-login-details.schema.json) |

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
    "xdm:userUpdate": 1,
    "xdm:userAccountSwitch": 0
  }
}
```

# User Login Process Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:userAccount](#xdmuseraccount) | `object` | Optional | User Login Process (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:userAccount

Loyalty details, preferences, login processes, and other account preferences.

`xdm:userAccount`
* is optional
* type: `object`
* defined in this schema

### xdm:userAccount Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:accountSwitch`| integer | Optional |
| `xdm:cookieConsentAccepted`| boolean | Optional |
| `xdm:cookieConsentViewed`| integer | Optional |
| `xdm:forgotPassword`| integer | Optional |
| `xdm:forgotUsername`| integer | Optional |
| `xdm:login`| integer | Optional |
| `xdm:loginBiometric`| boolean | Optional |
| `xdm:loginFailure`| integer | Optional |
| `xdm:loginKeychain`| boolean | Optional |
| `xdm:loginLocation`| string | Optional |
| `xdm:loginMultiFactor`| boolean | Optional |
| `xdm:loginStatus`| string | Optional |
| `xdm:loginThirdParty`| integer | Optional |
| `xdm:loginThirdPartySite`| string | Optional |
| `xdm:loginType`| string | Optional |
| `xdm:logout`| integer | Optional |
| `xdm:resetPassword`| integer | Optional |
| `xdm:sessionTimeout`| integer | Optional |
| `xdm:updateProfile`| integer | Optional |



#### xdm:accountSwitch
##### Switch User Accounts

Captures when a visitor switches their account during a visit.

`xdm:accountSwitch`
* is optional
* type: `integer`

##### xdm:accountSwitch Type


`integer`








#### xdm:cookieConsentAccepted
##### Cookie Consent Accepted

Tracked when a visitor opts-in to allowing cookies to be set within their browser.

`xdm:cookieConsentAccepted`
* is optional
* type: `boolean`

##### xdm:cookieConsentAccepted Type


`boolean`







#### xdm:cookieConsentViewed
##### Cookie Consent Viewed

Tracked when a visitor views the cookie consent information.

`xdm:cookieConsentViewed`
* is optional
* type: `integer`

##### xdm:cookieConsentViewed Type


`integer`








#### xdm:forgotPassword
##### Forgot Password

Counter event when a visitor begins the forgot password process.

`xdm:forgotPassword`
* is optional
* type: `integer`

##### xdm:forgotPassword Type


`integer`








#### xdm:forgotUsername
##### Forgot Username

Counter event when a visitor begins the forgot username process.

`xdm:forgotUsername`
* is optional
* type: `integer`

##### xdm:forgotUsername Type


`integer`








#### xdm:login
##### Visitor Login

Counter event indicating a successful visitor login.

`xdm:login`
* is optional
* type: `integer`

##### xdm:login Type


`integer`








#### xdm:loginBiometric
##### Biometric Authentication

Flag determining if the user has used a biometric authentication process to login.

`xdm:loginBiometric`
* is optional
* type: `boolean`

##### xdm:loginBiometric Type


`boolean`







#### xdm:loginFailure
##### Visitor Login Failure

Counter event indicating a failed visitor login attempt.

`xdm:loginFailure`
* is optional
* type: `integer`

##### xdm:loginFailure Type


`integer`








#### xdm:loginKeychain
##### Keychain 

Flag determining if the user has used a keychain authentication process to login.

`xdm:loginKeychain`
* is optional
* type: `boolean`

##### xdm:loginKeychain Type


`boolean`







#### xdm:loginLocation
##### Login Page Location

When multiple login locations exist on the page, this value should be used to identify the specific location the user used for login

`xdm:loginLocation`
* is optional
* type: `string`

##### xdm:loginLocation Type


`string`








#### xdm:loginMultiFactor
##### Multi-Factor Authentication

Flag determining if the user has used a multi-factor authentication process to login.

`xdm:loginMultiFactor`
* is optional
* type: `boolean`

##### xdm:loginMultiFactor Type


`boolean`







#### xdm:loginStatus
##### Login Status

Used to track the current login status for site visitors, regardless of whether login occurred as a result of a login during the current session or a previous session as identified by a cookie value. 

`xdm:loginStatus`
* is optional
* type: `string`

##### xdm:loginStatus Type


`string`








#### xdm:loginThirdParty
##### Login with Third Party

Counter event that is incremented when a visitor has used another login network to authenticate, such as Apple, Facebook, or Google.

`xdm:loginThirdParty`
* is optional
* type: `integer`

##### xdm:loginThirdParty Type


`integer`








#### xdm:loginThirdPartySite
##### Third Party Login Site

Tracks the site used to authetnicate when a third-party sign-in event is tracked.

`xdm:loginThirdPartySite`
* is optional
* type: `string`

##### xdm:loginThirdPartySite Type


`string`








#### xdm:loginType
##### User Login Type

Email address vs social login

`xdm:loginType`
* is optional
* type: `string`

##### xdm:loginType Type


`string`








#### xdm:logout
##### Visitor Logout

Counter event indicating a successful visitor logout.

`xdm:logout`
* is optional
* type: `integer`

##### xdm:logout Type


`integer`








#### xdm:resetPassword
##### Reset Password

Counter event when a visitor begins the reset password process.

`xdm:resetPassword`
* is optional
* type: `integer`

##### xdm:resetPassword Type


`integer`








#### xdm:sessionTimeout
##### Session Timeout

Tracked when a visitor has an authenticated session that is automatically logged out after a predetermined amount of time.

`xdm:sessionTimeout`
* is optional
* type: `integer`

##### xdm:sessionTimeout Type


`integer`








#### xdm:updateProfile
##### Account Profile Update

Counter event indicating a user has updated their account profile.

`xdm:updateProfile`
* is optional
* type: `integer`

##### xdm:updateProfile Type


`integer`










